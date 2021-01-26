
window.onload = function () {
    document.getElementById("btn").onclick = getUser2;
}


// async function getUser() {
//     // alert("hello");
//     let response = await fetch("http://jsonplaceholder.typicode.com/users/1");
//     if (response.ok) { // if HTTP-status is 200-299
//         // get the response body (the method explained below)
//         let json = await response.json();
//         document.getElementById("userinfo").value = json.company.name;
//     } else {
//         alert("HTTP-Error: " + response.status);
//     }
// };



function getUser2() {
    // alert("hello");
    let user = "http://jsonplaceholder.typicode.com/users/" + document.querySelector('#userid').value;
    let userPost = "http://jsonplaceholder.typicode.com/posts?users/" + document.querySelector('#userid').value;

    fetch(user)
        .then(res => res.text())
        .then(data => {
            let json = JSON.parse(data);
            let username = json.name;
            let email = json.email;
            let addrress = json.address;

            
            let div = document.createElement('div');
            div.innerHTML = `
            <p><strong>${username}</strong></p>
            <p>email: ${email}</p>
            <p>address:</p>
            <p>\t street: ${addrress.street}</p>
            <p>\t street: ${addrress.suite}</p>
            <p>\t street: ${addrress.city}</p>
            <p>\t street: ${addrress.zip}</p>
    
            `;
            document.querySelector('#container').prepend(div);

        })

    fetch(userPost)
        .then(res => res.text())
        .then(data => {
            let json = JSON.parse(data);
            let userdiv = document.querySelector('#container');
            for (let e of json) {
                console.log(e.id + " " + e.title);

                let div = document.createElement('div');
                // 2. Set its class to "alert"
                // div.className = "alert";
                div.id = "post" + e.id;
                // 3. Fill it with the content
                div.innerHTML = `<p><strong>${e.title}</strong></p>
                <p>${e.body}</p>
                <button id="bnt${e.id}">comment</button>
                `;
                userdiv.append(div);

            }
            // document.querySelector('#username').innerHTML = username;

            // {
            //     "userId": 1,
            //     "id": 1,
            //     "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
            //     "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
            //   }, 
        })
}

