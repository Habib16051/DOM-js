let menu = document.querySelector("#menu");
menu.addEventListener("focus", (e) => {
  e.target.style.backgroundColor = "yellowgreen";
  e.target.style.color = "red";
});

menu.addEventListener("blur", (e) => {
  e.target.style.backgroundColor = "blue";
  e.target.style.color = "white";
});
