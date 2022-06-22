// write your code here
// capturing the title from html using id
let title = document.getElementById("card-title");
// capturing the image from html using id
let image = document.getElementById("card-image");



fetch('http://localhost:3000/images/1') //fetch request to the json server
.then(response => response.json())
.then(function(data){
      let imgSrc = data.image;
      let imgTitle = data.title;
      title.textContent = imgTitle;
      image.src = imgSrc;
});
