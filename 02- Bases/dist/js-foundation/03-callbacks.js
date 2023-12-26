"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getUserById = void 0;
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
function getUserById(id, callback) {
    const user = users.find(user => user.id === id);
    if (!user) {
        setTimeout(() => callback(`User with id ${id} not found.`), 2500);
        return;
    }
    else {
        callback(undefined, user);
    }
}
exports.getUserById = getUserById;
