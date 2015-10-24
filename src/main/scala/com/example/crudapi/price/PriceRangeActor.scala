package com.example.crudapi.price

import akka.actor.{ActorLogging, Props}
import akka.persistence.PersistentActor
import akka.util.Timeout
import com.example.crudapi.MainActorSystem
import com.example.crudapi.price.DailyPriceActor.CalculatePriceForDay
import com.example.crudapi.price.PriceCommandQueryProtocol.CalculatePriceForRange
import com.example.crudapi.utils.PricingConfig
import org.joda.time.{DateTime, DateTimeZone, Days}

import scala.collection.mutable
import scala.concurrent.duration.DurationInt

object PriceRangeActor {

  def props(pricingConfig: PricingConfig) = Props(new PriceRangeActor(pricingConfig))

}

case class PriceForDay(day: Long, var price: Option[BigDecimal] = None)

class PriceRangeActor(pricingConfig: PricingConfig) extends PersistentActor with ActorLogging with MainActorSystem {

  def persistenceId = "PriceRangeActor"

  implicit val timeout = Timeout(5 seconds)

  val dailyPriceActor = system.actorOf(DailyPriceActor.props(pricingConfig), "DailyPriceActor")

  val priceRangeCalculations = mutable.Map[Int, PriceForDay]()

  /*  def stageTwo(nextState: caseClass) : Recieve = {
    }

    def stageOne(myState: caseClass) : Recieve = {
        case newMessage => {
            become(stageTwo(myState ++ thisState))
        }
    }*/
  override def receiveCommand: Receive = {
    case CalculatePriceForRange(unitId, from, to) => {
      val fromDate = new DateTime(from).toDateTime(DateTimeZone.UTC)
      val toDate = new DateTime(to).toDateTime(DateTimeZone.UTC)
      val duration = Days.daysBetween(fromDate.toLocalDate, toDate.toLocalDate).getDays

      (0 until duration).map(daysFromStart => {
        val day = new DateTime(from).toDateTime(DateTimeZone.UTC).plusDays(daysFromStart).getMillis
        dailyPriceActor ! CalculatePriceForDay(unitId, day)
      })

 //     persist(PriceForRangeCalculated(userId, unitId, from, to, sum))(evt => {
 //       sender() ! evt
//})
    }
    //       case DailyPriceCalculated(unitId, day, price) => {
    //          priceRangeCalculations(unitId) = PriceForDay(day, price)
    //        }

  }

  override def receiveRecover: Receive = {
    case _ =>
  }
}