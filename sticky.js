let sticky = document.querySelector("#stickyNotes");
 body = document.querySelector("body");
sticky.addEventListener("click", function (e) {
    let sticky = document.createElement("div");
    sticky.setAttribute("class", "sticky");
    sticky.innerHTML = `<div class="navbar">
            <div class="close"></div>
            <div class="minimise"></div>
        </div>
        <textarea name="" class="textarea"></textarea>`;

    body.append(sticky);


    let minimise = document.querySelector(".minimise");
    let textarea = document.querySelector("textarea");
    let close = document.querySelector(".close");

    let isClosed = false
    minimise.addEventListener("click", function (e) {
        if (isClosed == false) {
            textarea.style.display = "none";
        } else {
            textarea.style.display = "block";
        }
        isClosed = !isClosed;
    });

    close.addEventListener("click", function (e) {
        sticky.remove();
    })
});