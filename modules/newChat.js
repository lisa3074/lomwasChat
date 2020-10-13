export function newChat() {
  const $ = document.querySelector.bind(document);
  const $a = document.querySelectorAll.bind(document);
  $(".new-chat").addEventListener("click", () => {
    if (window.innerWidth < 649) {
      $("#inbox").classList.add("hide");
    }
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
    $(".dropdown").setAttribute("data-open", "open");
    $(".dropdown").setAttribute("data-state", "new");
    $(".chat-nav").setAttribute("data-state", "new");
    $(".back").setAttribute("data-state", "new");
    $(".participants").setAttribute("data-state", "new");
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
