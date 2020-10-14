import { displayChat, displayChatDesktop } from "./shiftView/displayChat";
import { displayAddParticipant } from "./shiftView/displayAddParticipant";
import { resetNavBar } from "./shiftView/resetNavBar";

const HTML = {};

export function shiftView() {
  console.log("[Function] || shiftview.js | shiftview() | " + window.innerWidth);
  /* vars */
  const $ = document.querySelector.bind(document);
  const $a = document.querySelectorAll.bind(document);

  //display chat interface with click om group overview and hide overview}
  $a(".overview-wrapper").forEach((conversation) => {
    conversation.addEventListener("click", () => {
      /*      if (window.innerWidth < 650) {
        console.log(window.innerWidth);
        displayChat();
      } else {
        //go to function that shows the right content in chat-side
        console.log(window.innerWidth);
        displayChatDesktop();
      } */
      console.log(window.innerWidth);
      displayChat();
    });
  });

  document.querySelector(".more-container .add-participant").addEventListener("click", displayAddParticipant);

  //display inbox with clik on "back" and hide chat interface
  $a(".back, .more").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      resetNavBar(e);
    });
  });

  //scroll to top, when clicking "unread messages". Should be replaced with a scroll to first unread message.
  $(".unread-messages").addEventListener("click", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); //////scroll to top
    $(".unread-messages").classList = "unread-messages animate__animated animate__fadeOut";
  });
}
