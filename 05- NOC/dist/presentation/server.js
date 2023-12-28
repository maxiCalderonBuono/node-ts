"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.Server = void 0;
const check_service_1 = require("../domain/use-cases/checks/check-service");
const file_system_datasource_1 = require("../infrastructure/datasources/file-system.datasource");
const log_repository_impl_1 = require("../infrastructure/repositories/log.repository.impl");
const cron_service_1 = require("./scheduler-service/cron-service");
const fileSystemRepository = new log_repository_impl_1.LogRepositoryImplementation(new file_system_datasource_1.FileSystemDataSource);
class Server {
    static start() {
        console.log("Server running...");
        cron_service_1.JobSchedulerService.createJob({
            time: "*/1 * * * * *",
            onTick: () => {
                const url = "http://localhost:3000/posts";
                new check_service_1.CheckService(fileSystemRepository, () => console.log("Service is up on: " + url), (error) => console.log(error)).execute(url);
            }
        });
    }
}
exports.Server = Server;
