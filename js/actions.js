  /**
   * ACTIONS CONSTRUCTOR
   * To - do 
   */



  Actions = function (game) {
    this.game = game;
    this.callback = "";
    this.subs = "";
    this.prepareToHideFront = false;
  }


  Actions.prototype.reset = function () {
    this.callback = "";
    this.subs = "";
  }

  // Light switch action (has 2 setting depending on LightsOn)
  Actions.prototype.scene0Lightswitch = function () {
    if (this.game.background.lightsOn === false) {
      this.game.actions.callback = "this.game.background.changeBackground(01);";
      this.game.actions.updateSubtitles =
        "document.getElementById(\"subtitles\").innerHTML = \"¡Hágase la luz! Y la luz se hizo...\"";
      this.game.background.lightsOn = true;
    } else {
      // Action when done walking
      this.game.actions.callback =
        "this.game.background.changeBackground(00);";

      // Subtitles when done walking
      this.game.actions.updateSubtitles =
        "document.getElementById(\"subtitles\").innerHTML = \"Me encanta este ambiente...\"";
      this.game.background.lightsOn = false;
    }

    this.game.hero.move();
  }


  /**
   * BACK BUTTON
   * Save which was the previous scene and restores the main scene
   * Restores foreground elements
   * Restores hero visibility
   */

  Actions.prototype.back = function () {

    // Switch scenes
    this.game.currentScene = this.game.previousScene;
    this.game.foregroundElements = true;
    this.game.actions.prepareToHideFront = false;
    this.game.hero.showHero();
    this.game.background.currentBackground = this.game.background.previousBackground;
    this.game.background.img.src = this.game.background.currentBackground;
    this.game.background.draw();
    say("");
  }


   /**
   * WALK ACTIONS
   * Change current scene to activate click zones
   * Sets up back button to activate click zone
   * Prepares actions to launch after the hero moves (callback)
   * Moves the hero
   * Updates the subtitles after the hero moves.
   */

  // Walk: Approaching the microwave
  Actions.prototype.scene2Microwave = function () {
    if(this.game.items.inventory[2].owned === true){
        say("Suficiente radiación por hoy.")
    }
    else{
      this.game.currentScene = 2;
      this.game.zones.zoneList[0].scene = this.game.currentScene;
      this.game.actions.callback = "this.game.background.changeBackground(05);"
      this.game.actions.prepareToHideFront = true;
      this.game.hero.move();
      this.game.actions.updateSubtitles =
      "document.getElementById(\"subtitles\").innerHTML =\"Una maravilla de la tecnología.<br>Consigue calentar los bordes de tu plato dejando el centro congelado.\"";
    }
  }


    /**
   * INTERACTION ACTIONS
   * Set current scene to activate click zones
   * Sets up back button to activate click zone
   * Prepares background to come back to main scene
   * Draws the new scene
   */


  // Interaction: Opening the microwave
  Actions.prototype.scene2MicrowaveOpen = function () {
    this.game.currentScene = 3;
    this.game.zones.zoneList[0].scene = this.game.currentScene;
    this.game.background.changeBackground(06);
    this.game.background.previousBackground = "images/scene00.png";
    this.game.background.draw();
    say("¡Y sin salpicaduras! <br>Listo para usar...");
  }

  // Interaction: Inserting item into the microwave
  Actions.prototype.scene2MicrowaveInsert = function () {
    if(this.game.items.inventory[0].owned === true && $("#corn").hasClass("selected")){
      
      say("<i>Pop! ¡Pop pop pop!</i><br>Has conseguido un <b class=\"item\">puñado de palomitas</b>");
      this.game.background.changeBackground(10);
      this.game.items.removeItem('#corn');
      this.game.items.addItem('#pop');
    }
    else{
      say("No. No voy a meter mi mano ahí dentro.");
      this.game.currentScene = 3;
      this.game.background.changeBackground(06);
      this.game.background.draw();
    }
    this.game.background.previousBackground = "images/scene00.png";
  }

  // Walk: Fridge picture

  Actions.prototype.scene0Fridge = function () {
    this.game.currentScene = 0;
    this.game.zones.zoneList[0].scene = this.game.currentScene;
    this.game.actions.callback = "this.game.background.changeBackground(11);"
    this.game.actions.prepareToHideFront = true;
    this.game.hero.move();
    this.game.actions.updateSubtitles =
      "document.getElementById(\"subtitles\").innerText =\"Bonita foto!\"";
  }

  // Walk: Popcorn Bowl
  Actions.prototype.scene0Bowl = function () {
    if (this.game.items.inventory[0].owned === true){
      this.game.hero.move();
      this.game.actions.updateSubtitles =
      "document.getElementById(\"subtitles\").innerHTML =\"Creo que solo quedan migas en este bol\"";
    } 
    else{
    this.game.currentScene = 1;
    this.game.zones.zoneList[0].scene = this.game.currentScene;
    this.game.actions.callback = "this.game.background.changeBackground(03);"
    this.game.actions.prepareToHideFront = true;
    this.game.hero.move();
    this.game.actions.updateSubtitles =
      "document.getElementById(\"subtitles\").innerHTML =\"¿Maíz reseco? <br>Mañana tengo que hacer la compra sin falta...\"";
    }
  }

  // Interaction:  Pick item from bowl
  Actions.prototype.scene0Maze = function () {
    this.game.currentScene = 1;
    this.game.zones.zoneList[0].scene = this.game.currentScene;
    this.game.items.addItem('#corn');
    this.game.background.changeBackground(04);
    this.game.background.previousBackground = "images/scene00.png";
    this.game.background.draw();
    say("No me lo pienso comer en este estado.<br>Has cogido unos <b class=\"item\">granos de maíz</b>");

  }

  // Walk: Window view
  Actions.prototype.scene0Window = function () {
    this.game.hero.move();
    this.game.actions.updateSubtitles =
      "document.getElementById(\"subtitles\").innerHTML =\"Por fin ha parado la lluvia... ¿Dónde andará Flynn?\"";
  }

  // Walk: Door
  Actions.prototype.scene0Door = function () {
    this.game.hero.move();
    this.game.actions.updateSubtitles =
      "document.getElementById(\"subtitles\").innerHTML =\"¿Se habrá llevado Flynn las llaves otra vez?\"";
  }

  // Walk: Approaching the cupboard
  Actions.prototype.scene4cupboard = function () {
    if (this.game.items.inventory[1].owned === true){
      this.game.hero.move();
      this.game.actions.updateSubtitles =
      "document.getElementById(\"subtitles\").innerHTML =\"Solo quedan tazas...<br> Claramente lo único brillante aquí es el bol esmaltado.\"";
    }
    else{
    this.game.currentScene = 4;
    this.game.zones.zoneList[0].scene = this.game.currentScene;
    this.game.actions.callback = "this.game.background.changeBackground(07);"
    this.game.actions.prepareToHideFront = true;
    this.game.hero.move();
    this.game.actions.updateSubtitles =
      "document.getElementById(\"subtitles\").innerText =\"¿Quién no tiene un mueble MALM de Ikea en su casa?\"";
    }
  }


  // Interaction: Opening the cupboard
  
  Actions.prototype.scene4CupboardOpen = function () {
    this.game.currentScene = 5;
    this.game.zones.zoneList[0].scene = this.game.currentScene;
    this.game.background.changeBackground(08);
    this.game.background.previousBackground = "images/scene00.png";
    this.game.background.draw();
    say("Todo vajilla y nada para desayunar...");
  }

  // Interaction:  Pick item from cupboard
  Actions.prototype.scene4CupboardPick = function () {
    this.game.currentScene = 1;
    this.game.zones.zoneList[0].scene = this.game.currentScene;
    this.game.items.addItem('#bowl');
    this.game.background.changeBackground(09);
    this.game.background.previousBackground = "images/scene00.png";
    this.game.background.draw();
    say("El preferido de Flynn. Probablemente por el brillo de su esmalte.<br>Has cogido el <b class=\"item\">bol azul</b>");
    
  }

  Actions.prototype.scene7Birdhouse = function () {
    if(this.game.items.inventory[1].owned === true){
        say("Listo para poner el bol.")
    }
    else{
      this.game.currentScene = 7;
      this.game.zones.zoneList[0].scene = this.game.currentScene;
      this.game.actions.callback = "this.game.background.changeBackground(12);"
      this.game.actions.prepareToHideFront = true;
      this.game.hero.move();
      this.game.actions.updateSubtitles =
      "document.getElementById(\"subtitles\").innerHTML =\"Es igual que los gatos. Si no hay comida, pasa de venir...\"";
    }
  }


  function say(string) {
    document.getElementById("subtitles").innerHTML = string;
  }