var name, boy, girl, boyImg, girlImg;
var gameState=0;
var form;
var girlA, boyA, girlAnimation, boyAnimation;


function preload(){
  boyImg=loadImage("BoySprite.png");
  girlImg=loadImage("GirlSprite.png");
  girlAnimation=loadAnimation("GirlSprite2.png","GirlSprite3.png");
  boyAnimation=loadAnimation("BoySprite2.png","BoySprite3.png");
}
function setup() {
  createCanvas(displayWidth-50,displayHeight-150);
  form=new Form();

  boyA=createSprite(displayWidth/4,displayHeight/2-200,50,100);
  boyA.addAnimation("walking",boyAnimation);

  

  boyA.visible=false;
  //girlA.visible=false;
}


function draw() {
  background(255);
  console.log(gameState);
  if(gameState===0){
    form.display();
  }
  if(gameState===1){
    boy=createSprite(displayWidth/2-300,displayHeight/2,50,50);
    girl=createSprite(displayWidth-400,displayHeight/2,50,50);
    textSize(20);
    fill("black");
    text("Choose your character. ",displayWidth/2-110,displayHeight/2);
    boy.addImage(boyImg);
    girl.addImage(girlImg);
     if(mousePressedOver(girl)){
      girlA=createSprite(displayWidth/4,displayHeight/2-200,50,100);
      girlA.addAnimation("walking",girlAnimation);
     // girlA.visible=true;
     boy.destroy();
     girl.destroy();
      gameState=2;
      console.log("girl");
    }
    if(mousePressedOver(boy)){
      boyA=createSprite(displayWidth/4,displayHeight/2-200,50,100);
      boyA.addAnimation("walking",boyAnimation);
     // girlA.visible=true;
     boy.destroy();
     girl.destroy();
      gameState=2;
      console.log("girl");
    }
  }
  if(gameState===2){
    form.hide();
   
    //boy.destroy();
    //girl.destroy();
    background(255);
    
  }
  drawSprites(); 

}

