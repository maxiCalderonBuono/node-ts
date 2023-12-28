import { LogDatasource } from "../../domain/datasources/log.datasource";
import { LogEntity, LogSeverityLevel } from "../../domain/entities/log.entity";
import fs from "fs"


export class FileSystemDataSource implements LogDatasource {

  private readonly logPath: string = "./logs"
  private readonly allLogsPath: string = "./logs/logs-all.log"
  private readonly moderateLogsPath: string = "./logs/logs-moderate.log"
  private readonly highLogsPath: string = "./logs/logs-high.log"
  private readonly criticalLogsPath: string = "./logs/logs-critical.log"


  constructor() {
    this.createLogsPaths()
  }


  private createLogsPaths = () => {
    if (!fs.existsSync(this.logPath)) {
      fs.mkdirSync(this.logPath);
    }

    [
      this.allLogsPath,
      this.moderateLogsPath,
      this.highLogsPath,
      this.criticalLogsPath
    ].forEach(path => {
      if (!fs.existsSync(path)) {
        fs.writeFileSync(path, "");
      }
    })
  }

  async saveLog(newLog: LogEntity): Promise<void> {

    const logAsJson = `${JSON.stringify(newLog)}\n`
    fs.appendFileSync(this.allLogsPath, logAsJson)

    if (newLog.level === LogSeverityLevel.low) return;

    if (newLog.level === LogSeverityLevel.moderate) {
      fs.appendFileSync(this.moderateLogsPath, logAsJson)
      return
    }
    if (newLog.level === LogSeverityLevel.high) {
      fs.appendFileSync(this.highLogsPath, logAsJson)
      return
    }
    if (newLog.level === LogSeverityLevel.critical) {
      fs.appendFileSync(this.criticalLogsPath, logAsJson)
      return
    }
  }

  private getLogsFromFile = (path: string): LogEntity[] => {

    const content = fs.readFileSync(path, "utf-8")

    const logs = content.split("\n").map(LogEntity.fromJson)

    return logs
  }


  async getLogs(severityLevel: LogSeverityLevel): Promise<LogEntity[]> {


    switch (severityLevel) {
      case LogSeverityLevel.low:
        return this.getLogsFromFile(this.allLogsPath)
      case LogSeverityLevel.moderate:
        return this.getLogsFromFile(this.moderateLogsPath)
      case LogSeverityLevel.high:
        return this.getLogsFromFile(this.highLogsPath)
      case LogSeverityLevel.critical:
        return this.getLogsFromFile(this.criticalLogsPath)
      default:
        throw new Error(`{severityLevel} is not implemented`)
    }

  }

}