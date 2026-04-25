document.addEventListener("DOMContentLoaded", () => {
  const page = document.body.dataset.page;
  const navLinks = document.querySelectorAll(".site-nav a");
  navLinks.forEach((link) => {
    const href = link.getAttribute("href");
    if (!href) return;
    const pageName = href.replace(".html", "");
    const targetPage = pageName === "index" ? "home" : pageName;
    if (targetPage === page) {
      link.setAttribute("aria-current", "page");
    }
  });

  const revealItems = document.querySelectorAll(".reveal");
  if (!("IntersectionObserver" in window)) {
    revealItems.forEach((item) => item.classList.add("visible"));
    return;
  }

  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          entry.target.classList.add("visible");
          observer.unobserve(entry.target);
        }
      });
    },
    { threshold: 0.12 }
  );

  revealItems.forEach((item) => observer.observe(item));
});
