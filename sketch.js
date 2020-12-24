
var monkey , monkey_running
var banana ,bananaImage, obstacle, obstacleImage
var foodGroup, obstacleGroup
var score
var ground
var survivalTime=0

function preload(){
  
  
  monkey_running =            loadAnimation("sprite_0.png","sprite_1.png","sprite_2.png","sprite_3.png","sprite_4.png","sprite_5.png","sprite_6.png","sprite_7.png","sprite_8.png")
  
  bananaImage = loadImage("banana.png");
  obstacleImage = loadImage("obstacle.png");
 
}



function setup() {
  createCanvas(600,200)
  
  monkey=createSprite(30,150,10,50)
  monkey.addAnimation("running",monkey_running)
  monkey.scale=0.1
  
  ground=createSprite(0,185,1200,10)
  ground.velocityX=-4
  ground.shapeColor="brown"
  ground.x=ground.width/2
  
  foodGroup = createGroup()
  obstacleGroup=createGroup()
 
}


function draw() {
  background("skyblue")
  
  if(keyDown("space")) {
     monkey.velocityY = -10;
    }
  
  monkey.velocityY = monkey.velocityY + 0.8
  
  monkey.collide(ground)
  
  if (ground.x < 0){
    ground.x = ground.width/2;
  }
  
  if(foodGroup.isTouching(monkey)){
    survivalTime=survivalTime+2
    foodGroup.destroyEach();
  }
  
  switch(survivalTime){
    case 10:monkey.scale=0.3
      break;
    case 20:monkey.scale=0.5
      break;
    case 30:monkey.scale=0.7
      break;
    case 40:monkey.scale=0.9
      break;
    default: break;
  }
  
  food()
  Obstacles()
  drawSprites()
  stroke("white")
  textSize(16)
  fill("white")
  text("Survival Time: "+survivalTime,450,30)

}

function food(){
  if (World.frameCount%80===0) {
    banana=createSprite(600,50,20,20)
    banana.addImage(bananaImage)
    banana.scale=0.1
    banana.velocityX=-5
    banana.lifetime=200
    foodGroup.add(banana)
  }
}

function Obstacles(){
 if (frameCount % 200 === 0){
   obstacle = createSprite(550,143,10,40);
   obstacle.addImage(obstacleImage)
   obstacle.scale=0.2
   obstacleGroup.add(obstacle)
   obstacle.lifetime=200
   obstacle.velocityX=-5
  }
}

function reset(){
  obstaclesGroup.destroyEach()
  cloudsGroup.destroyEach()

  score=0
}




