/*Variables*/
const rock = document.querySelector("#rock-button");
const paper = document.querySelector("#paper-button");
const scissors = document.querySelector("#scissors-button");

const playerResults = document.querySelector('#player-results').innerText;
const computerResults = document.querySelector('#computer-results').innerText;

let playerScore = 0;
let compScore = 0;


rock.addEventListener('click', () => {
    playRound('rock');
});
paper.addEventListener('click', () => {
    playRound('paper');
});
scissors.addEventListener('click', () => {
    playRound('scissors'); 
});



function computerPlay() {
    let results = ['Rock', 'Paper', 'Scissors'];
    return results[Math.floor(Math.random()*results.length)]
}

function playRound(playerSelection) {
    playerSelection = playerSelection.toLowerCase();
    let compSelection = computerPlay().toLowerCase();
    if (playerSelection == "rock" && compSelection == "scissors"){
        console.log('test');
        return playerScore++;
    }
    else if (playerSelection == "rock" && compSelection == "paper"){
        console.log('test');
        return compScore++;
    }
    else if (playerSelection == "rock" && compSelection == "rock"){
        console.log('test');
        return "It's a tie! Rock ties with Rock.";
    }
    else if (playerSelection == "paper" && compSelection == "rock"){
        return playerScore++;
    }
    else if (playerSelection == "paper" && compSelection == "scissors"){
        return compScore++;
    }
    else if (playerSelection == "paper" && compSelection == "paper"){
        return "It's a tie! Paper ties with Paper.";
    }
    else if (playerSelection == "scissors" && compSelection == "paper"){
        return playerScore++;
    }
    else if (playerSelection == "scissors" && compSelection == "rock"){
        return compScore++;
    }
    else if (playerSelection == "scissors" && compSelection == "scissors"){
        return "It's a tie! Scissors ties with Scissors.";
    }
    // console.log(`Player score is ${playerScore}`);
    // console.log (`Computer score is ${compScore}`);
}




// function checkSelection(selection) {
//     if (selection === 'rock') {
//         return 
//     }
//     else if (selection === 'paper') {

//     }
//     else if (selection === 'scissors') {

//     }
// }

function win() {
    if (playerScore == 5) {
        return 'Player wins.'
    }
    else if (compScore == 5) {
        return 'Computer wins.'
    }
}

function winCons(playerSelection, compSelection) {
    if (playerSelection == "rock" && compSelection == "scissors"){
        return playerScore++;
    }
    else if (playerSelection == "rock" && compSelection == "paper"){
        return compScore++;
    }
    else if (playerSelection == "rock" && compSelection == "rock"){
        return "It's a tie! Rock ties with Rock.";
    }
    else if (playerSelection == "paper" && compSelection == "rock"){
        return playerScore++;
    }
    else if (playerSelection == "paper" && compSelection == "scissors"){
        return compScore++;
    }
    else if (playerSelection == "paper" && compSelection == "paper"){
        return "It's a tie! Paper ties with Paper.";
    }
    else if (playerSelection == "scissors" && compSelection == "paper"){
        return playerScore++;
    }
    else if (playerSelection == "scissors" && compSelection == "rock"){
        return compScore++;
    }
    else if (playerSelection == "scissors" && compSelection == "scissors"){
        return "It's a tie! Scissors ties with Scissors.";
    }
}