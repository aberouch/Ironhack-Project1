Foreground = function (game) {

  
this.game = game;
this.img = new Image();

this.img.src = "images/scene00_front.png";
this.x = 0;
this. y = 0;

}


Foreground.prototype.changeBackground = function(id) {
  var sceneId = id;
  var backgroundCollection= [
    {
      id: "00",
      name: "living room dark",
      src: "images/scene00.png"
    },
    {
      id: "01",
      name: "living room light",
      src: "images/scene01.png"
    }
  ];

  this.img.src  = backgroundCollection[sceneId].src;
}


Foreground.prototype.draw = function (){
this.game.ctx.drawImage(this.img, 618,404);
  
}

