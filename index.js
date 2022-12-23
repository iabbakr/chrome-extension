let input = ["hhhhh"];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const inputBtn2 = document.getElementById("input-btn2");

const uList = document.getElementById("ul-el");



inputBtn.addEventListener("click", function(){
    input.push(inputEl.value);
    console.log(uList);
    
     
});

for (let i = 0; i < input.length; i++) {
    uList.textContent+=input[i];
};