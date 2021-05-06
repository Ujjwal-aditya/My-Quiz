var database,gamestate,playerCount;
var allPlayers,form,game,player;
function preload()
{

}

function setup()
{
  createCanvas(800,500)
  database = firebase.database();
  game = new  Game();
  game.getState();
 
}

function draw()
{
  background("blue");
  fill(0);
  game.start();
  text(mouseX+","+mouseY,100,100);
  
 

}