package com.example.crudapi

import akka.actor.Props
import akka.event.{Logging, LoggingAdapter}
import akka.http.scaladsl.Http
import akka.stream.ActorMaterializer
import com.example.crudapi.http.BaseService
import com.example.crudapi.utils.AppConfig

import scala.concurrent.ExecutionContext

object Main extends App with AppConfig with BaseService with MainActorSystem {

  val processor = system.actorOf(Props(), "processorActor")
  val view = system.actorOf(Props(), "processorActor")

  override protected implicit val executor: ExecutionContext = system.dispatcher
  override protected val log: LoggingAdapter = Logging(system, getClass)
  override protected implicit val materializer: ActorMaterializer = ActorMaterializer()

  //  val router2: ActorRef =
  //    system.actorOf(RoundRobinPool(5).props(Props[DailyPriceActor]), "DailyPriceActorRoutes")

  Http().bindAndHandle(routes(processor, view), httpInterface, httpPort)
}

