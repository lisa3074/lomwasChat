import { displayFirstNames } from "../chatNavigation";
export function findDevice($, $a) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/newChat.js | setNewChat()");
  //remove and reset animations
  $(".dropdown").classList.remove("animate__fadeInDown");
  $(".dropdown").classList.add("animate__fadeOutUp");
  $("#chat").classList = "animate__animated animate__fadeOut animate__faster";
  //if desktop, wait for animation/fadeout to end before calling setNewChat
  if ($("body").clientWidth > 650) {
    setTimeout(() => {
      setNewChat($, $a);
    }, 300);
  } else {
    setNewChat($, $a);
  }
}

function setNewChat($, $a) {
  //Set data attributes on navigation
  $(".menu-container").setAttribute("data-height", "68px");
  $("main").setAttribute("data-state", "chat");
  document.querySelectorAll(".profiles, .menu-dropdown-wrapper").forEach((element) => {
    element.setAttribute("data-state", "closed");
  });
  document.querySelectorAll(".dropdown, .search-participants").forEach((element) => {
    element.setAttribute("data-state", "open");
  });
  setTimeout(() => {
    document.querySelectorAll(".dropdown, .chat-nav, .back, .participants").forEach((element) => {
      element.setAttribute("data-state", "new");
      $(".menu-dropdown-wrapper").classList = "menu-dropdown-wrapper animate__animated  animate__fadeOutUp hide";
    });
  }, 100);
  displayNewChat($, $a);
}

function displayNewChat($, $a) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/newChat.js | displayNewChat()");
  const is_safari = navigator.userAgent.indexOf("Safari") > -1;
  //If NOT safari browser, set animation
  if (!is_safari) {
    $("#chat").classList = "animate__animated animate__fadeIn animate__faster";
  } else {
    $("#chat").classList = "";
  }
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

  //fix for position: fixed vs. transform problem (CSS error that hasn't yet been fixed)
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
  displayFirstNames($, $a);
}
