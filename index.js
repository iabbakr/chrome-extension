let myInput = [];
const inputBtn = document.getElementById("input-btn");
const inputBtn2 = document.getElementById("input-btn2");
const inputBtn3 = document.getElementById("input-btn3");
const inputEl = document.getElementById("input-el");
const uList = document.getElementById("ul-el");
const inputFromLocalStorage = JSON.parse(localStorage.getItem("myInput"));

// local storage

if(inputFromLocalStorage){
    myInput = inputFromLocalStorage;
    render(myInput);
};
inputBtn2.addEventListener("click", function(){
    chrome.tabs.query({active: true, currentWindow: true}, function(tabs){
        myInput.push(tabs[0].url);
        localStorage.setItem("myInput", JSON.stringify(myInput));
        render(myInput);
    });
});



function render(input){
    let listItems = "";
    for (let i = 0; i < input.length; i++) {
        listItems += `
        <li>
            <a href='${input[i]}' target='blank'>${input[i]}
            </a> 
        </li>`;
    };
    uList.innerHTML = listItems;
};



inputBtn.addEventListener("click", function(){
    myInput.push(inputEl.value);
    inputEl.value= "";
    localStorage.setItem("myInput", JSON.stringify(myInput))
    render (myInput);
});

inputBtn3.addEventListener("dblclick", function(){
    localStorage.clear();
    myInput = [];
    render(myInput);
});

