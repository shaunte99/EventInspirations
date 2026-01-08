// Fade-in on scroll
const fades = document.querySelectorAll(".fade");

const observer = new IntersectionObserver(entries => {
  entries.forEach(entry => {
    if (entry.isIntersecting) {
      entry.target.classList.add("show");
    }
  });
}, { threshold: 0.2 });

fades.forEach(el => observer.observe(el));


// Sound toggle
document.querySelectorAll(".video-wrap").forEach(wrapper => {
  const video = wrapper.querySelector("video");
  const btn = wrapper.querySelector(".sound-toggle");
  const icon = btn.querySelector("i");

  btn.addEventListener("click", () => {
    video.muted = !video.muted;
    icon.className = video.muted
      ? "fa-solid fa-volume-xmark"
      : "fa-solid fa-volume-high";
  });
});
