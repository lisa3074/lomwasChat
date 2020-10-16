import { doc } from "prettier";
import { checkDataState } from "../../script";
const HTML = {};
export function unreadMessages($) {
  console.log("[Function] || CHAT/chatbody.js | unreadMessages()");
  //scroll to top, when clicking "unread messages". Should be replaced with a scroll to first unread message.
  if ($("body").clientWidth > 650) {
    $("#chat").scrollTo({ top: 0, left: 0, behavior: "smooth" });
  } else {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
  }
  $(".unread-messages").classList = "unread-messages animate__animated animate__fadeOut";
}

export function displayChatMobile($) {
  console.log("[Function] || CHAT/chatbody.js | displayChatMobile()");
  /* vars */
  const animateFast = " animate__animated animate__faster animate__";

  $(".inbox-nav").classList = animateFast + "fadeOut inbox-nav";
  $(".inbox-container").classList = animateFast + "slideOutLeft animate__fadeOut inbox-container";
  $(".chat-container").classList = animateFast + "slideInRight animate__fadeIn chat-container";
  setTimeout(() => {
    $("#inbox").classList.add("hide");
    $(".inbox-nav").classList.add("hide");
    $(".chat-nav").classList = animateFast + "fadeIn chat-nav";
    $(".chat-container").classList = animateFast + "fadeIn chat-container";
  }, 400);
  setTimeout(() => {
    window.scrollTo({ top: $(".chat-wrapper").scrollHeight, left: 0, behavior: "smooth" }); //////scroll to bottom
  }, 400);
  displayChat($);
}

export function displayChat($) {
  console.log("[Function] || CHAT/chatbody.js | displayChat()");
  const $a = document.querySelectorAll.bind(document);
  setTimeout(() => {
    $("#chat").scrollTo({ top: $(".chat-wrapper").scrollHeight, left: 0, behavior: "smooth" }); //////scroll to bottom
  }, 800);
  $(".menu-container").classList.remove("hide");
  if ($(".chat-nav").dataset.state === "new") {
    $(".dropdown").classList = "dropdown animate__animated animate__fadeOutUp";
    $(".dropdown").dataset.state = "closed";
    setTimeout(() => {
      $(".dropdown").classList.add("hide");
    }, 500);
    checkDataState($);
  } else {
    $(".dropdown").classList.add("hide");
  }
  $a("#chat, .profiles, .chat-wrapper, .unread-messages").forEach((element) => {
    element.classList.remove("hide");
  });
  $a(".chat-nav, .dropdown, .participants, .back").forEach((element) => {
    element.setAttribute("data-state", "view");
  });
  $a(".search-participants, .add-new").forEach((element) => {
    element.classList.add("hide");
  });
  $("main").setAttribute("data-state", "chat");
}

export function setMessageActions() {
  console.log("[Function] || CHAT/chatbody.js | setMessageActions()");
  const $a = document.querySelectorAll.bind(document);
  $a(".reaction.btn, .more.btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      HTML.chosen = e.target.classList[0];
      HTML.opposite = e.target.classList[0] === "more" ? "reaction" : "more";
      HTML.mainSvg = HTML.chosen === "more" ? "feather-more-vertical" : "feather-smile";
      HTML.oppositeSvg = HTML.chosen === "reaction" ? "feather-more-vertical" : "feather-smile";
      HTML.chosenSvg = HTML.mainSvg + ".btn";
      HTML.notChosenSvg = HTML.oppositeSvg + ".btn";
      displayMessageActions(e);
    });
  });
  //remove delete option on messages sent by others
  $a(".you button.delete").forEach((btn) => {
    btn.classList.add("hide");
  });
  //reset all more wrappers
  $a(".more-container button").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.parentNode.classList = "more-wrapper animate__animated animate__flipOutX";
      e.target.parentNode.parentNode.parentNode.querySelector(".more.btn>svg").classList =
        "feather feather-more-vertical btn gray-stroke";
      setTimeout(() => {
        e.target.parentNode.parentNode.classList.add("hide");
      }, 800);
    });
  });
}

function displayMessageActions(e) {
  console.log("[Function] || CHAT/chatbody.js | displayMessageActions()");
  const $a = document.querySelectorAll.bind(document);
  $a(".chat-container ." + HTML.chosen + "-container").forEach((container) => {
    //Find the buttons pressed's 2 x parent and scoop down to find the buttons child .*-container
    if (
      container === e.target.parentNode.parentNode.querySelector("." + HTML.chosen + "-container") &&
      e.target.classList.contains("btn")
    ) {
      //If match => Animate in and out on click
      container.parentNode.querySelector("." + HTML.chosen + "-wrapper").classList.toggle("animate__flipOutX");
      container.parentNode.querySelector("." + HTML.chosen + "-wrapper").classList.toggle("animate__flipInX");
      container.classList.contains("hide")
        ? container.classList.remove("hide")
        : setTimeout(() => {
            container.classList.add("hide");
          }, 800);
      //Find the child and toggle stroke color on clicked button
      container.parentNode.querySelector("." + HTML.chosenSvg).classList.toggle("blue-stroke");
      container.parentNode.querySelector("." + HTML.chosenSvg).classList.toggle("gray-stroke");
    } else {
      //If no match
      container.classList.add("hide"); //for all the .*-containers that did not macth the buttons
      //Find the child and set classes
      container.parentNode.parentNode.querySelector("." + HTML.chosenSvg).classList =
        "feather " + HTML.mainSvg + " btn gray-stroke";

      //remove animated_flipInX on all the chosen  *-wrappers not clicked
      container.parentNode.parentNode.querySelector("." + HTML.chosen + "-wrapper").classList =
        HTML.chosen + "-wrapper animate__animated animate__flipOutX";
    }
    //hide all not chosen containers and animate not chosen wrapper out
    $a(".chat-container ." + HTML.opposite + "-container").forEach((container) => {
      container.classList.add("hide");
      $a("." + HTML.opposite + "-wrapper").forEach((wrapper) => {
        wrapper.classList = HTML.opposite + "-wrapper animate__animated animate__flipOutX";
      });
    });
    //Reset color on unselected buttons
    $a("." + HTML.notChosenSvg).forEach((more) => {
      more.parentNode.querySelector("." + HTML.notChosenSvg).classList =
        "feather " + HTML.oppositeSvg + " btn gray-stroke";
    });
  });
}
export function hideMessageActions($, $a) {
  if ($(".back").dataset.state === "view") {
    $a(".more-container, .reaction-container").forEach((container) => {
      container.classList.add("hide");
    });
    $a(".options svg").forEach((svg) => {
      svg.classList.remove("blue-stroke");
      svg.classList.add("gray-stroke");
    });
    $a(".options-container div:nth-child(2) div, .options-container div:nth-child(3) div").forEach((wrapper) => {
      wrapper.classList.remove("animate__flipInX");
      wrapper.classList.add("animate__flipOutX");
    });
  }
}
