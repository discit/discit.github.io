
window.onload = function () {
    document.getElementById("btn").onclick = getPosts;
   // document.getElementById("userid").onchange = enableSubmit;

}
function enableSubmit()
{
   // document.getElementById("btn").disabled = false;
}
function getComments() {
    this.disabled = true;
    fetch(`https://jsonplaceholder.typicode.com/comments?postId=${this.dataset.postid}`)
        .then(res => res.json())
        .then(displayComments)
        .catch(console.error);
    }


function displayComments(comments) {
    //console.log(comments);
    if (comments.length == 0) return ;

 
    let commentE = document.getElementById(`c_${comments[0].postId}`);
    comments.forEach(comment => {
        commentE.insertAdjacentHTML('beforeend', `<div class="comment">
              <h4>${comment.name}</h4>
              <p> ${comment.email}</p>
              <p>${comment.body}</p>
            </div>
          `)
    });
  }

function getPosts() {
    // alert("hello");
    this.disabled = true;
    let user = "https://jsonplaceholder.typicode.com/users/" + document.querySelector('#userid').value;
    let userPost = "https://jsonplaceholder.typicode.com/posts?users/" + document.querySelector('#userid').value;

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
        .catch(console.error);

    fetch(userPost)
        .then(res => res.text())
        .then(data => {
            let json = JSON.parse(data);
            let userdiv = document.querySelector('#container');
            for (let e of json) {
                console.log(e.id + " " + e.title);
                let div = document.createElement('div');
                div.id = "post" + e.id;
                div.innerHTML = `<p><strong>${e.title}</strong></p>
                <p>${e.body}</p>
                <button id="bnt${e.id}" data-postid="${e.id}">Load comment</button>
                <div class="comment" id="c_${e.id}"></div>
                
                `;
                userdiv.append(div);
                document.querySelector(`#bnt${e.id}`).onclick = getComments;
            }
        })
        .catch(console.error);
        
}

