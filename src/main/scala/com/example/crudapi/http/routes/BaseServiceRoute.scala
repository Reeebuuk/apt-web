package com.example.crudapi.http.routes

import akka.event.LoggingAdapter
import akka.stream.ActorMaterializer
import com.example.crudapi.utils.AppConfig

import scala.concurrent.ExecutionContext

trait BaseServiceRoute extends AppConfig {
  protected implicit def executor: ExecutionContext
  protected implicit def materializer: ActorMaterializer
  protected def log: LoggingAdapter
}
