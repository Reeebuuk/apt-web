package com.example.crudapi.http

import akka.actor.ActorRef
import akka.http.scaladsl.server.Directives._
import com.example.crudapi.http.routes._

trait HttpService extends PriceServiceRoute {

  def routes(command: ActorRef, query: ActorRef) =
    pathPrefix("v1") {
      customersRoute(command, query)
    }

}
