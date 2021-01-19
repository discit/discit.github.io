

function goHandler() {
    let btn = document.getElementById("go");
    if (btn.innerHTML == "Go") {
        let timeID = setInterval(() => {

            let minE = document.getElementById("min");
            let secondE = document.getElementById("sec");
            let second = parseInt(secondE.value);
            if(parseInt(min.value)>0)
                second += parseInt(min.value)*60;
           
            if (second > 0) {
                second--;
                secondE.value = second%60;
                
                minE.value = parseInt(second/60);
            } else {
                clearInterval(timeID);
                document.body.className = "awesome";
                btn.innerHTML = "Reset";
                
            }

        }
     , 1000) 

    }
    else // reset
    {
        let btn = document.getElementById("go");
        btn.innerHTML = "Go";
        let secondE = document.getElementById("sec");   
        secondE.value = "";
        let minE = document.getElementById("min");   
        minE.value = "";
        document.body.className = "";
    }
       
}

let btn = document.getElementById("go");
// alert(btn);
btn.onclick = goHandler;



