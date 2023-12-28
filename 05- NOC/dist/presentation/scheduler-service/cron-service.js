"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.JobSchedulerService = void 0;
const cron_1 = require("cron");
class JobSchedulerService {
    static createJob({ time, onTick }) {
        const job = new cron_1.CronJob(time, onTick);
        job.start();
    }
}
exports.JobSchedulerService = JobSchedulerService;
