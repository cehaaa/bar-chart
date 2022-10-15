export class Bar {
	constructor({ x, y, width, height, padding, svg }) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.padding = padding;
		this.svg = svg;
	}

	draw() {
		// draw bar
		const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

		rect.setAttribute("x", this.x);
		rect.setAttribute("y", this.y);
		rect.setAttribute("width", this.width);
		rect.setAttribute("height", this.height);

		rect.classList.add("bar");

		this.svg.appendChild(rect);
	}
}

export default Bar;
