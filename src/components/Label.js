export class Label {
	constructor({ x, y, text, svg }) {
		this.x = x;
		this.y = y;
		this.text = text;
		this.svg = svg;
	}

	draw() {
		const label = document.createElementNS(
			"http://www.w3.org/2000/svg",
			"text"
		);

		label.setAttribute("x", this.x);
		label.setAttribute("y", this.y);

		label.classList.add("label");

		label.innerHTML = this.text;

		this.svg.appendChild(label);
	}
}
export default Label;
