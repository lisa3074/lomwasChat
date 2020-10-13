export function resetChatNav() {
  const $ = document.querySelector.bind(document);
  console.log("[Function] || shiftviewMobile.js | reset()");
  const participants = $(".dropdown");
  const more = $(".more-dropdown-wrapper");
  const moreContainer = $(".chat-nav .more-container");

  //Close dropdowns from top navigation, and reset animation classes if any open.
  more.classList.remove("animate__fadeInDown");
  more.classList.add("animate__fadeOutUp");
  more.setAttribute("data-open", "closed");
  moreContainer.setAttribute("data-height", "68px");
  participants.classList.remove("animate__fadeInDown");
  participants.classList.add("animate__fadeOutUp");
  participants.setAttribute("data-open", "closed");
  setTimeout(() => {
    more.classList.add("hide");
    participants.classList.add("hide");
  }, 800);
}
