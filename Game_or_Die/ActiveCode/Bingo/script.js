// DOM elements
const d2submit = document.getElementById("d2btn");
const d2textfield = document.getElementById("d2Input");
const d3generate = document.getElementById("d3btn");
const myRandomNumDisplay = document.getElementById("myRandomNumHTML");
const d5submit = document.getElementById("d5submit");
const finalInput = document.querySelectorAll('#d5 input[type="number"]');
const d6reset = document.getElementById("d6btn")
const d1style = document.getElementById("d1")
const d2style = document.getElementById("d2")
const d3style = document.getElementById("d3")
const d4style = document.getElementById("d4")
const d5style = document.getElementById("d5")
const d6style = document.getElementById("d6")

// Declare variables
let winnerNumArr = [];
let finalInputArr = [];
let possibleNumbers = [];
let results = [];
let maxValue;
let isGameDone;

// Disable and style elements
d3generate.disabled = "true";
d3generate.style.backgroundColor = "grey";
d5submit.disabled = true;
d5submit.style.backgroundColor = "grey";
d6reset.style.backgroundColor = "grey";
d6reset.disabled = "true";

// Event Listeners
d2submit.addEventListener("click", pushPossibleNums);
d3generate.addEventListener("click", pullRandomNums);
d5submit.addEventListener("click", submitFinalInput);
d6reset.addEventListener("click", reset);

window.onload = function () {
    // Disable input fields onload
    finalInput.forEach(input => input.disabled = true);
}

// Functions
function pushPossibleNums() {
    // Initialize variables
    possibleNumbers = [];
    let possibleNumbersInput = (document.getElementById("d2Input").value);

    // Check for invalid input
    if (possibleNumbersInput < 5) {
        alert("numbers less than 5 are invalid")
        possibleNumbersInput = 0;
    } else {
        // Generate possible nums
        for (let i = 1; i <= possibleNumbersInput; i++) {
            possibleNumbers.push(i);
        }
        maxValue = possibleNumbers.length
        // Enable input fields
        finalInput.forEach(input => {
            input.style.border = '3px solid #4285F4';
            input.disabled = false;
        });

        // Update style
        d2style.style.backgroundImage = ""
        d5style.style.backgroundImage = "linear-gradient(to right, rgba(32, 32, 32), rgba(63, 255, 0, 0.2))"
        d2textfield.disabled = "true"
        d2textfield.style.color = "#76a7fa"
        d2submit.disabled = "true"
        d2submit.style.backgroundColor = "grey"
    }
    console.log("possibleNumbersInput = " + possibleNumbersInput);
    console.log("possibleNumbers = " + possibleNumbers);
}

function pullRandomNums() {
    if (possibleNumbers.length === 0) {
        console.log("Array is empty");
        return;
    }

    if (winnerNumArr.length >= 4) {
        d3generate.innerHTML = "SHOW RESULT!"
    }

    if (winnerNumArr.length > 4) {
        possibleNumbers = []
        winnerNumArr.length = 5
        checkNumbers()
        return
    } else {
        // Generate random number and push to winnerNumArr
        let randomIndex = Math.floor(Math.random() * possibleNumbers.length);
        let randomInt = possibleNumbers[randomIndex];
        possibleNumbers.splice(randomIndex, 1);
        winnerNumArr.push(randomInt);
    }

    displayNums()
    console.log("winnernumArr = " + winnerNumArr);

}

function displayNums() {
    myRandomNumDisplay.innerHTML = "";

    winnerNumArr.sort(function (a, b) { return a - b });

    for (let i = 0; i < winnerNumArr.length && i < 5; i++) {
        const text = document.createElement("p");
        const textitext = document.createTextNode(winnerNumArr[i]);
        text.appendChild(textitext);
        myRandomNumDisplay.appendChild(text);
    }
}

function unlockSubmit() {
    let filledFields = 0;
    let totalFields = document.querySelectorAll('#d5 input[type="number"]');
    for (var i = 0; i < totalFields.length; i++) {
        if (totalFields[i].value.trim() !== '') {
            filledFields++;
        }
    }
    console.log(filledFields + " out of 5 fields contain data")
    if (filledFields === 5) {
        d5submit.disabled = false;
        d5submit.style.backgroundColor = "#4285F4";
    }
}

function submitFinalInput() {
    finalInputArr = []
    let finalInput = document.querySelectorAll('#d5 input[type="number"]');
    finalInput.forEach(input => {
        finalInputArr.push(parseInt(input.value));

    });
    console.log("finalInputArr = " + finalInputArr);
    d5submit.disabled = true;
    d5submit.style.backgroundColor = "grey";
    finalInput.forEach(input => {
        input.disabled = true;
        input.style.color = "#4285F4";
        input.style.border = "none";
    })

    d5style.style.backgroundImage = ""
    d3style.style.backgroundImage = "linear-gradient(to right, rgba(32, 32, 32), rgba(63, 255, 0, 0.2))"
    d3generate.disabled = false;
    d3generate.style.backgroundColor = "#4285F4";
}

function checkDuplicatesAndLimitValue(inputField) {
    const inputFieldValue = inputField.value;
    if (!inputFieldValue) {
        return;
    }
    const otherInputFields = document.querySelectorAll(
        '#d5 input[type="number"]:not(#' + inputField.id + ")"
    );

    for (let i = 0; i < otherInputFields.length; i++) {
        if (otherInputFields[i].value === inputFieldValue) {
            alert("Duplicate data entered!");
            inputField.value = "";
            return;
        }
    }

    if (parseInt(inputFieldValue) > maxValue) {
        alert(
            "Value entered is too high. Please enter a value less than or equal to " +
            maxValue +
            "."
        );
        inputField.value = "";
        return;
    }
}


function checkNumbers() {
    let results = [];
    pullRandomNums()
    if (winnerNumArr.includes(finalInputArr[0])) {
        results.push(finalInputArr[0]);
    }
    if (winnerNumArr.includes(finalInputArr[1])) {
        results.push(finalInputArr[1]);
    }
    if (winnerNumArr.includes(finalInputArr[2])) {
        results.push(finalInputArr[2]);
    }
    if (winnerNumArr.includes(finalInputArr[3])) {
        results.push(finalInputArr[3]);
    }
    if (winnerNumArr.includes(finalInputArr[4])) {
        results.push(finalInputArr[4]);
    }

    console.log("results = " + results);
    let message;
    if (results.length === 0) {
        message = "Sorry, none of your numbers match the winning numbers.";
        resultHTML.innerHTML = (message);
        isGameDone = true;
    } else {
        message = "You matched " + results.length + " out of " + finalInputArr.length + " numbers! <br> Your matched numbers were " + results.join(", ");
        resultHTML.innerHTML = (message);
        isGameDone = true;
    }

    unlockReset()
}


function unlockReset() {
    if (isGameDone === true) {
        d3generate.disabled = "true";
        d3generate.style.backgroundColor = "grey";
        d3style.style.backgroundImage = ""
        d6style.style.backgroundImage = "linear-gradient(to right, rgba(32, 32, 32), rgba(63, 255, 0, 0.2))"
        d6reset.style.backgroundColor = "#4285F4";
        d6reset.disabled = ""
    }
}

function reset() {
    winnerNumArr = [];
    finalInputArr = [];
    possibleNumbers = [];
    results = [];
    maxValue = 0;
    isGameDone = false;

    finalInput.forEach(input => {
        input.style.border = 'none';
        input.disabled = true;
        input.value = '';
        input.style.color = "#000";
    });

    d2style.style.backgroundImage = "linear-gradient(to right, rgba(32, 32, 32), rgba(63, 255, 0, 0.2))"
    d3generate.disabled = true;
    d3generate.style.backgroundColor = "grey";
    d3generate.innerHTML = "GENERATE RANDOM NUMBERS"
    d5submit.disabled = true;
    d5submit.style.backgroundColor = "grey";
    d2textfield.disabled = false;
    d2textfield.value = '';
    d2textfield.style.color = "#000";
    d2submit.disabled = "";
    d2submit.style.backgroundColor = "";
    myRandomNumDisplay.innerHTML = "";
    d6style.style.backgroundImage = ""
    d6reset.style.backgroundColor = "grey";
    d6reset.disabled = "true"
    resultHTML.innerHTML = "";
}