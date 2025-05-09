//16 Unique funcions. 
//They will all use returns and parameters..
//8 will be with return and parameters only.
//8 Will be with for loops and arrays as well.
//THEY MUST ALL BE CREATIVE AND DIFFERENT




//1. This one below is self explanotory, just a simple function that you input the president with two conditions and returns.

function currentPresident(president) {
    const thePresident = "Donald Trump"
    if (president === thePresident) {
        return thePresident + " is the president!"
    } else { return "Incorrect, this is treason"}
}
let president = currentPresident("Donald Trump")
// console.log(president)




//A tip calculator function
//I need a paramter for bill, and tip
//it will multiply it, store it in a variable and print it.

//2. This one was a challenge I put on myself to see if I could work with the operators, but I did it, just made a mistake of using % instead of multiplying with decimals

function tipCalculator(bill, tip) {
    let tipPercent = bill * tip
    let totalBill = bill + tipPercent
    return "Your bill total with tip is: " + totalBill
}
//Tip must be entered as a decimal
let totalBill = tipCalculator(100, 0.15)
// console.log(totalBill)



//3. This one is simple, pretty much the same logic as the current president function but I got it write first try
function capitalOfChina(city) {
    const theCapital = "Beijing" 
        if (city === theCapital) {
            return "Correct!"
        } else { return "Incorrect"}
    }

let city = capitalOfChina("Beijing")
// console.log(city)






//24 - 6 No breakfast
//6 - 11 yes breakfast
//11 - 24 No breakfast

//4. This one was harder then i thought it would be. I was getting tripped out until I realized I was doing => instead of the correct way of >=
function lateForBreakfast(time) {
    if (time >= 11) {
        return "Sorry, we aren't serving breakfast"
    } else if (time < 6) {
        return "Sorry, we aren't serving breakfast"
    } else {
        return "We are serving breakfast!"
    }
}

let time = lateForBreakfast(24)
// console.log(time)



//5. Another pretty simple one
function fullNameCreator(first, last) {
    let fullname = first + " " + last  
    return "Hello " + fullname
}

let fullname = fullNameCreator("Brandon", "Pena")
// console.log(fullname)




//6. This one was way easier then I thought, I'm getting the hang of this!!
function beerCalculator(people) {
    let totalBeers = people * 3 
    return "You're gonna need " + totalBeers + " beers for your party"
}

let people = beerCalculator(34)
// console.log(people)



//7. A boolean!!, first time writing one. 
function isWaterBlue(answer) {
    const theAnswer = true
    if (answer === theAnswer) {
        return "Correct" 
    } else { 
        return "Incorrect"
    }
}

let answer = isWaterBlue(false) 
// console.log(answer)


8. //A simple fever checker, I'm not gonna lie I ran out of ideas here. 
function feverChecker(fever) {
    if (fever >= 99) {
        return "You have a fever"
    } else {
        return "You do not have a fever"
    }
}

let fever = feverChecker(12)
// console.log(fever)


