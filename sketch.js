const Engine=Matter.Engine;
const World=Matter.World;
const Bodies=Matter.Bodies;
var engine,world,ground,box;

function setup() {
  createCanvas(400,400);
 engine= Engine.create();
 world= engine.world;
 var op={isStatic: true};
 ground= Bodies.rectangle(200,380,400,10,op);
 World.add(world,ground);
 console.log(ground);
 var opt={restitution:1};
 ball=Bodies.circle(200,10,20,opt)
 World.add(world,ball);

}

function draw() {
  background(0);
  Engine.update(engine)
  rectMode(CENTER);

  rect(ground.position.x,ground.position.y,400,10)
  ellipseMode(RADIUS);
  ellipse(ball.position.x,ball.position.y,20)
  drawSprites();


}


