let display = document.getElementById("display");

// Display को क्लियर करने के लिए
function clearDisplay() {
    display.innerText = '0';
}

// अंतिम अंक को हटाने के लिए
function deleteDigit() {
    let current = display.innerText;
    display.innerText = current.length > 1 ? current.slice(0, -1) : '0';
}

// नंबर जोड़ने के लिए
function appendNumber(number) {
    if (display.innerText === '0') {
        display.innerText = number;
    } else {
        display.innerText += number;
    }
}

// ऑपरेटर जोड़ने के लिए
function appendOperator(operator) {
    let lastChar = display.innerText.slice(-1);
    if ("+-*/".includes(lastChar)) {
        display.innerText = display.innerText.slice(0, -1) + operator; // अंतिम ऑपरेटर बदलें
    } else {
        display.innerText += operator;
    }
}

// गणना करने के लिए
function calculate() {
    try {
        let result = eval(display.innerText); // गणना करें
        display.innerText = result;
    } catch (error) {
        display.innerText = 'Error'; // अगर कुछ गलत होता है
    }
}
