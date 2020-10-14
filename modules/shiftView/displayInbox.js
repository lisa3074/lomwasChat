import { resetChatNav } from "./resetChatNav";

export function displayInbox() {
  const $ = document.querySelector.bind(document);
  console.log("[Function] || displayInbox.js | displayInbox() | " + window.innerWidth);
  $("#inbox").classList.remove("hide");
  $(".inbox-container").classList = "inbox-container animate__animated animate__slideInLeft animate__faster";
  $("main").setAttribute("data-state", "inbox");
  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    $(".inbox-nav").classList = "inbox-nav animate__animated animate__fadeIn animate-faster";
  }, 400);
  resetChatNav();
}

export function displayInboxMobile() {
  console.log("[Function] || displayInbox.js | displayInboxMobile() | " + window.innerWidth);
  const $ = document.querySelector.bind(document);
  if (window.innerWidth < 650) {
    $(".chat-nav").classList = "chat-nav animate__animated animate__fadeOut animate-faster";
    $(".chat-container").classList = "chat-container animate__animated animate__slideOutRight animate__faster";
  }
  setTimeout(() => {
    if (window.innerWidth < 650) {
      $("#chat").classList.add("hide");
      $(".chat-nav").classList.add("hide");
    }
  }, 400);
}
