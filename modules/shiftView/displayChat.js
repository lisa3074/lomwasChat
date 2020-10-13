export function displayChat() {
  const $ = document.querySelector.bind(document);
  console.log("[Function] || shiftviewMobile.js | displayChat()");
  $("main").setAttribute("data-state", "chat");
  $("#chat").classList.remove("hide");
  $(".inbox-nav").classList = "inbox-nav animate__animated animate__fadeOut animate-faster";
  $(".inbox-container").classList = "inbox-container animate__animated animate__slideOutLeft animate__faster";
  $(".chat-container").classList = "chat-container animate__animated animate__slideInRight animate__faster";
  setTimeout(() => {
    $("#inbox").classList.add("hide");
    $(".inbox-nav").classList.add("hide");
    $(".chat-nav").classList = "chat-nav animate__animated animate__fadeIn animate__faster";
    $(".chat-container").classList = "chat-container animate__animated animate__fadeIn animate__faster";
    window.scrollTo({ top: $(".chat-wrapper").scrollHeight, left: 0, behavior: "smooth" }); //////scroll to bottom
  }, 400);
  $(".dropdown").setAttribute("data-state", "view");
  $(".chat-nav").setAttribute("data-state", "view");
  $(".back").setAttribute("data-state", "view");
  $(".participants").setAttribute("data-state", "view");
  $(".profiles").classList.remove("hide");
  $(".chat-wrapper").classList.remove("hide");
  $(".unread-messages").classList.remove("hide");
  $(".search-participants").classList.add("hide");
  $(".add-new").classList.add("hide");
}
export function displayChatDesktop() {
  const $ = document.querySelector.bind(document);
  console.log("[Function] || shiftviewMobile.js | displayChat()");
  $("main").setAttribute("data-state", "chat");
  $("#chat").classList.remove("hide");
  $(".inbox-nav").classList = "inbox-nav animate__animated animate__fadeOut animate-faster";
  $(".inbox-container").classList = "inbox-container animate__animated animate__slideOutLeft animate__faster";
  $(".chat-container").classList = "chat-container animate__animated animate__slideInRight animate__faster";
  setTimeout(() => {
    $("#inbox").classList.add("hide");
    $(".inbox-nav").classList.add("hide");
    $(".chat-nav").classList = "chat-nav animate__animated animate__fadeIn animate__faster";
    $(".chat-container").classList = "chat-container animate__animated animate__fadeIn animate__faster";
    window.scrollTo({ top: $(".chat-wrapper").scrollHeight, left: 0, behavior: "smooth" }); //////scroll to bottom
  }, 400);
  $(".dropdown").setAttribute("data-state", "view");
  $(".chat-nav").setAttribute("data-state", "view");
  $(".back").setAttribute("data-state", "view");
  $(".participants").setAttribute("data-state", "view");
  $(".profiles").classList.remove("hide");
  $(".chat-wrapper").classList.remove("hide");
  $(".unread-messages").classList.remove("hide");
  $(".search-participants").classList.add("hide");
  $(".add-new").classList.add("hide");
}
