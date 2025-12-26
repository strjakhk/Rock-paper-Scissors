const items = ["rock", "scissors", "paper"]

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

function getWinner(humanItem, computerItem){
    let hIndex = getIndexOf(humanItem);
    let cIndex = getIndexOf(computerItem);

    if (hIndex === cIndex) return 0; // tie
    if (computerItem === items[hIndex + 1]) return 1; // human wins
    else return -1; // computer wins
}