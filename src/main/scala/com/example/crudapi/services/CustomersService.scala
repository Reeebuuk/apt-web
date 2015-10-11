package com.example.crudapi.services

import com.example.crudapi.domain.{ CustomerEntity, CustomerEntityUpdate }
import com.example.crudapi.db.CustomersEntityTable

import scala.concurrent.ExecutionContext.Implicits.global
import scala.concurrent.Future

object CustomersService extends CustomersService

trait CustomersService extends CustomersEntityTable {

  import driver.api._

  def getCustomers(): Future[Seq[CustomerEntity]] = db.run(customers.result)

  def getCustomerById(id: Long): Future[Option[CustomerEntity]] = db.run(customers.filter(_.id === id).result.headOption)

  def createCustomer(customer: CustomerEntity) = db.run(customers += customer)

  def updateCustomer(id: Long, customerUpdate: CustomerEntityUpdate): Future[Option[CustomerEntity]] = getCustomerById(id).flatMap {
    case Some(customer) =>
      val updatedCustomer = customerUpdate.merge(customer)
      db.run(customers.filter(_.id === id).update(updatedCustomer)).map(_ => Some(updatedCustomer))
    case None => Future.successful(None)
  }

  def deleteCustomer(id: Long): Future[Int] = db.run(customers.filter(_.id === id).delete)

}

