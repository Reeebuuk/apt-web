package com.example.crudapi.db

import com.example.crudapi.db.model.Booking
import com.example.crudapi.utils.DateUtils
import reactivemongo.api._
import reactivemongo.api.collections.bson.BSONCollection
import reactivemongo.bson.{BSONDocument, Macros}

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

object Database extends DateUtils{

  val collection = connect()
  implicit val personHandler = Macros.handler[Booking]

  def connect(): BSONCollection = {

    val driver = new MongoDriver
    val connection = driver.connection(List("localhost"))

    val db = connection("apt")
    db.collection("bookings")
  }

  def findAllBookingsWithinRange(startDate: Long, endDate: Long, depositPaid : Boolean = true): Future[List[Booking]] = {
    val query = BSONDocument()
    val filter = BSONDocument("Company" -> 1, "Country" -> 1, "Ticker" -> 1)

    // which results in a Future[List[BSONDocument]]
    Database.collection
      .find(query, filter)
      .cursor[Booking](ReadPreference.primary)
      .collect[List]()

    collection.
      find(BSONDocument(
        "depositPaid" -> depositPaid,
        "dateTo" -> BSONDocument(
          "$gt" -> startDate),
        "dateFrom" -> BSONDocument(
          "$lt" -> endDate))).cursor[Booking](ReadPreference.primary).collect[List]()
  }

}
