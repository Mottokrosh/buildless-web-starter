import "./components/greet-er.js";
import "sparkly-text";
import { DateTime } from "luxon";


const mainEl = document.querySelector("main");
const date = DateTime.now().toLocaleString(DateTime.DATETIME_FULL);
const paragraph = document.createElement("p");
paragraph.textContent = `This page was loaded on ${date}.`;
paragraph.style.paddingBlockEnd = "128px";
mainEl.append(paragraph);
