enablePlugins(JavaServerAppPackaging)

name          := "crudapi"

organization  := "com.apt"

version       := "1.0.0"

scalaVersion  := "2.11.7"

scalacOptions := Seq("-unchecked", "-feature", "-deprecation", "-encoding", "utf8")

resolvers += "Sonatype releases" at "http://repo.typesafe.com/typesafe/releases/"

libraryDependencies ++= {
  val akkaStreamV        = "1.0"
  val scalaTestV         = "3.0.0-M1"
  val scalaMockV         = "3.2.2"
  val slf4jVersion       = "1.6.4"
  val rMongoVersion      = "0.11.7"
  val inMemMongoVersion  = "1.50.0"
  val nscalaVersion      = "2.2.0"

  Seq(
    "com.typesafe.akka"      %% "akka-stream-experimental"             % akkaStreamV,
    "com.typesafe.akka"      %% "akka-http-core-experimental"          % akkaStreamV,
    "com.typesafe.akka"      %% "akka-http-spray-json-experimental"    % akkaStreamV,
    "org.slf4j"              %  "slf4j-nop"                            % slf4jVersion,
    "org.reactivemongo"      %% "reactivemongo"                        % rMongoVersion,
    "org.reactivemongo"      %% "reactivemongo-bson-macros"            % rMongoVersion,
    "com.github.nscala-time" %% "nscala-time"                          % nscalaVersion,
    "de.flapdoodle.embed"    % "de.flapdoodle.embed.mongo"            % inMemMongoVersion % "test",
    "org.scalatest"          %% "scalatest"                            % scalaTestV        % "test",
    "org.scalamock"          %% "scalamock-scalatest-support"          % scalaMockV        % "test",
    "com.typesafe.akka"      %% "akka-http-testkit-experimental"       % akkaStreamV       % "test"
  )
}


initialCommands := """|import akka.actor._
                      |import akka.pattern._
                      |import akka.util._
                      |import scala.concurrent._
                      |import scala.concurrent.duration._""".stripMargin

parallelExecution in Test := false
