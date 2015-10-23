package com.example.crudapi.utils

import akka.http.scaladsl.marshallers.sprayjson.SprayJsonSupport
import org.json4s.{DefaultFormats, Formats}

object MarshallingSupport extends SprayJsonSupport {
  implicit def json4sFormats: Formats = DefaultFormats
}
