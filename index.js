let display = document.getElementById("display");
let buttons = document.querySelectorAll("button");

buttons.forEach((btn) => {
    btn.addEventListener("click", () => {
        if (btn.id === "=") {
            if (display.value === "") {
                display.value = "No value to display";
                setTimeout(() => {
                    display.value = "";
                }, 500)
            } else {
                display.value = eval(display.value);
            }
        } else if (btn.id === "ac") {
            display.value = "";
        } else if (btn.id == "de") {
            display.value = display.value.slice(0, -1);
        }
        else {
            display.value += btn.id;
        }
    });
});
