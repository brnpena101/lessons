//1. Frst working function is up and running


function airlineClass(seat) {
    let theClass = false;
    let theClasses = ["First Class", "Business Class", "Economy Plus", "Economy"]
    for (let x = 0; x < theClasses.length; x++) {
        if (seat === theClasses[x]) { 
            theClass = true;
        } 
    } 
    
    if (theClass === true)  {
        return "You have chosesn " + seat
    } else {
        return seat + " is not an airline class"
    }
}

// let finalClass = airlineClass("Busfdsiness Class")
// console.log(finalClass) 



//2. This is the continent checker
function continentChecker(continent) {
    let theContinent = false
    const continentList = ['Africa', 'Asia', 'Antaratica', 'South America',  'North America', 'Europe', 'Australia']
    for (let index = 0; index < continentList.length; index++) {
        if (continent === continentList[index]) {
            theContinent = true 
        }
    } if (theContinent === true) {
        return continent + " is a continent!"
    } else {
        return continent + " is not a continent"
    }
}

// let finalContinent = continentChecker("Asia") 
// console.log(finalContinent)



//3. This is function where you have to enter blue and red to create purple
function createPurple(color1, color2) {
    let colorList = ["Yellow", "Blue", "Black", "Green", "Pink", "Orange", "Red"]
    let firstColor = false
    let secondColor = false
    for (let x = 0; x < colorList.length; x++)
        if (color1 === colorList[1]) {
            firstColor = true
        }
        if (color2 === colorList[6]) {
            secondColor = true
        }
    if (firstColor && secondColor === true) {
        return color1 + " and " + color2 + " do make purple!"
    } else {
        return color1 + " and " + color2 + " do not make purple"
    }
}   

// let finalColor = createPurple("Blue", "Red")
// console.log(finalColor)




//4. Modified tip calculator
function myTip(bill, tip) {
    const tipValue = [0.10, 0.15, 0.18, 0.20, 0.22]
    let trueTip = false
    for (let x = 0; x < tipValue.length; x++) {
        if (tip === tipValue[x]) {
            trueTip = true
        }
    }
    if (trueTip === true) {
        let totalTip = bill * tip 
        return (totalTip + bill) + " is your total bill with tip included"
    }
    else {
        return "Invalid bill"
    }
}

// let totalBill = myTip(68, 0.20)
// console.log(totalBill)




//5. Month of the year, enter a number from 1-12 and it'll tell you what month of the year it is.
//Not gonna lie I needed help with this one so I looked up online to see where I can figure it out
function monthsInYear(month) {
    let monthList = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]
    let myMonth = false
    let result = " "
    for (let x = 0; x < monthList.length; x++)
        if (month === x + 1) {
            myMonth = true
            result = monthList[x];
        }

    if (myMonth === true) {
        return result;
    }  
    else {
        return "Invalid month";
    }
}

// finalMonth = monthsInYear(1)
// console.log(finalMonth);




//6. 
function vipList(name) {
    let vipList = ["Greg", "Hector", "Sabrina", "Gwen", "Miranda", "Kevin"]
    let myName = false
    for (let x = 0; x < vipList.length; x++) 
    if (name === vipList[x]) {
        myName = true
    }
    if (myName === true) {
        return "Hello " + name + ", welcome in."
    } else {
        return "Sorry " + name + ", you are not on the list"
    }
}

// finalName = vipList("Greg")
// console.log(finalName)








//syntax practice 


function myFunction() {
    let x = ''
    for (let index = 0; 0 < x; index++)
     if () {

     }

     else () {

     }
}

function myFunction() {
    let x = ''
    for (let index = 0; 0 < x; index++)
     if () {

     }

     else () {

     }
}

function myFunction() {
    let x = ''
    for (let index = 0; 0 < x; index++)
     if () {

     }

     else () {

     }
}

function myFunction() {
    let x = ''
    for (let index = 0; 0 < x; index++)
     if () {

     }

     else () {

     }
}

function myFunction() {
    let x = ''
    for (let index = 0; 0 < x; index++)
     if () {

     }

     else () {

     }
}

function myFunction() {
    let x = ''
    for (let index = 0; 0 < x; index++)
     if () {

     }

     else () {

     }
}

function myFunction() {
    let x = ''
    for (let index = 0; 0 < x; index++)
     if () {

     }

     else () {

     }
}

function myFunction() {
    let x = ''
    for (let index = 0; 0 < x; index++)
     if () {

     }

     else () {

     }
}

function myFunction() {
    let x = ''
    for (let index = 0; 0 < x; index++)
     if () {

     }

     else () {

     }
}

function myFunction() {
    let x = ''
    for (let index = 0; 0 < x; index++)
     if () {

     }

     else () {

     }
}

function myFunction() {
    let x = ''
    for (let index = 0; 0 < x; index++)
     if () {

     }

     else () {

     }
}

function myFunction() {
    let x = ''
    for (let index = 0; 0 < x; index++)
     if () {

     }

     else () {

     }
}

function myFunction() {
    let x = ''
    for (let index = 0; 0 < x; index++)
     if () {

     }

     else () {

     }
}
