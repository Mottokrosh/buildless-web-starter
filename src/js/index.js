import { test } from "./components/test.js";
import { DateTime } from "luxon";

test();

const mainEl = document.querySelector("main");
const date = DateTime.now()
	.setZone("Europe/Berlin")
	.minus({ weeks: 1 })
	.endOf("day")
	.toISO();
mainEl.append(`<p>${date}</p>`);
