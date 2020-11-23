
        document.addEventListener('keydown',handleKeydown);

        function handleKeydown(event) {
            const keyPressed =event.key;
            const player = game.players[currentPlayerId];

            if (keyPressed === 'ArrowUp') {
                player.y=player.y-1;
            }else
            if (keyPressed === 'ArrowRight') {
                player.x=player.x+1;
            }
            if (keyPressed === 'ArrowDown') {
                player.y=player.y+1;
            }else
            if (keyPressed === 'ArrowLeft') {
                player.x=player.x-1;
            }

            if(player.x > 9){
                player.x = 0;
            }else if(player.x < 0){
                player.x=9;
            }
            
            if(player.y > 9){
                player.y = 0;
            }else if(player.y < 0){
                player.y=9;
            }
        }
