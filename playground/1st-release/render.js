function rederScreen() {
    context.fillStyle = 'white';
    //pega o total do canvas e limpa
    context.clearRect(0, 0, 10, 10);

    for (const playerId in game.state.players) {
        const player = game.state.players[playerId];
        //teste
        context.fillStyle = 'black';
        context.fillRect(player.x, player.y, 1, 1);
    }
    for (const fruitsId in game.state.fruits) {
        const fruit = game.state.fruits[fruitsId];
        context.fillStyle = 'green';
        context.fillRect(fruit.x, fruit.y, 1, 1);
    }
    requestAnimationFrame(rederScreen);
}