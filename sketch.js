const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const matter = Matter.Bodies;
const Body = Matter.Body;
var paperball;
var dustbin;
var ground;

function preload()
{
	
}

function setup() {
	var canvas = createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;

	paperball = new Paper(100,550);

	dustbin = new Dustbin(550,630,130,150);

	ground = new Ground(400,690,800,20);


}


function draw() {
  rectMode(CENTER);
  Engine.update(engine);
  background(200);
  
  paperball.display();
  ground.display();
  dustbin.display();
  

  keyPressed();
  drawSprites();
}

function keyPressed(){
	if(keyCode===UP_ARROW){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:5,y:-5});
	}
	
}



