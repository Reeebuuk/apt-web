package com.example

import akka.http.scaladsl.model.{ StatusCodes, HttpEntity, MediaTypes }
import com.example.crudapi.domain.CustomerEntity
import com.example.crudapi.http.routes.CustomersServiceRoute
import org.scalatest.concurrent.ScalaFutures

import spray.json._
import akka.http.scaladsl.model.StatusCodes._

class CustomersServiceTest extends BaseServiceTest with ScalaFutures {

  val newCustomer = CustomerEntity(firstname = "New", lastname = "New", email = "a@b.com", phone = "3333")

  "Customers service" should {
    "retrieve customers list" in {
      Get("/customers") ~> customersRoute ~> check {
        responseAs[JsArray] should be(testCustomers.toJson)
      }
    }

    "Add Customers" in {
      val requestEntity = HttpEntity(MediaTypes.`application/json`, newCustomer.toJson.toString())
      Post("/customers", requestEntity) ~> customersRoute ~> check {
        response.status should be(StatusCodes.Created)
      }
    }

    "retrieve customer by id" in {
      Get("/customers/1") ~> customersRoute ~> check {
        responseAs[JsObject] should be(testCustomers.head.toJson)
      }
    }

    "update customer by id and retrieve it" in {
      val newCustomerfirstname = "UpdatedCustomerfirstname"
      val requestEntity = HttpEntity(MediaTypes.`application/json`, JsObject("firstname" -> JsString(newCustomerfirstname)).toString())
      Post("/customers/1", requestEntity) ~> customersRoute ~> check {
        responseAs[JsObject] should be(testCustomers.head.copy(firstname = newCustomerfirstname).toJson)
        whenReady(getCustomerById(1)) { result =>
          result.get.firstname should be(newCustomerfirstname)
        }
      }
    }

    "delete customer" in {
      Delete("/customers/3") ~> customersRoute ~> check {
        response.status should be(NoContent)
        whenReady(getCustomerById(3)) { result =>
          result should be(None: Option[CustomerEntity])
        }
      }
    }

  }

}
