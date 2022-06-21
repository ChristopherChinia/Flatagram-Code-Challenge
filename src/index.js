const likeCount=document.getElementById("like-count");
let likes;
document.getElementById("like-button").addEventListener("click",()=>{// grab like button
    likes += 1;//add likes to it
    renderLikes();
});