Actions = function (game){
  this.game = game;
}


Actions.prototype.scene0Lightswitch = function(){
  this.game.background.changeBackground(01);
  this.game.hero.walking = true; 
  this.game.hero.move(700);
  document.getElementById("subtitles").innerText = "¡Hágase la luz! Y la luz se hizo...";

}

Actions.prototype.scene0Fridge = function(){
   document.getElementById("subtitles").innerText = "Has abierto la nevera";
}

Actions.prototype.scene0Door = function(){
  document.getElementById("subtitles").innerText = "Parece que está cerrada... ¿Dónde he metido las llaves?";
}