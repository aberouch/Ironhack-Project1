Zones = function (game) {
  this.game = game;
  this.anchor = 0;


  /**
   * LIST OF CLICKABLE ZONES
   * A zone must include a name (id) and the (scene) in which it's used
   * Coordinates are setup as such:
   * startX and endX for the starting and ending horizontal points
   * startY and endY for the starting and ending vertical points 
   * Action is the name of the function to load on click
   */

  this.zoneList = [

    {
      id: "door",
      scene: 0,
      startX: 77,
      endX: 186,
      startY: 292,
      endY: 504,
      color: "brown",
      action: this.game.actions.scene0Door,
      back: false,
    },

    {
      id: "lightswitch",
      scene: 0,
      startX: 220,
      endX: 238,
      startY: 394,
      endY: 418,
      color: "darkblue",
      action: this.game.actions.scene0Lightswitch,
      back: false,
    },

    {
      id: "fridge",
      scene: 0,
      startX: 488,
      endX: 530,
      startY: 327,
      endY: 354,
      color: "yellow",
      action: this.game.actions.scene0Fridge,
      back: false,
    },
    {
      id: "microwave",
      scene: 0,
      startX: 341,
      endX: 398,
      startY: 395,
      endY: 428,
      color: "green",
      action: this.game.actions.scene0Microwave,
      back: true,
    },
    {
      id: "bowl",
      scene: 0,
      startX: 670,
      endX: 705,
      startY: 425,
      endY: 440,
      color: "gold",
      action: this.game.actions.scene0Bowl,
      back: true,
    },
    {
      id: "window",
      scene: 0,
      startX: 601,
      endX: 940,
      startY: 367,
      endY: 375,
      color: "aqua",
      action: this.game.actions.scene0Window,
      back: false,
    },
    {
      id: "back",
      scene: 1,
      startX: 841,
      endX: 998,
      startY: 5,
      endY: 30,
      color: "white",
      action: this.game.actions.back,
    },
    {
      id: "popcorn",
      scene: 1,
      startX: 490,
      endX: 568,
      startY: 333,
      endY: 385,
      color: "gold",
      action: this.game.actions.scene0Maze,
    },
  ]
}

/**
 * DRAWING FUNCTIONS
 * drawZone(): draws a rectangle from the zones starting and ending points
 * Also, it can take a color parameter
 * renderAll(): draws all the elements in zoneLise[]
 */
Zones.prototype.activateBack = function(newScene){
  this.zoneList[6].scene = newScene;
}

Zones.prototype.drawZone = function (startX, endX, startY, endY, color) {

  this.game.ctx.globalAlpha = 1;
  this.game.ctx.fillStyle = color;
  this.game.ctx.fillRect(startX, startY, endX - startX, endY - startY)
  this.game.ctx.globalAlpha = 1;
}

// Renders all the zones in the list
Zones.prototype.renderAll = function () {
  var items = this.zoneList.length;

  for (let i = 0; i < items; i++) {

    if (this.zoneList[i].scene === this.game.currentScene){
    this.drawZone(
      this.zoneList[i].startX,
      this.zoneList[i].endX,
      this.zoneList[i].startY,
      this.zoneList[i].endY,
      this.zoneList[i].color
    )
    }
    
  }
  
}

/**
 * COLLISION CHECK
 * checkHit(): function that goes around all the elements in the array
 * and checks if the user's click match the position of one of them.
 * Returns TRUE is there's a collision and FALSE if there isn't
 */

Zones.prototype.checkHit = function (mouseX, mouseY) {

  // Subtract offset of canvas on page to get accurate clicks

  var myMouseX = parseInt(mouseX) - this.game.offsetX;
  var myMouseY = parseInt(mouseY) - this.game.offsetY;
 

  console.log("Cursor X: " + myMouseX + " · Y: " + myMouseY);

  for (let i = 0; i < this.zoneList.length; i++) {
    // Click conditions
    if (myMouseX >= this.zoneList[i].startX &&
      myMouseX <= this.zoneList[i].endX &&
      myMouseY >= this.zoneList[i].startY &&
      myMouseY <= this.zoneList[i].endY &&
      this.zoneList[i].scene == this.game.currentScene
    )
    // Trigger when element clicked
    {
        if (Math.abs(this.game.hero.x - this.zoneList[i].endX) > Math.abs(this.game.hero.x - this.zoneList[i].startX)){
          this.anchor = (this.zoneList[i].endX + this.zoneList[i].startX)/2 -80;
        }
        else {
          this.anchor = (this.zoneList[i].endX + this.zoneList[i].startX)/2 - 20;
        }
        this.zoneList[i].action.bind(this).call(this.anchor);
        
    }
  }
}