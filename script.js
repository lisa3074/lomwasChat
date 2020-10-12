"use strict";
/* import { getContent } from "./modules/getContent"; */
import { displayOptions } from "./modules/displayOptions";
import { reactions } from "./modules/reactions";
import { participantsDropdown } from "./modules/participantsDropdown";
import { moreDropdown } from "./modules/moreDropdown";
import { shiftviewMobile } from "./modules/shiftviewMobile";
import { search } from "./modules/search";
import { newChat } from "./modules/newChat";

import "@babel/polyfill";
window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("[Function] || script.js | init()");
  /*   getContent(); */
newChat();
  displayOptions();
  reactions();
  participantsDropdown();
  moreDropdown();
  shiftviewMobile();
  search();
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); //////scroll to top
}
