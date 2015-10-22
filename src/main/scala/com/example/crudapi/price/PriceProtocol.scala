package com.example.crudapi.price

object PriceProtocol {

  sealed trait PriceEvent

  case class PriceForRangeCalculated(userId: Int, unitId: Int, from: Long, to: Long, price: BigDecimal) extends PriceEvent

  case class DailyPriceCalculated(unitId: Int, day: Long, price: BigDecimal) extends PriceEvent

}
