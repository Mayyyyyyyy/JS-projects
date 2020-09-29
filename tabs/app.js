const tabs = document.querySelector(".tabs");
const btns = document.querySelectorAll("button");
const paras = document.querySelectorAll("p");

tabs.addEventListener("click",function(e){
   const id = e.target.dataset.id;
   if(id){
       btns.forEach(btn => btn.classList.remove("active"));
       e.target.classList.add("active");
   }
   paras.forEach(para => para.classList.remove("active"));
   const item = document.getElementById(id);
   item.classList.add("active");
})