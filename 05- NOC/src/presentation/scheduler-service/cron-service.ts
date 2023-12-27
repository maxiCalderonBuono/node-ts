import { CronJob } from "cron";


type Time = string | Date
type OnTick = () => void



export class JobSchedulerService {
  public static createJob({ time, onTick }: { time: Time, onTick: OnTick }) { // (time: Time, onTick: OnTick) {

    const job = new CronJob(time, onTick)

    job.start()
  }
}