(function () {
    "use strict";

    window.onload = function () {
        document.getElementById("start").onclick = start;

        document.getElementById("stop").onclick = stop;

        document.getElementById("size").onchange = sizeChange;
        document.getElementById("animation").onchange = aniChange;
    }

    let intervalID;
    let intervalNumber = 250;

    function aniChange() {
        // alert("animation");

        let textE = document.getElementById("mytextarea");

        switch (document.getElementById("animation").value) {
            case "Exercise":
                textE.value = EXERCISE;
                break;
            case "Juggler":
                textE.value = JUGGLER;
                break;
            case "Bike": ;
                textE.value = BIKE;
                break;
            case "Dive":
                textE.value = DIVE
                break;
            case "Blank":
                textE.value = "";
                break;

            default:
                break;
        }

    }




    function sizeChange() {
        let textE = document.getElementById("mytextarea");
        textE.style.fontSize = document.getElementById("size").value;

    }
    function start() {
        document.getElementById("start").disabled = true;
        document.getElementById("animation").disabled = true;
        document.getElementById("stop").disabled = false;

        let textE = document.getElementById("mytextarea");

        switch (document.getElementById("animation").value) {
            case "Exercise":
                display(EXERCISE);
                break;
            case "Juggler":
                display(JUGGLER);
                break;
            case "Bike": ;
                display(BIKE);
                break;
            case "Dive":
                display(DIVE);
                break;
            case "Blank":
                textE.value = "";
                break;

            default:
                break;
        }


    }

    function display(arr) {
        let frames = arr.split("=====");
        let textE = document.getElementById("mytextarea");
        let n = frames.length;
        let i = 0;

        // alert(frames[0]);
        intervalID = setInterval(() => {
            if (i >= n)
                i = 0;

            textE.value = frames[i];
            i++;
        }, intervalNumber);
    }

    function stop() {
        clearInterval(intervalID);
        let textE = document.getElementById("mytextarea");
        document.getElementById("stop").disabled = true;


        document.getElementById("start").disabled = false;
        document.getElementById("animation").disabled = false;


        switch (document.getElementById("animation").value) {
            case "Exercise":
                textE.value = EXERCISE;
                break;
            case "Juggler":
                textE.value = JUGGLER;
                break;
            case "Bike": ;
                textE.value = BIKE;
                break;
            case "Dive":
                textE.value = DIVE
                break;
            case "Blank":
                textE.value = "";
                break;

            default:
                break;
        }
    }

    let speedE = document.getElementById("speed");

    speedE.onchange = speedChange;

    function speedChange() {
        let checkE = document.getElementById("speed");
        // alert(checkE.checked);
        if (checkE.checked == true)
            intervalNumber = 50;
        else {
            intervalNumber = 250;
        }
        if (document.getElementById("start").disabled) {
            clearInterval(intervalID);
            switch (document.getElementById("animation").value) {
                case "Exercise":
                    display(EXERCISE);
                    break;
                case "Juggler":
                    display(JUGGLER);
                    break;
                case "Bike": ;
                    display(BIKE);
                    break;
                case "Dive":
                    display(DIVE);
                    break;
                case "Blank":
                    textE.value = "";
                    break;

                default:
                    break;
            }
        }
    }
})();