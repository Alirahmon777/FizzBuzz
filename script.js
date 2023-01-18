"use strict";

const elForm = document.querySelector("#form");
const elInput = document.getElementById("input");
const elText = document.querySelector("#text");
const elTitle = document.querySelector("#title");

document.querySelector("body").style.cssText =
  "display: flex; align-items: center; justify-content: center; flex-direction: column; width: 100vw; height: 80vh;";

elTitle.style.cssText = "font-family: cursive; font-size: 80px; color: #f7f7f7";
elForm.style.cssText = "text-align: center;";
elInput.style.cssText =
  "padding: 8px 5px; margin-top: 80px; display: block; font-size: 26px; text-align: center; border-radius: 10px; border: none; outline: none;";
document.querySelector("button").style.cssText =
  "width: 80%; margin-top: 30px; padding: 12px 30px; border-radius: 10px; border: none; font-size: 18px; color: #5a5557; cursor: pointer;";
elText.style.cssText =
  "font-family: monospace; font-size: 22px; margin-top: 20px;";

elForm.addEventListener("submit", (e) => {
  e.preventDefault();
  elText.textContent = "";
  if (elInput.value == 0) {
    elText.textContent = `${elInput.value} qaytadan urinib ko'ring`;
  } else if (elInput.value % 15 === 0) {
    elText.textContent = "FizzBuzz";
  } else if (elInput.value % 5 === 0) {
    elText.textContent = "Buzz";
  } else if (elInput.value % 3 === 0) {
    elText.textContent = "Fizz";
  } else {
    elText.textContent = `${elInput.value} qaytadan urinib ko'ring`;
  }
});
