var ship,ship_moving,seaImage;

function preload(){
    ship_moving = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");
    seaImage = loadImage("sea.png");
  }

  function setup(){
    createCanvas(500,500);
    sea = createSprite(100,200,30,30);
    sea.addImage("sea", seaImage);
    sea.scale=0.5;
    sea.velocityX=-4; 
    sea.addImage(seaImage)
    ship=createSprite(120,230,50,50);
  } 





  

function draw() 
{
background("skyblue");

}