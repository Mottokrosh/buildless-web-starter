class GreetEr extends HTMLElement {
	static tag = "greet-er";

	/**
	 * Static method to define the custom element.
	 * 
	 * @param string tag 
	 * @returns void
	 */
	static define(tag = this.tag) {
		this.tag = tag;

		const name = customElements.getName(this);
		if (name) return console.warn(`${this.name} already defined as <${name}>!`);

		const ce = customElements.get(tag);
		if (Boolean(ce) && ce !== this) return console.warn(`<${tag}> already defined as ${ce.name}!`);

		customElements.define(tag, this);
	}

	/**
	 * Static initialization block. By default the component registers itself,
	 * but if you specify `?define=false` in the import path, it will not.
	 * Alternatively you can specify a custom tag name with `?define=my-tag-name`.
	 */
	static {
		const tag = new URL(import.meta.url).searchParams.get("define") || this.tag;
		if (tag !== "false") this.define(tag);
	}

	static get observedAttributes() {
		return ["name"];
	};

	get name() {
		return this.getAttribute("name") || "unknown person";
	}

	set name(value) {
		this.setAttribute("name", value);
	}

	attributeChangedCallback(attr, oldValue, newValue) {
		if (!this.constructor.observedAttributes.includes(attr)) return;
		if (oldValue === newValue) return;
		this.render();
	}

	render() {
		this.innerHTML = `Hello, ${this.name}!`;
	}

	connectedCallback() {
		this.render();
	}
}