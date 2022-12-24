let myInput = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const uList = document.getElementById("ul-el");



inputBtn.addEventListener("click", function(){
    myInput.push(inputEl.value);
    renderInput();
});

function renderInput(){
    let listItems = "";

    for (let i = 0; i < myInput.length; i++) {
        listItems += "<li>"+ myInput[i]+ "</li>";
    };
    uList.innerHTML = listItems;
};

