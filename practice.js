
//Write a fxn that takes in a list of students, and sums the number of students in your class

const numOfStudents = (array) => {
  let sum = 0
  for (let i= 0; i < array.length; i++){
    sum = sum +1
  }
console.log(sum)
}
numOfStudents(["joe","Hans","Peter"])

// Write a fxn named greet. The fxn should not recieve any parameters and should print "Hello"
  //First you create the fxn using the arrow fxn method
const greet = () => {
  console.log("Hello")
}

//Now Call the fxn
  greet()
