import { displayInbox, displayInboxMobile } from "./displayInbox";
export function resetNavBar(e) {
  const $ = document.querySelector.bind(document);

  if ($(".back").dataset.state === "add" || $(".back").dataset.state === "new") {
    setTimeout(() => {
      $(".profiles").classList.remove("hide");
      $(".arrow").classList.remove("hide");
      $(".search-participants").classList.add("hide");
      $(".add-new").classList.add("hide");
      $(".leave").classList.add("hide");
      $(".chat-container .chat-wrapper").classList.remove("hide");
      $(".participants .dropdown").setAttribute("data-state", "view");
      $(".back").setAttribute("data-state", "view");
      $(".chat-nav").setAttribute("data-state", "view");
      $(".participants").setAttribute("data-state", "view");
    }, 500);
    if (e.target.classList.contains("back")) {
      $(".dropdown").setAttribute("data-open", "closed");
      $(".dropdown").classList.toggle("animate__fadeInDown");
      $(".dropdown").classList.toggle("animate__fadeOutUp");
    }
  } else if (e.target.classList.contains("back")) {
    displayInbox();
    window.addEventListener("resize", displayInboxMobile());
  }
}
