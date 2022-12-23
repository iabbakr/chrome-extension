const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
let inputBtn2 = document.getElementById("input-btn2");
let input = [];
let uList = document.getElementById("ul-el");



inputBtn.addEventListener("click", function(){
    input.push(inputEl.value);
    for (let i = 0; i < myLeads.length; i++) {
        console.log(myLeads[i]);
    };
    uList.textContent=input; 
} );
inputBtn2.addEventListener("click", function(){
    input.push(inputEl.value);
} );