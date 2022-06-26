// write your code here
// capturing the title from html using id
let title = document.getElementById("card-title");
// capturing the image from html using id
let image = document.getElementById("card-image");

// fetchingImage
fetch('http://localhost:3000/images/1') //fetch request to the json server
    .then(response => response.json())
    .then(function(data) {
        let imgSrc = data.image;
        let imgTitle = data.title;
        title.textContent = imgTitle;
        image.src = imgSrc;
    });

const likeCount = document.getElementById("like-count");
let likes;
document.getElementById("like-button").addEventListener("click", () => { // grab like button
    likes += 1; //add likes to it
    renderLikes();
});
fetch("http://localhost:3000/images/1")
    .then(response => response.json())
    .then(renderFlatagram);

function renderFlatagram(data) {
    likes = data.likes;
    renderLikes();
}

function renderLikes() {
    document.getElementById("like-count").textContent = `${likes} likes`;
}
//james comments
function fetchComments() {
    fetch('http://localhost:3000/images/1')
        .then(res => res.json())
        .then(obj => {
            let array = obj.comments
            array.forEach(element => {
                let li = document.createElement('li')
                li.textContent = element.content
                document.querySelector('#comments-list').appendChild(li)
            })
        })
}
fetchComments()

//SallyOscarComment
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (e) => { 
        e.preventDefault()
        handleComment(e.target.comment.value)
    })
})
function handleComment(todo) {
    let ul = document.createElement('li')
    ul.textContent = todo
    document.querySelector('#comments-list').appendChild(ul)
}