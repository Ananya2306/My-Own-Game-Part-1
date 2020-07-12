var tank ,tankUp,tankDown, tankLeft, tankRight;
var canvas;
function preload(){

  tankUp = loadImage("images/tankGU.png");
  tankDown = loadImage("imagestankGD.png");
  tankLeft = loadImage("images/tankGL.png");
  tankRight = loadImage("images/tankGR.png");

}

function setup() {
   canvas = createCanvas(displayWidth,displayHeight);
  tank = createSprite(680, 300, 50, 50);
  //tank.shapeColor = "red";
  tank.addImage(tankRight);
}

function draw() {
  background(0);
  textStyle("bold");
  textSize(24);
text(" ~ ~ ~ ~ Press Arrow Keys to Move the Tank ~ ~ ~ ~ ",700,100) 
  if(keyDown(UP_ARROW)){
    tank.y-=5;
    tank.addImage(tankUp);
 }
 if(keyDown(DOWN_ARROW)){
  tank.y+=5;
  tank.addImage(tankDown);
}
if(keyDown(RIGHT_ARROW)){
  tank.x+=5;
  tank.addImage(tankRight);
}
if(keyDown(LEFT_ARROW)){
  tank.x-=5;
  tank.addImage(tankLeft);
}

console.log(tank.y);
  drawSprites();
}