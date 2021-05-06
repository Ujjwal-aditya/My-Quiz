class Player
{
    constructor()
    {
        this.name = null;
        this.option = null;
        this.index = 0;
    }

    update()
    {
        var playerIndex = "players/player"+this.index;
        database.ref(playerIndex).set({
            name : this.name,
           // option : this.option,
        });
    }
    updateCount(count)
    {
        
        database.ref('/').update({
            contestantCount : count
        })
    }

    getCount()
    {
        var countRef = database.ref('contestantCount');
        countRef.on("value",function(data){
            playerCount = data.val();
        });
      
    }
    static getPlayerInfo()
    {
        var playersRef = database.ref('players');
        playersRef.on("value",function(data)
        {
            allPlayers = data.val();
        })
    }
}