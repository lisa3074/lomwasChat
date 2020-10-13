import { resetChatNav } from "./resetChatNav";

export function displayInbox() {
  const $ = document.querySelector.bind(document);
  console.log("[Function] || shiftviewMobile.js | displayInbox()");
  $("#inbox").classList.remove("hide");
  $(".inbox-container").classList = "inbox-container animate__animated animate__slideInLeft animate__faster";
  if (window.innerWidth < 650) {
    $(".chat-nav").classList = "chat-nav animate__animated animate__fadeOut animate-faster";
    $(".chat-container").classList = "chat-container animate__animated animate__slideOutRight animate__faster";
  }
  $("main").setAttribute("data-state", "inbox");

  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    if (window.innerWidth < 650) {
      $("#chat").classList.add("hide");
    }
    $(".inbox-nav").classList = "inbox-nav animate__animated animate__fadeIn animate-faster";
    if (window.innerWidth < 650) {
      $(".chat-nav").classList.add("hide");
    }
  }, 400);
  resetChatNav();
}
