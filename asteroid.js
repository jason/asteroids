var AS = (function () {

  function Asteroid(x, y, size, dir, color) {
    this.x = x;
    this.y = y;
    this.size = size;
    this.dir = dir;
    this.color = color;
    var that = this;

    this.draw = function(ctx) {
      ctx.fillStyle=this.color;
      ctx.beginPath();
      ctx.arc(that.x, that.y, that.size, 0, Math.PI*2);
      ctx.fill();
    };

    this.update = function() {
      that.x = that.x + dir[0];
      that.y = that.y + dir[1];
      if (that.y < 0) {
        that.y = that.y + 800;
      } else if (that.y > 800) {
        that.y = that.y - 800;
      } else if (that.x < 0) {
        that.x = that.x + 800;
      } else if (that.x > 800) {
        that.x = that.x - 800;
      }
    };
  }


  Asteroid.randomAsteroid = function (){
    var x = Math.floor(Math.random() * 800);
    var y = Math.floor(Math.random() * 800);
    var size = Math.floor(Math.random() * 80 + 20);
    var dir = [(Math.floor(Math.random() * 8 - 4 )), (Math.floor(Math.random() * 8 - 4))];
    var color = "rgba(" + Math.floor(Math.random() * 255) + ", " +
                Math.floor(Math.random() * 255) + ", " +
                Math.floor(Math.random() * 255) + ", " +
                (Math.random() * 0.7 + 0.3) + ")";
    return new Asteroid(x, y, size, dir, color);
  };

  function Ship(x, y, dir, speed) {
    this.x = x;
    this.y = y;
    this.dir = dir;
    this.speed = speed;
    var that = this;

    this.draw = function(ctx) {
      ctx.fillStyle="rgba(127, 127, 127, 0.8)";
      ctx.beginPath();
      ctx.arc(that.x, that.y, 25, 0, Math.PI*2);
      ctx.fill();
    };

    this.isHit = function(asteroids) {
      for (var i = asteroids.length - 1; i >= 0; i--) {
        var distanceX = Math.pow((asteroids[i].x - that.x), 2);
        var distanceY = Math.pow((asteroids[i].y - that.y), 2);
        // asteroids[i].y);
        var distance = Math.sqrt(distanceX + distanceY);
        if (distance < asteroids[i].size + 25) {
          return true;
        }
      }
      return ;
    };
  }


  function Game(ctx) {
    var asteroids = [];
    var that = this;
    var ship = new Ship(400, 400, 200, 15);
    var timerID = null;
    
    for (var i=0; i < 10; i++) {
      asteroids[i] = Asteroid.randomAsteroid();
    }


    this.draw = function() {
      ctx.save();   // this is how you clear the board baby
      ctx.setTransform(1, 0, 0, 1, 0, 0);
      ctx.clearRect(0, 0, 800, 800);
      ctx.restore();
      for (var i=0; i < asteroids.length; i++) {
        asteroids[i].draw(ctx);
      }
      ship.draw(ctx);

    };

    this.update = function() {
      for (var i = asteroids.length - 1; i >= 0; i--) {
        asteroids[i].update();
      }
      if (ship.isHit(asteroids)) {
        alert("Game Over");
        clearInterval(timerID);
      }
    };

    this.start = function () {
      that.draw();

      setInterval(function() { that.update(); that.draw(); }, 31);
      };
    }

    return { Asteroid: Asteroid,
              Game: Game };
})();
var ctx= document.getElementById("asterCanvas").getContext("2d");
var g = new AS.Game(ctx);

g.start();




// ctx.fillStyle="rgba(200, 200, 200, 0.7)";
// ctx.beginPath();
// ctx.arc(300, 575, 40, 0, Math.PI*2);
// // ctx.arc(95,50,40,0,2*Math.PI);
// ctx.fill();

// ctx.fillStyle="rgba(0, 0, 255, 0.7)";
// ctx.beginPath();
// ctx.moveTo(225, 125);
// ctx.lineTo(225, 45);
// ctx.lineTo(145, 125);
// ctx.closePath();
// ctx.fill();

//     asteroids = [];

//     for (var i=0; i < 11; i++) {
//       asteroids[i] = AS.Asteroid.randomAsteroid();
//     }
// // ctx.stroke();