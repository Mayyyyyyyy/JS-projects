const spans = document.querySelectorAll("span");
const root = document.querySelector(":root");

spans.forEach(span => span.addEventListener("click",function(e){
     root.style.setProperty("--bg-color",e.target.style.background);
}))