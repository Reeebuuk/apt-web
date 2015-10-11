package com.example.crudapi.db

import com.example.crudapi.domain.CustomerEntity
import com.example.crudapi.utils.DatabaseConfig

trait CustomersEntityTable extends DatabaseConfig {

  import driver.api._

  class Customers(tag: Tag) extends Table[CustomerEntity](tag, "customers") {
    def id = column[Option[Long]]("id", O.PrimaryKey, O.AutoInc)
    def firstname = column[String]("firstname")
    def lastname = column[String]("lastname")
    def email = column[String]("email")
    def phone = column[String]("phone")

    def * = (id, firstname, lastname, email, phone) <> ((CustomerEntity.apply _).tupled, CustomerEntity.unapply)
  }

  protected val customers = TableQuery[Customers]

  db.run(customers.schema.create)

}
