/*
    VARIABLES: These are declared with the keywords: const let or var;
*/
let a;
var c;
/* 
  STRINGS: This are alphanumeric characters embedded in single quotes, 
           double quotes and back ticks.
  Examples - 
*/
a = '01 - This variable is assigned to a stirng with single quote';
const b = "02 - This variable is assigned to a stirng with double quote";
c = `03 - This variable is assigned to a back tick`;

/* 
  NUMBERS: This are numeric characters without quotes.
  Examples - 
*/
let number = 20;  //NB: variable number is initialized and asssigned a value at the same time.

/* 
  BOOLEANS: This is either truthy or falsy statement.
  Examples - 
*/
let d = true;
let e = false;

/* 
  NULL: This is when a declared variable doesn't have a datatype. 
        Its often times called unintialized variable
  Examples - 
*/
let f; // Uninitialized variable.
let g = null;
let h = 'null'; // This is a string.

/* 
  UNDEFINED: This occurs when a variable is not initialized but is referenced or called.
  Examples - 
*/

let i = undefined;
j

/* 
  ARRAYS: A collection of different datatypes or the same datatypes stored in 
          a single variable is called an Array. Usually initiated with square brackets
  Examples - 
*/
const arrayExample = []; // This is an empty array or list.
const mathematical_set = ["ruler", 'pencil', `sharpener`, 'erase']; // All elements have the same datatype
const setOfNumbers = [0, -30, 43.4, 50]; // All elements are the same datatype
const MixedSet = ['cow', 'malu', 100000, 20.32]; // Elements have mixed datatypes

/* 
  OBJECTS: An object is a collection of properties, and a property is an association between 
  a name (or key) and a value

  Examples - 
*/
const userProfile = {
    username: 'dev_integral',
    sex: `male`,
    password: null,
    age: 120,
    height: undefined,
    graduate: true,
    married: false,
    favorite_foods: ['Iyan ati egusi', 'Amala, Gbegiri ati ewedu'],
    fullName: { first_name: 'Taiwo', lastName: 'Ayoola' }
};

// DRILL
//  1. Research how to know the datatype of a variable in Javascript
//  2. Declare a variable register of datatype array which holds the 
//     details of at least 10 students.
//  3. Ensure you capture each of the following data for all students:
//     full name, contact address, parent's phone number, age,  
//  4. Fork the repository and update the folder /drill-1 with a js file of the solution in your name.
//  5. Open a pull request.

