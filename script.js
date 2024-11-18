const userInput = document.getElementById("user-input");
const results = document.getElementById("results-div");
const checkBtn = document.getElementById("check-btn");
const clearBtn = document.getElementById("clear-btn");
const countryCode = '^(1\\s?)?';
  const areaCode = '(\\([0-9]{3}\\)|[0-9]{3})';
  const spacesDashes = '[\\s\\-]?';
  const phoneNumber = '[0-9]{3}[\\s\\-]?[0-9]{4}$';
  const regex = new RegExp(
    `${countryCode}${areaCode}${spacesDashes}${phoneNumber}`
  )

function checkUserInput() {
    
    if (userInput.value === "") {
        alert("Please provide a phone number")
        return
    } else {
        phoneNumberValidator(userInput.value);
        userInput.value = ""
    }
    
}


function phoneNumberValidator(num) {
    if (regex.test(num)) {
        results.innerHTML += `<p>Valid US number: ${num}</p>`
    } else {
        results.innerHTML += `<p class="invalid">Invalid US number: ${num}</p>`
    }
}

function clearScreen() {
    results.innerHTML = "";
    userInput.value = "";
}



checkBtn.addEventListener("click", checkUserInput)

clearBtn.addEventListener("click", clearScreen)

userInput.addEventListener("keydown", (e) => {
    if (e.key === "Enter") {
        phoneNumberValidator(userInput.value);
        userInput.value = ""
    }
}) 
