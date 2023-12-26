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
exports.httpClientPlugin = void 0;
const axios_1 = __importDefault(require("axios"));
// const buildHttpClient = ({ headers }: { headers: AxiosRequestConfig['headers'] }) => {
//   return {
//     // get: async (url) => {
//     //   const response = await fetch(url)
//     //   return await response.json()
//     // }
//     get: async (url: string) => {
//       const { data } = await axios.get(url, { headers: headers })
//       return data
//     }
//     ,
//     post: async (url: string, data: any) => { },
//     put: async (url: string, data: any) => { },
//     delete: async (url: string) => { }
//   }
// }
exports.httpClientPlugin = {
    // get: async (url) => {
    //   const response = await fetch(url)
    //   return await response.json()
    // }
    get: (url) => __awaiter(void 0, void 0, void 0, function* () {
        const { data } = yield axios_1.default.get(url);
        return data;
    }),
    post: (url, data) => __awaiter(void 0, void 0, void 0, function* () {
        throw new Error("Not implemented");
    }),
    put: (url, data) => __awaiter(void 0, void 0, void 0, function* () {
        throw new Error("Not implemented");
    }),
    delete: (url) => __awaiter(void 0, void 0, void 0, function* () {
        throw new Error("Not implemented");
    })
};
