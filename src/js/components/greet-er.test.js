import GreetEr from "./greet-er.js?define=false";
const { expect } = chai;

describe("The GreetEr web component", () => {
	it("has a default tag name", () => {
		expect(GreetEr.tag).to.equal("greet-er");
	});

	it("is not defined by default because we imported it with `?define=false`", () => {
		expect(customElements.get(GreetEr.tag)).to.be.undefined;
	});

	it("can be defined", () => {
		expect(GreetEr.define).to.be.a("function");
		GreetEr.define();
		expect(customElements.get(GreetEr.tag)).to.equal(GreetEr);
	});
});
