// const cards = document.querySelectorAll("card-img-top");
//
// cards.forEach(function(items){
//   items.addEventListener("click", function(){
//     items.classList.remove("tog");
//   })
// })
// document.querySelectorAll(".tog")[1].classList.remove("tog");
// const images = document.querySelectorAll(".tog");



  // Loop over each image and add an event listener to remove the class on click
  for(var i=0;i<document.querySelectorAll(".card").length;i++){
    document.querySelectorAll(".card")[i].addEventListener("click", function() {
      // alert("Clicked!!");
      // alert(i);
      // alert(this.id);
      document.querySelector("."+this.id).classList.remove("tog");
      // alert("Clicked!!");
    // document.querySelector("image"+(i%6)).classList.remove(".tog");
  });
}
// }

function flip(i){
  alert("reached"+i);
  document.querySelectorAll(".car-img-top")[i].classList.remove("tog");
}
  // document.addEventListener("click",function(){
  //   const val = document.querySelectorAll(".tog").value;
  // alert(val);
  // images.forEach(function(image) {
  //   image.addEventListener("click", function() {
  //     image.classList.remove("tog");
  //   });
  // });
  // })
  
