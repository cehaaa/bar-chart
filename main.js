import "./style.css";

import Chart from "./src/Chart";

const svg = document.querySelector("svg");
const chart = new Chart(svg);
chart.init();
