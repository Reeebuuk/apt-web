import com.typesafe.config._
import com.typesafe.sbt.packager.archetypes.JavaAppPackaging
import spray.revolver.RevolverPlugin.Revolver
import scalariform.formatter.preferences._

name          := "crudapi"
organization  := "com.example"
version       := "1.0.0"
scalaVersion  := "2.11.7"
scalacOptions := Seq("-unchecked", "-feature", "-deprecation", "-encoding", "utf8")

libraryDependencies ++= {
  val scalazV          = "7.2.0-M1"
  val akkaStreamV      = "1.0"
  val scalaTestV       = "3.0.0-M1"
  val scalaMockV       = "3.2.2"
  val scalazScalaTestV = "0.2.3"
  val slickVersion     = "3.0.0"
  val slf4jVersion     = "1.6.4"
  val h2Version        = "1.3.175"
  val zaxxerVersion    = "2.3.2"

  Seq(
    "org.scalaz"         %% "scalaz-core"                          % scalazV,
    "com.typesafe.akka"  %% "akka-stream-experimental"             % akkaStreamV,
    "com.typesafe.akka"  %% "akka-http-core-experimental"          % akkaStreamV,
    "com.typesafe.akka"  %% "akka-http-spray-json-experimental"    % akkaStreamV,
    "com.typesafe.slick" %% "slick"                                % slickVersion,
    "org.slf4j"          %  "slf4j-nop"                            % slf4jVersion,
    "com.h2database"     %  "h2"                                   % h2Version,
    "com.zaxxer"         %  "HikariCP-java6"                       % zaxxerVersion,
    "org.scalatest"      %% "scalatest"                            % scalaTestV       % "it,test",
    "org.scalamock"      %% "scalamock-scalatest-support"          % scalaMockV       % "it,test",
    "org.scalaz"         %% "scalaz-scalacheck-binding"            % scalazV          % "it,test",
    "org.typelevel"      %% "scalaz-scalatest"                     % scalazScalaTestV % "it,test",
    "com.typesafe.akka"  %% "akka-http-testkit-experimental"       % akkaStreamV      % "it,test"
  )
}

lazy val root = project.in(file(".")).configs(IntegrationTest)
Defaults.itSettings
scalariformSettings
Revolver.settings
enablePlugins(JavaAppPackaging)



ScalariformKeys.preferences := ScalariformKeys.preferences.value
  .setPreference(AlignSingleLineCaseStatements, true)
  .setPreference(AlignSingleLineCaseStatements.MaxArrowIndent, 100)
  .setPreference(DoubleIndentClassDeclaration, true)

initialCommands := """|import scalaz._
                      |import Scalaz._
                      |import akka.actor._
                      |import akka.pattern._
                      |import akka.util._
                      |import scala.concurrent._
                      |import scala.concurrent.duration._""".stripMargin

parallelExecution in Test := false
