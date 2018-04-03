Items = function (game) {
var inventory;

this.game = game;
this.img = new Image();
this.x = 40;
this. y = 15;


this.inventory = [
    { name: 'corn', scene:01, owned:false, src: 'images/items/corn.png' }
  ];
}

Items.prototype.addItem = function(itemName){
  for (let i = 0; i < this.game.items.inventory.length; i++){
    if (this.game.items.inventory[i].name === itemName){
      this.game.items.inventory[i].owned = true 
    }
  }
}

Items.prototype.removeItem = function(itemName){
  for (let i = 0; i < this.game.items.inventory.length; i++){
    if (this.game.items.inventory[i].name === itemName){
      this.game.items.inventory[i].owned = false 
    }
  }
}

Items.prototype.draw = function(){
  for (let i = 0; i < this.inventory.length; i++){
    if (this.inventory[i].owned === true){
      this.img.src = this.inventory[i].src;
      this.game.ctx.drawImage(this.img, this.x,this.y);
    }
  }
}