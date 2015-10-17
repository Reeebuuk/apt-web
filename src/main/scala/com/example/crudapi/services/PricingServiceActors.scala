package com.example.crudapi.services

import akka.typed.AskPattern._
import akka.typed.ScalaDSL.Static
import akka.typed.{ActorRef, ActorSystem, Props}
import akka.util.Timeout
import com.example.crudapi.utils.{DateUtils, PricingConfig}
import org.joda.time.{DateTime, DateTimeZone, Days}

import scala.collection.immutable.IndexedSeq
import scala.concurrent.Future
import scala.concurrent.duration._

class PricingServiceActors(pricingConfig: PricingConfig) extends DateUtils {

  import scala.concurrent.ExecutionContext.Implicits.global

  val priceCalculator = Static[PriceRequest] {msg =>
    msg.replyTo ! DailyPrice(getPriceForDay(msg.apartmentId, msg.date))
  }

  lazy val priceSystem: ActorSystem[PriceRequest] = ActorSystem("priceCalc", Props(priceCalculator))

  implicit val timeout = Timeout(5 seconds)

  final case class DailyPrice(price: Int)

  final case class PriceRequest(apartmentId: Int, date: Long, replyTo: ActorRef[DailyPrice])

  def calculatePrice(apartmentId: Int, from: Long, to: Long): Future[Int] = {
    val fromDate = new DateTime(from).toDateTime(DateTimeZone.UTC)
    val toDate = new DateTime(to).toDateTime(DateTimeZone.UTC)
    val duration = Days.daysBetween(fromDate.toLocalDate, toDate.toLocalDate).getDays

    val individualDays: IndexedSeq[Future[DailyPrice]] = (0 until duration).map(day =>
      priceSystem ? { f: ActorRef[DailyPrice] => PriceRequest(1, new DateTime(from).toDateTime(DateTimeZone.UTC).plusDays(day).getMillis, f) })

    Future.sequence(individualDays).map(_.foldLeft(0)((sum, next) => sum + next.price))
  }

  private def getPriceForDay(apartmentId: Int, date: Long): Int = {
    pricingConfig.pricings.filter(x => x.from <= date && x.to >= date)
      .map(x => x.appPrice(apartmentId)).head
  }

}
