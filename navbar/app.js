const bar = document.querySelector(".bar");
const sublinks = document.querySelector(".sublinks");

bar.addEventListener("click",function(){
    if(sublinks.style.display == "block"){
        sublinks.style.display = "none";
    }else{
        sublinks.style.display = "block";
    }
})