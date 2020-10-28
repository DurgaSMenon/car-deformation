
const Engine = Matter.Engine
const World = Matter.World;
const Bodies = Matter.Bodies;

var engine;
var world,ground;
var ball;

function setup() {
  createCanvas(400,400);

 engine=Engine.create();
 world=engine.world;
  var options = {
    isStatic:true
  }
 
  ground = Bodies.rectangle(200,380,400,10,options);
  World.add(world,ground);

   var option2 = {
     restitution:0.8
   }
  ball = Bodies.circle(100,250,30,option2);
  World.add(world,ball);
  
}

function draw() {
  background(0);  
  Engine.update(engine)
  var pos=ground.position;
  rectMode(CENTER);
  rect(pos.x,pos.y,400,10); 

  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,30,30);
  
}