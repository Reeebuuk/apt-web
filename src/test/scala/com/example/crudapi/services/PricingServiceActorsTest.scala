package com.example.crudapi.services

import com.example.crudapi.utils.{DateUtils, PricingConfig}
import com.typesafe.config.ConfigFactory
import org.joda.time.{DateTime, DateTimeZone}
import org.scalatest.{Matchers, WordSpec}

import scala.concurrent.Await
import scala.concurrent.duration._

class PricingServiceActorsTest extends WordSpec with Matchers with DateUtils {

  private val pricingService = new PricingServiceActors(PricingConfig(ConfigFactory.load("pricing")))

  "calculatePrice" should {

    "return correct price if the duration is 1 day" in {
      val today = new DateTime().toDateTime(DateTimeZone.UTC).withTime(12, 0, 0, 0).getMillis
      val tomorrow = afterDay(today)

      Await.result(pricingService.calculatePrice(1, today, tomorrow), 5 seconds) shouldBe 35
    }

    "return correct price if the duration is 7 day in same price range" in {
      val today = new DateTime().toDateTime(DateTimeZone.UTC).withTime(12, 0, 0, 0).getMillis
      val tomorrow = new DateTime(today).plusDays(7).getMillis

      Await.result(pricingService.calculatePrice(1, today, tomorrow), 5 seconds) shouldBe 245
    }

    "return correct price if the duration is 7 day in different price ranges" in {
      val today = new DateTime().toDateTime(DateTimeZone.UTC).withDate(2015, 7, 19).withTime(12, 0, 0, 0).getMillis
      val tomorrow = new DateTime(today).plusDays(7).getMillis

      Await.result(pricingService.calculatePrice(1, today, tomorrow), 5 seconds) shouldBe 340
    }

    "return correct price if the duration is 7 day in different years" in {
      val today = new DateTime().toDateTime(DateTimeZone.UTC).withDate(2015, 12, 30).withTime(12, 0, 0, 0).getMillis
      val tomorrow = new DateTime(today).plusDays(7).getMillis

      Await.result(pricingService.calculatePrice(1, today, tomorrow), 5 seconds) shouldBe 245
    }
  }

}
