import {get_cantidad,get_precio,totalizador} from "./totalizador";
const quantity = document.querySelector("#cantidad");
const price = document.querySelector("#precio");
const form = document.querySelector("#totalizador-form");
const div = document.querySelector("#resultado-div");

form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(quantity.value);
  const secondNumber = Number.parseInt(price.value);
  div.innerHTML = "<p>" +  "Cantidad de item: " + get_cantidad(firstNumber) + "</p>";
  div.innerHTML += "<p>" + "Precio unitario: " + get_precio(secondNumber) + "</p>";  
  div.innerHTML += "<p>" + "Precio neto: "+"("+get_cantidad(firstNumber) + "*" + get_precio(secondNumber) + ")"+": $"+totalizador(firstNumber, secondNumber)+"</p>";  

});
