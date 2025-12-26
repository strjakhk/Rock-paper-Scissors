function getChoiceFromNumber(num){
    if (num == 0) return "rock";
    if (num == 1) return "paper";
    if (num == 2) return "scissors";
}

function getComputerChoice(){
    const num = Math.floor(Math.random() * 3);
    return getChoiseFromNumber(num);
}

