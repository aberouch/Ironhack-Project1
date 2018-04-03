Background = function (game) {

  
this.game = game;
this.img = new Image();

this.img.src = "images/scene00.png";
this.x = 0;
this. y = 0;

this.lightsOn = false;
this.currentBackground = this.img.src;
this.previousBackground = this.currentBackground;

}


Background.prototype.changeBackground = function(id) {
  var sceneId = id;
  var backgroundCollection= [
    {
      id: "00",
      name: "living room dark",
      src: "images/scene00.png",
    },
    {
      id: "01",
      name: "living room light",
      src: "images/scene01.png",
    },
    {
      id: "02",
      name: "microwave closed",
      src: "images/microwave.png",
    },
    {
      id: "03",
      name: "maze kernels",
      src: "images/scene00_kernels.png",
    },
    {
      id: "04",
      name: "no kernels",
      src: "images/scene00_nokernels.png",
    },
    {
      id: "05",
      name: "closed microwave",
      src: "images/scene02_closedmic.png",
    },
    {
      id: "06",
      name: "open microwave",
      src: "images/scene02_openmic.png",
    },

  ];
  
  this.previousBackground = this.currentBackground;
  this.img.src  = backgroundCollection[sceneId].src;
  this.currentBackground  = this.img.src;
}


Background.prototype.draw = function (){

  this.game.ctx.drawImage(this.img, 0,0);
  
}
