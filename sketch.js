var iss , spacecraft, hasDocked = false;
var issImage, spaceCraft1Image, spaceCraft2Image,spaceCraft3Image,spaceCraft4Image;
var backgroundImg ; 

function preload () {
issImage = loadImage ("iss.png")
backgroundImg = loadImage("spacebg.jpg")
spaceCraft1Image = loadImage("spacecraft1.png")
spaceCraft2Image = loadImage("spacecraft2.png")
spaceCraft3Image = loadImage("spacecraft3.png")
spaceCraft4Image = loadImage("spacecraft4.png")

}


function setup() {
  createCanvas(600,350);

  iss=createSprite(330,130);
  iss.addImage(issImage);
  iss.scale = 0.5;

  spacecraft = createSprite(285,300);
  spacecraft.addImage(spaceCraft1Image);
  spacecraft.scale = 0.15;
}

function draw() {
  background(backgroundImg);  


  if(!hasDocked){
spacecraft.x = spacecraft.x + random(-1,1);


if(keyDown("UP_ARROW")){
  spacecraft.y = spacecraft.y-2;
}
if(keyDown("LEFT_ARROW")){
  spacecraft.addImage(spaceCraft4Image);
  spacecraft.x = spacecraft.x-2;
}
if(keyDown("RIGHT_ARROW")){
  spacecraft.addImage(spaceCraft3Image);
  spacecraft.x = spacecraft.x+2;
}
if(keyDown("DOWN_ARROW")){
  spacecraft.addImage(spaceCraft2Image);
  spacecraft.y = spacecraft.y+2;
}


  }

  if(spacecraft.y <= (iss.y+70) && spacecraft.x <= (iss.x-10)){
    hasDocked = true;
    textSize(25);
    fill("white")
    text("Docking Successful!", 200, 300);
  }





  drawSprites();
}