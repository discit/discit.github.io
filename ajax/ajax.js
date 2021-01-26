
window.onload = function(){
    document.getElementById("btn").onclick = getUser;
}


async function getUser() {
    alert("hello");
    let response = await fetch("http://jsonplaceholder.typicode.com/users/1");
    if (response.ok) { // if HTTP-status is 200-299
        // get the response body (the method explained below)
        let json = await response.json();
        document.getElementById("userinfo").value = json.company.name;
    } else {
        alert("HTTP-Error: " + response.status);
    }
};


