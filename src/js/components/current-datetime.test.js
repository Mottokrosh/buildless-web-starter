import CurrentDateTime from "./current-datetime.js";
import { DateTime } from "luxon";
const { expect } = chai;

describe("The CurrentDateTime web component", () => {
	it("sets its own tag name and self defines", () => {
		expect(customElements.get("current-datetime")).to.exist;
	});

	it("outputs the current date and time", () => {
		const instance = new CurrentDateTime();
		const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
		const text = `This page was loaded on ${date}.`;
		expect(instance.textContent).to.equal(text);
	});
});
