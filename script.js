// get the the selected elements on the size option 
// get the selected option from the pizza type
// get the selected option from the pizza toppings
// get the selected option from the Number of pizza 
// create a constructor with the pizza properties

//arry of Object to store the sizes and its price 

//arry of Object to store the type and its price 


//arry of Object to store the toppings and its price 

//have a varible total to store the prices of the selected items

//large = document.getElementById("#large");

//check if the selected item is equal to that element in the array

//if its equal increment/add it the total

//return your total

//alert the user with the infomation on selected items and the total price.

let small = document.getElementById("#small");
let medium = document.getElementById("#medium");
let large = document.getElementById("#large");
let Peparonni = document.getElementById("#pepperoni-btn");
let Veggie = document.getElementById("#veggie-btn");
let BbqBeef = document.getElementById("#bbq-beef-btn");
let Hauweian = document.getElementById("#hawaiian-btn");
let ChickenTikka = document.getElementById("#tikka-btn");
let Submit = document.getElementById("#submit");

var sizes = {
    small: 500,
    medium :850,
    large : 1500,
}
var pizzaType ={
    Peparonni:200,
    Veggie:100,
    BbqBeef:250,
    Hauweian:150,
    ChickenTikka:300,
}
var total = 0;



