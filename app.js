const userScore = 0;
const computerScore=0;
console.log(userScore);
console.log(computerScore);

const userScore_span = document.getElementById("user-score");
const computerScore_span = document.getElementById("computer-score");
const scoreBoard_div = document.querySelector(".score-board");
const result_div = document.querySelector(".result");
const rock_div = document.getElementById("r");
const paper_div = document.getElementById("p");
const scissors_div = document.getElementById("s");

const items = ['rock', 'paper', 'scissors'];

function computerPlay() {
    return items[Math.floor(Math.random()*items.length)];
}

function game(userSelection) {
    const computerSelection = computerPlay().toLowerCase();
    console.log("Computer choice: " + computerSelection);
    console.log("User choice: " + userSelection);
}

game("example");


rock_div.addEventListener('click', function() {
    console.log("You clicked on rock");
})
paper_div.addEventListener('click', function() {
    console.log("You clicked on paper");
})
scissors_div.addEventListener('click', function() {
    console.log("You clicked on scissors");
})




  
// const playerSelection = 'rock';

// console.log(computerSelection);
// console.log(playerSelection);



// function playRound(playerSelection, computerSelection) {
// if(playerSelection === 'rock' && computerSelection === 'paper') {
//     return "You lose! Paper beats rock!";
// } else if(playerSelection === 'rock' && computerSelection === 'scissors') {
//     return "You win! Rock beats scissors";
// } else if (playerSelection === 'rock' && computerSelection === 'rock') {
//     return "It's a draw!";
// } else if(playerSelection === 'paper' && computerSelection === 'rock') {
//     return "You win! Paper beats rock!";
// } else if(playerSelection === 'paper' && computerSelection === 'scissors') {
//     return "You lose! Scissors beats paper";
// } else if (playerSelection === 'paper' && computerSelection === 'paper') {
//     return "It's a draw!"; 
// } else if (playerSelection === 'scissors' && computerSelection === 'paper') {
//     return "You win! Scissors beats paper";
// } else if (playerSelection === 'scissors' && computerSelection === 'rock') {
//     return "You lose! Rock beats scissors";
// } else if (playerSelection === 'scissors' && computerSelection === 'scissors') {
//     return "It's a draw!"; 
// }

// } 


// console.log(playRound(playerSelection, computerSelection));