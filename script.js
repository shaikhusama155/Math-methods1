let number = parseFloat(prompt("Enter positive number"))
document.write(`<p class="fprogram"><span>Program 1</span><br><br>
    Number: ${number} <br>
    Round off value: ${Math.round(number)} <br> 
    Floor value: ${Math.floor(number)} <br>
    Ceil value: ${Math.ceil(number)} </p> `)


let negitiveNumber = parseFloat(prompt("Enter positive number"))
document.write(`<p class="sprogram"><span class = "sspan">Program 1</span><br><br>
    Number: ${number} <br>
    Round off value: ${Math.round(negitiveNumber)} <br> 
    Floor value: ${Math.floor(negitiveNumber)} <br>
    Ceil value: ${Math.ceil(negitiveNumber)} </p> `)



let num = -4;
let absNum = Math.abs(num);
console.log("The absolute value of", num, "is", absNum);

num = 5;
absNum = Math.abs(num);
console.log("The absolute value of", num, "is", absNum);



let diceRoll = Math.floor(Math.random() * 6) + 1;

document.write("random dice value is: " + diceRoll);



let coinToss = Math.random();

if (coinToss <= 1) {
    document.write("1 random coin value : Heads");
} else {
    document.write("2 random coin value : Tails");
}



let randomNumber = Math.floor(Math.random() * 100) + 1;

document.write("Random number between 1 and 100:  " + randomNumber);




let weightInput = prompt("Please enter your weight (e.g. 50, 50kgs, 50.2kgs, 50.2kilograms):");

let weightNumeric = parseFloat(weightInput.replace(/[^\d\.]/g, ''));

if (weightInput.includes("kgs") || weightInput.includes("kilograms")) {
    var weightKg = weightNumeric;
} else {
    var weightKg = weightNumeric / 2.205;
}
document.write("The weight of user is  " + weightKg.toFixed(2) + " kilograms.");


let secretNumber = Math.floor(Math.random() * 10) + 1;

let userNumber = parseInt(prompt("Guess the secret number between 1 and 10:"));

if (userNumber === secretNumber) {
    document.write("Congratulations, you guessed the secret number!");
} else {
    document.write("Sorry, your guess was incorrect. The secret number was " + secretNumber + ".");
}






