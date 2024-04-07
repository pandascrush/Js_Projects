//                        How To Create a Variable
//                            var, let, const

// Var key is supporting for Both Redeclaration and Reassigning

var name = "john";
var name = "britto"; // Redeclaration
name = "Watercane"; // ReAssigning
//   console.log(name);

// let is Supporting only for Reassigning. it's not supporting for Redeclaration

// let number = 10;
//   let number = 20      // redeclaration
// number = 20; // reassigning
//console.log(number);
//   console.log(100+100)

// Const is not supporting both Redeclaration and Reassigning

// const no = true;
//const no = false   // Redeclaration
//   no= false            // Reassigning
const no1 = false;
//   console.log(no);

// let a = 10
// let b = "20"

// let c = "https://cdn.pixabay.com/photo/2015/04/23/22/00/tree-736885_1280.jpg"

// let color = ['red','blue',"black","orange"]
// console.log(color)

let a = 10;
// let a = 20 // Redeclaration
a = 20; // Reassigning

let b;
b = "hai";

// Single Line Declaration
let $ = "hi",
  _num = "hello",
  num2 = "bye";
$ = "changed";
// console.log($)

//                                    Variable Creation Rules

// Starting with Alphabets
// Starting with _ underscore
// Strting with dollar $
// in between we can use number's

// it's not starting with numbers, special characters

//                                  Commant Line
// Single Line --> // foreward Slash
// Multi line  --> /*  */

//                                        Data Types

//                                         Primitive
// you can strore the single value for single variable
// typeof  --> using to check the datatype

// Number()

let number = 1000;
// console.log(typeof(number));
// console.log(typeof number);

let no = Number("500");
// console.log(no);  // 500

// String()

let greet = "Welcome to js Class";
// console.log(typeof greet);   // string

let greeting = String("Welcome to FS Class");
// console.log(typeof greeting);  // string

// Boolean --> true, false

let isAlive = "true";
let hisAlive = false;

// console.log(typeof isAlive, typeof hisAlive);

// Undefined
let c;
// console.log(c);

// null
// let d = null;
// d = "assigned";
// console.log(d);

//                        Non-Primitive or reference
// you can strore the multiple value for single variable
// Array[],

// length property --> return exact length --> starting with 1
// index starting with 0
let studentList = [
  "siva",
  "janani",
  "harsha",
  "asha",
  "aravinth",
  1,
  2,
  3,
  true,
  false,
];
// console.log(studentList.length)
// console.log(typeof studentList);

// Object{}
// Values strored like Key and value pairs

// if you want accessing the specific key in object
// Two ways to accses
// 1. Dot Notation .
// 2. Bracket Notation ['']

let Sno_1 = {
  Name: "Siva",
  Age: 20,
  Contact: "1234567890",
  City: "Coimbatore",
  State: "Tamilnadu",
  Country: "India",
};

// console.table(Sno_1)
// console.log(Sno_1);

//                            Function()

// Syntax
// function func_name(){
// }

// User Defined Function's
// PreDefined Funciton's

function changeTheme() {
  let divEl = document.querySelector("div");

  divEl.style.backgroundColor = "black";
  divEl.style.color = "red";
}

// Click() // Function Calling

function log() {
  console.log("hai");
}

// log()

//                                Operators
//                        Assignment Opearator
// NaN --> Not a Number

//  =, +=, -=, *=, /= , %=

// let Name = "John";
let Value = 100;

// Name = Name +" Britto"
// Name += " Michel"

Value = Value * 50;
// console.log(Value);  // 5000

Value %= 48;
// console.log(Value);   // 8

//                        Arithametic Operator

// 1. Addition + , Sub (-) , Mul (*), Division (/), Modulus (%)

let num1 = 20;
let num3 = 6;

// console.log(100 + num1);    // 120
// console.log(num1 - num3);   // 14
// console.log(num1 * num3);   // 120
// console.log(num1 / num3);   // 3
// console.log(num1 % num3);   // 2

//                Comparision or Relational Operator

// ==, ===, <, >, <= , >=, !=

// == --> Only checking the value
// === --> Checking value and data type also
// console.log(100 == "100")
// console.log(100 === "100")

let Mobile = 2000;
let Remote = 1000;

// console.log(Mobile < Remote)
// console.log(Mobile >= Remote)
// console.log(2000 != 2000)

//                          Logical Opearator

// && ---> Both the condition's are true then only it'll be starting execution

//  1    1     1
//  0    1     0
//  1    0     0
//  0    0     0

// console.log(100 <= 99 && 100 <=100);

// console.log(Name == "John" && Name == "Britto");

// || --> Either one condition is true it'll be starting execution

//  1    1     1
//  0    1     1
//  1    0     1
//  0    0     0

// console.log(100 <= 99 && 100 <=100);
// console.log(Name == "John" && Name == "Britto");

// !  --> Negotiation

let sum = !(100 === "100");
// console.log(!sum);

//                         Bitwise Opeartor

//  &, |, ~, << , >>

// 0 --> 0000
// 1 --> 0001
// 2 --> 0010
// 3 --> 0011
// 4 --> 0100
// 5 --> 0101

// 0101
// 0100
// -----
// 0100

// console.log(5 & 4);

// 1000
// 0011
// --------
//  1011

// console.log(8 | 3);

// console.log(~5);  // -6
// console.log(~-3); // 2

// 0100
// 10000

// console.log(4 << 2);

// 1000
// 0010

// console.log(8 >> 2);

//                                   Conditional Statements

// Syntax
// if(condition){

// }

// else if(condition){

// }

// else{

// }

// let num = "18"

// if(num > 18){
//   console.log('eligibe');
// }
// else if(num < 18 ){
//   console.log('not eligible');
// }
// else if(num === 18){
//   console.log('Eligible')
// }
// else{
//   console.log('you\'re a child');
// }

let user = "Ajith";
let Pass = "hello123";
let otp = 1236;

//                               Nested if Statements

// if (user === "Ajith") {
//   console.log("Username verified");

//   if (Pass === "hello123") {
//     console.log("Sucessfully Login")

//     if (otp === 12367) {
//       console.log("otp verified")
//     } else {
//       console.log("incorrect otp")
//     }
//   }
//   else {
//     console.log("Incorrect Pass");
//   }
// }
// else {
//   console.log("incorrect username/ Enter a valid username");
// }

// if(user === "Ajith" && Pass === "hello123" || otp === 123){
//   console.log('verified');
// }
// else{
//   console.log('chech your pass/username');
// }

//                           Dialogue Boxes
// alert()        --> passing some info to the user
// prompt()       --> getting input form the user
// confirm()

// alert("hiii")
// console.log('Hello');

// let input = prompt("Enter your Password");
// let res = Number(input);

// if (Number(input) === 100) {
//   console.log('correct');
// } else {
//   alert("incorrect");
// }

//                            Switch Case

// syntax

// switch(expression){
//  case 1:
// statement
// break;
//  case 2:
// statement
// break;
// case 3;
// statement
// break;

// default:
//statement
// }

// let product = prompt("Enter the product Name");

// switch (product) {
//   case "Mobile":
//     alert("Mobile Phone");
//     break;
//   case "Laptop":
//     alert("Laptop");
//     break;
//   case "Apple":
//     alert("Apple");
//     break;
//   default:
//     alert("Nothing");
//     break;
// }

// if(product === "Laptop"){
//   alert("Laptop")
// }
// else if(product === "Apple"){
//   alert("Apple")
// }
// else if(product === "Mobile"){
//   alert("Mobile")
// }
// else{
//   alert("NA")
// }

//                             Control Flow Statements
//                         Increment/ Decrement

// a++ --> post increment
// ++a --> pre increment
// --a --> pre decrement
// a-- --> post decrement

//                                  Entry loop
// 1. for loop
// 2. while loop

//                                  Exit loop
// 3. do while

// for(initialization; condition; increment/decrement){

// }

// let num = 0
// let num = -100

// for(num;num <= 0;num++){
//   console.log(num);
// }

//                                    Syntax of while
// initialization
// while(condition){
// statement
// incre/decre
// }

// break, continue  --> it's a keywords

// let z = 20
// while(z < 50){
//   if(z == 25){
//     console.log("The number is "+z)
//     break
//   }
//   console.log(z);
//   z++
// }

//                         syntax of do-while loop

// initialization
// do {
// statement
// incre/decre
// }
// while(condition)

// let x = 10
// do{
//   console.log('do while',x);
//   x++
// }while(x != 10)

//                          Nested Loop

//*****
//*****
//*****
//*****
//*****

// for (let i = 1; i <= 5; i++) {
//   for (let j = 1; j <= 5; j++) {
//     console.log("*");
//   }
//   console.log('\n')
// }

//                                 Scope of Variables

// Global Scope

let num = 10;

// Block Scope

// {
//   var x = 10;
//   let y = 20;
//   const z = 30;

//   console.log(x);
//   console.log(y);
//   console.log(z);
// }
// console.log(x);
// console.log(y);
// console.log(z);

// Local Scope or Function Scope

function Hai() {
  var x = 10;
  let y = 20;
  const z = 30;

  console.log(x);
  console.log(y);
  console.log(z);
}
// Hai()

// console.log(x);
// console.log(y);
// console.log(z);

//                             Function
//                             two types

// 1. Pre Defined (log,typeof(),)
// 2. User Definded --> for you're own logic
// Line of code Reducing, Reusability, Cleaner Code

//                       Traditional or Declaration Function

// let res = prompt("Enter the Number")

//                                   Hoisting
// Only Accessing the lexical declaration for Traditional function type.

// My_Function(5)

function My_Function(a) {
  // Parameters
  console.log(a * 3.1415);
}

// My_Function(Number(res))       // Arguements

//                                Anonymous Function

//  Syntax ---> let var_name = function(){}

// console.log(Anony("arguments"))

let Anony = function () {
  console.log(j);
  return "Anonymous";
};

// let res = Anony("hai")
// console.log(res);

//                                  Arrow Function
// Callback
// let arrow = () => {}

// arrow("Function");

let arrow = (a) => console.log("Arrow", a);

//                                Inner/Nested Function

function Outter() {
  console.log("Outter Function");

  function Inner() {
    console.log("Inner Function");
  }
  Inner();
}

// Outter();

//                              Callback Function

// a = Child

function Parent(a) {
  return a();
}

// function Child() {
//   console.log("Child Function");
// }

// Parent(() =>{alert("hi")});
// Parent(Child)

//                                            Math

// sqrt(), round(), pow(), floor(), ceil(), min(), max(), random(), PI, abs(),

// let name1 = "haai"
// console.log(name1.length);

// let arr = [1,2,3,4,5]
// let arr1 = [6,7,8,9,10]

// let NewArr = [...arr,...arr1]
// console.log(NewArr);

// console.log(Math.max(...arr))                            // ... Spread Opeartor
// console.log(Math.min(1,2,3,4,5));

// let res = Math.floor(Math.random()*(max-min)+1)
// let res = Math.floor(Math.random()*(50-10))
// console.log(res);

// let j = prompt("Enter the number")

function call(a) {
  let result = Math.floor(Math.PI * a);
  console.log(result);
}
// call(Number(j))
// console.log(Math.PI);

// console.log(Math.pow(5,3));
// console.log(Math.SQRT2);
// console.log(Math.SQRT1_2);

// console.log(Math.abs(-5));
// console.log(Math.abs(5));

//                                           Object

// Accessing object specific key we have a two methods
// 1. . Dot Notation
// 2. [''] Bracket Notation

let Customer = {
  Contact: 1235,
  "#": "hii",
  1234: "numbers",
  "my name": "Hey",
  isAlive: true,
  Detail: {
    from: "delhi",
    country: "india",
    Marks: {
      Internal: 200,
      External: 300,
    },
  },
  color: ["red", "green", "blue", "black"],
  run: () => {
    console.log("Run Function");
  },
  show: function () {
    console.log("Show Function");
  },
  add() {
    console.log("add function");
  },
};

// console.log(Customer.run());
// console.log(Customer['my name']);
// console.log(Customer.color[1]);
// console.log(Customer['Detail'].from);
// console.log(Customer['Detail'].Marks['External']);

// let Car = {
//   Name:"Audi",
//   Model:"A6",
//   Milege:20
// }

// Car.Name = "BMW"
// Car.Milege = 12.
// Car.colour = "red"

// console.log(Object.keys(Car));
// console.log(Object.values(Car));

//                                    Object Destructuting

// syntax --> let {key,key,key} = obj_name

// let Car = {
//   Name:"Audi",
//   Model:"A6",
//   Milege:20
// }

// let {Milege,Name,Model} = Car
// console.log(Milege);

//                                  Operator (...obj_name)

let Contact = {
  Address: "CBE",
  State: "India",
};

let User = {
  ...Contact,
  Name: "Ranjith",
  Age: 20,
  Course: "FS",
  run1: () => {
    console.log("hello");
  },
};

// console.log(User.run1());

//                               DOM (Document Object Model)

//                                   Selectors

// getElementById('')           --> Most Speed
// getElementsClassName('')     --> Second Most Speed
// getElementByTagName('')
// getElementByName('')
// querySelector('')            --> Third Most

//                                  Properties
// Style Properties --> style, classList,
// text Properties ---> innerText, innerHTML, textContent

//                               Properties Function
// add(), remove(), toggle()

// let myName              // camelCase
// let my_name__hi         // snake_case
// let MyNameIs            // PascalCase

// Getting Element and modify styling and text contents

// let headEl = document.getElementById('head')           //h1
// headEl.style.color = "red"
// headEl.style.backgroundColor = "black"
// headEl.style.textAlign = "center"                  // Inline Style

// headEl.classList += ' text-center p-3 m-5'        // class Attribute style

// headEl.textContent = "using text properties"     // Text Properties
// headEl.innerText = "using innerText"
// headEl.innerHTML = "using innerHTML"

// let headEl = document.querySelector('div > h1')
// headEl.style.backgroundColor = "aqua"
// // headEl.style.color = "red"
// console.log(headEl);

//                            createElement Using JS Only
// createElement('ele_name')
// setAttribute('att_name','att_value')
// createTextNode('text')
// getAttribute('att_name')
// removeAttribute('att_name')
// append()
// appendChild()
// prepand()

// let divParent = document.querySelector('.bg')

// let divChild = document.createElement('h1')
// divChild.setAttribute('class','container ')
// let text  = document.createTextNode('this is text node')
// divChild.append(text)

// divParent.appendChild(divChild)     // passing inside another html element
// document.body.append(divChild)     // passing through inside body element

// let divEl = document.createElement("div");
// divEl.setAttribute("id", "div");
// document.body.append(divEl);

// let headEl = document.createElement("h1");
// headEl.setAttribute("id", "head");
// headEl.innerText = "Heading";

// let paraEl = document.createElement("p");
// paraEl.setAttribute("class", "para");
// paraEl.innerHTML = "Paragraph";

// let btnEl = document.createElement("button");
// btnEl.setAttribute("class", "btn btn-primary");
// btnEl.textContent = "Submit";

// divEl.append(headEl)
// divEl.prepend(btnEl)
// divEl.prepend(paraEl)

//                             innerHTML
// divElement.innerHTML += `<div style="padding: 10px;" class="text-center bg-secondary">
//                         <h1 class="text-warning">Heading</h1>
//                         <p class="text-muted" >Paragraph</p>
//                         <button class="btn btn-danger" >Click</button>
//                         </div>`

//                       add,remove,toggle

// let headElement = document.querySelector("body");
// console.log(headElement);
// headElement.classList = "text-success bg-primary";
// headElement.classList.add(`text-center`, "bg-danger", "p-4", "text-light");

// function removeItem() {
// headElement.classList.add('bg-info',"text-danger")
// headElement.classList.remove('bg-danger','text-light')
// headElement.classList.toggle('bg1')
// }

//         getAttribute('att_name'), removeAttribute('att_name')

// let btnElement = document.querySelector("button");

// function changeTheme() {
//   let bodyEl = document.querySelector("body");
//   // bodyEl.removeAttribute('class')
//   let res = bodyEl.getAttribute("class");

//   if (res === "bg") {
//     bodyEl.classList.add("bg1");
//     bodyEl.classList.remove("bg");
//     btnElement.innerText = "Dark";
//     btnElement.classList.add("btn-dark", "text-light");
//     btnElement.classList.remove("btn-light", "text-dark");
//   } else {
//     bodyEl.classList.add("bg");
//     bodyEl.classList.remove("bg1");
//     btnElement.innerText = "Light";
//     btnElement.classList.remove("btn-dark", "text-light");
//     btnElement.classList.add("btn-light", "text-dark");
//   }
// }

//                                    Array Methods

// array starting with index value -->  index starting with 0
// length starting with --> 1

let Gadgets = ["Charger", "Laptop", "remote", "earphone"];
let color = ["red", "black", "green", "blue"];
let games = ["cricket", "football", "chess", "hocky"];
// console.log(Gadgets)

// pop(), push(''), shift(), unshift(''), slice(), splice(start,end), map(), find(), findIndex()
// filter(), concat(), spread Opeartor (...)

// push('')
Gadgets.push("TV", "AC");
// console.log(Gadgets);

// unshift('')
Gadgets.unshift("HeadPhone");
// console.log(Gadgets);

// pop()
// Gadgets.pop()
// console.log(Gadgets);

// shift()
// Gadgets.shift()
// console.log(Gadgets);

// slice(start,end)
let res = Gadgets.slice(-4, 5);
// console.log(res);
// console.log(Gadgets);

// splice(start,end,items)
Gadgets.splice(2, 2, "inbaraj", "riswan");
// console.log(Gadgets);

// concat(arrays,arrays)
let newArray = Gadgets.concat(color, games);
// console.log(games);
// console.log(newArray)

// spread Operator ...
let NewArray = [...Gadgets, ...games, ...color];
// console.log(NewArray)

// Array Destructuring []
let os = ["windows", "linux", "mac", "android", "ios", "unix"];

let [windows, linux, mac, and, ios] = os;
// console.log(windows);

//                                map()
// Map is a kind of loop. it's only iterating for array data type

//  os.map((val,ind)=>{
//   console.log(ind,val);
//  })

let nums = [100, 200, 300, 400, 500];

//                             map(),find(), filter(),findIndex()

// let mapping = os.map((val, ind) => {
//   return val + " os";
// });
// console.log(mapping)

// let finding = nums.find((a, b) => {
//   return a < 300;
// })
// console.log(finding);

// let filtered = nums.filter((a, b) => {
//   return a < 300;
// })
// console.log(filtered);

// let findIndexing = nums.findIndex((a, b) => {
//   return a < 300;
// })
// console.log(findIndexing);

//                                       String Function's

// let Greet = 'Welcome to'

// let Greetts = 'it\'s okay'

// let Path = "C:\\localdisk\\js"
// console.log(Path);

// let Greetings = Greet +  ' js class'

// let Greetings = `${Greet} js class`
// console.log(Greetings);

let str = " String values using split function string Function ";
// console.log(str);

let newStr = " new String Value";
let hi = "hi ";

// console.log(str.length)

// console.log(str.charAt(5))

// console.log(str.indexOf('s'));

// console.log(str.lastIndexOf('s'));

// console.log(str.slice(-10,-7))

// console.log(str.includes('@gmail'))

// let arr = str.split(' ')
// console.log(arr);

// console.log(str[3]);

// console.log(str.at(-7))

// console.log(str.replace('string','Array'))

// console.log(str.concat(newStr," hello ", hi))

// console.log(str.match(/string/ig))

// console.log(str.matchAll(/function/g))

// console.log(str.toLocaleUpperCase())

// let str1 = str.toLocaleLowerCase()
// console.log(str1);

// console.log(str.search(/F/gi));

// console.log(str.endsWith('Function'))

// console.log(str.trim())

//                                           Closures

// let Gl = "GlobalVariable";

// function Outter(a) {
//   let OutterVariable = "outtervariable";
//   console.log(OutterVariable);

//   function Inner(b) {
//     let InnerVariable = "InnerVariable";
//     console.log(Gl);
//     console.log(OutterVariable);
//     console.log(InnerVariable);
//   }

//   return Inner;
// }

// // console.log(Outter())

// let New = Outter(10);
// // console.log(New)
// New(5)

let Gl = "GlobalVariable";

function Outter(a) {
  let OutterVariable = "outtervariable";
  console.log(OutterVariable);

  return () => {
    console.log("hello");
  };
}

// let z = Outter("hi")
// z("hello")
// console.log(z);

//                                  Set()

let color1 = [1, 2, 3, 4, "hii", 4, 5, 6, 1];
// console.log(color1);

// let duplicate = new Set(color1)
// console.log(duplicate);

let newSet = new Set([1, 2, 3, 4, 1, 2, 3, 4, 5, 6, 7]);
// console.log(newSet);

// newSet.add(1)
// newSet.add(2)
// newSet.add("hii")
// newSet.add("Hii")
// console.log(newSet);

// newSet.delete(3)
// newSet.clear()
// console.log(newSet);

// newSet.forEach((val, ind) => {
//   console.log(val);
// });

// color1.map((val,ind)=>{
//   console.log(a);
// })

//                                  Events

//                            Key Board Events
// 1. keyUp
// 2. keyDown
// 3. keyPress

let bodyEl = document.querySelector("body");

// function Show() {
//   let Name = document.querySelector("input").value;
//   console.log(Name);

//   // bodyEl.innerHTML += '<h1>Name:'+ inputEl +'</h1>'
//   bodyEl.innerHTML += `<div class="text-center bg-secondary m-3 p-3">
//                        <h1 class="text-danger">Name : ${Name} </h1>
//                        </div>`
// }

// document.addEventListener("click", () => {
//   console.log("single click");
//   // inputEl.style.backgroundColor = "black";
// });

// document.addEventListener("dblclick", () => {
//   console.log("double click");
//   // inputEl.style.backgroundColor = "black";
// });

// btnEl.addEventListener("click", () => {
//   bodyEl.innerHTML += `<h1>Heading</h1>
//                       <p>Paragraph</p>
//                       <button>Submit</button>`;
// });

// btnEl.addEventListener("click", (event) => {
//   // console.log("key down",event.keyCode, event.key);
//    console.log(inputEl.value);

// });

// inputEl.addEventListener('keypress',(e)=>{
//   if(e.key === "Enter" && e.keyCode === 13){
//     console.log(inputEl.value)
//   }
//   else{
//     console.log("press enter");
//   }
// })

// document.addEventListener("keydown", (e) => {
//   switch (e.key) {
//     case "ArrowUp":
//       alert("Arrow Up")
//       break;
//     case "ArrowDown":
//       alert("Arrow Down");
//       break;
//     case "ArrowRight":
//       alert("Arrow Right");
//       break;
//     case "ArrowLeft":
//       alert("Left");
//       break;
//     default:
//       console.log("wrong key");
//       break;
//   }
// });

// document.addEventListener('keyup',()=>{
//   console.log('keyUp');
// })

// document.addEventListener('keypress',()=>{
//   console.log('keyPress');
// })

// element.addEventListener('even_name',()=>{
// })

//                          Mouse Events

// document.addEventListener("mousedown", (e) => {
//   // console.log(e);
//   switch (e.which) {
//     case 1:
//       alert("left");
//       break;
//     case 2:
//       alert("Scroll");
//       break;
//     case 3:
//       alert("right");
//       break;
//     default:
//       alert("Wrong Key");
//       break;
//   }
// });

// document.addEventListener("mouseup",()=>{
//   console.log('mouse up');
// })

// document.addEventListener("mousedown",()=>{
//   console.log("mouse down");
// })

// let divEl = document.querySelector("div");

function Values() {
  console.log("Events in html");
}

// document.addEventListener('paste',()=>{
//   alert('pasted');
// })

// divEl.addEventListener('mouseenter',(e)=>{
//   // console.log('mouse enter');
//   divEl.classList += " blur"
// })

// divEl.addEventListener("mouseleave", () => {
//   divEl.innerHTML = `<button>Submit</button>`;
// });

// divEl.addEventListener("mouseover",()=>{
//   console.log('mouse over');
// })

// document.addEventListener("mousemove",(e)=>{
//   console.log(e)
// })

//                             Context Menu

// Syntax --> addEventListener('eventname',()=>{})

// let context =  document.querySelector('html')

// context.addEventListener('contextmenu',(a)=>{
//   a.preventDefault()
//   // a.stopPropagation()
//   alert("Don't use right click")
// })

//                        Form Events

// submit, blur, focus, reset

// let btnEl = document.getElementById('btn')

// let formEl = document.querySelector('form')

// formEl.addEventListener('submit',(e)=>{
//   e.preventDefault()

//   let Name = document.getElementById('one').value
//   let Age = document.getElementById('two').value
//   console.log(Name, Age);

//   // let key = {
//   //   name : Name,
//   //   age : Age
//   // }
//   // console.log(key);

//   // document.getElementById('one').value = ""
//   // document.getElementById('two').value = ""
// })

// function handlingReset() {
//   alert("If you want to reset");
// }

// function HandlingFocus() {
//   console.log("blur Event Triggered");

//   let span = document.querySelector("span");
//   let Age = document.getElementById("two");
//   let result = Age.value;
//   let noPattern = /^[6-9][\d]{9}$/g;

//   if (noPattern.test(result) == true) {
//     Age.style.borderColor = "green";
//   } else {
//     Age.style.borderColor = "red";
//   }
// }

// document.querySelector('form').addEventListener("submit", (e) => {
//   e.preventDefault();

//   let span = document.querySelector("span");
//   let Age = document.getElementById("two");
//   let result = Age.value;
//   let noPattern = /^[6-9][\d]{9}$/g;

//   if (noPattern.test(result) == true) {
//     span.textContent = "correct"
//     span.style.color = "green";
//   } else {
//     span.textContent = "incorrect"
//     span.style.color = "red";
//   }
// });

// function HandlingFocus(){
//   console.log('Focus Events');
//   let span =  document.querySelector('span')
//   span.textContent = "wrong msg"
//   span.style.color = 'red'
// }

//                        setTimeout(), setInterval()
//                        clearTimeout(), clearInterval()

// 1 seconds = 1000 milli seconds

// function repeat(){
//   document.querySelector('h1').innerText += "Greetings"
// }

// let myTimeout = setTimeout(repeat,3000)

let myTime = setInterval(() => {
  // document.querySelector('h1').innerText += " hello"
  // console.log('loading');
  // let imgEl = document.querySelector('img')
  // imgEl =imgEl + imgEl.setAttribute('src',"https://images.pexels.com/photos/906150/pexels-photo-906150.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=2")
}, 2000);

// function stopping(){
//   clearInterval(myTime)
// }

//                                   Date

// let date = new Date()

// console.log(date.toLocaleDateString());
// console.log(date.toLocaleString());
// console.log(date.toLocaleTimeString());
// console.log(date.toISOString());
// console.log(date.toUTCString());
// console.log(date.getTimezoneOffset());
// console.log(date.toString());

//                         Getting Time Using Js Date

function Timing() {
  let date = new Date();

  let h = date.getHours();
  let m = date.getMinutes();
  let s = date.getSeconds();
  // console.log(h, m, s);

  if (h > 12) {
    // h = 1
    h = h - 12;
  }
  if (h < 10) {
    h = "0" + h;
  }
  if (m < 10) {
    m = "0" + m;
  }
  if (s < 10) {
    s = "0" + s;
  }

  let headEl = document.getElementById("head");
  headEl.innerHTML = ` ${h}:${m}:${s}`;

  setInterval(Timing, 1000); // method calling itself
}
// Timing();

//                             Getting Date Using Js Date

// JavaSCript Date Month starting form 0th index
let date = new Date();

let d = date.getDate();
// let Months  = ['jan','feb','mar','apr','may','jun','jul','aug','sep','oct','nov','dec']
let m = date.getMonth() + 1;
// let curMonth = Months[m]
let y = date.getFullYear();

// console.log(d, m, y);

// let headEl = document.querySelector("h2");
// headEl.innerHTML += ` ${d}/${m}/${y}`;

//                              Getting Day Using Js Date
// Js getDay function also starting with index value

let Days = ["sun", "mon", "tue", "wed", "thu", "fri", "sat"];
let Day = date.getDay();
let D = Days[Day];
// console.log(D);

// let head = document.querySelector("h3");
// head.textContent = D;

//                                                  Local Storage

// setItem('key','value'), getItem('key'), removeItem('key'), clear()

// localStorage.setItem('Name',"Akash")

// let Answer = prompt('Enter your name')

function Validate() {
  let name = document.getElementById("one").value;
  let age = document.getElementById("two").value;

  localStorage.setItem("_name", name);
  localStorage.setItem("age", age);

  // localStorage.removeItem('Name')

  let res = localStorage.getItem('_name')
  console.log(res);

}

function clearAll(){
  localStorage.clear()
}

// localStorage.setItem('name',Answer)




//                          JSON (JavaScript Object Notation)

// prevoius data storage platforms --> xml, ajax --> asynchronous javascript and xml
// Data Storage Platform, Platform Independent, Light Weight Process

// JSON have a two Function's:
// 1. JSON.parse()
// 2. JSON.stringify()

let Contact1 = {
  Address: "Coimbatore",
  Mobile:123425678,
  State:"Tn",
}
// console.log(Contact1)

// Stringify() using to convert object into json
let stringified = JSON.stringify(Contact1)
// console.log(stringified);

// parse() using to convert json into object
let parsed = JSON.parse(stringified)
// console.log(parsed);



//                                   Promise

// State --> Pending, Fullfilled, Reject

// fetch(), .then() , .then()

// json()

// fetch('https://fakestoreapi.com/products')
// .then((a) => a.json())
// .then(res =>{
//   console.log(res)

//   let divEl = document.querySelector('#roll')

//   res.map((val,ind)=>{
//      divEl.innerHTML += `
//      <div class="col-lg-4 col-md-6  col-sm-12">
//      <h1>${val.title}</h1>
//      <img src = ${val.image} style="height:200px;" />
//      <br/><br/>
//      <mark>${val.price}</mark>
//      <button class ="btn btn-success">Buy</button>
//      </div>
//      ` 
//   })

// })






// res.map((val,ind)=>{
  //   // console.log(val.id);

  //   divEl.innerHTML += `
  //   <div class="text-center shadow" >
  //   <h1>${val.title}</h1>
  //   <img src=${val.image} alt="loading" style="height:200px;" />
  //   <h3>${val.price}</h3>
  //   <buttton class="btn btn-success" >Buy</buttton>
  //   </div>
  //   `

  // })




  //                                        Js 

  //                                     FrontEnd
  // Angular --> Google 
  // Vue --> Google
  // React --> js Library but sometimes it'll be considered as framework --> Facebook - META

  //                                    Backend 
  // Node Js -->          // 1. Express Js
                          // 2. Socket.io
                          // 3. Parrot


  // GUI --> Graphical User Interface
  // CLI --> Command Line Interface
  // CLI --> Common Language Interface
                      
  //                                             REACT
  // React is a pure JS Library.
  // React is developed by Facebook (META). Jordan Walke from facebook he is a software Engineer.
  // Facebook is officially used in Newsfeed application in 2013.
  // React is officially launched for 2013 (0.3.0)version   
  // React current version is 18.24.0
  // SPA Simgle Page Application 
  // Syntax is like a vennila JavaScript, and also you can use Pure React.
  
  //                                 how to create a react app
  // 1. Mandatory to Install Node JS --> node --version
  // 2. The Command --> npx create-react-app <project_name>
  // npx --> node package xecute

//                                 Naming Restriction in React Command

//   Cannot create a project named "App" because of npm naming restrictions
//   * name can no longer contain capital letters
// Please choose a different project name.
  
                          

// Input: s = "cbaebabacd" , p = "abc" Output: [‘cba’,’bac’]

let s = 'cbaebabacd'
let p = 'abc'

let splitting = p.split(' ')
let reversing = splitting.reverse()

let arr = []

for(let i=0; i < p-1; i++){
  arr[i]
}
console.log(arr); 



