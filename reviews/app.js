const reviews = [
    {
        id:1,
        name:"Mxmtoon",
        occupation:"Musician",
        img:"https://images.unsplash.com/photo-1597247829048-f81d20a5b550?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        text:"The horizontal offset of the shadow. A positive value puts the shadow on the right side of the box, a negative value puts the shadow on the left side of the box"
    },
    {
        id: 2,
        name: "CAS",
        occupation: "Developer",
        img: "https://images.unsplash.com/photo-1597441736520-b037274e7a46?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        text: "The vertical offset of the shadow. A positive value puts the shadow below the box, a negative value puts the shadow above the box"
    },
    {
        id: 3,
        name: "Deca Joins",
        occupation: "Worker",
        img: "https://images.unsplash.com/photo-1597337200129-d81a86721847?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=750&q=80",
        text: "The spread radius. A positive value increases the size of the shadow, a negative value decreases the size of the shadow"
    },
    {
        id: 4,
        name: "Richeal",
        occupation: "Driver",
        img: "https://images.unsplash.com/photo-1596921580631-c491e33e2e37?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1350&q=80",
        text: "The color of the shadow. The default value is the text color. Look at CSS Color Values for a complete list of possible color values."
    }
]

const image = document.getElementById("image");
const name = document.getElementById("name");
const occupation = document.getElementById("occupation");
const text = document.getElementById("text");

const prev = document.getElementById("prev");
const next = document.getElementById("next");
const btn = document.getElementById("btn");

let currentItem = 0;

window.addEventListener("DOMContentLoaded",function(){
   showPerson();
})

function showPerson(){
    const item = reviews[currentItem];
    image.src = item.img;
    name.textContent = item.name;
    occupation.textContent = item.occupation;
    text.textContent = item.text;
}

next.addEventListener("click",function(){
    currentItem++;
    if(currentItem > reviews.length - 1){
        currentItem = 0;
    }
    showPerson();
})

prev.addEventListener("click", function () {
    currentItem--;
    if (currentItem < 0) {
        currentItem = reviews.length - 1;
    }
    showPerson();
})

btn.addEventListener("click",function(){
    currentItem = Math.floor(Math.random()*reviews.length);
    showPerson();
})