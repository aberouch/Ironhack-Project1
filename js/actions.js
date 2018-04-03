Actions = function (game){
  this.game = game;
  this.callback = "" ;
  this.subs = "";
  this.prepareToHideFront = false;
  
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
  this.game.foregroundElements = true;
  this.game.actions.prepareToHideFront = false;

  this.game.hero.showHero();
  this.game.background.currentBackground = this.game.background.previousBackground;
  this.game.background.img.src = this.game.background.currentBackground;
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


// Microwave
Actions.prototype.scene0Microwave = function(){
  this.game.currentScene = 1;
  //this.game.zones.renderAll();
  this.game.actions.callback = "this.game.background.changeBackground(02);"
  this.game.actions.prepareToHideFront = true;
  this.game.hero.walking = true; 
  this.game.hero.move();
  this.game.actions.updateSubtitles =
    "document.getElementById(\"subtitles\").innerText =\"Una maravilla de la tecnología. Consigue calentar los bordes de tu plato dejando el centro congelado.\"";
}

// Popcorn Bowl
Actions.prototype.scene0Bowl = function(){
  this.game.currentScene = 1;
  //this.game.zones.renderAll();
  this.game.actions.callback = "this.game.background.changeBackground(03);"
  this.game.actions.prepareToHideFront = true;
  this.game.hero.walking = true; 
  this.game.hero.move();
  this.game.actions.updateSubtitles =
    "document.getElementById(\"subtitles\").innerHTML =\"¿Maíz reseco? <br>Mañana tengo que hacer la compra sin falta...\"";
}

// Popcorn Bowl without kernels
Actions.prototype.scene0Maze = function(){
  console.log("yep")
  this.game.currentScene = 1;
  this.game.items.addItem('corn');
  say("No me lo pienso comer en este estado.<br>Has cogido el <b class=\"item\">maíz duro</b>");
  this.game.background.changeBackground(04);
  this.game.background.previousBackground = "images/scene00.png"; 
  this.game.background.draw();
  
}

// WINDOW
Actions.prototype.scene0Window = function(){
  this.game.hero.walking = true; 
  this.game.hero.move();
  this.game.actions.updateSubtitles =
    "document.getElementById(\"subtitles\").innerText =\"Por fin ha parado la lluvia... ¿Dónde andará Flynn?\"";
}

Actions.prototype.scene0Door = function(){
  this.game.hero.walking = true; 
  this.game.hero.move();
  this.game.actions.updateSubtitles =
    "document.getElementById(\"subtitles\").innerText =\"¿Se habrá llevado Flynn las llaves otra vez?\"";
}


function say(string){
  document.getElementById("subtitles").innerHTML = string;
}