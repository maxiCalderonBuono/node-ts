import { CheckService } from "../domain/use-cases/checks/check-service"
import { FileSystemDataSource } from "../infrastructure/datasources/file-system.datasource"
import { LogRepositoryImplementation } from "../infrastructure/repositories/log.repository.impl"
import { JobSchedulerService } from "./scheduler-service/cron-service"


const fileSystemRepository = new LogRepositoryImplementation(new FileSystemDataSource)



export class Server {

  public static start() {
    console.log("Server running...")

    JobSchedulerService.createJob({

      time: "*/1 * * * * *",
      onTick: () => {

        const url = "http://localhost:3000/posts"

        new CheckService(
          fileSystemRepository,
          () => console.log("Service is up on: " + url),
          (error) => console.log(error)
        ).execute(url)
      }
    })
  }
}