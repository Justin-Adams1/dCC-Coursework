let myAge = 33;
let myNameFirst = prompt("What is your first name?");
let myNameLast = prompt("What is your last name?");
let fullName = myNameFirst + " " + myNameLast;


console.log("Hello World!\n" + "My First name is: " + myNameFirst + " \nMy Last name is " + myNameLast + ".\n")
console.log("My full name is: " + fullName + ".\nI am " +myAge + " years old.")

let tempF = prompt("What is the current temperature in Fahrenheit?")
let tempC = ((tempF - 32) * .5556);

console.log(tempF + " in degrees Farhenheit is equal to " + tempC + " in Celsius.")

let legalDriving = 16;
let userDriving = prompt("What is your current age?")
if(userDriving >= legalDriving){
        console.log("You are old enough to drive!")
}
else{
        console.log("You are NOT old enough to drive yet!")
}

let randomNum = Math.floor((Math.random() * 10) + 1);

if(randomNum >= 0 & randomNum <=2){
    console.log(randomNum + " is 0 or 1 or 2")
}
else if(randomNum >= 3 & randomNum <=5){
    console.log(randomNum + " is 3 or 4 or 5")
}
else if(randomNum >= 6 & randomNum <=8){
    console.log(randomNum + " is 6 or 7 or 8")
}
if(randomNum >= 9 & randomNum <=10){
    console.log(randomNum + " is 9 or 10")
}

let team = prompt("Which of the following is the best NFL Team?(Packers, Bears, Lions, Vikings)");
switch(team.toLowerCase()){
    case "packers":
        console.log("Best team in the world, actually the universe!")
        break;
    case "bears":
        console.log("Quarterback much?")
        break;
     case "lions":
        console.log("LOL! They bad!")
        break;
    case "vikings":
         console.log("Loud noises!")
         break;
    default:
		console.log("I guess you don't like those teams?")
        break;
}