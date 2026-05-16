import { Player } from "./Player.js";

export class GameManager{
    static #items = ['rock', 'scissors', 'paper'];
    #winsAgainst = {
        rock: 'scissors',
        scissors: 'paper',
        paper: 'rock',
    }
    #winningPlayer;
    #winningScore;
    #players;
    constructor(p1, p2){
        this.#players = [p1, p2];
    }

    get players(){
        return [...this.#players];
    }
    set players(players){
        players.forEach(player => {
            if (!(player instanceof Player)){
                throw Error("Players must be instance of Player");
            }
        });

        this.#players = players;
    }

    static get items(){
        return [...this.#items];
    }

    playRound(){
        setTimeout(() => {
            const [p1, p2] = this.players;
            // if any of the players is a Bot then the program will pick a random item
            if (p1.isBot) p1.autoPickItem();
            if (p2.isBot) p2.autoPickItem();

            // if any of the players didn't pick an item, then just return
            if (!p1.pick || !p2.pick) return;

            this.checkRoundWinner();
        }, 1000);
    }

    checkRoundWinner(){
        const [p1, p2] = this.players;
        const items = GameManager.items;

        if (p1.pick === p2.pick) return;

        if (this.#winsAgainst[p1.pick] === p2.pick){
            p1.incrementScore();
        }else{
            p2.incrementScore();
        }

        this.checkGameWinner();
    }

    checkGameWinner(){
        const [p1, p2] = this.players;
        this.#winningPlayer = p1.score === this.winningScore ? p1
                            : p2.score === this.winningScore ? p2 : undefined;
    }

    get winningScore(){
        return this.#winningScore;
    }
    set winningScore(value){
        if (value > 0 && value < 10){
            this.#winningScore = value;
        }
    }

    get winningPlayer(){
        return this.#winningPlayer;
    }
    
}