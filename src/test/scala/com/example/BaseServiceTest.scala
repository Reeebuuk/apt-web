package com.example

import com.example.crudapi.domain.CustomerEntity
import com.example.crudapi.http.HttpService
import org.scalatest._

import akka.event.{ NoLogging, LoggingAdapter }
import akka.http.scaladsl.testkit.ScalatestRouteTest

import scala.concurrent.Await
import scala.concurrent.duration._

trait BaseServiceTest extends WordSpec with Matchers with ScalatestRouteTest with HttpService {
  protected val log: LoggingAdapter = NoLogging

  import driver.api._

  val testCustomers = Seq(
    CustomerEntity(Some(1), "Dan", "Todor", "a@b.com", "1234"),
    CustomerEntity(Some(2), "John", "Doe", "b@c.com", "2345"),
    CustomerEntity(Some(3), "Jane", "Doe", "c@d.com", "3456")
  )

  db.run(customers.schema.create)

  Await.result(db.run(customers ++= testCustomers), 10.seconds)
}
