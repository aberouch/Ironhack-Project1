Hero = function (game) {

this.game = game;

this.img = new Image();
this.img.src = "images/walk.png";
this.img.frames = 16;
this.img.frameIndex = 16;
this.width = 4080;
this.singleWidth = 240;
this.singleHeight = 310;
this.height = 310;

// 0 is <- Left |||    1 is Right ->
this.direction = 0; 
this.walking = false; 
this.speed = 7;

// Initial position
this.x = 860;
this.y = 328;
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


Hero.prototype.move = function() {
  
  // Set direction where the hero is facing
  // Left or right depends on this checkpoint:
  
  if(this.x <= this.game.zones.anchor){
    //console.log("Anchor is: " + this.game.zones.anchor)
   // console.log("Moving -->")
    this.direction = 1;
    this.x += 7;
    }
  else{
    //console.log("Moving <--")
    //console.log("Anchor is: " + this.game.zones.anchor)
      this.direction = 0;
      this.x -= 7;
      }
  
  // Start animation    
  this.game.hero.walk();
  
  if (Math.abs(this.x - this.game.zones.anchor) < 4){
    this.stopWalk();
  }
}
    
  
Hero.prototype.walk = function () {
  this.img.frameIndex = this.game.frameCounter; 
}

Hero.prototype.stopWalk = function (moveInterval) {
  console.log("stopping...");
  this.walking = false;
  if (this.game.actions.prepareToHideFront === true){
      this.game.hero.hideHero();
      this.game.foregroundElements = false;
  }
  else {
    this.game.hero.showHero();
  }
  eval(this.game.actions.callback);
  eval(this.game.actions.updateSubtitles);
  this.game.actions.reset();

}

Hero.prototype.hideHero = function() {
  this.img.frameIndex = 17;
}

Hero.prototype.showHero = function() {
  this.img.frameIndex = 16;
}

