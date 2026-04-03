document.addEventListener("DOMContentLoaded", () => {
  const printButtons = document.querySelectorAll("[data-print]");
  printButtons.forEach((button) => {
    button.addEventListener("click", () => window.print());
  });

  const currentPath = window.location.pathname.split("/").pop() || "index.html";
  document.querySelectorAll(".topbar-links a, .resume-toolbar a").forEach((link) => {
    const href = link.getAttribute("href");
    if (!href || href.startsWith("pdf/")) {
      return;
    }

    if (href === currentPath) {
      link.setAttribute("aria-current", "page");
    }
  });
});
