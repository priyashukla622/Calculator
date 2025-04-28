
let inputBox = document.getElementById("inputBox");
let buttons = document.querySelectorAll("button");
let string = "";

buttons.forEach(element => {
    element.addEventListener("click", (b) => {
        if (b.target.innerText === "=") {
            string = String(eval(string));
            inputBox.value = string;

        } else if (b.target.innerText >= 0 || b.target.innerText <= 0) {
            string += b.target.innerText;
            inputBox.value = string;

        } else if (b.target.innerText === "AC") {
            string = "";
            inputBox.value = string;

        } else if (b.target.innerText === "DEL") {
            string = string.slice(0, -1);
            inputBox.value = string;

        } else if (b.target.innerText ==="+" || b.target.innerText === "-" || b.target.innerText === "*" || b.target.innerText === "/" || b.target.innerText === "%") {
            string += b.target.innerText;
            inputBox.value = string;

        }
    });
});
