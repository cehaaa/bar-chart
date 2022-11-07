export class Svg {
	constructor(svg) {
		this.svg = svg;

		const { width, height } = this.svg.getBoundingClientRect();

		this.width = width;
		this.height = height;
	}

	draw() {
		// this.svg.style = "background:#f1f5f9";

		this.svg.classList.add("board");
	}
}

export default Svg;
