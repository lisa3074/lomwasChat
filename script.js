"use strict";
/* import { getContent } from "./modules/getContent"; */
import { displayOptions } from "./modules/displayOptions";
import { reactions } from "./modules/reactions";
import { participantsDropdown } from "./modules/participantsDropdown";
import { moreDropdown } from "./modules/moreDropdown";
import { shiftView } from "./modules/shiftView";
import { search } from "./modules/search";
import { newChat } from "./modules/newChat";
import { messageOptions } from "./modules/messageOptions";
import { getContent } from "./modules/getContent";
import "@babel/polyfill";
window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("[Function] || script.js | init()");
  getContent();
  messageOptions();
  newChat();
  displayOptions();
  reactions();
  participantsDropdown();
  moreDropdown();
  shiftView();
  search();
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); //////scroll to top
  if (window.innerWidth > 659) {
    desktop();
  }
}

function desktop() {
  document.querySelector("#chat").classList.remove("hide");
  document.querySelector(".chat-nav").classList.remove("hide");
  document.querySelector(".desk-search").classList.remove("hide");
}
