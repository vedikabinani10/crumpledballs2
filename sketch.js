const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var engine,world;
var paperball;
var dustbin;
var ground;

function setup() {
	createCanvas(800, 700);
	
	engine = Engine.create();
	world = engine.world;
	dustbin = new Dustbin(550,630,130,150);
	paperball = new Paper(100,550);
	ground = new Ground(400,690,800,20);
}


function draw() {
  Engine.update(engine);
  background(200);
  
  paperball.display();
  ground.display();
  dustbin.display();
}

function keyPressed(){
	if(keyCode===38){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:200,y:-100});
	}
	if(keyCode===40){
		Matter.Body.applyForce(paperball.body,paperball.body.position,{x:0,y:500});
	}
	
}



