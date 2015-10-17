package com.example.crudapi.services

import com.example.crudapi.domain.{ CustomerEntity, CustomerEntityUpdate }

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

object BillingService extends BillingService

trait BillingService {

  def getPriceForRange(apartmentId : Int, startDate: Long, endDate: Long): Future[Seq[CustomerEntity]] = ???
}

