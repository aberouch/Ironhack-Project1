Actions = function (game){
  this.game = game;
  this.callback = "" ;
  this.subs = "";
}


Actions.prototype.reset = function() {
  this.callback = "" ;
  this.subs = "";
}



// Light switch action (has 2 setting depending on LightsOn)
Actions.prototype.scene0Lightswitch = function(){
  if(this.game.background.lightsOn === false){
    this.game.actions.callback = 
    "this.game.background.changeBackground(01);";
    this.game.actions.updateSubtitles =
    "document.getElementById(\"subtitles\").innerText = \"¡Hágase la luz! Y la luz se hizo...\"";
    this.game.background.lightsOn = true;
  }
  else {
    // Action when done walking
    this.game.actions.callback = 
    "this.game.background.changeBackground(00);";

    // Subtitles when done walking
    this.game.actions.updateSubtitles =
    "document.getElementById(\"subtitles\").innerText = \"Me encanta este ambiente...\"";
    this.game.background.lightsOn = false;
  }

  this.game.hero.walking = true; 
  this.game.hero.move();

}



// BACK BUTTON ACTION
Actions.prototype.back = function(){
    
  // Switch scenes
  this.game.currentScene = this.game.previousScene;

  this.game.background.currentBackground = this.game.background.previousBackground;
  this.game.background.img.src = this.game.background.currentBackground
  console.log(this.game.background.previousBackground);
  this.game.background.draw();
  this.game.actions.updateSubtitles =
    "document.getElementById(\"subtitles\").innerText =\"...\"";
  
}

// Fridge picture

Actions.prototype.scene0Fridge = function(){
  this.game.hero.walking = true; 
  this.game.hero.move();
  this.game.actions.updateSubtitles =
    "document.getElementById(\"subtitles\").innerText =\"Bonita foto...\"";
}


// MICROWAVE
Actions.prototype.scene0Microwave = function(){
  this.game.currentScene = 1;
  this.game.zones.renderAll();
  this.game.actions.callback = 
    "this.game.background.changeBackground(02);"
  this.game.hero.walking = true; 
  this.game.hero.move();
  this.game.actions.updateSubtitles =
    "document.getElementById(\"subtitles\").innerText =\"Una maravilla de la tecnología. Consigue calentar los contornos de tu plato dejando el centro congelado.\"";
}

Actions.prototype.scene0Door = function(){
  this.game.hero.walking = true; 
  this.game.hero.move();
  this.game.actions.updateSubtitles =
    "document.getElementById(\"subtitles\").innerText =\"¿Se habrá llevado Flan las llaves otra vez?\"";
}
