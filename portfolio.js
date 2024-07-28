const words=[doctor, engineer];
let index=0;
function updateDisplay(){
    const displayElement = document.getElementById("display");
    displayElement.textContent = words[index];
    index = (index + 1)%words.length;
}