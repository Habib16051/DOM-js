let menu = document.querySelector("#menu");

// replace child
// let li = document.createElement("li");
// li.textContent = "Home";

// menu.replaceChild(li, menu.firstElementChild);

// remove child
// menu.removeChild(menu.firstElementChild);

// clone node

let cloneNode = menu.cloneNode(true);
cloneNode.id = "Clone ID";
document.body.appendChild(cloneNode);
