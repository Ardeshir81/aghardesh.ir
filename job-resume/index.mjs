function doDefaultTheme() {
  undoDarkTheme();
}

function doDarkTheme() {
  doDefaultTheme();
  document.body.classList.add("dark-theme");
}

function undoDarkTheme() {
  document.body.classList.remove("dark-theme");
}

window.doDefaultTheme = doDefaultTheme;
window.doDarkTheme = doDarkTheme;

window.onload = () => {
  if (localStorage.getItem("dark-mode-toggle") === "dark") doDarkTheme();

  document.addEventListener("colorschemechange", (event) => {
    if (event.detail.colorScheme === "dark") {
      doDarkTheme();
    } else {
      doDefaultTheme();
    }
  });
};
