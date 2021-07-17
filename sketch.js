var back
var snow
var snow2
var snow3
var snow4
var stop

function setup() {
  
  createCanvas(windowWidth,windowHeight);
  back = createSprite(windowWidth/2,windowHeight/2)
  snow = createSprite(random(200,1000))
  snow2 = createSprite(random(200,1000))
  snow3 = createSprite(random(200,1000))
  snow4 = createSprite(random(200,1000))
  stop = createSprite(700,650,1300,10)
  
}

function preload(){

  back1 = loadImage("snow3.jpg")
  snow1 = loadImage("snow4.webp") 

}

function draw() {
  
  background("white"); 

  back.addImage(back1)
  snow.addImage(snow1)
  snow2.addImage(snow1)
  snow3.addImage(snow1)
  snow4.addImage(snow1)

  //scale
  snow.scale = 0.3
  snow2.scale = 0.3
  snow3.scale = 0.3
  snow4.scale = 0.3

  //velocity
  snow.velocityY = 5
  snow2.velocityY = 5
  snow3.velocityY = 5
  snow4.velocityY = 5

  //stop
  stop.shapeColor = "white"
  if(snow.isTouching(stop)){

    snow.y = 1

  }

  if(snow2.isTouching(stop)){

    snow2.y = 1

  }

  if(snow3.isTouching(stop)){

    snow3.y = 1

  }

  if(snow4.isTouching(stop)){

    snow4.y = 1

  }

  drawSprites();
}