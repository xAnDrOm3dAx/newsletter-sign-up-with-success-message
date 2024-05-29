const form = document.querySelector("form");
const submitBtn = document.querySelector("#submit-btn");
const dismissBtn = document.querySelector("#dismiss-btn");
const errorMessage = document.querySelector("#error-message");
const emailInput = document.querySelector("#user-email");
const successMessage = document.querySelector(".success-message-wrapper");
const articleContainer = document.querySelector(".signup-form-container");
const emailConfirmation = document.querySelector("#email-confirmation");

form.addEventListener("submit", (e) => {
  e.preventDefault();
  validateEmail();
});

dismissBtn.addEventListener("click", () => {
  removeSuccessMessage();
});

function validateEmail() {
  const userEmail = emailInput.value.trim();
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  if (emailInput.value === "" || !emailRegex.test(userEmail)) {
    displayError();
  } else {
    DisplaySuccessMessage();
  }
}

function displayError() {
  errorMessage.style.display = "block";
}

function clearError() {
  errorMessage.style.display = "none";
}

function DisplaySuccessMessage() {
  successMessage.classList.remove("hidden");
  articleContainer.classList.add("hidden");
  emailConfirmation.textContent = emailInput.value + ".";
}

function removeSuccessMessage() {
  successMessage.classList.add("hidden");
  articleContainer.classList.remove("hidden");
  emailInput.value = "";
  emailConfirmation.textContent = "ash@loremcompany.com.";
  clearError();
}
