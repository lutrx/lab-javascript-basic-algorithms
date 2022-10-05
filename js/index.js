//console.log("I'm ready!");
// Iteration 1: Names and Input
const hacker1 = "Lisa";
console.log(`The driver's name is ${hacker1}.`);
const hacker2 = "Enrico";
console.log(`The navigator's name is ${hacker2}.`);
// Iteration 2: Conditionals
if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
} else if (hacker1.length < hacker2.length) {
    console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
} else {
    console.log(`Wow, you both have equally long names, ${hacker1.length} characters!`);
}

// Iteration 3: Loops
//3.1
let result = "";
for (let i = 0; i < hacker1.length; i++) {
    result = result + hacker1[i].toUpperCase() + " ";
}
console.log(result);

//3.2
let reverse = "";
for (let j = hacker2.length; j > 0; j--) {
    reverse = reverse + hacker2[j-1];
}
console.log(reverse);

//3.3
let iteration = 0;
if (hacker1.length < hacker2.length) {
    iteration = hacker1.length;
} else if (hacker1.length > hacker2.length) {
    iteration = hacker2.length;
} else {
    iteration = hacker1.length;
}
let names = "";
for (let k = 0; k < iteration; k++) {
    if (hacker1[k] == hacker2[k]) {
        names = "What?! You both have the same name?";
    } else if (hacker1[k] > hacker2[k]) {
        names = "Yo, the navigator goes first definitely.";
        break;
    } else if (hacker1[k] < hacker2[k]) {
        names = "The driver's name goes first.";
        break;
    }
}
console.log(names);

