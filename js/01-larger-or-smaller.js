/* Larger or Smaller?
Usage: Use simple conditional statements
Create an application that accepts two integers within two separate prompts. 
Then, display only the larger of the two within the browser window. 
Don’t forget to handle the fact that the two could be equal.
*/


let numOne = Number(prompt ('Enter a first number')) 
let numTwo = Number(prompt ('Enter a second number')) 

if (numOne < numTwo) {
    document.write(numTwo)
  } else if(numTwo < numOne){
    document.write(numOne)
  } else if (numOne===numTwo){ 
    document.write('They are same.')
  } else{ 
    document.write('invalid option')
  }
