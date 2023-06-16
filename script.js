/* 
I. Variables & Datatypes
//A. Q + A
1.How do we assign a value to a variable?
Ans: Assignment operator (=)
2.How do we change the value of a variable?
Ans: Reassignment operator (=)
3.How do we assign an existing variable to a new variable?
Ans: Assignment operator
4.Remind me, what are declare, assign, and define?
-declare -> let/const/Var e.g let catName = kitty
-Assign -> gives value to a variable
-Define ->Gives a meaning
5. What is pseudocoding and why should you do it?
Ans: fake coding in plain language that helps programmers develop algorithms
6.What percentage of time should be spent thinking about how you're going to solve a problem vs actually typing in code to solve it?
Ans: 90% thinking and 10% coding

*/


// B. Strings
// For all other questions that involve writing code, you can solve them via the following instructions.

// 1.Create a variable called firstVariable
 //** Use either let or const keywords
// Ans: let firstVariable 

// 2.Assign it the value of the string "Hello World"
//* Use variable initialization
// Ans:  firstVariable = "Hello World"
// 3.Change the value of this variable to some number
// Ans: firstVariable = 10

// 4.Store the value of firstVariablein a new variable called secondVariable
//**Use the assignment operator = (i.e use the equal sign)*/
// Ans: let secondVariable = new variable 
 //     let firstVariableValue = secondVariable

// 5.Change the value of secondVariableto any string.
//Ans:secondVariable = "Number"

// 6.What is the value of firstVariable?
//Ans: Number

//7. Create a variable called yourNameand set it equal to your name as a string. Then, write an expression that takes the string "Hello, my name is " and the variable yourNameso that it returns a new string with them concatenated.
 let yourName = "Ann";
     let expression = "Hello, my name is "; 
   //  Now Concatenate using the + sign
    let introduction = expression + yourName
                        // = Hello, my name is Ann
       console.log(introduction) 


// ex: Hello, my name is Jean Valjean


// C. Booleans
// Using the provided variable definitions, replace the blanks so that all log statements print truein the console. Answers should be all be valid JS syntax and not weird things that don't make sense but happen to print trueto the console

 const a = 4;
 const b = 53;
 const c = 57;
 const d = 16;
 const e = 'Kevin';

//1. console.log(a __ b);
 console.log(a<b)
//2. console.log(c __ d);
console.log(c>d)
//3. console.log('Name' __ 'Name');
console.log('name'==='name')
// // FOR THE NEXT TWO, USE ONLY && OR ||
//4. console.log(true __ false);
console.log(true || false)
//5. console.log(false __ false __ false __ false __ false __ true);
console.log(false && false && false && false && false || true)
//6. console.log(false __ false)
console.log(false === false) // i.e the word false is of equal value and equal type (===) to the word false
//7. console.log(e ___ 'Kevin');
console.log(e !== 'Kevin') //i,e the letter (e) is not of equal value or not equal type (symbolized by !==) to the string ('Kevin')
//8. console.log(a __ b ___ c); // note: a < b < c is NOT CORRECT (and is not a valid JS expression, think about using other math operations)
console.log(a + b === c) // i.e 4(a) + 53(b) = 57 which is of equal value and equal type ( symbolized by ===) to 57(c)
//9. console.log(a __ a ___ d); // note: the answer is a simple arithmetic equation, not something "weird"
console.log(a * a === d)
//10. console.log(48 __ '48');
console.log(48 == '48')

  

// D. The farm
// Declare a variable animal. Set it to be either "cow" or something else
    let animal = "cow"
// Write code that will print out "mooooo" if the it is equal to cow
  //Ans: Use the if else Statement/Syntax i.e  if(condition1){}else
    let sound = "mooooo"
    if(animal = "cow"){
         sound = "mooooo"
    } console.log(sound)
// Change your code so that if the variable animalis anything other than a cow, it will print (i.e.console.logs) "Hey! You're not a cow."
   //Ans: Use the if else Statement i.e 
    // if(condition1){
       //           block of code to be executed if condition1 is true
      //             }else{
       //                   block of code to be executed if condition1 is false
    //                     }
    if(animal = "cow"){
         sound = "mooooo"
    }else{
        console.log( "Hey! You're not a cow")
    }
// Commit



// E. Driver's Ed
// Make a variable that holds a person's age; be semantic
let fansAge = ""
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print (i.e.console.logs) "Sorry, you're too young."
if(fansAge >= 16){
    console.log("Here are the keys")
}else{
    console.log("Sorry,you're too young")
}




/**II. Loops
Remember: USE let when you initialize your for loops!

This is GOOD: for(let i = 0; i < 100; i++){code to be executed}
  // this is the for loop synthax i.e
   for (expresion1;expression2(defines condition for executing the code block/for loop to run); expresion3 (executed every time, after the code block has been executed by increasing a value)) {
    code block to be executed i.e. console.log(i)
  }

This is NO GOOD: for(i = 0; i < 100; i++) **/

// A. The basics
//1. Write a loop that will print out (i.e.console.logs) all the numbers from 0 to 10, inclusive
  for(let i = 0; i<=10;i++){
     console.log(i)
     }
  
// 2.Write a loop that will print out (i.e.console.logs) all the numbers from 10 up to and including 400
    for(let i = 10; i<=400; i++){
           console.log(i)
        }
// 3.Write a loop that will print out (i.e.console.logs) every third number starting with 12 and going no higher than 4000
  
  // for(let i = 12; i<=4000; i+=3){
  //   console.log(i)
  // }
  
// B. Get even
// 1.Print out (i.e.console.logs) the numbers that are within the range of 1 - 100
for(let i = 1; i <=100; i++){
   console.log(i)
}
// 3.Adjust your code to add a message next to even numbers only that says: "<-- is an even number"
for(let i = 1; i <= 100; i++){
  if(i % 2 === 0){
    console.log(`${i} <-- is an even number `)
  }else{
    console.log(i)
  }
}


// C. Give me Five
//1. For the numbers 0 - 100, print out (i.e.console.logs) "I found a number. High five!" if the number is a multiple of five
// Example Output:
// I found a 5. High five!
// I found a 10. High five!
for(let i = 0; i <= 100; i++){
  if(i % 5 === 0){
    console.log(i + `I found a number.High five`)
   }else {
    console.log(i)
   }
}


//1. Add to the code from above to print  (i.e.console.logs) out "I found a number. Three is a crowd" if the number is a multiple of three
// Example Output:

// I found a 3. Three is a crowd
// I found a 5. High five!
// I found a 6. Three is a crowd
// I found a 9. Three is a crowd
// I found a 10. High five!
for(let i = 0; i <= 100; i++){
  if(i % 3 === 0){
    console.log(i + `  I found a number. Three is a crowd`)
  }
}


//1. For numbers divisible by both three and five, be sure your code prints (i.e.console.logs) both messages
//NB: Numbers divisible by both 3 and 5 from 1 to 100 are;15,30,45,60,75 and 90 ( this should be your result in the terminal when you console.log)
let i
for(let i = 1; i<= 100; i++){
 if(i%3 === 0 && i%5 ===0){
  console.log(i)
 }
}

// D. Savings account
// 1.Write code that will save the sum of all the numbers between 1 - 10 to a variable called bank_account.
// Check your work! Your bank_account should have $55 in it.
let sum = 0
for(let i = 1; i <= 10; i++ ){
 sum += i ;
} console.log('bank_account', sum);

// const numSum = (n) => n * (n+1) / 2;


//2. You got a bonus! Your pay is now doubled each week. Write code that will save the sum of all the numbers between 1 - 100 multiplied by 2.
// Check your work! Your bank_account should have $10,100 in it.
let newSum = 0
for(let i = 1; i <= 100; i++ ){
 newSum += i * 2 ;
} console.log('bank_account', newSum);

//* 
// III. Arrays & Control flow

// A. Talk about it:
// What are the things in an array called? ===> The things in an array are called Values
     //Def: An array is a special variable, which can hold more than one value:
// Do Arrays guarantee those things will be in order? ===> No
// What real-life thing could you model with an array? ===> Type of cars

// B. Easy Does It
// Create an array that contains three quotes and store it in a variable called quotes
const  quotes = ["quote0","quote1","quote3"]


// C. Accessing elements
// Given the following array, const randomThings = [1, 10, "Hello", true]
//1. How do you access the 1st element in the array?
 const randomThings =  [1, 10, "Hello", true]
  let randomThing = randomThings[0] // Returns the vaule of the first element, which is 1 // You access an array element by referring to the index number: Array indexes start with number zero i.e [0,1,2,3,4,5..].
 //Thus number 1 is standing in the index number position [0] which is the first element in the array

//2. Change the value of "Hello"to "World"
//"Hello" is standing in the index number position 2
 randomThings[2] = "World";

//3. Check the value of the array to make sure it updated the array. How? Why, yes! console.log();
console.log(randomThings)


// D. Change values
// Given the following array const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
// 1.What would you write to access the 3rd element of the array?
const ourClass = ["Salty", "Zoom", "Sardine", "Slack", "Github"]
ourClass[3] //  Counting from zero(0), the 3rd element of the array is "Slack"
// 2.Change the value of "Github" to "Octocat"
ourClass[4] = "Octocat" //Github is on index number position 4

//3.Add a new element, "Cloud City" to the array
ourClass.length // Returns the number of elements
ourClass.push("Cloud City")  // Use the push() method to add a new element to an array
console.log(ourClass)

//let newElement = "Cloud City"
//ourClass[5] = newElement//


// E. Mix It Up
// Note: You don't really need .splice()for these. You could use it, but there are simpler array methods that are more appropriate.
// Given the following array: const myArray = [5, 10, 500, 20]

//    1.Add the string "Aegon"to the end of the array. Add another string of your choice to the end of the array.
const myArray = [5, 10, 500, 20]
myArray.push("Aegon") // Use the push() method to add a new element to an array
myArray.push("Money")  // Use the push() method to add a new element to an array

//    2.Remove the 5 from the beginning of the array.
myArray.shift(5) // The Shift() method removes the first element of an array:

//    3.Add the string "Bob Marley" to the beginning of the array.
myArray.unshift("Bob Marley")  // The unshift() method adds new elements to the beginning of an array.

//   4. Remove the string of your choice from the end of the array.
myArray.pop("Money") // The pop() method removes (pops) the last element of an array.

//   5. Reverse this array using Array.prototype.reverse(). Did you mutate the array? What does mutate mean? Did the .reverse()method return anything?
// myArray.reverse()
// myArray.prototype.reverse() 
// console.log(myArray)

// ===> Yes the array was mutated.Mutations happen when we change a JavaScript object or array without creating a new variable or reassigning an existing one.
//===> Yes The reverse() method reverses the order of the elements in an array.




// F. Biggie Smalls
// Create a variable that contains an integer.
let catsAge = 2

// Write an if ... elsestatement that:
  // console.log()s "little number" if the number is entered is less than 100
  // console.log()s big number if the number is greater than or equal to 100.
  if(catsAge < 100){
    console.log( "little number");
  }else{
    console.log("big number");
  }



// G. Monkey in the Middle

// Write an if ... else if ... elsestatement:
// console.log()little number if the number entered is less than 5.
// If the number entered is more than 10, log big number.
// Otherwise, log "monkey".
let fingers = 6
if(fingers < 5){
  console.log( "little number");
}else if(fingers>10){
  console.log("big number");
}else{
  console.log("monkey");
}

// H. What's in Your Closet?
// Below, we've given you examples of Kristyn and Thom's closets modeled as data in JavaScript.

// const kristynsCloset = [
//   "left shoe",
//   "cowboy boots",
//   "right sock",
//   "Per Scholas hoodie",
//   "green pants",
//   "yellow knit hat",
//   "marshmallow peeps"
// ];

// // Thom's closet is more complicated. Check out this nested data structure!!
// const thomsCloset = [
//   [
//     // These are Thom's shirts
//     "grey button-up",
//     "dark grey button-up",
//     "light blue button-up",
//     "blue button-up",
//   ],[
//     // These are Thom's pants
//     "grey jeans",
//     "jeans",
//     "PJs"
//   ],[
//     // Thom's accessories
//     "wool mittens",
//     "wool scarf",
//     "raybans"
//   ]
// ];

// 1.What's Kristyn wearing today? Using bracket notation to access items in kristynsCloset, log the sentence "Kristyn is rocking that " + the third item in Kristyn's closet + " today!" to the console.
//****console.log(`Kristyn is rocking that $(kristynsCloset[2]) today!` )
//2. Kristyn just bought some sweet shades! Add "raybans"to her closet after "yellow knit hat".
     //*** */ kristynsCloset.splice(6,0,"raybans")
//3. Kristyn spilled coffee on her hat... modify this item to read "stained knit hat"instead of yellow.
kristynsCloset(5) = "stained knit hat"
console.log(kristynsCloset)
//4. Put together an outfit for Thom! Using bracket notation, access the first element in Thom's shirtsarray.
thomsCloset[0][0]
console.log(shirt)
// 5.In the same way, access one item from Thom's pants array.
let pants = thomsCloset[1][0]
// 6.Access one item from Thom's accessories array.
let accessories = thomsCloset[2][2]
// 7.Log a sentence about what Thom's wearing. Example: "Thom is looking fierce in a grey button-up, jeans and wool scarf!"
console.log(`Thom is looking fierce in a ${shirt},${pants}, and ${accessories}`)
//8. Get more specific about what kind of PJs Thom's wearing this winter. Modify the name of his PJ pants to Footie Pajamas.
thomsCloset[1][2] = " Footie Pajamas"
console.log(thomsCloset)




// IV. Functions


// A. printGreeting
// Do you think you could write a function called printGreetingwith a parameter namethat returns a greeting with the argument interpolated into the greeting?
// Like so?
// console.log(printGreeting("Slimer"));
// => Hello there, Slimer!

// You think you could? I think so too. Feel free to skip this problem, because you've already done it. If you've done the problem twice, read entire problems carefully before doing them from now on.


// B. printCool
// Write a function printCoolthat accepts one parameter, nameas an argument. The function should print the name and a message saying that that person is cool.
const printCool = (name) => {
  console.log(`${name} is cool`)
}
printCool ("captain Reynolds")

// console.log(printCool("Captain Reynolds"));
// => "Captain Reynolds is cool";




// C. calculateCube
// Write a function calculateCubethat takes a single number and prints the volume of a cube made from that number.

// console.log(calculateCube(5));
// => 125




// D. isVowel
// Write a function isVowelthat takes a character (i.e. a string of length 1) and returns true if it is a vowel, false otherwise. The vowel could be upper or lower case. Test your function on every vowel and make sure it's working. In general, when you write functions, take a minute to test them with different values to make sure they behave the way you want.

// console.log(isVowel("a"));
// => true




// E. getTwoLengths
// Write a function getTwoLengthsthat accepts two parameters (strings). The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getTwoLengths("Hank", "Hippopopalous"));
// => [4, 13]




// F. getMultipleLengths
// Write a function getMultipleLengthsthat accepts a single parameter as an argument: an array of strings. The function should return an array of numbers where each number is the length of the corresponding string.

// console.log(getMultipleLengths(["hello", "what", "is", "up", "dude"]));
// => [5, 4, 2, 2, 4]




// G. maxOfThree
// Define a function maxOfThreethat takes three numbers as arguments and returns the largest of them. If all numbers are the same, it doesn't matter which one is returned. If the two largest numbers are the same, one of them should be returned. Be sure to test it with larger values in each of the three locations.

// console.log(maxOfThree(6, 9, 1));
// => 9

// Did you use Google and find Math.max()? If so, great job! Very resourceful—keep looking stuff up! However, for this particular question, we need you to submit a solution that does not use Math.max().




// H. printLongestWord
// Write a function printLongestWordthat accepts a single argument, an array of strings. The method should return the longest word in the array. In case of a tie, the method should return the word that appears first in the array.

// console.log(printLongestWord(["BoJack", "Princess", "Diane", "a", "Max", "Peanutbutter", "big", "Todd"]));
// => "Peanutbutter"





