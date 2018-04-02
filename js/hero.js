Hero = function (game) {

this.game = game;

this.img = new Image();
this.img.src = "images/walk.png";
this.img.frames = 16;
this.img.frameIndex = 0;
this.width = 4080;
this.singleWidth = 240;
this.singleHeight = 310;
this.height = 310;


this.direction = 0; // 0 is <- Left |||    1 is Right ->
this.walking = false; 

this.x = 900;
this.y = 330;



}

Hero.prototype.draw = function() {
  this.game.ctx.drawImage(this.img,
  // Crop X                               Crop Y
  this.singleWidth*this.img.frameIndex,   this.singleHeight * this.direction,  
  // Crop width                           Crop Height
  this.singleWidth,                       this.singleHeight,
  // X on canvas                          Y on canvas
  this.x,                                 this.y,
  // Scaled width                         Scaled height 
  this.singleWidth*0.6,                   this.singleHeight*0.6
  );
 }


Hero.prototype.move = function(mouseX) {
  
  // Set direction where the hero is facing
  if(this.x < mouseX){this.direction = 1;}
  else{this.direction = 0;}

  // Speed and walk action
  {
    this.x -= 7;
    this.game.hero.walk();
  }
  

  
  if (this.x <= 220){
    console.log("stopping");
    this.stopWalk();
  }
}
    
  
Hero.prototype.walk = function () {
  this.img.frameIndex = this.game.frameCounter; 
}

Hero.prototype.stopWalk = function (moveInterval) {
  console.log("stopping");
  this.walking = false;
  this.img.frameIndex = 16;
}

