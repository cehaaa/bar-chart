import Utility from "../utils/Utility";
import Popover from "./Popover";

export class Bar {
	constructor({
		x: x,
		y: y,
		width: width,
		height: height,
		padding: padding,
		text: text,
		svg: svg,
	}) {
		this.x = x;
		this.y = y;
		this.width = width;
		this.height = height;
		this.padding = padding;
		this.text = text;
		this.svg = svg;
		this.color = Utility.generateRandomColor();
	}

	draw() {
		const rect = document.createElementNS("http://www.w3.org/2000/svg", "rect");

		rect.setAttribute("x", this.x);
		rect.setAttribute("y", this.y);
		rect.setAttribute("width", this.width);
		rect.setAttribute("height", this.height);

		rect.classList.add("bar");

		const popover = new Popover({
			rect: rect,
			bar: this,
		});
		popover.init();

		rect.style.fill = this.color;
		rect.style.stroke = this.color;

		this.svg.appendChild(rect);
	}
}

export default Bar;
