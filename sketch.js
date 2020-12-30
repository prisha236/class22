const MEngine = Matter.Engine;
const MBodies = Matter.Bodies;
const MWorld = Matter.World;
var myEngine; 
var myWorld;
var ball;
var ground;


function setup() {
  createCanvas(800,400);
  //createSprite(400, 200, 50, 50);
  myEngine = MEngine.create();
  myWorld = myEngine.world;
  var prop1={
  isStatic:false,
  restitution:1,
  density:3
  };
  ball=MBodies.circle(100,100,10,prop1);
  MWorld.add(myWorld,ball);
  var prop={
    isStatic: true
  };
  ground=MBodies.rectangle(400,380,800,20,prop);
  MWorld.add(myWorld,ground);
  
}

function draw() {
  background(255,255,255);  
  MEngine.update(myEngine);
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,10,10);
  //drawSprites();
  rectMode(CENTER);
  rect(ground.position.x,ground.position.y,800,20)
}