//console.log(`Hello`);
//console.log(`I like Apples`);

//window.alert(`This is an alert!`);
//window.alert(`I like oranges!`);

//This is a comment
//document.getElementById("myH1").textContent=`Hello`;
//document.getElementById("myP").textContent = `I like Apple Juice`;

/*
  This is a comment
*/
/*
let age = 25;
console.log(`You are ${age} years old`);
let gpa = 2.1;
console.log(`Your gpa is ${gpa}`)
console.log(typeof gpa);

let email = "Bro 123@gmail.com"
let firstName = "Bro";
console.log(typeof firstName)
console.log(firstName);


let online = true;
let age = 20;
let forSale = true;
let fullName = "Bro ChaCho";
let isStudent = true;

document.getElementById("p1").textContent =  `Your name is ${fullName}`;

document.getElementById("p2").textContent = `You are ${age} years old`;

document.getElementById("p3").textContent = online;

//let students = 30;

//students += 1;
//students %= 3;
//console.log(students)
let username;
document.getElementById("mySubmit").onclick = function(){
         username = document.getElementById("myText").value;
         document.getElementById("myH1").textContent = `Hello ${username}`;
}            

let age = window.prompt("How old are you?");
age = Number(age);
age+=1;

console.log(age,typeof age);

const PI = 3.14159;
let radius;
let circumference;




document.getElementById("mySubmit").onclick = function(){
  radius = document.getElementById("myText").value;
  radius = Number(radius);
  circumference = 2 * PI * radius;
  document.getElementById("myH3").textContent = circumference + "cm";
}
*/
const decreaseBtn = document.getElementById("decreaseBtn");
const resetBtn = document.getElementById("resetBtn");
const increaseBtn = document.getElementById("increaseBtn");
const countLabel = document.getElementById("countLabel");
let count = 0;

increaseBtn.onclick = function(){
  count++;
  countLabel.textContent = count;
}
decreaseBtn.onclick = function(){
  count--;
  countLabel.textContent = count;
}
resetBtn.onclick = function(){
  count = 0;
  countLabel.textContent = count;
}