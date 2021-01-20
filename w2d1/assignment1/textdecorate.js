(function () {
    "use strict";
    window.onload = function init() {
        let btn = document.getElementById("bigbnt").onclick = increaseFont;
        let checkE = document.getElementById("billingID").onchange = changeFontWeigh;
    }

    function increaseFont() {
        setInterval(changeFont, 500);
    }
    function changeFont() {
        // alert("Hello, World");
        let textE = document.getElementById("mytextarea");
        // alert(parseInt(textE.style.font.fontsize)); 
        if (textE.style.fontSize == "") {
            textE.style.fontSize = "12pt";
        }
        else {
            textE.style.fontSize = parseInt(textE.style.fontSize) + 2 + "px";
        }

    }
    function changeFontWeigh() {
        // alert("hello");
        let checkE = document.getElementById("billingID");
        // alert(checkE.checked);

        let textE = document.getElementById("mytextarea");
        if (checkE.checked == true) {
            textE.style.fontWeight = "bold";
            textE.style.color = "green";
            textE.style.textDecoration = "underline";
        }
        else {
            textE.style.fontWeight = "";
            textE.style.color = "";
            textE.style.textDecoration = "";
        }
    }
})();