//-------------------------------------------------> Assignment-1 <----------------------------------------------------------

//Creating an empty array called fruits

let fruits = [];
fruits.push("apple");
fruits.push("banana");
fruits.push("orange");

//Removing the first element from fruits

fruits.splice(0, 1);

//Now adding grape to the last of the array

fruits.push("grape");

//Now updating the second element of the array to "pear"

fruits.splice(1, 1, "pear");
//Now printing the array

console.log(fruits);

//---------------------------------------------------> Assignment-2 <----------------------------------------------------------

//Creating an empty Object called person

let person = {};


//Adding key value pair into the object

person.name = "John";
person.age = 30;
person.city = "New York";

//Removing the Age property from the person object

delete person.age;

//Adding a new property called "job" with value -> "engineer"

person.job = "engineer";

//Updating the city property in person

person.city = "San Francisco";

//Now Printing the final output of person object

console.log(person);

//------------------------------------------------> Assignment -3 <--------------------------------------------------------------

//Creating an empty array 

let cars = [];

//Adding three objects into cars array
cars.push({ 'make': "Toyota" }, { "model": "Cambry" }, { "year": 2018 });


//Removing the First car object

cars.splice(0, 1);

//Adding the new object into the cars object
cars.push({ 'make': "Honda", "model": "Civic", "year": 2020 });

// Updating the "model" property of the second car object in the array to "Accord"

cars[2].model = "accord";

//Printing the Final cars array of Objects

console.log(cars);