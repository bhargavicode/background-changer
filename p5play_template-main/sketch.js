var Box
function setup() {
  createCanvas(400,400);
  Box=createSprite(200,200,400,400)
}

function draw() 
{
  background(30);
if(keyIsDown(RIGHT_ARROW)){
  Box.shapeColor="blue"
}

if(keyIsDown(LEFT_ARROW)){
  Box.shapeColor="green"
}

if(keyIsDown(UP_ARROW)){
  Box.shapeColor="aquamarine"
}

if(keyIsDown(DOWN_ARROW)){
  Box.shapeColor="yellow"
}
drawSprites()
}




