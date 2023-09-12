document.addEventListener('DOMContentLoaded', function() {
    document.getElementById('checkButton').addEventListener('click', checkAge);
});

function checkAge() {
    var age = parseInt(document.getElementById("ageInput").value);

    if (!isNaN(age)) {
        var result = "You are ";

        if (age >= 19) {
            result += "old enough to purchase alcohol, ";
        } else {
            result += "not old enough to purchase alcohol, ";
        }

        if (age >= 19) {
            result += "visit a casino, ";
        } else {
            result += "not old enough to visit a casino, ";
        }

        if (age >= 16) {
            result += "and old enough to drive.";
        } else {
            result += "and not old enough to drive.";
        }

        document.getElementById("result").innerHTML = result;
    } else {
        document.getElementById("result").innerHTML = "Enter a valid age.";
    }
}
