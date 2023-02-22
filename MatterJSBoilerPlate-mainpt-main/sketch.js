
const Engine = Matter.Engine;
const World = Matter.World;
const Bodies = Matter.Bodies;
const Body = Matter.Body;
var solo
function preload()
{
	
}

function setup() {
	createCanvas(1024, 728);


	engine = Engine.create();
	world = engine.world;

	//Crie os Corpos Aqui.

var plane_options={
	isStatic:true
}
var bloco_1_options={
	restitution:0.5,
	friction:0.02,
	frictionAir:0.1

}
var bloco_2_options={

	restitution:0.7	,
	friction:0.2,
	frictionAir:0.6,

}
var bloco_3_options={
	
	restitution: 0.9,
	friction: 0.1,
	frictionAir:0.1,

}
solo= Bodies.rectangle(512,727,1024,1 ,plane_options);
World.add(world,solo);
	Engine.run(engine);
  bloco_1=Bodies.circle(220,10,100,bloco_1_options);
  World.add(world,bloco_1)


  bloco_2=Bodies.rectangle(110,50,101,101 ,bloco_2_options);
  World.add(world,bloco_2)

  bloco_3=Bodies.rectangle(350,50,100,100,bloco_3_options);
  World.add(world,bloco_3)






fill("red")
}


function draw() {
  rectMode(CENTER);
  ellipseMode(RADIUS)
  background("green");
  Engine.update(engine);
  drawSprites();
rect(solo.position.x,solo.position.y,1024,1)
rect(bloco_2.position.x,bloco_2.position.y,101,101)
rect(bloco_3.position.x,bloco_3.position.y,100,100)
ellipse(bloco_1.position.x,bloco_1.position.y,100)
}



