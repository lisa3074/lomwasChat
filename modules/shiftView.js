import { displayChat } from "./shiftView/displayChat";
import { displayAddParticipant } from "./shiftView/displayAddParticipant";
import { resetNavBar } from "./shiftView/resetNavBar";

const HTML = {};

export function shiftView() {
  console.log("[Function] || shiftviewMobile.js | shiftviewMobile()");
  /* vars */
  const $ = document.querySelector.bind(document);
  const $a = document.querySelectorAll.bind(document);

  //display chat interface with click om group overview and hide overview

  $a(".overview-wrapper").forEach((conversation) => {
    conversation.addEventListener("click", () => {
      if (window.innerWidth < 650) {
        displayChat();
      } else {
        //go to function that shows the right content in chat-side
      }
    });
  });

  document.querySelector(".more-container .add-participant").addEventListener("click", () => {
    /*  setTimeout(() => {
      const nav = document.querySelector(".chat-nav");
      console.log(nav.dataset.state);
      if (nav.dataset.state === "add" || nav.dataset.state === "new") {
        console.log("WHY");
        document.querySelectorAll(".participant-list .participant-wrapper h4").forEach((fullName) => {
          const name = fullName.textContent;
          const space = name.indexOf(" ");
          console.log(name);
          console.log(name.substring(0, space));
          fullName.textContent = name.substring(0, space);
        });
      }
    }, 100); */
    displayAddParticipant();
  });

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
