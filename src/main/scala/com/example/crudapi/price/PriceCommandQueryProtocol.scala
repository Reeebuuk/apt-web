package com.example.crudapi.price

object PriceCommandQueryProtocol {

  sealed trait PriceMsg {
    val unitId: Int
  }

  sealed trait PriceQuery extends PriceMsg

  case class CalculatePriceForRange(unitId: Int, from: Long, to: Long) extends PriceQuery

  sealed trait PriceQueryResponse extends PriceMsg

  case class PriceForRangeCalculated(unitId: Int, price: BigDecimal) extends PriceQueryResponse

  case class InvalidRange(unitId: Int) extends PriceQueryResponse


}
