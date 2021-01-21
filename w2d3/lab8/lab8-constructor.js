(function () {
    "use strict";
    function MountainBike(gearV) {

        this.gear = gearV;
        this.setGear = function (gear) {
            this.gear = gear;
        }

    }

    MountainBike.prototype.speed = 0;

    MountainBike.prototype.applyBrake = function (num) { this.speed -= num };
    MountainBike.prototype.speedup = function (num) { this.speed += num };

  
    var a = new MountainBike(1);

 
    function start() {
        var mountainBikePrototype = new MountainBike(1);

        console.log("mountainBikePrototype before set speed");
        console.log(mountainBikePrototype);
        mountainBikePrototype.speedup(20);
        console.log("mountainBikePrototype after set speed");
        console.log(mountainBikePrototype);

        console.log("mountainBikePrototype before set setGear");
        console.log(mountainBikePrototype);
        mountainBikePrototype.setGear(2);
        console.log("mountainBikePrototype after set setGear");
        console.log(mountainBikePrototype);

    }
    start();

})();
