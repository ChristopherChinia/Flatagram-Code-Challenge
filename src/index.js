// write your code here
// capturing the title from html using id
let title = document.getElementById("card-title");
// capturing the image from html using id
let image = document.getElementById("card-image");

const likeCount=document.getElementById("like-count");
let likes;
document.getElementById("like-button").addEventListener("click",()=>{// grab like button
    likes += 1;//add likes to it
    renderLikes();
});
fetch("http://localhost:3000/images/1")
.then(response => response.json())
.then(renderFlatagram);

function renderFlatagram(data){
    likes = data.likes;
    renderLikes();
}
function renderLikes(){
    document.getElementById("like-count").textContent=`${likes} likes`;
}
