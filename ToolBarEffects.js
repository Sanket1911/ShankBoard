//Toolbar effects

let pencilIcon = document.querySelector("#pencil");
let eraserIcon = document.querySelector("#eraser");
let rectangleIcon = document.querySelector("#rectangle");
let lineIcon = document.querySelector("#line");
let toolImages = document.querySelectorAll(".tool-image");
let options = document.querySelectorAll(".size-box");
let cTool = "";

function removeEffects(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.height = "30px";
        arr[i].style.border = "none";
        arr[i].style.backgroundColor = "#a6a6a6";
    }
}

function removeSizeBox(arr) {
    for (let i = 0; i < arr.length; i++) {
        arr[i].style.display = "none";
    }
}

pencilIcon.addEventListener("click", function () {
    if (cTool == "pencil") {
        removeSizeBox(options);
        options[0].style.display = "flex";
    } else {
        removeEffects(toolImages);
        removeSizeBox(options);
        cTool = "pencil";
        // two way binding (all properties set)
        pencilIcon.style.height = "40px";
        tool.strokeStyle = currentColor;
        tool.lineWidth = pencilSize;
        pencilIcon.style.border = "1px solid white"
        pencilIcon.style.backgroundColor = "#b3b3b3"
    }
});
eraserIcon.addEventListener("click", function () {
    if (cTool == "eraser") {
        // secondClick
        removeSizeBox(options);
        options[1].style.display = "flex";
    } else {
        removeEffects(toolImages);
        removeSizeBox(options);
        tool.strokeStyle = "white";
        tool.lineWidth = eraserSize;
        eraserIcon.style.height = "50px";
        cTool = "eraser";
        eraserIcon.style.border = "1px solid white"
        eraserIcon.style.backgroundColor = "#b3b3b3"
    }
});
rectangleIcon.addEventListener("click", function () {
    if (cTool == "rectangle") {
        removeSizeBox(options);
        options[2].style.display = "flex"
    } else {
        removeEffects(toolImages);
        removeSizeBox(options);
        rectangleIcon.style.height = "50px";
        tool.strokeStyle = currentColor;
        cTool = "rectangle"
        tool.lineWidth = rectSize;
        rectangleIcon.style.border = "1px solid white"
        rectangleIcon.style.backgroundColor = "#b3b3b3"
    }

});
lineIcon.addEventListener("click", function () {
    if (cTool == "line") {
        removeSizeBox(options);
        options[3].style.display = "flex"
    } else {
        removeEffects(toolImages);
        removeSizeBox(options);
        lineIcon.style.height = "50px";
        tool.strokeStyle = currentColor;
        cTool = "line";
        tool.lineWidth = lineSize;
        lineIcon.style.border = "1px solid white"
        lineIcon.style.backgroundColor = "#b3b3b3"
    }
});
