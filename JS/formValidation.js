const nameEl = document.getElementById("name");
const emailEl = document.getElementById("email");
const phoneEl = document.getElementById("phone");
const messageEl = document.getElementById("message");
const submitButton = document.getElementById("submitBtn");
let nameErrorEl = document.getElementById("nameError");
let emailErrorEl = document.getElementById("emailError");
let phoneErrorEl = document.getElementById("phoneError");
let messageErrorEl = document.getElementById("messageError");
let errorEl = document.getElementById("error");

// Function to validate name
function validateName() {
  if (nameEl.value === "") {
    nameErrorEl.innerHTML = "Name is required";
    nameErrorEl.style.display = "block";
    return false;
  } else {
    nameErrorEl.style.display = "none";
    return true;
  }
}

// Function to validate email
function validateEmail() {
  if (emailEl.value === "") {
    emailErrorEl.innerHTML = "Email is required";
    emailErrorEl.style.display = "block";
    return false;
  } else if (emailEl.value.indexOf("@") <= 0) {
    emailErrorEl.innerHTML = "Email is invalid";
    emailErrorEl.style.display = "block";
    return false;
  } else {
    emailErrorEl.style.display = "none";
    return true;
  }
}

// Function to validate phone
function validatePhone() {
  if (phoneEl.value === "") {
    phoneErrorEl.innerHTML = "Phone is required";
    phoneErrorEl.style.display = "block";
    return false;
  } else if (isNaN(phoneEl.value) || phoneEl.value.length > 15) {
    phoneErrorEl.innerHTML = "Phone is invalid";
    phoneErrorEl.style.display = "block";
    return false;
  } else {
    phoneErrorEl.style.display = "none";
    return true;
  }
}

// Function to validate message
function validateMessage() {
  if (messageEl.value === "") {
    messageErrorEl.innerHTML = "Message is required";
    messageErrorEl.style.display = "block";
    return false;
  } else {
    messageErrorEl.style.display = "none";
    return true;
  }
}

// Function to validate Form
function validateForm() {
  if (
    validateName() &&
    validateEmail() &&
    validatePhone() &&
    validateMessage()
  ) {
    return true;
  } else {
    return false;
  }
}

// remove error message on change
nameEl.addEventListener("input", function () {
  nameErrorEl.style.display = "none";
});

emailEl.addEventListener("input", function () {
  emailErrorEl.style.display = "none";
});

phoneEl.addEventListener("input", function () {
  phoneErrorEl.style.display = "none";
});

messageEl.addEventListener("input", function () {
  messageErrorEl.style.display = "none";
});

// Show success message
function showSuccessMessage() {
  let successMessage = document.getElementById("success");
  successMessage.style.display = "block";
  successMessage.innerHTML = "Form submitted successfully";
  setTimeout(function () {
    successMessage.style.display = "none";
  }, 3000);
}

// add event listener to button
submitButton.addEventListener("click", function (event) {
  event.preventDefault();
  if (validateForm()) {
    errorEl.style.display = "none";
    showSuccessMessage();
    nameEl.value = "";
    emailEl.value = "";
    phoneEl.value = "";
    messageEl.value = "";
  } else {
    errorEl.style.display = "block";
    errorEl.innerHTML = "Please fill the form correctly";
  }
});
