var bananaImage,obstacleImage,obstaclegroup,background2,background1,score,monkey,monkeyImg,gameState,PLAY = 0,END = 1,ivisibleGround, bananaGroup;
function preload(){
obstacleImage = loadImage("stone.png")
bananaImage = loadImage("banana.png")
background1  = loadImage("jungle.jpg")
  monkeyImg = loadImage("Monkey_01.png")
}
function setup() {
  gameState = PLAY
  createCanvas(400, 400);
  obstacleGroup = new Group()
  bananaGroup = new Group()
   background2 = createSprite(0,0,1,2);
  background2.scale 
  background2.addImage(background1,"jungle.jpg")
 monkey = createSprite(50,300,20,20);
  monkey.addImage(monkeyImg,"Monkey_01.png")
  monkey.scale = .1
monkey.velocityY = monkey.velocityY + 0.9
   invisibleGround = createSprite(200,310,400,10);
  invisibleGround.visible = false;
}

function draw() {

  background(220); 
  
  
  drawSprites()
   
  if(gameState == PLAY){
    monkey.collide(invisibleGround)
 
  if(keyDown("space")&& monkey.y >= 260) {
    monkey.velocityY = -15;}
  background2.velocityX = -4
  monkey.velocityY = monkey.velocityY + 0.9
    if (background2.x < 0){
    background2.x = background2.width/2;
  }
    if (bananaGroup.isTouching(monkey)){
        bananaGroup.destroyEach()}
    
  banana()
  spawnObstacles()
}
if (obstacleGroup.collide(monkey)){
gameState = END
  background2.velocityX = 0 
  monkey.velocityX = 0 
  obstacleGroup.setVelocityEach(0)
  bananaGroup.setVelocityEach(0)
}
}



function banana(){
  
  if (World.frameCount % 120 === 0){
    var banana = createSprite(400,200,10,10)
    banana.addImage(bananaImage)
    banana.velocityX = -4
    bananaGroup.add(banana)
    banana.scale = 0.05
   banana.y = random(180,200)}} 
 console.log("abc")

function spawnObstacles(){
if (World.frameCount % 160=== 0){
    var obstacle = createSprite(400,280,10,10)
   obstacle.addImage(obstacleImage)
  obstacleGroup.add(obstacle)
  obstacle.scale = .1
  obstacle.velocityX = -4
  console.log(obstacle)
    }} 