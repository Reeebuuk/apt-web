package com.example.crudapi.utils

trait DatabaseConfig {
  val driver = slick.driver.H2Driver

  import driver.api._

  def db = Database.forConfig("database")

  implicit val session: Session = db.createSession()

}
