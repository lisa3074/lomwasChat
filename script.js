"use strict";
import { getContent } from "./modules/getContent";
import { displayOptions } from "./modules/displayOptions";
import { reactions } from "./modules/reactions";
import "@babel/polyfill";
window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("[Function] || init");
  getContent();
  displayOptions();
  reactions();
}
