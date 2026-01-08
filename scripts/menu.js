const items = document.querySelectorAll(".menu-item");

items.forEach(item => {
  item.addEventListener("mouseenter", () => {
    item.style.letterSpacing = "0.12em";
  });

  item.addEventListener("mouseleave", () => {
    item.style.letterSpacing = "0.05em";
  });
});
