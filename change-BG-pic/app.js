const spans = document.querySelectorAll(".switches span");
const root = document.querySelector(":root");

spans.forEach(span => span.addEventListener("click",function(e){
    root.style.setProperty("--bg",e.target.style.background);
}))
