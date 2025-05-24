document.addEventListener("DOMContentLoaded", () => {
  const imageBlocks = document.querySelectorAll(".image-block");
  const downloadBtn = document.getElementById("downloadBtn");
  const nameInput = document.getElementById("nameInput");

  // Preview uploaded image
  imageBlocks.forEach((block) => {
    const input = block.querySelector(".image-upload");
    const img = block.querySelector(".image-preview");
    const placeholder = block.querySelector(".placeholder");

    input.addEventListener("change", () => {
      const file = input.files[0];
      if (!file) return;

      const reader = new FileReader();
      reader.onload = (e) => {
        img.src = e.target.result;
        img.style.display = "block";
        placeholder.style.display = "none";
      };
      reader.readAsDataURL(file);
    });
  });

  // Download as multiple PNG images
  downloadBtn.addEventListener("click", async () => {
    downloadBtn.disabled = true;
    downloadBtn.textContent = "Preparing...";

    const container = document.querySelector(".container");
    const containerRect = container.getBoundingClientRect();
    const fullHeight = container.scrollHeight;
    const pageHeight = 1000; // max height per PNG
    const pageCount = Math.ceil(fullHeight / pageHeight);

    for (let i = 0; i < pageCount; i++) {
      const canvas = await html2canvas(container, {
        scrollY: -window.scrollY, // avoid scroll jump
        height: pageHeight,
        y: i * pageHeight,
        scale: 2,
        useCORS: true,
      });

      const link = document.createElement("a");
      const clientName = nameInput.value.trim().replace(/\s+/g, "_") || "moodboard";
      link.download = `${clientName}_page${i + 1}.png`;
      link.href = canvas.toDataURL("image/png");
      link.click();
    }

    downloadBtn.disabled = false;
    downloadBtn.textContent = "Download Brochure";
  });
});
