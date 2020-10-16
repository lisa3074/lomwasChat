"use strict";
import { getContent } from "./modules/db/getContent";
import { chatDelegation } from "./modules/chat/chatDelegation";
import { inboxDelegation } from "./modules/inbox/inboxDelegation";
import "@babel/polyfill";

window.addEventListener("DOMContentLoaded", mainDelegation);

function mainDelegation() {
  console.log("[Function] || script.js | mainDelegation()");
  /* vars (being sent to almost all modules) */
  const $ = document.querySelector.bind(document);
  const $a = document.querySelectorAll.bind(document);
  chatDelegation($, $a);
  inboxDelegation($, $a);
  getContent();
  scroll($);
  getScreenSize($, $a);
  window.addEventListener("resize", () => {
    getScreenSize($, $a);
  });
}

export function checkDataState($) {
  console.log("[Function] || script.js | checkDataState()");
  if ($(".chat-nav").dataset.state === "new") {
    setTimeout(() => {
      $(".check").classList.add("hide");
      $(".menu").classList.remove("hide");
    }, 500);
  }
}

function scroll($) {
  console.log("[Function] || script.js | scroll()");
  setTimeout(() => {
    $(".overview-container").scrollTo({ top: 0, left: 0, behavior: "smooth" }); //////scroll to top
    $("#chat").scrollTo({ top: $(".chat-wrapper").scrollHeight, left: 0, behavior: "smooth" }); //////scroll to bottom
  }, 100);
  if ($("body").clientWidth < 650) {
    console.log($("body").clientWidth);
    window.scrollTo(0, 0);
  }
}

function getScreenSize($, $a) {
  console.log("[Function] || script.js | getScreenSize()");
  if ($("body").clientWidth > 649) {
    $(".profiles").setAttribute("data-state", "closed");
    $(".chat-nav").classList = "chat-nav";
    $(".chat-container").classList = "chat-container";
    $a(".desk-search, #chat, #inbox").forEach((el) => {
      el.classList.remove("hide");
    });
    $(".inbox-nav").classList = "inbox-nav";
    $(".inbox-container").classList = "inbox-container";
  } else {
    $a(".desk-search, #chat, .chat-nav").forEach((el) => {
      el.classList.add("hide");
    });
  }
}
