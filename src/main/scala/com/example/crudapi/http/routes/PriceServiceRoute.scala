package com.example.crudapi.http.routes

import akka.actor.ActorRef
import akka.http.scaladsl.server.Directives._
import akka.util.Timeout
import com.example.crudapi.price.PriceRangeActor._

import scala.concurrent.ExecutionContext
import scala.concurrent.duration._
import scala.language.postfixOps
import scala.util.{Failure, Success}


trait PriceServiceRoute extends BaseServiceRoute {


  implicit val ec: ExecutionContext


  implicit val timeout = Timeout(30 seconds)


  def customersRoute(command: ActorRef, query: ActorRef) = pathPrefix("price") {
    post {
      path("calculate") {
        extract(_.request) { e =>
          entity(as[PriceForRange]) {
            priceForRange => onComplete(query ? CalculatePriceForRange(auctionId)).mapTo[BidQueryResponse])
            {
              case Success(s) => s match {
                case BidHistoryResponse(id, bids) =>
                  complete(BidHistoryDto(id, bids.map(b =>
                    BidDto(b.price, b.buyer, fmt.print(b.timeStamp)))))
                case AuctionNotStarted(id) =>
                  complete(AuctionNotStartedDto(id))
                case _ =>
                  complete(AuctionError("ERROR", auctionId, ""))
              }
              case Failure(t) =>
                complete(AuctionError("ERROR", auctionId, t.getMessage))
            }
          }
          }
        }
      }
  }

}
