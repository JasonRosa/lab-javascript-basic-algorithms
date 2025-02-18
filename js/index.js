// Iteration 1: Names and Input
let hacker1 = "John";
console.log(hacker1);

let hacker2 = "Jason";
console.log(hacker2);

let hacker1Message = `The driver's name is ${hacker1}.`;
console.log(hacker1Message);

let hacker2Message = `The navigator´s name is ${hacker2}.`;
console.log(hacker2Message);


//
// Iteration 2: Conditionals

if (hacker1.length > hacker2.length) {
    console.log(`The driver has the longest name, it has ${hacker1.length} characters.`);
  } else if (hacker1.length < hacker2.length) {
   console.log(`It seems that the navigator has the longest name, it has ${hacker2.length} characters.`);
  } else  {
    console.log(`Wow, you both have equally long names, ${hacker2} characters!`);
  }

// Iteration 3: Loops
let hacker1SpaceCaps = "";
let hacker2Reverse = "";
for (i = 0; i <= hacker1.length - 1; i++) {
    hacker1SpaceCaps += (hacker1[i].toUpperCase() + " ")
}

for (i = hacker2.length - 1; i >= 0 ; i--) {
    hacker2Reverse += (hacker2[i])
}
console.log(hacker1SpaceCaps);
console.log(hacker2Reverse);

if ((hacker1SpaceCaps.localeCompare(hacker2Reverse)) === 1) {
    console.log("The driver's name goes first.");
} else if (hacker1SpaceCaps.localeCompare(hacker2Reverse) === -1) {
    console.log("Yo, the navigator goes first definitely.");
} else {
    console.log("What?! You both have the same name?")
}



