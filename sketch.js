
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
const Render = Matter.Render;

var bin1,bin2,bin3;
var ground,paper;
function preload()
{
	
}

function setup() {
	createCanvas(1600, 700);


	engine = Engine.create();
	world = engine.world;

	//Create the Bodies Here.

bin1 = new Dustbin(1300,665,170,20);
bin2 = new Dustbin(1205,615,20,120);
bin3 = new Dustbin(1395,615,20,120);	

ground = new Ground(800,685,1600,20)

paper = new Paper(200,400)

/*var render = Render.create({
	element: document.body,
	engine: engine,
	options: {
	  width: 1600,
	  height: 700,
	  wireframes: false
	}
  });

  //Engine.run(engine);*/
}


function draw() {
  //rectMode(CENTER);
  background("lightskyblue");
  Engine.update(engine);
  bin1.display();
  bin2.display();
  bin3.display();

  ground.display();
  paper.display();

 stroke("yellow")
  fill("black")
  textSize(30);
  text("use ARROW KEYS to make the BALL move",400,100)
 
}
function keyPressed() {
	if (keyCode === UP_ARROW) {

	  Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
  
	}
	if (keyCode === LEFT_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:-85,y:-85});
	
	  }
	  if (keyCode === RIGHT_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:85,y:-85});
	
	  }
	  if (keyCode === DOWN_ARROW) {

		Matter.Body.applyForce(paper.body,paper.body.position,{x:45,y:45});
	
	  }
}




