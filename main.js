document.addEventListener("DOMContentLoaded", () => {
  const form = document.querySelector("form");
  const emailInput = document.querySelector("#user-email");
  const articleContainer = document.querySelector(".article-container");
  const successMessageWrapper = document.querySelector(".success-message-wrapper");
  const dismissButton = successMessageWrapper.querySelector("button");

  form.addEventListener("submit", (e) => {
    e.preventDefault();
    if (emailInput.value === "") {
      // Add your email validation logic here
      emailInput.classList.add("error");
      return;
    }
    articleContainer.classList.add("hidden");
    successMessageWrapper.classList.remove("hidden");
  });

  dismissButton.addEventListener("click", () => {
    successMessageWrapper.classList.add("hidden");
    articleContainer.classList.remove("hidden");
    emailInput.value = "";
  });
});
