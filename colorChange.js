// Color Change
let redColor = document.querySelector("#red");
let blueColor = document.querySelector("#blue");
let greenColor = document.querySelector("#green");
let blackColor = document.querySelector("#black");
let colors = document.querySelectorAll(".color");
let currentColor = "black";

function removeBorderEffects(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.border = "0px solid black";
    }
}

redColor.addEventListener("click", function () {
    tool.strokeStyle = "red";
    currentColor = "red";
    removeBorderEffects(colors);
    redColor.style.border = "2px solid white"
});
blueColor.addEventListener("click", function () {
    tool.strokeStyle = "blue";
    currentColor = "blue";
    removeBorderEffects(colors);
    blueColor.style.border = "2px solid white"
});
greenColor.addEventListener("click", function () {
    tool.strokeStyle = "green";
    currentColor = "green";
    removeBorderEffects(colors);
    greenColor.style.border = "2px solid white"
});
blackColor.addEventListener("click", function () {
    tool.strokeStyle = "black";
    currentColor = "black";
    removeBorderEffects(colors);
    blackColor.style.border = "2px solid white"
});