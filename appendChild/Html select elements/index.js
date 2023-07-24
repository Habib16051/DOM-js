let menu = document.querySelector("#Menu");

function createMenu(name) {
  let li = document.createElement("li");
  li.textContent = name;
  return li;
}
menu.appendChild(createMenu("Md"));
menu.appendChild(createMenu("Habibur"));
menu.appendChild(createMenu("Rahman"));
