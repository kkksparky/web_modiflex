document.addEventListener("DOMContentLoaded", () => {
  const sections = document.querySelectorAll(".section, .hero");
  sections.forEach((section, index) => {
    section.style.opacity = "0";
    section.style.transform = "translateY(10px)";
    section.style.transition = "opacity 0.5s ease, transform 0.5s ease";
    setTimeout(() => {
      section.style.opacity = "1";
      section.style.transform = "translateY(0)";
    }, 80 * index);
  });
});
