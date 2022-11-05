export class Utility {
	static generateRandomNumber(min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	static generateRandomData(length, min, max) {
		const res = [];
		for (let i = 0; i < length; i++) {
			res.push(Math.floor(Math.random() * (max - min) + min));
		}
		return res;
	}

	static months(count, type = "short") {
		const short = [
			"Jan",
			"Feb",
			"Mar",
			"Apr",
			"May",
			"Jun",
			"Jul",
			"Aug",
			"Sep",
			"Oct",
			"Nov",
			"Dec",
		];

		const long = [
			"January",
			"February",
			"March",
			"April",
			"May",
			"June",
			"July",
			"August",
			"September",
			"October",
			"November",
			"December",
		];

		return type === "short" ? short.splice(0, count) : long.splice(0, count);
	}

	static generateRandomColor() {
		return `#${Math.floor(Math.random() * 16777215).toString(16)}`;
	}

	static max(data) {
		return Math.max(...data);
	}
}

export default Utility;
