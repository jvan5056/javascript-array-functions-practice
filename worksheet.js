const characters = [
    {
        name: 'Luke Skywalker',
        height: 172,
        mass: 77,
        eye_color: 'blue',
        gender: 'male',
    },
    {
        name: 'Darth Vader',
        height: 202,
        mass: 136,
        eye_color: 'yellow',
        gender: 'male',
    },
    {
        name: 'Leia Organa',
        height: 150,
        mass: 49,
        eye_color: 'brown',
        gender: 'female',
    },
    {
        name: 'Anakin Skywalker',
        height: 188,
        mass: 84,
        eye_color: 'blue',
        gender: 'male',
    },
];

//***MAP***
//1. Get array of all names
//2. Get array of all heights
//3. Get array of objects with just name and height properties
//4. Get array of all first names

//***REDUCE***
//1. Get total mass of all characters
//2. Get total height of all characters
//3. Get total number of characters by eye color
//4. Get total number of characters in all the character names

//***FILTER***
//1. Get characters with mass greater than 100
//2. Get characters with height less than 200
//3. Get all male characters
//4. Get all female characters

//***SORT***
//1. Sort by mass
//2. Sort by height
//3. Sort by name
//4. Sort by gender

//***EVERY***
//1. Does every character have blue eyes?
const allBlue = characters.every(character =>  character.eye_color == 'blue');
console.log('All eyes blue?', allBlue);
//2. Does every character have mass more than 40?
const massForty = characters.every(character => character.mass > 40);
console.log('All mass greater than 40?', massForty);
//3. Is every character shorter than 200?
const shorterThan200 = characters.every(character => character.height < 200);
console.log('All characters shorter than 200?', shorterThan200);
//4. Is every character male?
const allMaleCharacters = characters.every(character => character.gender == 'male');
console.log('Only male characters?', allMaleCharacters);

//***SOME***
//1. Is there at least one male character?
const oneMaleChar = characters.some(el => el.gender == 'male');
console.log("At least one male character?", oneMaleChar);

//2. Is there at least one character with blue eyes?
const someBlue = characters.some(el =>  el.eye_color == 'blue');
console.log('Someone with blue eyes?', someBlue);

//3. Is there at least one character taller than 210?
const tallerThan210 = characters.some(character => character.height > 210);
console.log('Some taller than 210?', tallerThan210);

//4. Is there at least one character that has mass less than 50?
const oneLess50 = characters.some(character => character.mass < 50);
console.log('At least one mass less than 50?', oneLess50);
