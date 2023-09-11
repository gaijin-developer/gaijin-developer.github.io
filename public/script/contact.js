const firstName = document.getElementById("firstName");
const lastName = document.getElementById("lastName");
const submitButton = document.getElementById("submitButton");
const email = document.getElementById("email");
const message = document.getElementById("message");
const warnArea = document.getElementById("warn");
const success = document.getElementById("success");

let regex = /^\w+\D/gi;
let emailRegex = /.+@\w+\.[A-Za-z]+/gi;

submitButton.addEventListener("click", formProcess);

function formProcess(event) {
  event.preventDefault();
  let firstNameVal = firstName.value.trim();
  const lastNameVal = lastName.value.trim();
  const emailVal = email.value.trim();
  const messageVal = message.value.trim();

  if (
    firstNameVal === "" ||
    lastNameVal === "" ||
    emailVal === "" ||
    messageVal == ""
  ) {
    success.innerText = "";
    warn.innerText = "Please complete this form";
  } else if (!firstNameVal.match(regex)) {
    success.innerText = "";
    warnArea.innerText = "Please enter a valid first name";
  } else if (!lastNameVal.match(regex)) {
    success.innerText = "";
    warnArea.innerText = "Please enter a valid last name";
  } else if (!emailVal.match(emailRegex)) {
    success.innerText = "";
    warnArea.innerText = "Please enter a valid email";
  } else if (message.value == "") {
    success.innerText = "";
    warnArea.innerText = "Please enter a Message";
  } else {
    warnArea.innerText = "";
    success.innerText = "Your message has been sent";
    submitData();
    firstName.value = "";
    lastName.value = "";
    email.value = "";
    message.value = "";
  }
}
function submitData() {
  // if (success.innerText == "Success, message has been sent") {
  // }
}

function resetFunc() {
  warnArea.innerText = "";
  success.innerText = "";
}
