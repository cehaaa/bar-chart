export class Line {
	constructor({ x1, x2, y1, y2, svg }) {
		this.x1 = x1;
		this.x2 = x2;
		this.y1 = y1;
		this.y2 = y2;
		this.svg = svg;
	}

	draw() {
		const line = document.createElementNS("http://www.w3.org/2000/svg", "line");

		line.setAttribute("x1", this.x1);
		line.setAttribute("x2", this.x2);

		line.setAttribute("y1", this.y1);
		line.setAttribute("y2", this.y2);

		line.classList.add("line");

		this.svg.appendChild(line);
	}
}

export default Line;
