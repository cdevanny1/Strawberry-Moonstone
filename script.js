// Find the mobile navigation controls.
const menuToggle = document.querySelector(".menu__toggle");
const mainNav = document.querySelector("#main__nav");

// Keep the menu visibility and accessible state in sync.
function setMenuOpen(isOpen) {
  menuToggle.setAttribute("aria-expanded", String(isOpen));
  menuToggle.setAttribute(
    "aria-label",
    isOpen ? "Close navigation menu" : "Open navigation menu",
  );
  mainNav.classList.toggle("is__open", isOpen);
}

// Toggle the dropdown when its button is activated.
menuToggle.addEventListener("click", () => {
  setMenuOpen(menuToggle.getAttribute("aria-expanded") !== "true");
});

// Close the dropdown after choosing a navigation link.
mainNav.addEventListener("click", (event) => {
  if (event.target.closest("a")) {
    setMenuOpen(false);
  }
});

// Let keyboard users dismiss the dropdown with Escape.
document.addEventListener("keydown", (event) => {
  if (
    event.key === "Escape" &&
    menuToggle.getAttribute("aria-expanded") === "true"
  ) {
    setMenuOpen(false);
    menuToggle.focus();
  }
});