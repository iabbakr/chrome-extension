let myInput = [];
const inputBtn = document.getElementById("input-btn");
const inputBtn2 = document.getElementById("input-btn2");
const inputEl = document.getElementById("input-el");
const uList = document.getElementById("ul-el");



inputBtn.addEventListener("click", function(){
    myInput.push(inputEl.value);
    renderInput();
    clearThis()
});

inputBtn2.addEventListener("click", function(){
    myInput.pop(inputEl.value);
    renderInput();
});
function renderInput(){
    let listItems = "";

    for (let i = 0; i < myInput.length; i++) {
        listItems += "<li>"+ myInput[i]+ "</li>";
    };
    uList.innerHTML = listItems;
};
function clearThis() {
    inputEl.value= "";
};
