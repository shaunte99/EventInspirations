const items = document.querySelectorAll(".menu-item");

items.forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.letterSpacing = "0.12em";
  });

  item.addEventListener("mouseleave", () => {
    item.style.letterSpacing = "0.05em";
  });
});

document.querySelectorAll(".menu-item").forEach(item => {
  item.addEventListener("click", () => {
    window.location.href = item.dataset.link;
  });
});
