package hr.com.blanka.apartments.price

import akka.actor._
import akka.cluster.sharding.ClusterSharding
import akka.pattern.ask
import akka.util.Timeout
import hr.com.blanka.apartments.http.routes.SavePriceForRange
import hr.com.blanka.apartments.price.protocol.SavePriceForSingleDay
import org.joda.time.{DateTime, DateTimeZone, Days}
import org.scalactic.{Bad, Good}

import scala.concurrent.{ExecutionContext, Future}
import scala.concurrent.duration._
import scala.language.postfixOps
import scala.language.postfixOps
import ExecutionContext.Implicits.global

object CommandPriceRangeActor {

  def apply() = Props(classOf[CommandPriceRangeActor])
}

class CommandPriceRangeActor extends Actor with ActorLogging {

  implicit val timeout = Timeout(2 seconds)

  var as = Map.empty[Int, ActorRef]

  lazy val postRegion = ClusterSharding(context.system).shardRegion(DailyPriceAggregateActor.shardName)

  override def receive: Receive = {
    case SavePriceForRange(userId, unitId, from, to, price) => {
      val fromDate = new DateTime(from).toDateTime(DateTimeZone.UTC)
      val toDate = new DateTime(to).toDateTime(DateTimeZone.UTC)
      val duration = Days.daysBetween(fromDate.toLocalDate, toDate.toLocalDate).getDays

      val dailyPrices = (0 until duration).map(daysFromStart => {
        val day = new DateTime(from).toDateTime(DateTimeZone.UTC).plusDays(daysFromStart).getMillis

        postRegion ? SavePriceForSingleDay(userId, unitId, day, price)
      })
      val f = Future.sequence(dailyPrices)
      f.onSuccess{
        case s => sender() ! Good
      }
      f.onFailure {
        case fa => sender() ! Bad
      }
    }
    case Terminated(ref) => as = as filterNot { case (_, v) => v == ref }
  }

}
