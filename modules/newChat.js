import { format } from "prettier";

export function newChat($) {
  $(".new-chat").addEventListener("click", () => {
    $(".more-dropdown-wrapper").classList.remove("animate__fadeInDown");
    $(".more-dropdown-wrapper").classList.add("animate__fadeOutUp");
    $(".more").classList.add("hide");
    $(".check").classList.remove("hide");
    $(".more-container").setAttribute("data-height", "68px");
    $(".more-dropdown-wrapper").setAttribute("data-open", "closed");
    $("#chat").classList.remove("hide");
    $(".chat-wrapper").classList.add("hide");
    $(".unread-messages").classList.add("hide");
    $(".profiles").classList.add("hide");
    $(".dropdown").classList.add("animate__fadeInDown");
    $(".search-participants").classList.remove("hide");
    $(".dropdown").classList.remove("animate__fadeOutUp");
    $(".add-new").classList.remove("hide");
    $(".dropdown").classList.remove("hide");
    $(".search-participants p").textContent = "Til:";
    $(".search-participants").dataset.state = "open";
    $(".dropdown").setAttribute("data-open", "open");
    setTimeout(() => {
      $(".dropdown").setAttribute("data-state", "new");
      $(".chat-nav").setAttribute("data-state", "new");
      $(".back").setAttribute("data-state", "new");
      $(".participants").setAttribute("data-state", "new");
    }, 100);
    $("main").setAttribute("data-state", "chat");
    $(".chat-nav").classList = "chat-nav animate__animated animate__fadeIn animate-faster";
    //fix for position: fixed vs. transform problem
    $(".new-message-wrapper").classList = "new-message-wrapper hide";
    setTimeout(() => {
      $(".new-message-wrapper").classList = "new-message-wrapper animate__animated animate__fadeIn";
    }, 300);
    setTimeout(() => {
      $(".new-message-wrapper").classList = "new-message-wrapper animate__animated";
      $(".chat-container").classList = "chat-container animate__animated animate-faster";
    }, 800);
  });
}

export function newChatMobile($) {
  $(".new-chat").addEventListener("click", () => {
    if ($("body").clientWidth < 649) {
      $("#inbox").classList.add("hide");
    }
  });
}
