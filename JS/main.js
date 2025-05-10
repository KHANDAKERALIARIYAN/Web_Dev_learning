// alert("Hello Ariyan");
// console.log("Hello Ariyan");
// console.error("This is an error message");
// console.warn("This is a warning message");

// var let const
//  var was used to declare variables in JavaScript before ES6. It has function scope or global scope. It can be re-declared and updated.
//  let was introduced in ES6. It has block scope. It can be updated but not re-declared in the same scope.
//  const was also introduced in ES6. It has block scope. It cannot be updated or re-declared. It is used for constants.
// let age = 30;
// const votingAge = 18;

// String Number Boolean Null Undefined Symbol BigInt

// let name = "Ariyan"; // String
// let age = 30; // Number
// let rating = 30.90; // Number
// let isStudent = true; // Boolean
// let address = null; // Null
// let phone=undefined; // Undefined
// let z; // Undefined
// console.log(name , typeof name);
// console.log(age , typeof age);
// console.log(rating , typeof rating);
// console.log(isStudent , typeof isStudent);
// console.log(address , typeof address);
// console.log(phone , typeof phone);
// console.log(z , typeof z);

// const name = "Ariyan";
// const age = 30;
// console.log(`My name is ${name} and I am ${age} years old.`); // Template literals

// let string = "Hello World!";
// console.log(string.length); // Length of the string
// console.log(string.toUpperCase()); // Convert to uppercase
// console.log(string.toLowerCase()); // Convert to lowercase
// console.log(string.substring(0, 5)); // Substring from index 0 to 5
// console.log(string.substring(0, 5).toUpperCase); // Substring from index 0 to 5

// const s='Technology , Science , Engineering , Mathematics ';
// console.log(s.split(', ')); // Split the string into an array

// Arrays
// const numbers = [1, 2, 3, 4, 5]; // Array of numbers
// console.log(numbers); 
// const fruits = ["Apple", "Banana", "Orange"]; // Array of strings 
// console.log(fruits);
// fruits[3] = "Mango"; // Add a new element to the array
// console.log(fruits); // ["Apple", "Banana", "Orange", "Mango"]
// console.log(fruits.length); // Length of the array
// fruits.push("Grapes"); // Add an element to the end of the array
// console.log(fruits); // ["Apple", "Banana", "Orange", "Mango", "Grapes"]
// fruits.unshift("Pineapple"); // Add an element to the beginning of the array
// console.log(fruits); // ["Pineapple", "Apple", "Banana", "Orange", "Mango", "Grapes"]
// fruits.pop(); // Remove the last element from the array
// console.log(fruits); // ["Pineapple", "Apple", "Banana", "Orange", "Mango"]
// fruits.shift(); // Remove the first element from the array
// console.log(fruits); // ["Apple", "Banana", "Orange", "Mango"]
// console.log(Array.isArray(fruits)); // Check if it is an array
// console.log(fruits.indexOf("Banana")); // Find the index of an element in the array

// Object Literals
// const person = {
//     firstName : "Khandaker",
//     lastName : "Ariyan",
//     age : 30,
//     isStudent : true,
//     hobbies : ["Music" , "Sports", "Reading"],
//     address : {
//         houseNo : 123,
//         road : 45,
//         area : 'Dhanmondi',
//         city : 'Dhaka',
//     }
// }

// console.log(person); // Print the object
// console.log(person.firstName); // Accessing object properties
// console.log(person["lastName"]); // Accessing object properties using bracket notation
// console.log(person.age); // Accessing object properties
// console.log(person.isStudent); // Accessing object properties
// console.log(person.hobbies); // Accessing array inside object
// console.log(person.hobbies[0]); // Accessing array inside object
// console.log(person.address); // Accessing nested object properties
// console.log(person.address.city); // Accessing nested object properties

// person.email = "ariyan@gmail.com";


// const Todos = [
//     {
//         id : 1,
//         text : "Take out trash",
//         isCompleted : true
//     },
//     {
//         id : 2,
//         text : "Meeting with boss",
//         isCompleted : true
//     },
//     {
//         id : 3,
//         text : "Dentist appointment",
//         isCompleted : false
//     }
// ];

// const todoJSON = JSON.stringify(Todos); // Convert to JSON string
// console.log(todoJSON); // Print the JSON string


// Loops - For Loop, While Loop, Do While Loop

// for loop
// for (let i = 1; i < 10; i++) {
//     console.log(i); // Print numbers from 0 to 9
// }

// while loop
// let i = 11;
// while(i<=20){
//     console.log(i); // Print numbers from 11 to 20
//     i++;    
// }

// do while loop
// let i=21;
// do{
//     console.log(i); // Print numbers from 21 to 30
//     i++;    
// }while(i<=30);

// for of loop
// for (let todo of Todos) {
//     console.log(todo.text); // Print the text of each todo
// }

// for in loop
// for (let todo in Todos) {
//     console.log(todo); // Print the index of each todo
// }


// High Order Arrays - forEach, map, filter, reduce

// forEach
// Todos.forEach(function(todo) {
//     console.log(todo.text); // Print the text of each todo
// });

// map
// const todoText = Todos.map(function(todo) {
//     return todo.text; // Return the text of each todo
// });
// console.log(todoText); // Print the array of todo texts

// filter
// const todoCompleted = Todos.filter(function(todo) {
//     return todo.isCompleted === true; // Return the completed todos
// });
// console.log(todoCompleted); // Print the array of completed todos

// const todoCompleted = Todos.filter(function(todo) {
//     return todo.isCompleted === true; // Return the completed todos
// }).map(function(todo) {
//     return todo.text; // Return the text of each completed todo
// });
// console.log(todoCompleted); // Print the array of completed todo texts


// Conditionals - if else, switch case
// const x= 1;
// const y= "20";
// if(x==10){
//     console.log("x is 10"); // Print if x is 10
// }
// else if (y==20){
//     console.log("y is 20"); // Print if y is 20
// }
// else if(y===20){
//     console.log("y is 20"); // Print if y is 20
// }
// else{
//     console.log("x is not 10 and y is not 20"); // Print if x is not 10 and y is not 20
// }

// const x = 10;
// const y = 20;
// if (x > y) {
//     console.log("x is greater than y"); // Print if x is greater than y
// }
// else if (x < y) {
//     console.log("x is less than y"); // Print if x is less than y
// } else {
//     console.log("x is equal to y"); // Print if x is equal to y
// }

// const x = 1;
// switch (x) {
//     case 10:
//         console.log("x is 10"); // Print if x is 10
//         break;
//     case 20:
//         console.log("x is 20"); // Print if x is 20
//         break;
//     case 100:
//         console.log("x is 100"); // Print if x is 30
//         break;
//     default:
//         console.log("x is not 10, 20 or 30"); // Print if x is not 10, 20 or 30
//         break;
// }

// ternary operator 

// const x = 10;
// const color = x>10 ? "red" : "blue"; // If x is greater than 10, color is red, else blue
// console.log(color); // Print the color

// const x = 10;
// const color = x>10 ? "red" : "blue"; // If x is greater than 10, color is red, else blue
// switch(color){
//     case "red":
//         console.log("Color is red");
//         break;
//     case "blue":
//         console.log("Color is blue");
//         break;
//     default:
//         console.log("Color is not red or blue");
//         break;
// }


// function 

// function greet(name){
//     return `Hello ${name}`; // Return a greeting message
// }
// console.log(greet("Ariyan")); // Print the greeting message

// function addNumber (Num1=0 , Num2=0){
//     return Num1 + Num2; // Return the sum of two numbers
// }
// console.log(addNumber(10 , 20)); // Print the sum of two numbers

// arrow function 
// const addNumber = (Num1=0 , Num2=0) => console.log(Num1+Num2); // Arrow function to add two numbers
// addNumber(10 , 20); // Print the sum of two numbersl


// object constructor

// constructor function  

// function Person(firstName , lastName , dob){
//     this.firstName = firstName; // Assign first name
//     this.lastName = lastName; // Assign last name
//     this.dob = new Date(dob); // Assign date of birth
// }
// const ariyan = new Person("Khandaker" , "Ariyan" , "1993-10-01"); // Create a new person object
// console.log(ariyan); // Print the person object

// const samir = new Person("Samir" , "Hossain" , "1995-10-01"); // Create a new person object
// console.log(samir); // Print the person object
// console.log(samir.firstName); // Print the first name of the person object
// console.log(samir.dob.getFullYear()); // Print the year of birth of the person object

// function Person(firstName , lastName , dob){
//     this.firstName = firstName; // Assign first name
//     this.lastName = lastName; // Assign last name
//     this.dob = new Date(dob); // Assign date of birth
//     this.getBirthYear = function(){
//         return this.dob.getFullYear(); // Return the year of birth
//     }
//     this.getFullName = function(){
//         return `${this.firstName} ${this.lastName}`; // Return the full name
//     }
//     this.getAge = function(){
//         const age = new Date().getFullYear() - this.dob.getFullYear(); // Calculate the age
//         return age; // Return the age
//     }
// }

// const ariyan = new Person("Khandaker" , "Ariyan" , "1993-10-01"); // Create a new person object
// console.log(ariyan); // Print the person object
// console.log(ariyan.firstName); // Print the first name of the person object
// console.log(ariyan.lastName); // Print the last name of the person object
// console.log(ariyan.dob); // Print the date of birth of the person object
// console.log(ariyan.getBirthYear()); // Print the year of birth of the person object
// console.log(ariyan.getFullName()); // Print the full name of the person object


// class 
// class Person {
//     constructor(firstName , lastName , dob){
//         this.firstName = firstName; // Assign first name
//         this.lastName = lastName; // Assign last name
//         this.dob = new Date(dob); // Assign date of birth
//     }
//     getBirthYear(){
//         return this.dob.getFullYear(); // Return the year of birth
//     }
//     getFullName(){
//         return `${this.firstName} ${this.lastName}`; // Return the full name
//     }
//     getAge(){
//         const age = new Date().getFullYear() - this.dob.getFullYear(); // Calculate the age
//         return age; // Return the age
//     }
// }
// const ariyan = new Person("Khandaker" , "Ariyan" , "1993-10-01"); // Create a new person object
// console.log(ariyan); // Print the person object


// DOM Document Object Model
// console.log(window); // Print the window object
// console.log(document); // Print the document object

// single Element
// const form = document.getElementById("my-form"); // Get the element by id
// console.log(form); // Print the element
// const container = document.querySelector(".container"); // Get the first element that matches the selector
// console.log(container); // Print the element
// console.log(document.querySelector("h1"));

// multiple Element
// console.log(document.querySelectorAll(".item")); // Get all elements that match the selector
// console.log(document.getElementsByClassName("item")); // Get all elements by class name
// console.log(document.getElementsByTagName("li")); // Get all elements by tag name

// const items = document.querySelectorAll(".item"); // Get all elements that match the selector
// items.forEach((item) => {
//     console.log(item); // Print each element
// });

// const ul = document.querySelector(".items"); // Get the element by class name
// ul.remove(); // Remove the element
// ul.lastElementChild.remove(); // Remove the last child of the element
// ul.firstElementChild.textContent = "Hello"; // Change the text content of the first child of the element
// ul.children[1].innerText = "Brad"; // Change the text content of the second child of the element
// ul.lastElementChild.innerHTML = "<h1>Hello</h1>"; // Change the inner HTML of the last child of the element

// const btn = document.querySelector(".btn"); // Get the button element
// btn.style.background = "red"; // Change the background color of the button
// btn.addEventListener("click", (e) => { // Add a click event listener to the button
//     e.preventDefault();
//     console.log(clicked); 
//     console.log(e.target); // Print the target of the event
//     console.log(e.target.className); // Print the class name of the target of the event
//     console.log(e.target.id); // Print the id of the target of the event 
// });
// btn.addEventListener("mouseover", (e) => { // Add a click event listener to the button
//     e.preventDefault(); // Prevent the default action of the event
//     document.querySelector("#my-form").style.background = "#ccc"; // Change the background color of the form
//     document.querySelector("body").classList.add("bg-dark"); // Add a class to the body element
//     document.querySelector(".items").lastElementChild.innerHTML = "<h1>Hello</h1>"; // Change the inner HTML of the last child of the element
// });

// const myForm = document.querySelector('#my-form');
// const nameInput = document.querySelector('#name');
// const emailInput = document.querySelector('#email');
// const msg = document.querySelector('.msg');
// const userList = document.querySelector('#users');

// myForm.addEventListener('submit', onSubmit);
// function onSubmit(e) {
//     e.preventDefault(); // Prevent the default action of the event
//     if(nameInput.value === '' || emailInput.value === '') { 
//         msg.classList.add('error'); // Add the error class to the message element
//         msg.innerHTML = 'Please enter all fields'; // Show an error message
//         setTimeout(() => msg.remove(), 3000); // Remove the error class after 3 seconds
//     } 
//     else {
//         const li = document.createElement('li'); // Create a new list item element
//         li.appendChild(document.createTextNode(`${nameInput.value} : ${emailInput.value}`)); // Append the name and email to the list item
//         userList.appendChild(li); // Append the list item to the user list
//         //clear fields
//         nameInput.value = ''; // Clear the name input field
//         emailInput.value = ''; // Clear the email input field
//     }
// }
