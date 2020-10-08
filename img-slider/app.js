const images = document.querySelectorAll("img");
const prevBtn = document.querySelector(".prevBtn");
const nextBtn = document.querySelector(".nextBtn");


var counter = 0;

nextBtn.addEventListener("click",function(){
  
   if(counter < images.length-1){
       counter++;
   }else if(counter = images.length -1){
       counter = 0;
   }
   carousel();
})

prevBtn.addEventListener("click", function () {
    if(counter > 0){
        counter--;
    }else if(counter <= 0){
        counter = images.length-1;
    }
    carousel();
})


function carousel() {
    images.forEach(image => {
        image.style.transform = `translateX(-${counter * 100}%)`;
    })
}
