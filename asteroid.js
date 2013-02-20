var AS = (function () {

  function Asteroid(aX, aY) {
    var x = aX;
    var y = aY;
    var size = Math.floor(Math.random() * 100 + 20);

    var createRandomAsteroid = function() {
      var x = Math.floor(Math.random() * 800);
      var y = Math.floor(Math.random() * 800);
      return new Asteroid(x,  y);
    };

    var draw = function() {
     fillStyle="rgba(200, 200, 200, 0.7)";
      ctx.beginPath();
      ctx.arc(this.x, this.y, this.size, 0, Math.PI*2);
      ctx.fill(); 
    };
  }

  function Game(canvas) {
    var asteroids = [];

    for (var i=0; i < 10; i++) {
      asteroids[i] = Asteroid.createRandomAsteroid();
    }

    var draw = function() {
      for (var i=0; i < asteroids.length; i++) {
        asteroids[i].draw();
      }  
    }
}

    return { Asteroid: Asteroid };
})();




var ctx = document.getElementById("asterCanvas").getContext("2d");
var g = new AS.Game(ctx);
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

    asteroids = [];

    for (var i=0; i < 11; i++) {
      asteroids[i] = AS.Asteroid.randomAsteroid();
    }
// ctx.stroke();