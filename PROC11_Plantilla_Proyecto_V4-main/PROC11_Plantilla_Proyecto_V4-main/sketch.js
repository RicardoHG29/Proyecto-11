var seaImg,sea;
var shipImg, ship ;
function preload(){
  seaImg = loadImage("sea.png");
  shipImg = loadAnimation("ship-1.png","ship-2.png","ship-3.png","ship-4.png");

}

function setup(){
  createCanvas(1000,1000);
  sea = createSprite(500, 300, 800, 800); 
  sea.addAnimation("seaAnimation", seaImg);
  sea.velocityx=-5
  sea.scale=0.2;

  ship = createSprite(500,350,200,200)
  ship.addAnimation("shipAnimation",shipImg)
  ship.scale=0.15;
  ship.velocityx=-4;

}

function draw() {
  background("0");
 sea.velocityx=-4;
 if (sea.x <0) { sea.x=sea.width/2; }
 drawSprites();
 }