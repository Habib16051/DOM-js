const group = document.querySelector(".group");
const output = document.querySelector(".output");

const sizes = ["Xs", "S", "M", "L", "XL", "XXL"];

group.innerHTML = sizes
  .map(
    (size) =>
      `<div>
    <input type="radio" id="${size}" value="${size}" name="size" />
    <label for="${size}">${size}</label>
  </div>`
  )
  .join(" ");

const RadioButton = document.querySelectorAll("input");

for (const radioBtn of RadioButton) {
  radioBtn.addEventListener("change", ShowOutput);
}

function ShowOutput(e) {
  console.log(e);
  if (this.checked) {
    document.querySelector(".output").innerHTML = `You Selected ${this.value}`;
  }
}
