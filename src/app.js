/* eslint-disable */
import "./style.css";

window.onload = () => {
  let symbols = generateRandomSymbol();
  document.querySelector(".top-symbol").innerHTML = symbols;
  document.querySelector(".bottom-symbol").innerHTML = symbols;
  document.querySelector(".number").innerHTML = generateRandomNumber();
  let symbolColor = document.querySelectorAll(".color");
  if (symbols === "♥" || symbols === "♦") {
    for (let i of symbolColor) {
      i.style.color = "red";
    }
  }
};

let generateRandomNumber = () => {
  let numbers = ["A", "2", "3", "4", "5", "6", "7", "8", "9", "J", "Q", "K"];
  let indexNumbers = Math.floor(Math.random() * numbers.length);
  return numbers[indexNumbers];
};

let generateRandomSymbol = () => {
  let symbols = ["♦", "♥", "♠", "♣"];
  let indexSymbol = Math.floor(Math.random() * symbols.length);
  return symbols[indexSymbol];
};
