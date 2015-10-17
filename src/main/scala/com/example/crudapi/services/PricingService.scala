package com.example.crudapi.services

import com.example.crudapi.utils.{DateUtils, PricingConfig}

import scala.annotation.tailrec

case class PricePerPeriod(from: Long, to: Long, appPrice: Map[Int, Int])

class PricingService(pricingConfig: PricingConfig) extends DateUtils {

  def calculatePrice(apartmentId: Int, from: Long, to: Long): Int = {
    @tailrec
    def sumPrice(sum: Int, apartmentId: Int, dateFrom: Long, dateTo: Long): Int = (dateFrom, dateTo) match {
      case (x, y) if x == y => sum
      case (x, y) => sumPrice(sum + getPriceForDay(apartmentId, dateTo), apartmentId, dateFrom, previousDay(dateTo))
    }

    sumPrice(0, apartmentId, from, to)
  }

  private def getPriceForDay(apartmentId: Int, date: Long): Int = {
    pricingConfig.pricings.filter(x => x.from <= date && x.to >= date)
      .map(x => x.appPrice(apartmentId)).head
  }

}
