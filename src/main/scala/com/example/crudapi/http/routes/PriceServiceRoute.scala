package com.example.crudapi.http.routes

import akka.actor.ActorRef
import akka.http.scaladsl.server.Directives._
import akka.pattern.ask
import akka.util.Timeout
import com.example.crudapi.price.PriceCommandQueryProtocol._
import org.json4s.DefaultFormats
import org.json4s.native.Serialization._

import scala.concurrent.duration._
import scala.language.postfixOps
import scala.util.{Failure, Success}

final case class CalculatePriceForRangeDto(unitId: Int, from: Long, to: Long)

final case class PriceForRangeDto(unitId: Int, price: BigDecimal, response: String = "PriceForRangeDto")

final case class ErrorDto(unitId: Int, msg: String, response: String = "ErrorDto")


trait PriceServiceRoute extends BaseServiceRoute {

  implicit val timeout = Timeout(30 seconds)

  implicit val formats = DefaultFormats

  def customersRoute(command: ActorRef, query: ActorRef) = pathPrefix("price") {
    post {
      path("calculate") {
        decodeRequest {
          entity(as[CalculatePriceForRangeDto]) {
            priceForRange => onComplete((query ? CalculatePriceForRange(
              priceForRange.unitId,
              priceForRange.from,
              priceForRange.to
            )).mapTo[PriceQueryResponse]) {
              case Success(s) => s match {
                case PriceForRangeCalculated(unitId, from, to, price) =>
                  complete(write(PriceForRangeDto(unitId, price)))
                case InvalidRange(unitId) =>
                  complete(write(ErrorDto(unitId, "ERROR")))
                case _ =>
                  complete(write(ErrorDto(priceForRange.unitId, "ERROR")))
              }
              case Failure(t) =>
                complete(write(ErrorDto(priceForRange.unitId, t.getMessage)))
            }
          }
        }
      }
    }
  }

}
