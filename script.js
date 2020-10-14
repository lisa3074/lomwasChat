"use strict";
import { displayOptions } from "./modules/displayOptions";
import { reactions } from "./modules/reactions";
import { participantsDropdown } from "./modules/participantsDropdown";
import { moreDropdown } from "./modules/moreDropdown";
import { search } from "./modules/search";
import { newChat, newChatMobile } from "./modules/newChat";
import { messageOptions } from "./modules/messageOptions";
import { getContent } from "./modules/getContent";
import { displayChat, displayChatDesktop } from "./modules/shiftView/displayChat";
import { displayAddParticipant } from "./modules/shiftView/displayAddParticipant";
import { resetNavBar } from "./modules/shiftView/resetNavBar";
import "@babel/polyfill";

window.addEventListener("DOMContentLoaded", delegation);

function delegation() {
  console.log("[Function] || script.js | init()");
  /* vars (being sent to almost all modules) */
  const $ = document.querySelector.bind(document);
  const $a = document.querySelectorAll.bind(document);

  getContent();
  messageOptions($);
  newChat($);
  newChatMobile($);
  displayOptions($);
  reactions($);
  participantsDropdown($);
  moreDropdown($);
  search($);
  scroll($);
  getScreenSize($, $a);
  window.addEventListener("resize", () => {
    getScreenSize($, $a);
  });
  $(".more-container .add-participant").addEventListener("click", (e) => {
    displayAddParticipant($);
  });
  $(".unread-messages").addEventListener("click", () => {
    unreadMessages($);
  });
  $a(".overview-wrapper").forEach((conversation) => {
    conversation.addEventListener("click", (e) => {
      $(".more-container").classList.remove("hide");
      if ($(".chat-nav").dataset.state === "new") {
        $(".dropdown").classList = "dropdown animate__animated animate__fadeOutUp";
        $(".dropdown").dataset.state = "closed";
        setTimeout(() => {
          $(".dropdown").classList.add("hide");
        }, 500);
        checkDataState();
      } else {
        $(".dropdown").classList.add("hide");
      }
      //display chat interface with click on group overview and hide overview}
      if ($("body").clientWidth < 650) {
        displayChat($);
      } else {
        //go to new conversation on desktop
        displayChatDesktop($);
      }
      console.log($("body").clientWidth);
    });
  });

  function checkDataState() {
    if ($(".chat-nav").dataset.state === "new") {
      setTimeout(() => {
        $(".check").classList.add("hide");
        $(".more").classList.remove("hide");
      }, 500);
    }
  }

  //display inbox with clik on "back" and hide chat interface
  $a(".back, .more, .overview-wrapper").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      resetNavBar($, e);
      $(".more-container").classList.remove("hide");
      checkDataState();
      if ($(".chat-nav").dataset.state === "new" && $("body").clientWidth < 650) {
        setTimeout(() => {
          $("#inbox").classList.remove("hide");
          $("#chat").classList.add("hide");
          $(".dropdown").classList.add("hide");
          $(".chat-nav").classList.add("hide");
          $(".check").classList.add("hide");
          $(".more").classList.remove("hide");
        }, 500);
      }
    });
  });
}

function scroll($) {
  setTimeout(() => {
    console.log("scroll");
    $(".overview-container").scrollTo({ top: 0, left: 0, behavior: "smooth" }); //////scroll to top
    $("#chat").scrollTo({ top: $(".chat-wrapper").scrollHeight, left: 0, behavior: "smooth" }); //////scroll to bottom
  }, 100);
  if ($("body").clientWidth < 650) {
    console.log($("body").clientWidth);
    window.scrollTo(0, 0);
  }
}

function getScreenSize($, $a) {
  if ($("body").clientWidth > 649) {
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

function unreadMessages($) {
  console.log("[Function] || shiftview.js | shiftview()");
  //scroll to top, when clicking "unread messages". Should be replaced with a scroll to first unread message.
  if ($("body").clientWidth > 650) {
    $("#chat").scrollTo({ top: 0, left: 0, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  $(".unread-messages").classList = "unread-messages animate__animated animate__fadeOut";
}
