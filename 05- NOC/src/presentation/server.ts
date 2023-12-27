import { CheckService } from "../domain/use-cases/checks/check-service"
import { JobSchedulerService } from "./scheduler-service/cron-service"



export class Server {

  public static start() {
    console.log("Server running...")

    JobSchedulerService.createJob({

      time: "*/1 * * * * *",
      onTick: () => {

        const url = "http://localhost:3000/posts"

        new CheckService(
          () => console.log("Service is up on: " + url),
          (error) => console.log(error)
        ).execute(url)
      }
    })
  }
}