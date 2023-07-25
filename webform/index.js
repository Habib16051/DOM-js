let Username = document.querySelector("#Username");
let email = document.querySelector("#Email");
let password = document.querySelector("#Password");
let password2 = document.querySelector("#Password2");

function ShowError(input, message) {
  const FormControl = input.parentElement;
  FormControl.className = "form-control error";
  const small = FormControl.querySelector("small");
  small.innerText = message;
}
function ShowError(input) {
  const FormControl = input.parentElement;
  FormControl.className = "form-control success";
}
