Zones = function (game) {
  this.game = game;


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
    },

    {
      id: "fridge",
      scene: 0,
      startX: 468,
      endX: 585,
      startY: 327,
      endY: 504,
      color: "yellow",
      action: this.game.actions.scene0Fridge,
    },
  ]
}

/**
 * DRAWING FUNCTIONS
 * drawZone(): draws a rectangle from the zones starting and ending points
 * Also, it can take a color parameter
 * renderAll(): draws all the elements in zoneLise[]
 */

Zones.prototype.drawZone = function (startX, endX, startY, endY, color) {

  this.game.ctx.fillStyle = color;
  this.game.ctx.fillRect(startX, startY, endX - startX, endY - startY)
}

// Renders all the zones in the list
Zones.prototype.renderAll = function () {
  var items = this.zoneList.length;

  for (let i = 0; i < items; i++) {
    this.drawZone(
      this.zoneList[i].startX,
      this.zoneList[i].endX,
      this.zoneList[i].startY,
      this.zoneList[i].endY,
      this.zoneList[i].color
    )
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

  console.log("Cursor X: " + myMouseX + " || Y: " + myMouseY);

  for (let i = 0; i < this.zoneList.length; i++) {
    // Click conditions
    if (myMouseX >= this.zoneList[i].startX &&
      myMouseX <= this.zoneList[i].endX &&
      myMouseY >= this.zoneList[i].startY &&
      myMouseY <= this.zoneList[i].endY
    )
    // Trigger when element clicked
    {
   
    //this.game.hero.walk(myMouseX);
    this.zoneList[i].action.bind(this).call();
   
    }
  }
}