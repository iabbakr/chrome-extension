let input = [];
const inputBtn = document.getElementById("input-btn");
const inputEl = document.getElementById("input-el");
const inputBtn2 = document.getElementById("input-btn2");

const uList = document.getElementById("ul-el");



inputBtn.addEventListener("click", function(){
    input.push(inputEl.value);
    renderInput();
};);
//inputBtn2.addEventListener("click", function(){
//    input.pop(inputEl.value);
//});

function renderInput(){
    let listItems = "";

    for (let i = 0; i < input.length; i++) {
        listItems += "<li>"+ input[i]+ "</li>";
    };
    uList.innerHtml = listItems;
};

