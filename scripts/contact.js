// Smooth form submission with success modal
const form = document.querySelector(".contact-form");

form.addEventListener("submit", function(e) {
  e.preventDefault(); // prevent default page reload

  // Collect form data
  const formData = new FormData(form);
  const name = formData.get("name");
  const email = formData.get("email");
  const phone = formData.get("phone");
  const eventType = formData.get("eventType");
  const message = formData.get("message");

  // For demo purposes: log it (replace this with actual backend/AJAX)
  console.log("Message sent:", { name, email, phone, eventType, message });

  // Create success modal
  const modal = document.createElement("div");
  modal.classList.add("success-modal");
  modal.innerHTML = `
    <p>Thank you, <strong>${name}</strong>!<br>Your message has been sent successfully.</p>
  `;
  document.body.appendChild(modal);

  // Animate and remove modal after 3s
  setTimeout(() => {
    modal.classList.add("hide");
    setTimeout(() => modal.remove(), 500);
  }, 3000);

  // Reset form
  form.reset();
});

// Input focus glow effect
const inputs = document.querySelectorAll(".contact-form input, .contact-form select, .contact-form textarea");
inputs.forEach(input => {
  input.addEventListener("focus", () => input.classList.add("focus"));
  input.addEventListener("blur", () => input.classList.remove("focus"));
});
