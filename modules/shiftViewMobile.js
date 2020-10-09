const HTML = {};

export function shiftviewMobile() {
  console.log("[Function] || shiftviewMobile.js | shiftviewMobile()");
  /* vars */
  HTML.inboxContainer = document.querySelector(".inbox-container");
  HTML.chatContainer = document.querySelector(".chat-container");
  HTML.chatNav = document.querySelector(".chat-nav");
  HTML.inboxNav = document.querySelector(".inbox-nav");
  HTML.chatList = document.querySelector(".chat-wrapper");
  HTML.chat = document.querySelector("#chat");
  HTML.inbox = document.querySelector("#inbox");

  //display chat interface with click om group overview and hide overview
  document.querySelectorAll(".overview-wrapper").forEach((conversation) => {
    conversation.addEventListener("click", () => {
      displayChat();
    });
  });
  //display inbox with clik on "back" and hide chat interface
  document.querySelector(".back").addEventListener("click", () => {
    displayInbox();
  });
  //scroll to top, when clicking "unread messages". Should be replaced with a scroll to first unread message.
  document.querySelector(".unread-messages").addEventListener("click", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); //////scroll to top
    document.querySelector(".unread-messages").classList = "unread-messages animate__animated animate__fadeOut";
  });
}

function displayChat() {
  console.log("[Function] || shiftviewMobile.js | displayChat()");
  document.querySelector("main").setAttribute("data-state", "chat");
  HTML.chat.classList.remove("hide");
  HTML.inboxNav.classList = "inbox-nav animate__animated animate__fadeOut animate-faster";
  HTML.inboxContainer.classList = "inbox-container animate__animated animate__slideOutLeft animate__faster";
  HTML.chatContainer.classList = "chat-container animate__animated animate__slideInRight animate__faster";
  setTimeout(() => {
    HTML.inbox.classList.add("hide");
    HTML.inboxNav.classList.add("hide");
    HTML.chatNav.classList = "chat-nav animate__animated animate__fadeIn animate__faster";
    HTML.chatContainer.classList = "chat-container animate__animated animate__fadeIn animate__faster";
    window.scrollTo({ top: HTML.chatList.scrollHeight, left: 0, behavior: "smooth" }); //////scroll to bottom
  }, 400);
}

function displayInbox() {
  console.log("[Function] || shiftviewMobile.js | displayInbox()");
  HTML.inbox.classList.remove("hide");
  HTML.chatNav.classList = "chat-nav animate__animated animate__fadeOut animate-faster";
  HTML.inboxContainer.classList = "inbox-container animate__animated animate__slideInLeft animate__faster";
  HTML.chatContainer.classList = "chat-container animate__animated animate__slideOutRight animate__faster";
  document.querySelector("main").setAttribute("data-state", "inbox");

  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    HTML.chat.classList.add("hide");
    HTML.inboxNav.classList = "inbox-nav animate__animated animate__fadeIn animate-faster";
    HTML.chatNav.classList.add("hide");
  }, 400);
  resetChatNav();
}

function resetChatNav() {
  console.log("[Function] || shiftviewMobile.js | reset()");
  const participants = document.querySelector(".dropdown");
  const more = document.querySelector(".more-dropdown-wrapper");
  const moreContainer = document.querySelector(".chat-nav .more-container");

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
