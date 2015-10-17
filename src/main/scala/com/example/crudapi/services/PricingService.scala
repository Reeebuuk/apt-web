package com.example.crudapi.services

;

import java.util

import com.example.crudapi.utils.DateUtils
import com.typesafe.config.{Config, ConfigFactory}

import scala.annotation.tailrec

case class PricePerPeriod(from: Long, to: Long, appPrice: Map[Int, Int])

class PricingService extends DateUtils {

  private lazy val pricingList: util.List[_ <: Config] = ConfigFactory.load("pricing").getConfigList("dateRange")
  private lazy val apartmentIds: util.List[_ <: Config] = ConfigFactory.load("pricing").getConfigList("apartmentId")

  lazy val pricingRangeList = pricingForApartment()

  def calculatePrice(apartmentId: Int, from: Long, to: Long): Int = {
    @tailrec
    def sumPrice(sum: Int, apartmentId: Int, dateFrom: Long, dateTo: Long): Int = (dateFrom, dateTo) match {
      case (x, y) if x == y => sum
      case (x, y) => sumPrice(sum + getPriceForDay(apartmentId, dateTo), apartmentId, dateFrom, previousDay(dateTo))
    }

    sumPrice(0, apartmentId, from, to)
  }

  private def getPriceForDay(apartmentId: Int, date: Long): Int = {
    pricingRangeList.filter(x => x.from <= date && x.to >= date)
      .map(x => x.appPrice(apartmentId)).head
  }

  private def pricingForApartment(): List[PricePerPeriod] = {
    pricingList.toArray.foldLeft(List[PricePerPeriod]()) {
      (result: List[PricePerPeriod], any: AnyRef) =>
        val config = any.asInstanceOf[Config]

        result :+ new PricePerPeriod(
          calculateDate(config.getInt("fromDay"), config.getInt("fromMonth")),
          calculateDate(config.getInt("toDay"), config.getInt("toMonth")),
          apartmentIds.toArray.foldLeft(Map[Int,Int]()) {
            (mapResult: Map[Int, Int], idObject: AnyRef) =>
              val idConfig = idObject.asInstanceOf[Config]

              mapResult ++ Map(idConfig.getInt("id") -> config.getInt(idConfig.getString("name"))) ++ mapResult
          }
        )
    }
  }
}
