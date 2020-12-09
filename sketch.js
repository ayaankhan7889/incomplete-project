
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;



var redbox1,redbox2,redbox3;
var paper,Ground
function setup() {
	createCanvas(800, 700);

	redbox1 = createSprite(width/2,650,200,20)
    redbox1.shapeColor = "red"
    
	redbox2 = createSprite(500,565,20,200)
    redbox2.shapeColor = "red"

	redbox3 = createSprite(300,565,20,200)
    redbox3.shapeColor = "red"






	engine = Engine.create();
	world = engine.world;

																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																																									
	 paper = new Paper1(200,20,40);

	 Ground = new ground(400,690,800,20)
	
	
	


	Engine.run(engine);
  
}


function draw() {
  rectMode(CENTER);
  background(0);
  paper.display();
 Ground.display();

  drawSprites();
 
}
function keyPressed(){
	if(keyCode === UP_ARROW){

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	}
}


