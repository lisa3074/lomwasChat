import { displayFirstNames } from "../chatNavigation";
export function setNewChat($) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/newChat.js | setNewChat()");
  $(".profiles").setAttribute("data-state", "closed");
  $(".menu-container").setAttribute("data-height", "68px");
  $(".menu-dropdown-wrapper").setAttribute("data-open", "closed");
  $("main").setAttribute("data-state", "chat");
  $(".dropdown").setAttribute("data-open", "open");
  $(".search-participants").dataset.state = "open";
  setTimeout(() => {
    document.querySelectorAll(".dropdown, .chat-nav, .back, .participants").forEach((element) => {
      element.setAttribute("data-state", "new");
    });
  }, 100);

  displayNewChat($);
}

function displayNewChat($) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/newChat.js | displayNewChat()");
  $(".menu-dropdown-wrapper").classList.remove("animate__fadeInDown");
  $(".menu-dropdown-wrapper").classList.add("animate__fadeOutUp");
  document.querySelectorAll(".menu, .chat-wrapper, .unread-messages, .profiles").forEach((element) => {
    element.classList.add("hide");
  });
  document.querySelectorAll(".check, #chat, .add-new, .search-participants, .dropdown").forEach((element) => {
    element.classList.remove("hide");
  });

  $(".dropdown").classList.add("animate__fadeInDown");
  $(".dropdown").classList.remove("animate__fadeOutUp");
  $(".search-participants p").textContent = "Til:";

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
  //if mobile hide inbox
  if ($("body").clientWidth < 649) {
    $("#inbox").classList.add("hide");
  }
  displayFirstNames($);
}
