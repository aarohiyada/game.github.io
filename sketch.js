var box;

function setup() {
  createCanvas(400,400);
 var box=createSprite(200,200,50,50);
box.shapeColor="red";
}

function draw() 
{
   background("green");
if(keyIsDown(RIGHT_ARROW)){
  box.position.x=box.position.x+5;
  box.shapeColor="blue";
}
 
if(keyIsDown(LEFT_ARROW)){
  box.position.x=box.position.x-5;
  box.shapeColor="yellow";
}

if(keyIsDown(DOWN_ARROW)){
  box.position.y=box.position.y+5;
  box.shapeColor="pink";
}

if(keyIsDown(UP_ARROW)){
  box.position.y=box.position.y-5;
  box.shapeColor="black";
}
  drawSprites();




}