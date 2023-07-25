// This message is from DOM 0 level handler
let btn = document.querySelector("#clicked");

btn.onclick = function () {
  alert("This message is from DOM 0 level handler!");
};

// DoM two level Handler
let domtwo = document.querySelector("#DOMTwo");
domtwo.addEventListener("click", function (e) {
  alert("This message is from DOM 2 level handler!");
});
