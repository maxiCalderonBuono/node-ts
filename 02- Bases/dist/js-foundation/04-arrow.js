"use strict";
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
];
const getUserById = (id, callback) => {
    const user = users.find(user => user.id === id);
    if (!user) {
        callback(`User with id ${id} not found.`);
    }
    else {
        callback(undefined, user);
    }
};
module.exports = {
    getUserById
};
