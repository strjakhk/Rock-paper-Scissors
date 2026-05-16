import { GameManager } from "./GameManager.js";

export class Player{
    #pick;
    #name;
    #isBot;
    #score;

    constructor(name, isBot = false){
        this.name = name;
        this.#isBot = isBot;
        this.#score = 0;
    }

    get score(){
        return this.#score;
    }
    incrementScore(){
        this.#score += 1;
    }

    get name(){
        return this.#name;
    }
    set name(value){
        this.#name = value;
    }

    get isBot(){
        return this.#isBot;
    }

    get pick(){
        return this.#pick;
    }
    pickItem(value){
        if (!value || !GameManager.items.find(item => item === value)){
            throw Error('Invalid pick');
        }
        this.#pick = value;
    }

    removePick(){
        this.#pick = undefined;
    }

    autoPickItem(){
        if (!this.isBot) return;
        const items = GameManager.items;
        const item = items[Math.floor(Math.random() * items.length)];
        this.pickItem(item);
    }
}