import Svg from "./Svg";
import Utility from "./Utility";
import Bar from "./Bar";

export class Chart extends Svg {
	constructor(svg) {
		super(svg);

		this.padding = {
			y: 20,
			x: 20,
		};

		this.svg = svg;
	}

	init() {
		this.draw();

		const data = Utility.generateRandomData(50, 10, 100);

		const barWidth = (this.width - this.padding.x * 2) / data.length;
		const barHeight = this.height - this.padding.y * 2;

		for (let i = 0; i < data.length; i++) {
			const bar = new Bar({
				x: this.padding.x + i * barWidth,
				y: this.height - this.padding.y - (barHeight * data[i]) / 100,
				width: barWidth,
				height: (barHeight * data[i]) / 100,
				padding: this.padding,
				svg: this.svg,
			});

			bar.draw();
		}
	}
}

export default Chart;
