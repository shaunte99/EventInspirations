const steps = document.querySelectorAll(".step");
const nextBtns = document.querySelectorAll(".next");
const reveal = document.querySelector(".reveal");

let current = 0;

nextBtns.forEach(btn => {
  btn.addEventListener("click", () => {
    steps[current].classList.remove("active");
    current++;

    if (current < steps.length) {
      steps[current].classList.add("active");
    } else {
      reveal.style.display = "block";
      window.scrollTo({ top: document.body.scrollHeight, behavior: "smooth" });
    }
  });
});
