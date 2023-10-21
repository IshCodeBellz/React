// import { apiKey } from "./util";
// import anythingDefault from "./util";
// import {abc} from "./util"

// import * as util from "./util.js";

// console.log(util.apiKey);
// console.log(util.anythingDefault);
// console.log(util.abc);

// const pi = 3.145 // unchangeable varibable making it constant
// let userMessage = "Hello World!"; // changeable variable

// console.log(userMessage);
// console.log(pi);

// //operators
// console.log(userMessage + " This is pi " + pi);
// console.log(10 + 50);
// console.log(10 * 50);
// console.log(10 - 50);
// console.log(10 / 50);

// // comparison operators
// console.log(10 === 10);
// console.log(10 === 20);
// console.log(100 >= 20);
// console.log(100 <= 20);

// if (10 === 10){
//   console.log("work");
// }

//Functions

// function greet() {
//   console.log("Hello!");
// }

// function greetUser(userName, message = "Hello") {
//   // console.log(userName);
//   // console.log(message);
//   return "Hi, I am " + userName + "." + message;
// }

// const hello1 = greetUser("YemzLDN","Hello, dude!");
// console.log(hello1);

// greet();

//Arrow Functions

// export default (userName, message) => {
//   console.log("Hello");
//   return userName + message
// }

// const user = {
//   name: "Yemi",
//   age: 29,
//   occupation: "Software Engineer",
//   greet(){
//     console.log("Hello");
//     console.log(this.age);
//   }
// };

// console.log(user.name);
// user.greet();

//Classes & Objects

// class User {
//   constructor(name, age, occupation){
//     this.name = name;
//     this.age = age;
//     this.occupation = occupation;
//   }
//   greet(){
//     console.log("Hi!")
//   }
// }

// const user1 = new User("john",56,"teacher");
// user1.greet();

//Arrays & Array Methods like map()

// const hobbies = ["Sports", "Cooking", "Reading"];
// console.log(hobbies[0]);

// hobbies.push("Working");
// console.log(hobbies);

// const index = hobbies.findIndex((item) => item === "Sports");

// console.log(index);

// const editedHobbies = hobbies.map((item) => ({ text: item }));
// console.log(editedHobbies);

// const [firstName, lastName] = ["Max", "Schwarzmuűller"];

// // const firstName = userNameData[0];
// // const lastName = userNameData[1];

// console.log(firstName);
// console.log(lastName);

// const {name: userName, age} = {
//   name: "Max",
//   age: 34
// };

// console.log(userName);
// console.log(age);

// const name = user.name;
// const age = user.age;

// const hobbies = ["Sports", "Cooking"];
// const user = {
//   name: "Max",
//   age: 34
// };

// const newHobbies = ["Reading"];

// const mergedHobbies = [...hobbies, ...newHobbies];

// console.log(mergedHobbies);

// const extendedUser = {
//   isAdmin: true,
//   ...user
// }
// console.log(extendedUser);

// const password = prompt("your password");

// if (password === "Hello") {
//   console.log("Hello works");
// } else if (password === "hello") {
//   console.log("hello works");
// } else {
//   console.log("Access not granted.");
// }

// const randomWords = ["apple", "banana", "chocolate"];

// for (const random of randomWords) {
//   console.log(random);
// }

// not going to be used
// const list = document.querySelector("ul");
// list.remove();

// function handleTimeout(){
//   console.log("Timed out!");
// }

// const handleTimeout2 = () => {
//   console.log("Timed out ... again!");
// };

// setTimeout(handleTimeout, 2000);
// setTimeout(handleTimeout2, 3000);
// setTimeout(()=> {
//   console.log("More timing out ...");
// }, 4000);

// function init(){
//   function greet() {
//     console.log("Hello! hi!")
//   };
//   greet();
// }

// init();

// let userMessage = "Hello";
// userMessage = userMessage.concat("!!!");

// const hobbies = ["Sports", "Cooking", "Gym"];
// hobbies.push("Working");
// console.log(hobbies);
