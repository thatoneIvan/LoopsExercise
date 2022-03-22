// loops exercise
// 1
// Loops uses the word "for"
for (i = 1; i <=7; i++){
    console.log(i);
};

console.log(`=================`);

// 2
for (i = 5; i <= 25; i += 4){
    console.log(i);
};


// 3a

const wizards = [
    `Harry Potter`,
    `Hermoine Granger`,
    `Ron Weasley`
];


// 3b
for (list of wizards){
    console.log(list);
};

// 4a
let harryPotterMovies = 0;

// 4b
while (harryPotterMovies < 8) {
    console.log(harryPotterMovies);
    harryPotterMovies++;
};

// 4c
console.log(harryPotterMovies);




// BONUS
// 5a
const hogwartsHouses = [
    `Gryffidor`,
    `Hufflepuff`,
    `Ravenclaw`,
    `Slytherin`
];

// 5b
for (list of hogwartsHouses){
    for (letters of list) {
        console.log(letters);
    };
// so if you run a console.log after being outside, it will run each house individuality
    console.log(`========`);
};
// 6a
const quote = [
    `Yer`,
    `A`,
    `Wizard`,
    `Harry`
];

// 6b
console.log(...quote);
/*
 
*/

// inspired by FizzBuzz
// 7
for (i = 1; i <= 25; i++) {
    if (i % 3 === 0 && i % 5 === 0){
        console.log(`Expecto Patronum`);
    } else if (i % 3 === 0 ) {
        console.log(`Expecto`);
    } else {
        console.log(`Patronum`);
    }
};
