package com.example.crudapi.services

import akka.typed.{Props, ActorSystem, ActorRef}
import akka.typed.ScalaDSL.Static
import akka.util.Timeout
import com.example.crudapi.AkkaTyped.{HelloReply, Hello}
import com.example.crudapi.utils.{DateUtils, PricingConfig}

import akka.typed.AskPattern._
import akka.typed.ScalaDSL._
import akka.typed._
import akka.util.Timeout
import org.joda.time.DateTime
import org.joda.time.{Days, DateTime}

import scala.collection.immutable.IndexedSeq
import scala.concurrent.{Future, Await}
import scala.concurrent.duration._

import scala.annotation.tailrec

class PricingServiceActors(pricingConfig: PricingConfig) extends DateUtils {

  import scala.concurrent.ExecutionContext.Implicits.global

  def calculatePrice(apartmentId: Int, from: Long, to: Long): Future[Int] = {
    val fromDate = new DateTime(from)
    val toDate = new DateTime(to)
    val duration = Days.daysBetween(fromDate.toLocalDate, toDate.toLocalDate).getDays

    val individualDays: IndexedSeq[Future[DailyPrice]] = (0 until duration).map(day =>
      priceSystem ? { f: ActorRef[DailyPrice] => PriceRequest(1, new DateTime(from).plusDays(day).getMillis, f) })


    Future.sequence(individualDays).map(_.foldLeft(0)((sum, next) => sum + next.price))
  }

  private def getPriceForDay(apartmentId: Int, date: Long): Int = {
    pricingConfig.pricings.filter(x => x.from <= date && x.to >= date)
      .map(x => x.appPrice(apartmentId)).head
  }

  import scala.concurrent.ExecutionContext.Implicits.global

  implicit val timeout = Timeout(5 seconds)

  // 1. First simple example, we'll create a typed actor
  // which just prints out the received message.
  println("Step 1: Using static Actor")

  final case class DailyPrice(price: Int)

  final case class PriceRequest(apartmentId: Int, date: Long, replyTo: ActorRef[DailyPrice])

  // static actor that responds to the passed in actorRef
  val priceCalculator = Static[PriceRequest] {msg =>
    msg.replyTo ! DailyPrice(getPriceForDay(msg.apartmentId, msg.date))
  }

  // create a new system and use the ask pattern to send it messages.
  lazy val priceSystem: ActorSystem[PriceRequest] = ActorSystem("hello", Props(priceCalculator))
  val response: Future[DailyPrice] = priceSystem ? { f: ActorRef[DailyPrice] => PriceRequest(1, DateTime.now().getMillis, f) }

  val res = Await.result(response, 5 seconds)
}
