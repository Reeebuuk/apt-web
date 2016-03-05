package hr.com.blanka.apartments

import akka.actor._
import akka.cluster.sharding.{ClusterSharding, ClusterShardingSettings}
import akka.event.{Logging, LoggingAdapter}
import akka.http.scaladsl.Http
import akka.stream.ActorMaterializer
import akka.util.Timeout
import com.typesafe.config.ConfigFactory
import hr.com.blanka.apartments.http.BaseService
import hr.com.blanka.apartments.price.{DailyPriceAggregateActor, QueryPriceRangeActor, CommandPriceRangeActor}
import hr.com.blanka.apartments.utils.AppConfig
import kamon.Kamon

object Main extends App with KamonSupport with AppConfig with BaseService {

    Seq("2551", "2552", "9000") foreach { port =>

      val config = ConfigFactory.parseString("akka.remote.netty.tcp.port=" + port).
        withFallback(ConfigFactory.load())

      // Create an Akka system
      implicit val system = ActorSystem("Booking", config)

//      startupSharedJournal(system, startStore = port == "2551", path =
//        ActorPath.fromString("akka.tcp://ClusterSystem@127.0.0.1:2551/bookings"))

      ClusterSharding(system).start(
        typeName = DailyPriceAggregateActor.shardName,
        entityProps = DailyPriceAggregateActor(),
        settings = ClusterShardingSettings(system),
        extractEntityId = DailyPriceAggregateActor.idExtractor,
        extractShardId = DailyPriceAggregateActor.shardResolver)

      if (port != "2551" && port != "2552") {
        implicit val executor = system.dispatcher
        implicit val materializer: ActorMaterializer = ActorMaterializer()

        val command = system.actorOf(CommandPriceRangeActor(), "commandActor")
        val query = system.actorOf(QueryPriceRangeActor(), "queryActor")

        Http().bindAndHandle(routes(command, query), httpInterface, 9000)
      }
    }

//    def startupSharedJournal(system: ActorSystem, startStore: Boolean, path: ActorPath): Unit = {
//      // Start the shared journal one one node (don't crash this SPOF)
//      // This will not be needed with a distributed journal
//      if (startStore)
//        system.actorOf(Props[Shared], "store")
//      // register the shared journal
//      import system.dispatcher
//      implicit val timeout = Timeout(15.seconds)
//      val f = (system.actorSelection(path) ? Identify(None))
//      f.onSuccess {
//        case ActorIdentity(_, Some(ref)) => SharedLeveldbJournal.setStore(ref, system)
//        case _ =>
//          system.log.error("Shared journal not started at {}", path)
//          system.terminate()
//      }
//      f.onFailure {
//        case _ =>
//          system.log.error("Lookup of shared journal at {} timed out", path)
//          system.terminate()
//      }
//    }

}

trait KamonSupport {
//  Kamon.start()
//  sys.addShutdownHook(Kamon.shutdown())
}

