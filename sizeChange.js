// Size Change Logic

let pencilSize = 2.5;
let eraserSize = 2.5;
let rectSize = 2.5;
let lineSize = 2.5;

let sizeBox = document.querySelectorAll(".size-box");

// Size box for Pencil
sizeBox[0].addEventListener("click", function (e) {
    /*
        console.log(e.target); // size1
        console.log(e.currentTarget); // size-box
    */
    let elements = ["size1", "size2", "size3", "size4"];
    let allClasses = e.target.classList;
    let firstClass = allClasses[0];
    let test = elements.includes(firstClass);
    if (test) {
        // console.log(firstClass);
        if (firstClass == "size1") {
            pencilSize = 2.5;
        } else if (firstClass == "size2") {
            pencilSize = 5;
        } else if (firstClass == "size3") {
            pencilSize = 7.5;
        } else if (firstClass == "size4") {
            pencilSize = 10;
        }
    }
    tool.lineWidth = pencilSize;
});

// Size box for Eraser
sizeBox[1].addEventListener("click", function (e) {
    let elements = ["size1", "size2", "size3", "size4"];
    let allClasses = e.target.classList;
    let firstClass = allClasses[0];
    let test = elements.includes(firstClass);
    if (test) {
        if (firstClass == "size1") {
            eraserSize = 10;
        } else if (firstClass == "size2") {
            eraserSize = 20;
        } else if (firstClass == "size3") {
            eraserSize = 30;
        } else if (firstClass == "size4") {
            eraserSize = 40;
        }
    }
    tool.lineWidth = eraserSize;
});

// Size box for Rectangle
sizeBox[1].addEventListener("click", function (e) {
    let elements = ["size1", "size2", "size3", "size4"];
    let allClasses = e.target.classList;
    let firstClass = allClasses[0];
    let test = elements.includes(firstClass);
    if (test) {
        if (firstClass == "size1") {
            rectSize = 2.5;
        } else if (firstClass == "size2") {
            rectSize = 5;
        } else if (firstClass == "size3") {
            rectSize = 7.5;
        } else if (firstClass == "size4") {
            rectSize = 10;
        }
    }
    tool.lineWidth = rectSize;
});

// Size box for Line
sizeBox[1].addEventListener("click", function (e) {
    let elements = ["size1", "size2", "size3", "size4"];
    let allClasses = e.target.classList;
    let firstClass = allClasses[0];
    let test = elements.includes(firstClass);
    if (test) {
        if (firstClass == "size1") {
            lineSize = 2.5;
        } else if (firstClass == "size2") {
            lineSize = 5;
        } else if (firstClass == "size3") {
            lineSize = 7.5;
        } else if (firstClass == "size4") {
            lineSize = 10;
        }
    }
    tool.lineWidth = lineSize;
});
