var AS = (function () {

  function Asteroid(x, y) {
    this.x = x;
    this.y = y;
  }

  Asteroid.randomAsteroid = function() {
    var x = Math.floor(Math.random() * 800);
    var y = Math.floor(Math.random() * 800);
    return new Asteroid(x,  y);
  };
    return { Asteroid: Asteroid };
})();

var game = function() {
  var asterOne = AS.Asteroid.randomAsteroid();

};

var ctx = document.getElementById("asterCanvas").getContext("2d");
ctx.fillStyle="rgba(200, 200, 200, 0.7)";
ctx.beginPath();
ctx.arc(300, 575, 40, 0, Math.PI*2);
// ctx.arc(95,50,40,0,2*Math.PI);
ctx.fill();

ctx.fillStyle="rgba(0, 0, 255, 0.7)";
ctx.beginPath();
ctx.moveTo(225, 125);
ctx.lineTo(225, 45);
ctx.lineTo(145, 125);
ctx.closePath();
ctx.fill();


// ctx.stroke();