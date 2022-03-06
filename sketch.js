var sprite

function setup() {
  createCanvas(400,400);
  sprite = createSprite(200,200,10,10)
}

function draw() 
{
  background(30);

  if(keyIsDown(RIGHT_ARROW)){
    background("blue")
  }

  if(keyIsDown(LEFT_ARROW)){
    background("red")
  }

  if(keyIsDown(UP_ARROW)){
    background("green")
  }

  if(keyIsDown(DOWN_ARROW)){
    background("orange")
  }

  

  drawSprites()
}




