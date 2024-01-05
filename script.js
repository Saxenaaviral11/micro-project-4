let output = "";
let display = document.querySelector(".display");
let buttons = document.querySelectorAll('.btn');
let spclChars = ["+", "/", "*", ".", "res", "del", "="];
let result;

const evaluate = (btnValue) => {
    if (btnValue === "del") {
        if (output !== result) {
            // removes end
            output = output.toString().slice(0, -1);
        } else {
            // to clear cases like infinity
            output = "";
        }
    } else if (btnValue === "res") {
        output = "";
    } else if (btnValue === "=") {
        try {
            result = eval(output);
            if (!isFinite(result)) {
                result = "Err";
                output = result;
            } else {
                output = result;
            }
        } catch (error) {
            result = "Err";
            output = result;
        }
    } else if (spclChars.includes(btnValue) && output === "") {
        result = "Err";
        output = result;
    } else {
        output += btnValue;
    }
    display.value = output;
}

Array.from(buttons).forEach((button) => {
    button.addEventListener('click', (item) => {
        evaluate(item.target.value);
    })
})
