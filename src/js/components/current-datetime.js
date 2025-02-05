import { DateTime } from "luxon";

class CurrentDateTime extends HTMLElement {
	constructor() {
		super();
		const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
		this.textContent = `This page was loaded on ${date}.`;
		this.style.paddingBlockEnd = "128px";
	}
}

customElements.define("current-datetime", CurrentDateTime);

export default CurrentDateTime;
