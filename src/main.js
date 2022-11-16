import "../style.css";

import Chart from "./components/Chart";
import Utility from "./utils/Utility";

const svg = document.querySelector("svg");
const randomButton = document.getElementById("random-button");
let length = Utility.generateRandomNumber(3, 7);

const data = Utility.generateRandomData(7, 10, 90);

const chart = new Chart(svg, data);
chart.init();

randomButton.addEventListener("click", () => {
	// length = Utility.generateRandomNumber(3, 7);
	// const data = Utility.generateRandomData(length, 10, 90);
	// chart.update(data);
});

// randomButton.addEventListener("click", () => {
// 	location.reload();
// });
