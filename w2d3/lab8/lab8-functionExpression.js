(function () {
   "use strict";
    function createBicyclePrototye() {
            return {
            speed: 0,
            applyBrake: function (num) { this.speed -= num },
            speedup: function (num) { this.speed += num }
        }
    }

    function createMountainBikeProtoype(prototype) {
        return Object.create(prototype, {
            gear: {
                value: 1, writable:true
            },
            setGear: {
                value: function (gearV) {
                    this.gear = gearV;
                }
            }
        });

    }
    function start() {
        let bicyclePrototype = createBicyclePrototye();

        let mountainBikePrototype = createMountainBikeProtoype(bicyclePrototype);

        console.log("bicyclePrototype before set speed\n");
        console.log(bicyclePrototype);
        bicyclePrototype.speedup(10);
        console.log("bicyclePrototype after set speed\n");
        console.log(bicyclePrototype);

        console.log("mountainBikePrototype before set speed==");
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
