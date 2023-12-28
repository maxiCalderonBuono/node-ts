"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.FileSystemDataSource = void 0;
const log_entity_1 = require("../../domain/entities/log.entity");
const fs_1 = __importDefault(require("fs"));
class FileSystemDataSource {
    constructor() {
        this.logPath = "./logs";
        this.allLogsPath = "./logs/logs-all.log";
        this.moderateLogsPath = "./logs/logs-moderate.log";
        this.highLogsPath = "./logs/logs-high.log";
        this.criticalLogsPath = "./logs/logs-critical.log";
        this.createLogsPaths = () => {
            if (!fs_1.default.existsSync(this.logPath)) {
                fs_1.default.mkdirSync(this.logPath);
            }
            [
                this.allLogsPath,
                this.moderateLogsPath,
                this.highLogsPath,
                this.criticalLogsPath
            ].forEach(path => {
                if (!fs_1.default.existsSync(path)) {
                    fs_1.default.writeFileSync(path, "");
                }
            });
        };
        this.getLogsFromFile = (path) => {
            const content = fs_1.default.readFileSync(path, "utf-8");
            const logs = content.split("\n").map(log_entity_1.LogEntity.fromJson);
            return logs;
        };
        this.createLogsPaths();
    }
    saveLog(newLog) {
        return __awaiter(this, void 0, void 0, function* () {
            const logAsJson = `${JSON.stringify(newLog)}\n`;
            fs_1.default.appendFileSync(this.allLogsPath, logAsJson);
            if (newLog.level === log_entity_1.LogSeverityLevel.low)
                return;
            if (newLog.level === log_entity_1.LogSeverityLevel.moderate) {
                fs_1.default.appendFileSync(this.moderateLogsPath, logAsJson);
                return;
            }
            if (newLog.level === log_entity_1.LogSeverityLevel.high) {
                fs_1.default.appendFileSync(this.highLogsPath, logAsJson);
                return;
            }
            if (newLog.level === log_entity_1.LogSeverityLevel.critical) {
                fs_1.default.appendFileSync(this.criticalLogsPath, logAsJson);
                return;
            }
        });
    }
    getLogs(severityLevel) {
        return __awaiter(this, void 0, void 0, function* () {
            switch (severityLevel) {
                case log_entity_1.LogSeverityLevel.low:
                    return this.getLogsFromFile(this.allLogsPath);
                case log_entity_1.LogSeverityLevel.moderate:
                    return this.getLogsFromFile(this.moderateLogsPath);
                case log_entity_1.LogSeverityLevel.high:
                    return this.getLogsFromFile(this.highLogsPath);
                case log_entity_1.LogSeverityLevel.critical:
                    return this.getLogsFromFile(this.criticalLogsPath);
                default:
                    throw new Error(`{severityLevel} is not implemented`);
            }
        });
    }
}
exports.FileSystemDataSource = FileSystemDataSource;
