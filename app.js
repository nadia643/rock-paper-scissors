const items = ['rock', 'paper', 'scissors'];

function computerPlay() {
return items[Math.floor(Math.random()*items.length)];
}
const computerSelection = computerPlay().toLowerCase();  
const playerSelection = 'rock';
// const playerSelection = window.prompt("Rock, paper or scissors?");

console.log(computerSelection);
console.log(playerSelection);

const userScore = 0;
const computerScore=0;

console.log(userScore);
console.log(computerScore);

function playRound(playerSelection, computerSelection) {
if(playerSelection === 'rock' && computerSelection === 'paper') {
    return "You lose! Paper beats rock!";
} else if(playerSelection === 'rock' && computerSelection === 'scissors') {
    return "You win! Rock beats scissors";
} else if (playerSelection === 'rock' && computerSelection === 'rock') {
    return "It's a draw!";
} else if(playerSelection === 'paper' && computerSelection === 'rock') {
    return "You win! Paper beats rock!";
} else if(playerSelection === 'paper' && computerSelection === 'scissors') {
    return "You lose! Scissors beats paper";
} else if (playerSelection === 'paper' && computerSelection === 'paper') {
    return "It's a draw!"; 
} else if (playerSelection === 'scissors' && computerSelection === 'paper') {
    return "You win! Scissors beats paper";
} else if (playerSelection === 'scissors' && computerSelection === 'rock') {
    return "You lose! Rock beats scissors";
} else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
    return "It's a draw!"; 
}
} 

console.log(playRound(playerSelection, computerSelection));