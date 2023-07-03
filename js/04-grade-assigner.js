/* 
The “Grade Assigner” Application
Usage: Use else if statements
1.	Collect the a number between 1 and 100 from the user. 
2.	Make sure that number is between 1 and 100, if it is not, let the user know that only numbers between 1 and 100 are accepted.
3.	If the score is between 60 and 69, write out “You received a D” into the console.
If the score is between 70 and 79, write out “You received a C” into the console.
If the score is between 80 and 89, write out “You received a B” into the console.
If the score is between 90 and 100, write out “You received an A” into the console.
If the score is less than 60, write out “You received an F” into the console.
*/


let score = Number(prompt('What is your score?(1~100)'));

if (score < 60) {
  console.log("Your grade is F");
} else if (score <=69) {
  console.log("Your grade is D");
} else if (score <=79) {
  console.log("Your grade is C");
} else if (score <= 89) {
  console.log("Your grade is B");
} else if (score <= 100) {
  console.log("Your grade is A");
} else {
  console.log("socre is only number between 1~100");
}
