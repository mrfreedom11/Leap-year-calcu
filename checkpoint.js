let input = document.querySelector('input');
let result = document.getElementById('result');

input.addEventListener("input", function() {
    let year = Number(input.value);

    if (!year) {
        result.textContent = "Please enter a year";
        return;
    }

    if (year % 4 === 0 && year % 100 !== 0 || year % 400 === 0) {
        result.textContent = year + " is a leap year.";
    } else {
        result.textContent = year + " is not a leap year.";
    }
});
