// const {getRandomId} = require("../plugins/get-randomId-plugin")
// const {getAge} = require("../plugins/get-age-plugin")

// const {getAge, getRandomId} = require("../plugins")


export const makeAPerson = ({ getAge, getRandomId }: { getAge: (birthdate: string) => number, getRandomId: () => string }) => {
  return ({ name, birthdate }: { name: string, birthdate: string }) => {

    return {
      id: getRandomId(),
      name,
      birthdate,
      age: getAge(birthdate)
    }
  }
}

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