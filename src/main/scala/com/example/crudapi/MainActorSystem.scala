package com.example.crudapi

import akka.actor.ActorSystem

trait MainActorSystem {

  implicit val system = ActorSystem("booking")


}
