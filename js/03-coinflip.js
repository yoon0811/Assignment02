/* 
The “Coin Flip” Game
Usage: Use nested conditional statements
In this part of the assignment you will explore what you’ve learned so far about variables, prompts, conditionals, operators, math, and more to create a “coin flip game”. To complete the game follow the steps outlined below:
1.	Begin your application by creating a variable called coinFlip and set it equal to a random number. You will have to use a Math method to get this number:
let randomNum = Math.round(Math.random());
2.	Prompt the user to select “Heads or Tails” and set the result to a new variable called choice.
3.	Use a conditional to check the result of the coin flip. If it’s less than a certain number, it will be heads. If it’s greater than a certain number, it will be tails. 
4.	If the result is heads and the user selects heads, display the following message within an alert: 
The flip was heads and you chose heads...you win!
5.	If the result is heads and the user selects tails, display the following message within an alert: 
The flip was heads but you chose tails...you lose!
6.	If the result is tails and the user selects heads, display the following message within an alert: 
The flip was tails but you chose heads...you lose!
7.	If the result is tails and the user selects tails, display the following message within an alert: 
The flip was tails and you chose tails...you win!
 */


let coinFlip = prompt('Heads or Tails?');
let randomNum = Math.round(Math.random());
console.log(randomNum);

if (randomNum < 0.5){
  if (coinFlip === 'Heads') {
    alert('The flip was heads and you chose heads...you win!');
  } else if(coinFlip === 'Tails') {
    alert('The flip was heads but you chose tails...you lose!');
  } else{
    alert('Check options')
  }
} else if(randomNum >= 0.5) {
  if (coinFlip === 'Heads') {
    alert('The flip was tails but you chose heads...you lose!');
  } else if(coinFlip === 'Tails'){
    alert('The flip was tails and you chose tails...you win!');
  } else{
    alert('Check options')
  }
}