"use strict";
/* import { getContent } from "./modules/getContent"; */
import { displayOptions } from "./modules/displayOptions";
import { reactions } from "./modules/reactions";
import { participantsDropdown } from "./modules/participantsDropdown";
import { moreDropdown } from "./modules/moreDropdown";
import { shiftView } from "./modules/shiftView";
import { search } from "./modules/search";
import { newChat, newChatMobile } from "./modules/newChat";
import { messageOptions } from "./modules/messageOptions";
import { getContent } from "./modules/getContent";
import "@babel/polyfill";
import { doc } from "prettier";
window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("[Function] || script.js | init()");

  getContent();
  messageOptions();
  newChat();
  newChatMobile();
  displayOptions();
  reactions();
  participantsDropdown();
  moreDropdown();
  shiftView();
  search();
  scroll();
  window.addEventListener("resize", desktop);
  if (window.innerWidth > 659) {
    desktop();
  }
}

function scroll() {
  setTimeout(() => {
    document.querySelector(".overview-container").scrollTo({ top: 0, left: 0, behavior: "smooth" }); //////scroll to top
    document
      .querySelector("#chat")
      .scrollTo({ top: document.querySelector(".chat-wrapper").scrollHeight, left: 0, behavior: "smooth" }); //////scroll to bottom
  }, 100);
}

function desktop() {
  if (window.innerWidth > 659) {
    document.querySelector(".chat-nav").classList = "chat-nav";
    document.querySelector(".chat-container").classList = "chat-container";
    document.querySelector(".desk-search").classList.remove("hide");
    document.querySelector("#chat").classList.remove("hide");
    document.querySelector("#inbox").classList.remove("hide");
    document.querySelector(".inbox-nav").classList = "inbox-nav animate__animated animate__faster";
    document.querySelector(".inbox-container").classList = "inbox-container animate__animated animate__faster";
  } else {
    document.querySelector(".chat-nav").classList.add("hide");
    document.querySelector(".desk-search").classList.add("hide");
    document.querySelector("#chat").classList.add("hide");
  }
}
