import { GameManager } from "./GameManager.js";
import { Player } from "./Player.js";


const player1 = new Player("Juan");
const bot = new Player("Bot", true);

const game = new GameManager(player1, bot);

game.players[0].pickItem("rock");
game.players[1].pickItem("paper");

game.playRound();


game.players.forEach(player => {
    console.log(`player ${player.name} score: ${player.score}`);
});