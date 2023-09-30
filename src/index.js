const themeToggleLight = document.getElementById("theme-toggle-light");
const themeToggleDark = document.getElementById("theme-toggle-dark");
const themesContainer = document.getElementById("themes-container");
const body = document.body;

themeToggleDark.addEventListener("click", () => {
  themesContainer.classList.remove("light");
  themesContainer.classList.add("dark");

  body.classList.remove("light");
  body.classList.add("dark");

  localStorage.setItem("theme", "dark");
});

themeToggleLight.addEventListener("click", () => {
  themesContainer.classList.remove("dark");
  themesContainer.classList.add("light");

  body.classList.remove("dark");
  body.classList.add("light");

  localStorage.setItem("theme", "light");
});

// Aplicar el tema guardado al cargar la página
document.addEventListener("DOMContentLoaded", () => {
  const savedTheme = localStorage.getItem("theme");
  if (savedTheme) {
    body.classList.add(savedTheme);
  }
});
