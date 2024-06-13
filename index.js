document.querySelector(".contact-btn").addEventListener("click", function() {
  document.querySelector(".contact-form-container").classList.add("active");
  document.querySelector("#overlay").classList.add("active");
});

document.querySelector("#overlay").addEventListener("click", function() {
  document.querySelector(".contact-form-container").classList.remove("active");
  document.querySelector("#overlay").classList.remove("active");
});

document.getElementById("contactForm").addEventListener("submit", function(event) {
  event.preventDefault();
  let formIsValid = true;
  const formGroups = document.querySelectorAll(".form-group");

  formGroups.forEach(group => {
      const input = group.querySelector("input, textarea");
      const errorMessage = group.querySelector(".error-message");

      if (!input.value.trim()) {
          errorMessage.textContent = `${input.placeholder} peux pas etre vide`;
          errorMessage.style.display = "block";
          formIsValid = false;
      } else {
          errorMessage.style.display = "none";
      }
  });

  if (formIsValid) {
      alert("Form submitted successfully!");
  }
});