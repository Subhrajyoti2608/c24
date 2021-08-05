
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var ball;
var ground;
var leftSide;
var rightSide;

function preload()
{
	
}

function setup() {
	createCanvas(1000,600);
    var option={
		isStatic:false,
		restitution:0.3,
	    friction:0,
		density:1.2,
	}

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.


	Engine.run(engine);
    ground= new Ground(200,560,1600,20)
    leftSide = new Ground(700,495,22,110)
	rightSide = new Ground(800,495,22,110)

	ball = Bodies.circle(100,200,20,option)
	World.add(world,ball)

	

	rectMode(CENTER);
	ellipseMode(RADIUS);
}


function draw() {
 
  background(51);
  Engine.update(engine);
  ellipse(ball.position.x,ball.position.y,20)

  ground.show()
  leftSide.show()
  rightSide.show()
  
  
  drawSprites();
 
}


function keyPressed(){
if (keyCode === UP_ARROW) {
	Matter.Body.applyForce(ball,{x:0,y:0},{x:0,y:-0.05})	
}
}
