package com.example

import akka.http.scaladsl.model.StatusCodes._
import akka.http.scaladsl.model.{HttpEntity, MediaTypes, StatusCodes}
import com.example.crudapi.db.model.Booking
import org.scalatest.concurrent.ScalaFutures
import reactivemongo.api.commands.WriteResult
import reactivemongo.bson.Macros
import spray.json._

import scala.concurrent.duration.Duration
import scala.concurrent.{Await, Future}

class PriceServiceTest extends BaseServiceTest with ScalaFutures {

  val newCustomer = CustomerEntity(firstname = "New", lastname = "New", email = "a@b.com", phone = "3333")

  implicit val userFormat = Macros.writer[Booking]

  "Customers service" should {
    "retrieve customers list" in {
      Get("/customers") ~> customersRoute ~> check {
        responseAs[JsArray] should be(testCustomers.toJson)
      }
    }

    "Add Customers" in {
      val requestEntity = HttpEntity(MediaTypes.`application/json`, newCustomer.toJson.toString())
      Post("/customers", requestEntity) ~> customersRoute ~> check {
        val bookingsCol: Future[WriteResult] = bookingsCollection.insert(Booking(1l, 1, 2, true, "lala", "lala", "", "", "", "", "", "", "", ""))
        val alal = Await.ready(bookingsCol, Duration.Inf).value.get
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
        //        whenReady(getCustomerById(1)) { result =>
        //          result.get.firstname should be(newCustomerfirstname)
        //        }
      }
    }

    "delete customer" in {
      Delete("/customers/3") ~> customersRoute ~> check {
        response.status should be(NoContent)
        //        whenReady(getCustomerById(3)) { result =>
        //          result should be(None: Option[CustomerEntity])
        //        }
      }
    }

  }

}

object BsonFormats {

  import reactivemongo.bson.Macros


  implicit val userFormat = Macros.writer[Booking]

}
