"use strict";
// const {getRandomId} = require("../plugins/get-randomId-plugin")
// const {getAge} = require("../plugins/get-age-plugin")
Object.defineProperty(exports, "__esModule", { value: true });
exports.makeAPerson = void 0;
// const {getAge, getRandomId} = require("../plugins")
const makeAPerson = ({ getAge, getRandomId }) => {
    return ({ name, birthdate }) => {
        return {
            id: getRandomId(),
            name,
            birthdate,
            age: getAge(birthdate)
        };
    };
};
exports.makeAPerson = makeAPerson;
// const buildPerson = ({name, birthdate}) => {
//   return {
//     id: getRandomId(),
//     name,
//     birthdate,
//     age: getAge(birthdate )
//   }
// }
// const obj = {name: "Cristian", birthdate: "1986-01-29"}
// console.log(buildPerson(obj))
