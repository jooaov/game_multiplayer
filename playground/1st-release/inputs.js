
function createKeybordListener() {
    const state = {
        observers: []
    }

    function subscribe(observerFuncition) {
        state.observers.push(observerFuncition);
    }

    //executa a função moveplayer com o parametro comando
    function notifyAll(command) {
        console.log(`Notifying ${state.observers.length} observers`);

        for (const observerFuncition of state.observers) {
            observerFuncition(command);

        }
    }
    document.addEventListener('keydown', handleKeydown);

    function handleKeydown(event) {
        const keyPressed = event.key;
        //comando que é enviado a função
        const command = {
            playerId: 'player1',
            keyPressed
        }
        notifyAll(command);

    }
    return {
        subscribe
    }
}