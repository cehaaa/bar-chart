export class Utility {
	static generateRandomNumber(length, min, max) {
		return Math.floor(Math.random() * (max - min) + min);
	}

	static generateRandomData(length, min, max) {
		const res = [];
		for (let i = 0; i < length; i++) {
			res.push(Math.floor(Math.random() * (max - min) + min));
		}
		return res;
	}
}

export default Utility;
