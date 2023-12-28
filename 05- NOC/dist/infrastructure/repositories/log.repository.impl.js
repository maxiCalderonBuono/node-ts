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
Object.defineProperty(exports, "__esModule", { value: true });
exports.LogRepositoryImplementation = void 0;
class LogRepositoryImplementation {
    constructor(logDataSource) {
        this.logDataSource = logDataSource;
    }
    saveLog(log) {
        return __awaiter(this, void 0, void 0, function* () {
            this.logDataSource.saveLog(log);
        });
    }
    getLogs(severityLevel) {
        return __awaiter(this, void 0, void 0, function* () {
            return this.logDataSource.getLogs(severityLevel);
        });
    }
}
exports.LogRepositoryImplementation = LogRepositoryImplementation;
