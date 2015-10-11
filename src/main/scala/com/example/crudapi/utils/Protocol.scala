package com.example.crudapi.utils

import com.example.crudapi.domain._
import spray.json.DefaultJsonProtocol

trait Protocol extends DefaultJsonProtocol {
  implicit val customersFormat = jsonFormat5(CustomerEntity)
}
