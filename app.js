// const cards = document.querySelectorAll("card-img-top");
//
// cards.forEach(function(items){
//   items.addEventListener("click", function(){
//     items.classList.remove("tog");
//   })
// })
document.querySelectorAll(".tog")[1].classList.remove("tog");
const images = document.querySelectorAll(".tog");

  // Loop over each image and add an event listener to remove the class on click
  images.forEach(function(image) {
    image.addEventListener("click", function() {
      image.classList.remove("tog");
    });
  });
