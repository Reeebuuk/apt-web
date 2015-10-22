package com.example.crudapi

import akka.actor.ActorSystem
import akka.event.{Logging, LoggingAdapter}
import akka.stream.ActorMaterializer
import com.example.crudapi.http.HttpService
import com.example.crudapi.utils.AppConfig

import scala.concurrent.ExecutionContext

object Main extends App with AppConfig with HttpService {
  private implicit val system = ActorSystem()

  override protected implicit val executor: ExecutionContext = system.dispatcher
  override protected val log: LoggingAdapter = Logging(system, getClass)
  override protected implicit val materializer: ActorMaterializer = ActorMaterializer()

  //  val binding = Http().bind(interface = "localhost", port = 8091)

  //  val binding = Http().bindAndHandleAsync({ case req@HttpRequest(_, Uri.Path("/admin"), _, _, _) =>
  //    Future(HttpResponse())}, interface = "localhost", port= 121)
}

