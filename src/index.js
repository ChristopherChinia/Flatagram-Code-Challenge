// write your code here
// capturing the title from html using id
let title = document.getElementById("card-title");
// capturing the image from html using id
let image = document.getElementById("card-image");
//SallyOscarComment
document.addEventListener('DOMContentLoaded', () => {
    document.querySelector('form').addEventListener('submit', (e) => { 
        e.preventDefault()
        handleComment(e.target.comment.value)
    })
})