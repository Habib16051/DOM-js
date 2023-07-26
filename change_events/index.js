// change event for input elements
// let input = document.querySelector(".input");
// let result = document.querySelector("#result");
// input.addEventListener("change", function () {
//   result.textContent = this.value;
// });

// change event for radio buttons
// let result = document.querySelector("#result");
// document.body.addEventListener("change", function (e) {
//   let target = e.target;
//   let message;

//   switch (target.id) {
//     case "pending":
//       message = "The Pending radio button is changed!";
//       break;
//     case "approved":
//       message = "The approved radio button is changed!";
//       break;
//     case "rejected":
//       message = "The rejected radio button is changed!";
//       break;
//   }
//   result.textContent = message;
// });

// change event for checkboxes

// let result = document.querySelector("#result");

// document.body.addEventListener("change", function (e) {
//   let target = e.target;
//   let message;

//   switch (target.id) {
//     case "html":
//       message = "The HTML checkbox changed";
//       break;
//     case "css":
//       message = "The CSS checkbox changed";
//       break;
//     case "javascript":
//       message = "The javascript checkbox changed";
//       break;
//   }
//   result.textContent = message;
// });

// change events for select elements

let select = document.querySelector("#country");
let result = document.querySelector("#result");

select.addEventListener("change", function () {
  result.textContent = this.value;
});
