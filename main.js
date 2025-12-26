function getChoiseFromNumber(num){
    if (num == 0) return "rock";
    if (num == 1) return "paper";
    if (num == 2) return "scissors";
}

function getComputerChoise(){
    const num = Math.floor(Math.random() * 3);
    return getChoiseFromNumber(num);
}

