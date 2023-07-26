const btn = document.querySelector("#btn");
const sb = document.querySelector("#framework");

btn.onclick = (e) => {
  e.preventDefault();
  const selectedValues = [].filter
    .call(sb.options, (option) => option.selected)
    .map((option) => option.text);
  alert(selectedValues);
};
