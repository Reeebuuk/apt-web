package com.example.crudapi

import akka.typed.AskPattern._
import akka.typed.ScalaDSL._
import akka.typed._
import akka.util.Timeout

import scala.concurrent.Await
import scala.concurrent.duration._

object AkkaTyped extends App {

  import scala.concurrent.ExecutionContext.Implicits.global
  implicit val timeout = Timeout(5 seconds)

  // 1. First simple example, we'll create a typed actor
  // which just prints out the received message.
  println("Step 1: Using static Actor")

  // which can only receive HelloMsg message.
  sealed trait HelloMsg
  final case class HelloCountry(country: String) extends HelloMsg
  final case class HelloCity(city: String) extends HelloMsg
  final case class HelloWorld() extends HelloMsg
  final case class Hello(msg: String) extends HelloMsg

  // simple static actor, which just prints out the message
  val helloSayer = Static[HelloMsg] { msg =>
    println("Msg received:" + msg);
  }

  // create a new root actor and send it types messages
  val helloSystem: ActorSystem[HelloMsg] = ActorSystem("helloSayer", Props(helloSayer))
  helloSystem ! HelloCountry("Netherlands")
  helloSystem ! HelloWorld()
  helloSystem ! HelloCity("Waalwijk")
  helloSystem ! Hello("HelloHelloHello")

  // 2. Now we use an actor that responds to the sending actor using the
  // ask pattern.
  Thread.sleep(1000)
  println("\n\nStep 2: Using reply Actor")

  // Simple case class, which is used for the ask pattern
  final case class HelloReply(say: String, replyTo: ActorRef[HelloMsg])

  // static actor that responds to the passed in actorRef
  val helloReplyer = Static[HelloReply] {msg =>
    msg.replyTo ! Hello(s"You said: ${msg.say} ")
  }

  // create a new system and use the ask pattern to send it messages.
  val replySystem: ActorSystem[HelloReply] = ActorSystem("hello", Props(helloReplyer))
  val response = replySystem ? { f:ActorRef[HelloMsg] => HelloReply("Hello", f)}
  // or use a shorter form: val response = replySystem ? (HelloReply("Hello", _))
  val res = Await.result(response, 5 seconds)
  println("Response recevied: " + res)

  // 3. now lets create an actor that switches behavior
  Thread.sleep(1000)
  println("\n\nStep 3: Using switching behavior")

  // two functions which we'll switch in the actor implementation. One
  // prints everything in lower case, the ohter in uppercase
  val f1 = (msg: HelloMsg) => {println(s"In total function: $msg".toLowerCase)}
  val f2 = (msg: HelloMsg) => {println(s"In total function: $msg".toUpperCase)}

  // create a new Total 'Actor'. It runs the first function and returns the second one
  // effectively switching the implementation between the two functions. Note that we use
  // the Total behavior for this example. With a Total we don't handle any system messages
  // of type [Signal], if we want to do that we could use the FullTotal instead
  def newTotal(f1: HelloMsg => Unit, f2: HelloMsg => Unit): Total[HelloMsg] = Total[HelloMsg] { msg =>
    f1(msg)
    newTotal(f2, f1)
  }

  val behavior1: Behavior[HelloMsg] = newTotal(f1, f2) // normally we can send all the base traits
  val behavior2: Behavior[HelloWorld] = newTotal(f1, f2).narrow // by using narrow we can limit the behavior to a type

  // now create a new actor, and use the function to create the stateless total
  val totalSystem: ActorSystem[HelloMsg] = ActorSystem("hello", Props(behavior1))
  totalSystem ! HelloCountry("Netherlands")
  totalSystem ! HelloWorld()
  totalSystem ! HelloCity("Waalwijk")
  totalSystem ! Hello("HelloHelloHello")

  // 4. Creating a Full actor with access to the context
  Thread.sleep(1000)
  println("\n\nStep 4: Using full Actor")

  val fullBehavior = ContextAware[HelloMsg] { ctx =>
    println(s"We can access the context: $ctx")
    Full[HelloMsg] {
      case msg: MessageOrSignal[HelloMsg] => println(s"Recevied messageOrSignal: $msg"); Same[HelloMsg]
    }
  }

  val fullSystem: ActorSystem[HelloMsg] = ActorSystem("hello", Props(fullBehavior))
  fullSystem ! HelloCountry("Netherlands")
  fullSystem ! HelloWorld()
  fullSystem ! HelloCity("Waalwijk")
  fullSystem ! Hello("HelloHelloHello")

  // 5. combining behavior using && and ||
  Thread.sleep(1000)
  println("\n\nStep 5: Using Combinators")
  println("Step 5a: Use the && combinator")

  // messages are passed to both
  val andCombined = helloSayer && behavior1
  val andSystem: ActorSystem[HelloMsg] = ActorSystem("and",Props(andCombined))
  andSystem ! HelloCountry("Netherlands")
  andSystem ! HelloWorld()
  andSystem ! HelloCity("Waalwijk")
  andSystem ! Hello("HelloHelloHello")


  Thread.sleep(1000)
  println("\n\nStep 5a: Use the || combinator")
  // first try the left one, if it is unhandled tries the right one
  val orCombined = Total[HelloMsg]{
    case _ => {println("Can't handle it here!");Unhandled}
  } || fullBehavior
  val orSystem: ActorSystem[HelloMsg] = ActorSystem("or", Props(orCombined))
  orSystem ! HelloCountry("Netherlands")
  orSystem ! HelloWorld()
  orSystem ! HelloCity("Waalwijk")
  orSystem ! Hello("HelloHelloHello")



  // shutdown everything and end the systems when done.
  for {
    _ <- helloSystem.terminate()
    _ <- replySystem.terminate()
    _ <- totalSystem.terminate()
    _ <- fullSystem.terminate()
    _ <- andSystem.terminate()
    _ <- orSystem.terminate()
  } println("systems terminated")

}
