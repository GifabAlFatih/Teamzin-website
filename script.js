const menuToggle = document.getElementById("menuToggle");
const siteNav = document.getElementById("siteNav");
const toast = document.getElementById("toast");

menuToggle.addEventListener("click", () => {
  const isOpen = siteNav.classList.toggle("open");
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.textContent = isOpen ? "×" : "☰";
});

siteNav.querySelectorAll("a").forEach((link) => {
  link.addEventListener("click", () => {
    siteNav.classList.remove("open");
    menuToggle.setAttribute("aria-expanded", "false");
    menuToggle.textContent = "☰";
  });
});

function showToast(message) {
  toast.textContent = message;
  toast.classList.add("show");
  window.setTimeout(() => toast.classList.remove("show"), 2200);
}

document.querySelectorAll("[data-copy]").forEach((button) => {
  button.addEventListener("click", async () => {
    const worldName = button.dataset.copy;
    try {
      await navigator.clipboard.writeText(worldName);
      showToast(`World "${worldName}" berhasil disalin.`);
    } catch (error) {
      showToast("Gagal menyalin. Silakan salin nama world secara manual.");
    }
  });
});

document.getElementById("year").textContent = new Date().getFullYear();
