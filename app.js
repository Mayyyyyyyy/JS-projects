const btn = document.querySelector(".btn");
const color = document.querySelector(".color");
const hex = [0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"];

btn.addEventListener("click",function(){
    let hexNumber = '#';
    for (let i = 0; i < 6; i++) {
        hexNumber += hex[randomNumber()];
    }
    /* Another way */
    //hexNumber += `${hex[randomNumber()]}${hex[randomNumber()]}${hex[randomNumber()]}${hex[randomNumber()]}${hex[randomNumber()]}${hex[randomNumber()] }`;
    document.body.style.backgroundColor = hexNumber;
    color.textContent = hexNumber;
})

function randomNumber(){
    return Math.floor(Math.random()* hex.length);
}

