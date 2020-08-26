const btn = document.querySelector(".control");
const play = document.querySelector(".play");
const pause = document.querySelector(".pause");
const video = document.querySelector(".video");
const preloader = document.querySelector(".preloader");

btn.addEventListener("click", function () {
    if (!btn.classList.contains("show")) {
        btn.classList.add("show");
        video.pause();
    } else {
        btn.classList.remove("show");
        video.play();
    }
})


window.addEventListener("load",function(){
    preloader.classList.add("hide");
})
