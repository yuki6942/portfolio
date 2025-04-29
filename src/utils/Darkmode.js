export function updateIcon() {
  const icon = document.getElementById("toggleIcon")?.querySelector("i");
  if (!icon) return;

  if (document.body.classList.contains("dark-mode")) {
    icon.classList.remove("fa-moon");
    icon.classList.add("fa-sun");
  } else {
    icon.classList.remove("fa-sun");
    icon.classList.add("fa-moon");
  }
}

export function checkDarkModePreference() {
  const darkModePreference = localStorage.getItem("darkMode");

  if (darkModePreference === null) {
    const prefersDarkMode = window.matchMedia(
      "(prefers-color-scheme: dark)"
    ).matches;
    document.body.classList.toggle("dark-mode", prefersDarkMode);
  } else {
    document.body.classList.toggle("dark-mode", darkModePreference === "true");
  }

  updateIcon();
}

export function toggleDarkMode() {
  document.body.classList.toggle("dark-mode");
  const isDarkMode = document.body.classList.contains("dark-mode");
  localStorage.setItem("darkMode", isDarkMode.toString());
  updateIcon();
}
