import { hideDropdowns } from "../chat/chatNavigation";
import { displayChat, displayChatMobile } from "../chat/chatBody";

export function displayInbox($) {
  console.log("[Function] || INBOX/inbox.js | displayInbox()");
  $("#inbox").classList.remove("hide");
  $(".inbox-container").classList = "inbox-container animate__animated animate__slideInLeft animate__faster";
  $("main").setAttribute("data-state", "inbox");
  setTimeout(() => {
    $(".inbox-nav").classList = "inbox-nav animate__animated animate__fadeIn animate-faster";
  }, 400);
  window.scrollTo(0, 0);
  $(".overview-wrapper").scrollTo(0, 0);
  hideDropdowns($);
}

export function hideChatOnResize($) {
  console.log("[Function] || INBOX/inbox.js | hideChatOnResize()");
  if (document.querySelector("body").clientWidth < 650) {
    $(".chat-nav").classList = "chat-nav animate__animated animate__fadeOut animate-faster";
    $(".chat-container").classList = "chat-container animate__animated animate__slideOutRight animate__faster";
    setTimeout(() => {
      $("#chat").classList.add("hide");
      $(".chat-nav").classList.add("hide");
    }, 400);
  }
}
export function displayConversation($, $a) {
  console.log("[Function] || INBOX/inbox.js | displayConversation()");
  $(".dropdown").classList = "dropdown animate__animated animate__fadeOutUp";
  if ($("body").clientWidth < 650) {
    displayChatMobile($, $a);
  } else {
    //go to new conversation on desktop
    displayChat($, $a);
  }
}

export function displayInboxGroups($, $a, e) {
  console.log("[Function] || INBOX/inbox.js | displayInboxGroups()");
  if (e.target.classList[0] === "back") {
    if ($(".chat-nav").dataset.state === "new") {
      setTimeout(() => {
        $(".unread-messages").classList.remove("hide");
      }, 500);
      if ($("body").clientWidth < 650) {
        $(".chat-wrapper").classList.add("hide");
        setTimeout(() => {
          $a("#chat, .dropdown, .chat-nav, .check").forEach((elm) => {
            elm.classList.add("hide");
          });
          $a("#inbox, .menu").forEach((elm) => {
            elm.classList.remove("hide");
          });
        }, 500);
      }
    }
  }
}
