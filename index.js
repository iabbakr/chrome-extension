let myInput = [];
const inputBtn = document.getElementById("input-btn");
const inputBtn2 = document.getElementById("input-btn2");
const inputEl = document.getElementById("input-el");
const uList = document.getElementById("ul-el");



inputBtn.addEventListener("click", function(){
    myInput.push(inputEl.value);
    inputEl.value= "";
    renderInput();
});

inputBtn2.addEventListener("click", function(){
    myInput.pop(inputEl.value);
    renderInput();
});
function renderInput(){
    let listItems = "";

    for (let i = 0; i < myInput.length; i++) {
        listItems += "<li><a href='"+myInput[i]+"' target='blank'>"+myInput[i]+"</a>   </li>";
    };
    uList.innerHTML = listItems;
};

