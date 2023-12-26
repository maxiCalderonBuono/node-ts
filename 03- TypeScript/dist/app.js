"use strict";
var _a;
const heroes = [
    { id: 1, name: 'Superman', owner: 'DC' },
    { id: 2, name: 'Batman', owner: 'DC' },
    { id: 3, name: 'Daredevil', owner: 'Marvel' },
    { id: 4, name: 'Green Lantern', owner: 'DC' },
    { id: 5, name: 'Linterna verde', owner: 'DC' },
    { id: 6, name: 'Spiderman', owner: 'Marvel' },
    { id: 7, name: 'Wolverine', owner: 'Marvel' }
];
const findHeroById = (id) => heroes.find(hero => hero.id === id);
const hero = findHeroById(1);
console.log((_a = hero === null || hero === void 0 ? void 0 : hero.name) !== null && _a !== void 0 ? _a : "Hero not found");
