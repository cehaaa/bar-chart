export class Popover {
	constructor({ rect, bar }) {
		this.rect = rect;
		this.width = 10;
		this.bar = bar;
		this.popover = document.querySelector(".popover");
	}

	init() {
		this.rect.addEventListener("mouseenter", () => {
			this.popover.classList.add("popover--show");

			this.popover.style.left = `${
				this.bar.x + this.bar.width / 2 - this.width / 2
			}px`;
			this.popover.style.top = `${this.bar.y - this.bar.padding.y}px`;

			this.popoverTitle();
			this.popoverIndicator();
			this.popoverValue();

			this.rect.addEventListener("mouseleave", () => {
				this.popover.classList.remove("popover--show");
			});
		});
	}

	popoverTitle() {
		const popoverTitle = document.querySelector(".popover__title");
		popoverTitle.innerHTML = this.bar.text;
	}

	popoverIndicator() {
		const popoverIndicator = document.querySelector(".popover__indicator");
		popoverIndicator.style.background = this.bar.color;
	}

	popoverValue() {
		const popoverValue = document.querySelector(".popover__value");
		popoverValue.innerHTML = this.bar.height;
	}
}
export default Popover;
