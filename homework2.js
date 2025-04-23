//Password Checker

function checkPassword(inputPassword) {
   const correctPassword = "supersecure"
    if (inputPassword === correctPassword) {
        return "Access Granted"
    } else {
        return "Access Denied"
    }
}

let inputPassword = checkPassword("supersecure")
//console.log(inputPassword)

//To be fair, this wasn't so difficult. It was a bit tricky to figure out what parameter to type in and what to add in the console log to print the function, I will admit I did 80%
//on my own, I just needed to check the homework from yesterday to figure out how we passed it to the console log to print. Still learning bit by bit. 



//Bigger number checker
function findBiggerNumber(number1, number2) {
    if (number1 > number2) {
        console.log(number1)
    } else if (number1 === number2) {
        console.log(number1, number2)
    } else console.log(number2)
}

//findBiggerNumber(10, 11)
//This one was trickier, I tried to do it with returns instead of console.log but I couldn't figure it out. It works good like this though.
//I had to go back to W3schools and read up on if/else/if else again. I was making the mistake of doing "else (number2 > number1) console.log(number", I figured it out though

function isInRange(number) {
    if (number > 10 & number < 50) {
        return "This number is in range"
    } else { 
        return "This number is not in range"
    }
}

//let number = isInRange(25)
//console.log(number)
//This is the range checker, I know you said to do it with three parameters, but I found I couldn't really figure it out that way.
//I also used the "&" not sure if you wanted me to yet, but I tried it and it worked, I put it with the comma, but when i ran the function with the comma instead
//cont- it gave me the right range even when it was below the minimum. 

//Let me know how I did. 

function trueInRange(number) {
    if (number  < 10) {
        return "Number is not in range"
    } else if (number > 50) {
        return "Number is not in range"
    } else { return "This number is in range" }
}

let number = trueInRange(52)
console.log(number)

//Updated, I was able to figure it out today. I had to just do it in reverse order then I normally do, to be honest
//I had to tell chatgpt to tell me the differences between if, else if, and else to get a deeper understanding how they work
