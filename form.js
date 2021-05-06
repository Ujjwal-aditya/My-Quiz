class Form
{
    constructor()
    {
        this.input = createInput("name");
        /*if(gamestate==1)
        {
            this.inputOption = createInput("option number");
            this.buttonAnswer = createElement("answer");
        }*/
        this.button = createButton("start the quiz");
        this.greetings = createElement('h2');
    }
    display()
    {
        
        var title = createElement('h1');
        title.html("MY QUIZ");
        title.position(width/2-30,50);
        /*if(gamestate==1)
        {
        this.inputOption.position(400,400);
        this.buttonAnswer.position(300,500);
        }*/
        this.button.position(300,450);
        
        form.input.position(200,400);
        
        this.button.mousePressed(()=>
        {
            this.input.hide();
            this.button.hide();            
           
            playerCount +=1;
           
            player.index = playerCount;
            player.name = this.input.value();
            player.updateCount(playerCount);
            player.update();
            this.greetings.html("WELCOME  "+player.name);
            this.greetings.position(300,200);
          
        });
    }
    hideStart()
    {
        this.input.hide();
        this.button.hide();
        this.greetings.hide();
    }
    hidePlay()
    {
        this.inputOption.hide();
        this.buttonAnswer.hide();
    }
}