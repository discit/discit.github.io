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
  
       function start() {
        var mountainBike = new MountainBike(1);

        console.log("mountainBike before set speed");
        console.log(mountainBike);
        mountainBike.speedup(20);
        console.log("mountainBike after set speed");
        console.log(mountainBike);

        console.log("mountainBike before set setGear");
        console.log(mountainBike);
        mountainBike.setGear(2);
        console.log("mountainBike after set setGear");
        console.log(mountainBike);
    }
    start();

})();
