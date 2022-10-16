import Svg from "./Svg";
import Bar from "./Bar";

export class Chart extends Svg {
	constructor(svg, data) {
		super(svg);

		this.padding = {
			y: 20,
			x: 20,
		};

		this.svg = svg;
		this.data = data;
	}

	init() {
		this.draw(this.data);
	}

	draw(data) {
		super.draw();

		const gutter = 5;

		const barWidth = Math.max(
			(this.width - (data.length - 1) * gutter - this.padding.x * 2) /
				data.length,
			2
		);
		const barHeight = this.height - this.padding.y * 2;

		for (let i = 0; i < data.length; i++) {
			const bar = new Bar({
				x: this.padding.x + i * barWidth + i * gutter,
				y: this.height - this.padding.y - (barHeight * data[i]) / 100,
				width: barWidth,
				height: (barHeight * data[i]) / 100,
				padding: this.padding,
				svg: this.svg,
			});

			bar.draw();
		}
	}

	update(data) {
		this.data = data;

		this.clear();
		this.init();
	}

	clear() {
		this.svg.innerHTML = "";
	}
}

export default Chart;
