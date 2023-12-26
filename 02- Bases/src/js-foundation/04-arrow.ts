

const users = [
  {
    id: 1,
    name: 'Max'
  },
  {
    id: 2,
    name: 'Manu'
  },
  {
    id: 3,
    name: 'Julie'
  }
]

interface User {
  id: number
  name: string
}



const getUserById = (id: number, callback: (error?: string, user?: User) => void) => {
  const user = users.find(user => user.id === id)
  if (!user) {
    callback(`User with id ${id} not found.`)
  } else {
    callback(undefined, user)
  }
}


module.exports = {
  getUserById
}