export function shiftviewMobile() {
  console.log("[Function] || shiftviewMobile.js | shiftviewMobile()");

  //display chat interface with click om group overview and hide overview
  document.querySelectorAll(".overview-wrapper").forEach((conversation) => {
    conversation.addEventListener("click", () => {
      document.querySelector("main").setAttribute("data-state", "chat");
      document.querySelector("#chat").classList.remove("hide");

      //fade chat menu in
      document.querySelector(".chat-nav").classList.add("hide");
      setTimeout(() => {
        document.querySelector(".chat-nav").classList = "chat-nav animate__animated animate__fadeIn";
      }, 500);

      //fade inbox nav out
      document.querySelector(".inbox-nav").classList = "inbox-nav animate__animated animate__fadeOut animate-faster";
      setTimeout(() => {
        document.querySelector(".inbox-nav").classList.add("hide");
      }, 500);

      //animate inbox out
      document.querySelector(".inbox-container").classList =
        "inbox-container animate__animated animate__slideOutLeft animate__faster";
      setTimeout(() => {
        document.querySelector("#inbox").classList.add("hide");
      }, 500);

      //animate chat in
      document.querySelector(".chat-container").classList =
        "chat-container animate__animated animate__slideInRight animate__faster";
      setTimeout(() => {
        document.querySelector(".chat-container").classList = "chat-container animate__animated animate__faster";
      }, 500);
    });
  });
  //display inbox with clik on "back" and hide chat interface
  document.querySelector(".back").addEventListener("click", () => {
    document.querySelector("#inbox").classList.remove("hide");
    document.querySelector("main").setAttribute("data-state", "inbox");

    //fade inbox nav in
    document.querySelector(".inbox-nav").classList.add("hide");
    setTimeout(() => {
      document.querySelector(".inbox-nav").classList = "inbox-nav animate__animated animate__fadeIn animate-faster";
    }, 500);
    //fade chat nav out
    document.querySelector(".chat-nav").classList = "chat-nav animate__animated animate__fadeOut animate-faster";
    setTimeout(() => {
      document.querySelector(".chat-nav").classList.add("hide");
    }, 500);

    document.querySelector(".inbox-container").classList =
      "inbox-container animate__animated animate__slideInLeft animate__faster";
    document.querySelector(".chat-container").classList =
      "chat-container animate__animated animate__slideOutRight animate__faster";
    setTimeout(() => {
      document.querySelector("#chat").classList.add("hide");
    }, 500);
    resetChatNav();
  });
}

function resetChatNav() {
  console.log("[Function] || shiftviewMobile.js | reset()");
  const participants = document.querySelector(".dropdown");
  const more = document.querySelector(".more-dropdown-wrapper");
  const moreContainer = document.querySelector(".chat-nav .more-container");

  //Close dropdowns from top navigation, and reset animation classes if any open.
  setTimeout(() => {
    more.classList.add("hide");
  }, 800);
  more.classList.remove("animate__fadeInDown");
  more.classList.add("animate__fadeOutUp");
  more.setAttribute("data-open", "closed");
  moreContainer.setAttribute("data-height", "68px");
  setTimeout(() => {
    participants.classList.add("hide");
  }, 800);
  participants.classList.remove("animate__fadeInDown");
  participants.classList.add("animate__fadeOutUp");
  participants.setAttribute("data-open", "closed");
}
