const input = document.querySelector('.command-input');

input.addEventListener("keypress", function (event) {
    // If the user presses the "Enter" key on the keyboard
    if (event.key === "Enter") {
        alert(input.textContent);
    }
});

function inputChechk(event) {
    if (event.key === "Enter") {
        alert(input.textContent);
    }
}