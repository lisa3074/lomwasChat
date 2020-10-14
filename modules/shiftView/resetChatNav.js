export function resetChatNav($) {
  console.log("[Function] || shiftviewMobile.js | reset()");
  //Close dropdowns from top navigation, and reset animation classes if any open.
  $(".more-dropdown-wrapper").classList.remove("animate__fadeInDown");
  $(".more-dropdown-wrapper").classList.add("animate__fadeOutUp");
  $(".more-dropdown-wrapper").setAttribute("data-open", "closed");
  $(".chat-nav .more-container").setAttribute("data-height", "68px");
  $(".dropdown").classList.remove("animate__fadeInDown");
  $(".dropdown").classList.add("animate__fadeOutUp");
  $(".dropdown").setAttribute("data-open", "closed");
  setTimeout(() => {
    $(".more-dropdown-wrapper").classList.add("hide");
    $(".dropdown").classList.add("hide");
  }, 800);
}
