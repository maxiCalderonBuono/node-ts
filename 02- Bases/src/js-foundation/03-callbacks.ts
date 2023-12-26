

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



export function getUserById(id: number, callback: (error?: string, user?: User) => void) {
  const user = users.find(user => user.id === id)
  if (!user) {

    setTimeout(() => callback(`User with id ${id} not found.`), 2500)
    return;

  } else {
    callback(undefined, user)
  }
}


