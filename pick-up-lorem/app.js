const text = [
    `One new measure could be to cut the microphones if the candidates try to interrupt each other, US media report.`,
    `The announcement follows Tuesday's ill-tempered debate that descended into squabbling, bickering and insults.`,
    `President Trump's team has already criticised the commission's plans.`,
    `The fallout, however, has also been dominated by remarks Mr Trump made about a far-right group called the Proud Boys.`,
    `On Wednesday he sought to clarify his comments but his critics maintain he has refused to condemn white supremacists.`,
    `"The CPD will be carefully considering the changes that it will adopt and will announce those measures shortly," it said.`,
    `President Trump constantly interrupted Mr Biden, leading to a series of chaotic exchanges in which both men talked over each other.`,
    `Mr Trump questioned Mr Biden's intelligence and Mr Biden called President Trump a clown, telling him to be quiet and saying: "Will you shut up, man?"`,
    `Controlling the candidates' microphones is at the top of the list, CBS said, in order to prevent them interrupting the moderator or each other.`,
    `Both campaign teams will be informed of the rules but they will not be subject to negotiation, the source added.`
]

const form = document.querySelector("form");
const input = document.querySelector("input");
const content = document.querySelector(".content");

form.addEventListener("submit",function(e){
   e.preventDefault();
   const value = parseInt(input.value);
   const random = Math.floor(Math.random() * text.length) ;
   // different conditions
   if(value < 0 || value>10 ||isNaN(value)){
       content.innerText = text[random];
   }else if(value == 0){
       content.innerText = "You find nothing.";
   }else{
       const tempText = text.slice(0,value);
       
       const item = tempText.map(function (item) {
           return `<p class="active">${item}</p> <br/>`;
       }).join("");
       content.innerHTML = item;
   }
})


//Change BG color

const spans = document.querySelectorAll("span");
const root = document.querySelector(":root");

spans.forEach(span => span.addEventListener("click",function(e){
    root.style.setProperty("--bg",e.target.style.background);
}))