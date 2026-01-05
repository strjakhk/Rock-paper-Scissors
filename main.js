/** @type {NodeListOf<HTMLButtonElement>} */
const buttons = document.querySelectorAll(".selection > button");
const result = document.querySelector(".result");
const roundMsg = document.querySelector(".round-msg");

const items = ["rock", "scissors", "paper"]
let humanScore = 0;
let computerScore = 0;


// setting up event listeners for each selection button
buttons.forEach(btn => {
    const choice = btn.id;
    btn.addEventListener("click", () => {
        const computerChoice = getComputerChoice();
        playRound(choice, computerChoice);
        updateGameStatus();
    })
});

// manage the game over msg and prevent user for continue playing
function gameOver(winner){
    const gameOverMsg = document.createElement("div");
    gameOverMsg.textContent = `GameOver! ${winner} won the game.`;
    result.appendChild(gameOverMsg);
    buttons.forEach(btn => btn.setAttribute("disabled", "disabled"));
}

//  update the score points in UI and check if the game is over
function updateGameStatus(){
    const score = document.querySelector(".score");
    score.textContent = `Human: ${humanScore} | Computer: ${computerScore}`;

    if (humanScore == 5) gameOver("human");
    if (computerScore == 5) gameOver("computer");
}

/* 
    To get a winner, we check the item directlly to the right of it in the array of items.
    Each item will beat the item to it's right.
    If the item is the last one, then its index becomes -1, so it would beat the value with index 0
*/
function getResult(humanItem, computerItem){
    let hIndex = getIndexOf(humanItem);
    let cIndex = getIndexOf(computerItem);

    if (hIndex === cIndex) return 0; // tie
    if (computerItem === items[hIndex + 1]) return 1; // human wins
    else return -1; // computer wins
}

function getComputerChoice(){
    const index = Math.floor(Math.random() * 3);
    return items[index];
}

function getIndexOf(item){
    let index = items.indexOf(item);
    index = (index === items.length - 1) ? -1 : index;
    return index;
}

// print a tie message in round
function tie(item1){
    roundMsg.textContent = `Both chose ${item1}, so it's a tie.`;
    result.appendChild(roundMsg);
}

// prints win message and gives one point to user
function win(item1, item2){
    roundMsg.textContent = `You win! ${item1} beats ${item2}!`;
    humanScore += 1;
}

// prints lose message and gives one point to computer
function lose(item1, item2){
    roundMsg.textContent = `You lose. ${item1} beats ${item2}`;
    computerScore += 1;
}


// manage round logic
function playRound(hChoice, cChoice){
    const result = getResult(hChoice, cChoice);

    if (!result){
        tie(hChoice)
    }else if (result > 0){
        win(hChoice, cChoice);
    }else{
        lose(cChoice, hChoice);
    }
}