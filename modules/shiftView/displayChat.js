export function displayChat($) {
  console.log("[Function] || displayChat.js | displayChat() ");
  /* vars */
  const animateFast = " animate__animated animate__faster animate__";

  $(".inbox-nav").classList = animateFast + "fadeOut inbox-nav";
  $(".inbox-container").classList = animateFast + "slideOutLeft animate__fadeOut inbox-container";
  $(".chat-container").classList = animateFast + "slideInRight animate__fadeIn chat-container";
  setTimeout(() => {
    $("#inbox").classList.add("hide");
    $(".inbox-nav").classList.add("hide");
    $(".chat-nav").classList = animateFast + "fadeIn chat-nav";
    $(".chat-container").classList = animateFast + "fadeIn chat-container";
  }, 400);
  setTimeout(() => {
    window.scrollTo({ top: $(".chat-wrapper").scrollHeight, left: 0, behavior: "smooth" }); //////scroll to bottom
  }, 800);
  setChatUp($);
}
export function displayChatDesktop($) {
  console.log("[Function] || displayChat.js | displayChatDesktop() ");
  setTimeout(() => {
    $("#chat").scrollTo({ top: $(".chat-wrapper").scrollHeight, left: 0, behavior: "smooth" }); //////scroll to bottom
  }, 400);

  setChatUp($);
}

function setChatUp($) {
  $("main").setAttribute("data-state", "chat");
  $("#chat").classList.remove("hide");
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
