
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;

var hammer;
var plane;
var stone;
var rubber;

function setup() {
	createCanvas(800, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	hammer = new Hammer (200,10);
	plane = new Plane (800,700);
	stone = new Stone (200,200);
	rubber = new Rubber (770,670);

	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  hammer.display();
  plane.display();
  stone.display();
  rubber.display();
 
}



