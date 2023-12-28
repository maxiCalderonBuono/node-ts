"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogEntity = exports.LogSeverityLevel = void 0;
var LogSeverityLevel;
(function (LogSeverityLevel) {
    LogSeverityLevel["low"] = "low";
    LogSeverityLevel["moderate"] = "moderate";
    LogSeverityLevel["high"] = "high";
    LogSeverityLevel["critical"] = "critical";
})(LogSeverityLevel || (exports.LogSeverityLevel = LogSeverityLevel = {}));
class LogEntity {
    constructor(level, message) {
        this.level = level;
        this.message = message;
        this.createdAt = new Date();
    }
}
exports.LogEntity = LogEntity;
LogEntity.fromJson = (json) => {
    const { level, message, createdAt } = JSON.parse(json);
    const log = new LogEntity(level, message);
    log.createdAt = new Date(createdAt);
    return log;
};
