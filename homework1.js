// Practice variables using let & const

let myGoat1 = "Baby Billy";
let myGoat2 = "Buddy";
let myGoat3 = "Hazel";
let myGoat4 = "Free Bird";

myGoat = myGoat1 + ", " + myGoat2 + ", " + myGoat3 + ", " + myGoat4;
// Prints out "Baby Billy, Buddy, Hazel, Free Bird"

const landSpace = 20000;
const landNeeded = 27000;
// console.log(landNeeded - landSpace);
//Subtract to see difference of land needed

const desiredLand = 10000 * 200;
// console.log(desiredLand);
//Using const to multiply

let nextProject = "Chicken coop, ";
let nextOtherProject = "Chicken run";
let bothProjects = nextProject + nextOtherProject;
//console.log(bothProjects);
//Example of concatenation

function personalInfo(name, age) {
    //console.log('I am ' + name + " " + age);

}
personalInfo("Brandon", "27");
//This prints out a function that says "I am Brandon 27"


function favoriteGoats(myGoat1, myGoat2) {
    //console.log('These are my favorite goats ' + myGoat1 + " " + myGoat2);
}
favoriteGoats(myGoat1, myGoat2);
//This function prints out the strings stored in a variable instead of the data stored in the call. 



