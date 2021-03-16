for(let i=0; i < 5; i++) {
    console.log("Hello again world!")
}
for(let i=0; i <= 10; i++) {
    console.log("Counting to " + i + ".")
}
for(let i=10; i >= 0; i--) {
    console.log("Counting to " + i + ".")
}

let countPost= prompt("Enter how many times you want the following to post: ");

for(let i=0; i < countPost; i++) {
    console.log("devCodeCamp")
}

let vertString = prompt("Enter your favorite Team: ");
let vertStringPosition = 0;
for(let i=0; i < vertString.length; i++) {
    console.log(vertString.charAt(vertStringPosition));
    vertStringPosition++;
}

for(let i=0; i<=100; i++){
    switch(i>=0) {
    case (i % 3 === 0 && i % 5 === 0): 
        console.log("FizzBuzz");
        break;  
    case (i % 3 === 0): 
        console.log("Fizz");
        break;
    case (i % 5 === 0): 
        console.log("Buzz");
        break;
    default:
        console.log(i);
    }
}

let i=0
while(i<5){
    console.log("Hello World!")
    i++;
}

let password = prompt("Please enter your password for safe keeping: ");
let pEntry = prompt("Please re-enter your password for verification: ")

while (pEntry != password ) {
    pEntry = prompt("Wrong Password, please try again: ")
}
console.log("User Verified")