import Svg from "./Svg";
import Bar from "./Bar";
import Utility from "../utils/Utility";

import Line from "./Line";
import Label from "./Label";

export class Chart extends Svg {
	constructor(svg, data) {
		super(svg);

		// this.padding = {
		// 	y: 10,
		// 	x: 10,
		// };

		this.padding = {
			y: 30,
			x: 30,
		};

		this.svg = svg;
		this.data = data;

		this.months = Utility.months(data.length, "long");

		this.max = Utility.max(this.data);
		this.step = this.height / this.max;
	}

	init() {
		this.draw(this.data);
	}

	draw() {
		super.draw();

		this.data.forEach((data, index) => {
			const gutter = 10;
			const baseWidth = (this.width - this.padding.x * 2) / this.data.length;

			const barHeight = (this.height / 100) * data;
			const barWidth = baseWidth - gutter * 5;

			const size = {
				height: (this.height / 100) * data,
				width: baseWidth - gutter * 5,
			};

			this.drawXAxis(index, baseWidth);
			this.drawYAxis(index, baseWidth);

			// this.drawBar({
			// 	index,
			// 	baseWidth,
			// 	barWidth,
			// 	barHeight,
			// 	padding: this.padding,
			// });

			this.drawBar({
				index: index,
				baseWidth: baseWidth,
				size: size,
			});
		});
	}

	drawXAxis(index, baseWidth) {
		const xAxis = new Line({
			x1: 0,
			x2: this.width,
			y1: this.height - this.padding.y - index * baseWidth,
			y2: this.height - this.padding.y - index * baseWidth,
			svg: this.svg,
		});
		xAxis.draw();

		this.drawXAxisLabel(index, baseWidth);
	}

	drawXAxisLabel(index, baseWidth) {
		const xLabel = new Label({
			x: this.padding.x + index * baseWidth + baseWidth / 2,
			y: this.height - this.padding.y / 2,
			text: this.months[index],
			svg: this.svg,
		});
		xLabel.draw();
	}

	drawYAxis(index, baseWidth) {
		const yAxis = new Line({
			x1: this.padding.x + index * baseWidth,
			x2: this.padding.x + index * baseWidth,
			y1: 0,
			y2: this.height,
			svg: this.svg,
		});
		yAxis.draw();

		// this.drawYAxisLabel();
	}

	drawYAxisLabel(index, step) {
		const yLabel = new Label({
			x1: 0,
			x2: this.width,
			y: this.height - max / step,
			text: index * step,
			svg: this.svg,
		});

		yLabel.draw();
	}

	drawBar({ index, baseWidth, size }) {
		const bar = new Bar({
			x: this.padding.x + index * baseWidth + (baseWidth - size.width) / 2,
			y: this.height - size.height - this.padding.y + 1,
			width: size.width,
			height: size.height,
			padding: this.padding,
			text: this.months[index],
			svg: this.svg,
		});

		bar.draw();
	}

	update(data) {
		this.clear();
		this.draw(data);
	}

	clear() {
		this.svg.innerHTML = "";
	}
}

export default Chart;
