import "./style.css";

import Chart from "./src/Chart";
import Utility from "./src/Utility";

const svg = document.querySelector("svg");
let length = document.getElementById("data-length").value;

const data = Utility.generateRandomData(length, 10, 100);

const chart = new Chart(svg, data);
chart.init();

document.getElementById("data-length").addEventListener("input", e => {
	const currData = Utility.generateRandomData(e.target.value, 10, 100);

	const newData = [...data, ...currData.splice(data.length)];

	chart.update(newData);
});
