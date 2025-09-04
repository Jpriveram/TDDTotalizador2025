import totalizador from "./totalizador";
const quantity = document.querySelector("#cantidad");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(quantity.value);

  div.innerHTML = "<p>" +  "Cantidad de item: " + totalizador(firstNumber) + "</p>";
});
