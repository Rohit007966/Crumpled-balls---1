
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



function preload()
{
	
}

function setup() {
	createCanvas(1400, 800);

	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.
	groundSprite=createSprite(400,465,2000,10);
	groundSprite.shapeColor=color(255)



	boxSide=createSprite(1150,450,200,20);
	boxSide.shapeColor=color("red")
  
  
	boxSide2=createSprite(1250,410,20,100);
	boxSide2.shapeColor=color("red")
  
  
	boxSide3=createSprite(1050,410,20,100);
	boxSide3.shapeColor=color("red")
  
	paperball=createSprite(100,440,35,35);
    paperball.velocityX=05;


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  
  paperball.collide(boxSide);
  paperball.collide(boxSide2);
  paperball.collide(boxSide3);
 
  if(keyDown("space") && paperball.y >= 139) {
	paperball.velocityY = -14;
  }

  paperball.velocityY = paperball.velocityY + 0.8
   
  paperball.collide(groundSprite); 
 
 
  drawSprites();
 
}



