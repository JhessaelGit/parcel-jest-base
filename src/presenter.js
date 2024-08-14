import sumar from "./sumador";
import multiplicar from "./multiplicador";
const first = document.querySelector("#primer-numero");
const second = document.querySelector("#segundo-numero");
const form = document.querySelector("#sumar-form");
const div = document.querySelector("#resultado-div");

const firstMulti = document.querySelector("#primer-numero-multi");
const secondMulti = document.querySelector("#segundo-numero-multi");
const formMulti = document.querySelector("#multiplicar-form");
const divMulti = document.querySelector("#resultado-div-multi");


form.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(first.value);
  const secondNumber = Number.parseInt(second.value);

  div.innerHTML = "<p>" + sumar(firstNumber, secondNumber) + "</p>";
});
formMulti.addEventListener("submit", (event) => {
  event.preventDefault();

  const firstNumber = Number.parseInt(firstMulti.value);
  const secondNumber = Number.parseInt(secondMulti.value);

  divMulti.innerHTML="<p>" + multiplicar(firstNumber, secondNumber) + "</p>";
});
