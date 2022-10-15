export class Svg {
	constructor(svg) {
		this.svg = svg;

		this.width = this.svg.getBoundingClientRect().width;
		this.height = this.svg.getBoundingClientRect().height;
	}

	draw() {
		this.svg.style = "background:#f1f5f9";
	}
}

export default Svg;
