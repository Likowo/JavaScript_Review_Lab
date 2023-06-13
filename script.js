/* 
A. Q + A
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
Ans: let yourName = "Ann";
     let expression = "Hello, my name is "; 
   //  Now Concatenate using the + sign
    let introduction = expression + yourName
                        = Hello, my name is Ann
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
// Change your code so that if the variable animalis anything other than a cow, it will print "Hey! You're not a cow."
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
// Write code that will print out "Here are the keys!", if the age is 16 years or older, or, if the age is younger than 16, a message should print "Sorry, you're too young."


