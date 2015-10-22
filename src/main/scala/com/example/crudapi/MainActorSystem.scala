package com.example.crudapi

import akka.actor.ActorSystem

trait MainActorSystem {

  val system = ActorSystem("booking")

}
