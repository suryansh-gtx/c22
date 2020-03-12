const Engine= Matter.Engine;

const World= Matter.World;

const Bodies= Matter.Bodies;

var engine,world;

var object;

function setup() {
  createCanvas(400,400);
  engine = Engine.create();
  world= engine.World; 
  object=Bodies.rectangle(200,100,50,50);
  World.add(world,object);
  //createSprite(200, 200, 50, 50);
console.log(object.position.x);
}

function draw() {
  background(255,255,255);  
Engine.update(engine);
  //rectMode (CENTER);

  //rect (200,200,50,50);
  drawSprites();
}