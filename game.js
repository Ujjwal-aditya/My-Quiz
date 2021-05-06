class Game
{
    constructor()
    {

    }

    display()
    {

    }

    update(state)
    {
        database.ref('/').update({
            gameState:state
        })
    }
    getState()
    {
        var gameStateRef = database.ref('gameState');
        gameStateRef.on("value",function(data){
            gamestate = data.val();
        })
    }

    async start()
    {
        if(gamestate === 0)
        {
            form = new Form();
            player = new Player();
            form.display();       
            player.getCount();
        }
    }

    play()
    {

    }
    end()
    {
        
    }
}