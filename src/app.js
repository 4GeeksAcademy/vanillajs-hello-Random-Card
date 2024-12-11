/* eslint-disable */
import "bootstrap";
import "./style.css";

import "./assets/img/rigo-baby.jpg";
import "./assets/img/4geeks.ico";

window.onload = function() {
  const valores = [
    "A",
    "2",
    "3",
    "4",
    "5",
    "6",
    "7",
    "8",
    "9",
    "10",
    "J",
    "Q",
    "K"
  ];
  const iconos = [" ♦ ", " ♥  ", " ♣  ", " ♠  "];
  let valoresRandom = Math.floor(Math.random() * valores.length);
  let iconosRandom = Math.floor(Math.random() * iconos.length);

  document.querySelector(".top").textContent = iconos[iconosRandom];
  document.querySelector(".bottom").textContent = iconos[iconosRandom];
  document.querySelector(".medium").textContent = valores[valoresRandom];
};
