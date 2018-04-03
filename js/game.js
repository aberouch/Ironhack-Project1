function Game(canvasId) {
  this.canvas = document.getElementById(canvasId);
  this.ctx = this.canvas.getContext("2d");
  this.width = 1000;
  this.height = 563;
  this.offsetX = parseInt(this.canvas.offsetLeft);
  this.offsetY = parseInt(this.canvas.offsetTop);
  this.frameCounter = 0;
  this.currentScene = 0
  this.previousScene = 0;
 
  this.reset();
  this.start();
  
}


Game.prototype.reset = function() {
  this.background = new Background(this);
  this.foreground = new Foreground(this);
  this.actions = new Actions(this);
  this.items = new Items(this);
  this.hero = new Hero(this);
  this.zones = new Zones(this);
  this.setListener();

};


Game.prototype.start = function() { 
  
  
  var interval = setInterval( function(){
    this.clear();
    this.draw(); 

    if (this.hero.walking == true){
      this.hero.move(200);
    }

    // This is used to sync the hero (15fps)
    if (this.frameCounter <= this.hero.img.frames - 2){
      this.frameCounter++;
    }
    else {this.frameCounter = 0;}
  }.bind(this),100)
   
}

Game.prototype.setListener = function() {
  this.canvas.addEventListener('click', function(event){
  this.zones.checkHit(event.clientX , event.clientY);  
  }.bind(this))
}


Game.prototype.clear = function() {
  this.ctx.clearRect(0, 0, this.canvas.width, this.canvas.height);
};

Game.prototype.draw = function() {
  this.background.draw();
  this.zones.renderAll();
  this.hero.draw();
  this.foreground.draw();
}