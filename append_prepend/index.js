let menu = document.querySelector("#menu");

let names = ["Zayed", "Ahmed", "Islam"];

let DOMScripts = names.map((names) => {
  let li = document.createElement("li");
  li.textContent = names;
  menu.append(li);
});
// menu.append(...DOMScripts);

//  prepend

let menus = document.querySelector("#menus");
let lang = ["TypeScript", "Python", "Yo"];

lang.map((language) => {
  let li = document.createElement("li");
  li.textContent = language;
  menus.prepend(li);
});
