(function () {

    "use strict";

    class Bicycle {
        constructor(name) {
            this.name = name;
            this.speed = 0;
        }

        applyBrake(speed) { this.speed -= speed };

        speedup(speed) { this.speed += speed };

        print() {
            console.log(`${this.name} \t ${this.speed}`);
        }

    }
    class MountainBike extends Bicycle {
        constructor(name) {
            super(name);
            this.gear = 1;
        }

        setGear(gear) {
            this.gear = gear;
        }
        print() {
            console.log(`${this.name} \t ${this.speed} \t ${this.gear}`);
        }
    }

    let bicycle = new Bicycle("bike");
    bicycle.print();
    bicycle.speedup(10);
    bicycle.print();
    bicycle.applyBrake(5);
    bicycle.print();


    let mountainBike = new MountainBike("mountain bike");
    mountainBike.print();
    mountainBike.speedup(10);
    mountainBike.print();
    mountainBike.applyBrake(5);
    mountainBike.print();
    mountainBike.setGear(10);
    mountainBike.print();
})();
