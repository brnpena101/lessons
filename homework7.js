let products = [
    {
        id: 1,
        name: "Milk",
        price: 2.00,
        inStock: true,
        quantity: 20,
        sale: false,
    },
    {
        id: 2,
        name: "Bread",
        price: 1.50,
        inStock: true,
        quantity: 35,
        sale: true,
    },
    {
        id: 3,
        name: "Eggs",
        price: 3.25,
        inStock: false,
        quantity: 0,
        sale: false,
    },
    {
        id: 4,
        name: "Cheese",
        price: 4.00,
        inStock: true,
        quantity: 15,
        sale: true,
    },
    {
        id: 5,
        name: "Apples",
        price: 0.75,
        inStock: false, //Was true before
        quantity: 50,
        sale: false,
    },
    {
        id: 6,
        name: "Chicken Breast",
        price: 5.99,
        inStock: true,
        quantity: 10,
        sale: true,
    }
];



//This is the out of stock item checker
function outOfStockItems() {
    let itemsSoldOut = [] 
    for (let index = 1; index < products.length; index++) {
        if (products[index].inStock === false) {
            itemsSoldOut.push(products[index])
        }
    }
    return itemsSoldOut
}

// console.log(outOfStockItems())



//The minimum price checker 
function moreThan(amount) {
    let pricedProducts = []
    for(let index = 1; index < products.length; index++) {
        if (products[index].price >= amount) {
            pricedProducts.push(products[index])
        }
    }
    return pricedProducts
}

// let finalProducts = moreThan(2)
// console.log(finalProducts)
// console.log(moreThan(2)) 




//Sale checker
function saleChecker() {
    let itemsOnSale = []
    for (let index = 1; index < products.length; index++) {
        if (products[index].sale === true) {
            itemsOnSale.push(products[index])
        }
    } return itemsOnSale
}

// console.log(saleChecker())



let myCar = {
    color: "white", 
    make: "Chevrolet",
    model: "Camaro"
}

let myAddress = {
    type: "home",
    state: "Florida",
    city: "Davie" 
}

let myJob = {
    title: "IT Support",
    remote: false
}

let myInfo = {
    name: "Brandon",
    age: 27,
    sex: "male",
    ethnicity: "Hispanic/latino" 
}

let favoriteThings = {
    hobbies: "Video games, billiards, poker",
    sports: true,
    favoriteFood: "Wings, pizza, BBQ"
} 


for(let index = 0; index < 10; index++) {

}


for (let index = 1; index < 10; index++) {

}

for (let y = 0; y < 10; y++) {

}

for (let y = 1; y < 10; y++) {

}

for(let x = 0; x < 10; x++) {

}

for (let x = 1; x < 10; x++) {

}

for(let index = 0; index < 25; index++) {

}

for(let i = 1; i < 50; i++) {

}

for(let i = 0; i < 5; i++){

}

for(let index = 1; index < 20; index++) {
    
}
