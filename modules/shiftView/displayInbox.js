import { resetChatNav } from "./resetChatNav";

export function displayInbox($) {
  console.log("[Function] || displayInbox.js | displayInbox()");
  $("#inbox").classList.remove("hide");
  $(".inbox-container").classList = "inbox-container animate__animated animate__slideInLeft animate__faster";
  $("main").setAttribute("data-state", "inbox");
  setTimeout(() => {
    $(".inbox-nav").classList = "inbox-nav animate__animated animate__fadeIn animate-faster";
  }, 400);
  window.scrollTo(0, 0);
  resetChatNav($);
}

export function displayInboxMobile($) {
  console.log("[Function] || displayInbox.js | displayInboxMobile()");
  if (document.querySelector("body").clientWidth < 650) {
    $(".chat-nav").classList = "chat-nav animate__animated animate__fadeOut animate-faster";
    $(".chat-container").classList = "chat-container animate__animated animate__slideOutRight animate__faster";
    setTimeout(() => {
      $("#chat").classList.add("hide");
      $(".chat-nav").classList.add("hide");
    }, 400);
  }
}
