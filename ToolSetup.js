// Tool Setup

let canvasBoard = document.querySelector("canvas");
let tool = canvasBoard.getContext("2d");
let body = document.querySelector("body");
let pencil = document.querySelector("#pencil");
let eraser = document.querySelector("#eraser");
let rectangle = document.querySelector("#rectangle");
let line = document.querySelector("#line");
canvasBoard.height = window.innerHeight;
canvasBoard.width = window.innerWidth;

let boardTop = canvasBoard.getBoundingClientRect().top;
let boardLeft = canvasBoard.getBoundingClientRect().left;

let iX, iY, fX, fY;


let drawingMode = false;
body.addEventListener("mousedown", function (e) {
    iX = e.clientX - boardLeft;
    iY = e.clientY - boardTop;
    if (cTool == "pencil" || cTool == "eraser") {
        drawingMode = true;
        tool.beginPath();
        tool.moveTo(iX, iY);
    }
});

body.addEventListener("mouseup", function (e) {
    if (cTool == "pencil" || cTool == "eraser") {
        drawingMode = false;
    } else if (cTool == "rectangle" || cTool == "line") {
        // Rectangle and Line tool
        fX = e.clientX + boardLeft;
        fY = e.clientY - boardTop;

        let width = fX - iX;
        let height = fY - iY;

        if (cTool == "rectangle") {
            tool.strokeRect(iX, iY, width, height);
        } else if (cTool == "line") {
            tool.beginPath();
            tool.moveTo(iX, iY);
            tool.lineTo(fX, fY);
            tool.stroke();
        }
    }


});

body.addEventListener("mousemove", function (e) {
    if (drawingMode == false) {
        return;
    }

    fX = e.clientX - boardLeft;
    fY = e.clientY - boardTop;
    tool.lineTo(fX, fY);
    tool.stroke();
    iX = fX;
    iY = fY;
});