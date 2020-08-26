const btn = document.querySelector(".toggle");
const sidebar = document.querySelector(".sidebar");
const times = document.querySelector(".fa-times");

btn.addEventListener("click",function(){
    sidebar.classList.toggle("show");
})

times.addEventListener("click",function(){
    sidebar.classList.remove("show");
})