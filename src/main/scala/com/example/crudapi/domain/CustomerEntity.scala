package com.example.crudapi.domain

case class CustomerEntity(id: Option[Long] = None, firstname: String, lastname: String, email: String, phone: String) {
  require(!firstname.isEmpty, "firstname.empty")
  require(!lastname.isEmpty, "lastname.empty")
  require(!email.isEmpty, "email.empty")
  require(!phone.isEmpty, "phone.empty")

}

case class CustomerEntityUpdate(firstname: Option[String] = None, lastname: Option[String] = None, email: Option[String] = None, phone: Option[String] = None) {
  def merge(customer: CustomerEntity): CustomerEntity = {
    CustomerEntity(customer.id, firstname.getOrElse(customer.firstname), lastname.getOrElse(customer.lastname), email.getOrElse(customer.email), phone.getOrElse(customer.phone))
  }
}

