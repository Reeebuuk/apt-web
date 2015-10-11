package com.example.crudapi.http.routes

import akka.http.scaladsl.model.StatusCodes
import akka.http.scaladsl.server.Directives._
import akka.http.scaladsl.server.PathMatchers.IntNumber
import com.example.crudapi.domain.{ CustomerEntityUpdate, CustomerEntity }
import com.example.crudapi.services.CustomersService

import spray.json._

trait CustomersServiceRoute extends CustomersService with BaseServiceRoute {

  import StatusCodes._

  implicit val customersUpdateFormat = jsonFormat4(CustomerEntityUpdate)

  val customersRoute = pathPrefix("customers") {
    pathEndOrSingleSlash {
      get {
        complete(getCustomers().map(_.toJson))
      } ~
        post {
          entity(as[CustomerEntity]) { customerAdd =>
            complete(Created -> createCustomer(customerAdd).map(_.toJson))
          }
        }
    } ~
      pathPrefix(IntNumber) { id =>
        pathEndOrSingleSlash {
          get {
            complete(getCustomerById(id).map(_.toJson))
          } ~
            post {
              entity(as[CustomerEntityUpdate]) { customerUpdate =>
                complete(updateCustomer(id, customerUpdate).map(_.toJson))
              }
            } ~
            delete {
              onSuccess(deleteCustomer(id)) { ignored =>
                complete(NoContent)
              }
            }
        }
      }
  }

}
