"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getRandomId = void 0;
const uuid_1 = require("uuid");
const getRandomId = () => {
    return (0, uuid_1.v4)();
};
exports.getRandomId = getRandomId;
