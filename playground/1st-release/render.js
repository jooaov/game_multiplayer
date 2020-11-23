 //pega o canvas e seta o context para 2d
 const screen = document.getElementById('screen');
 const context = screen.getContext('2d');
 const currentPlayerId = 'player1';

 const game = {
     players: {
         'player1': { x: 1, y: 1 },
         'player2': { x: 9, y: 9 }
     },
     'fruits': {
         'fruit1': { x: 3, y: 1 }
     }
 }

 rederScreen()
 function rederScreen() {
     context.fillStyle='white';
     //pega o total do canvas e limpa
     context.clearRect(0,0,10,10);

     for (const playerId in game.players) {
         const player = game.players[playerId];
         context.fillStyle = 'black';
         context.fillRect(player.x, player.y, 1, 1);
     }
     for (const fruitsId in game.fruits) {
         const fruit = game.fruits[fruitsId];
         context.fillStyle = 'green';
         context.fillRect(fruit.x, fruit.y, 1, 1);
     }
     requestAnimationFrame(rederScreen);
 }
