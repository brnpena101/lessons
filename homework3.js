let myNumberArray = [5, 10, 15, 20, 25];
// console.log(myNumberArray)

myNumberArray[4] = 50
//console.log(myNumberArray)
//Changing an array individually using the index

myNumberArray[2] = 30
// console.log(myNumberArray)
//One more change to an array individually



let starWarsPlanets = ["Tattoine", "Endor", "Naboo", "Coroscant", "Hoth"]
// console.log(starWarsPlanets)
//Before

//After
starWarsPlanets.push("Mustafar")
// console.log(starWarsPlanets)

//After-2
starWarsPlanets.push("Dagobah")
// console.log(starWarsPlanets)

//Removing Dagobah
starWarsPlanets.pop()
// console.log(starWarsPlanets)

//Adding and removing from an array using push & pop 



// console.log(starWarsPlanets[4])
//Accessing Hoth using the index

// console.log(myNumberArray[0])
//Acessing 5 using the index



const myColors = ['Blue', 'Black', 'Green', 'Red']
//console.log(myColors.toString())
//Printing an array as a string, I assumed this is what you meant by converting it into a variable?



let starWarsNames = ["Nien Nunb", "Count Dooku", "Han Solo"]
function starWars(name1, name2) {
    
    starWarsNames.push(name1)
    starWarsNames.push(name2)
    // console.log(starWarsNames)
    }

starWars("Darth Vader", "Emperor")


let jamesBondActors = ["Sean Connery", "Roger Moore"]
function jamesBond(name1, name2) {
    
    jamesBondActors.push(name1)
    jamesBondActors.push(name2)
    // console.log(jamesBondActors)
}

jamesBond("Daniel Craig", "Pierce Brosnan")

//UPDATED

//These are the two functions  that add names to an array dynamically




for (let x = 1; x <= 10; x++) {
    // console.log(x)
}

//This is the for loop that prints out numbers in order from 1-10


function myNewNumbers() {
    let numbers = [2, 4, 6, 8, 10]
    for (let index = 0; index < numbers.length; index++) {
        // console.log(numbers[index])
    }
}   

myNewNumbers()

//This is the final assignment you gave me, it printed out the items from an array using a for loop.
