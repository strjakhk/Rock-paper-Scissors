const items = ["rock", "scissors", "paper"]
let humanScore = 0;
let computerScore = 0;


function getComputerChoice(){
    const index = Math.floor(Math.random() * 3);
    return items[index];
}

function getHumanChoice(){
    const choice = prompt("Rock, paper or scissors?").toLowerCase();
    return choice;
}

function getIndexOf(item){
    let index = items.indexOf(item);
    index = (index === items.length - 1) ? -1 : index;
    return index;
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

function tie(item1){
    console.log("It's a tie! both pick " + item1);
}

function win(item1, item2){
    console.log(`You won this one, ${item1} beats ${item2}`);
    humanScore += 1;
}

function lose(item1, item2){
    console.log(`You lose this round! ${item1} beats ${item2}`);
    computerScore += 1;
}

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

function playGame(){
    for (let i = 0; i < 5; i++){
        const hChoice = getHumanChoice();
        const cChoice = getComputerChoice();

        playRound(hChoice, cChoice);
    }

    if (humanScore > computerScore){
        console.log("You won the game!");
    }else if (computerScore > humanScore){
        console.log("You lost the game :(");
    }else{
        console.log("It's a tie");
    }
}

playGame();




