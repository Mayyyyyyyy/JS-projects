let count = 0;

const value = document.querySelector(".value");
const btns = document.querySelectorAll(".btn");

btns.forEach(function(btn){
    btn.addEventListener("click",function(e){
        if (e.currentTarget.classList.contains("decrease")){
            count--;
        } else if (e.currentTarget.classList.contains("reset")){
            count = 0;
        } else if (e.currentTarget.classList.contains("increase")) {
            count++;
        }
        if(count>0){
            value.style.color = "yellow";
        }else if(count == 0){
            value.style.color = "black";
        }else if (count < 0) {
            value.style.color = "blue";
        }
        value.textContent = count;
    })
})