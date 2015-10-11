package com.example.crudapi.http

import akka.http.scaladsl.server.Directives._
import com.example.crudapi.http.routes._
import com.example.crudapi.utils.CorsSupport

trait HttpService extends CustomersServiceRoute with CorsSupport {

  val routes =
    pathPrefix("v1") {
      corsHandler {
        customersRoute
      }
    }

}
