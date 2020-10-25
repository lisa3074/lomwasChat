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

export function displayChatMobile($, $a) {
  console.log("[Function] || CHAT/chatbody.js | displayChatMobile()");
  const animateFast = " animate__animated animate__faster animate__";
  const is_explorer = navigator.userAgent.indexOf("MSIE") > -1;
  const is_opera = navigator.userAgent.toLowerCase().indexOf("op") > -1;
  if (is_explorer || is_opera) {
    $("#inbox").style.display = "none";
  }
  //Animate inbox out and the chat in
  $(".inbox-nav").classList = animateFast + "fadeOut inbox-nav";
  $(".inbox-container").classList = animateFast + "slideOutLeft animate__fadeOut inbox-container";
  $(".chat-container").classList = animateFast + "slideInRight animate__fadeIn chat-container";
  setTimeout(() => {
    $a(".inbox, .inbox-nav").forEach((element) => {
      element.classList.add("hide");
    });
    $(".chat-nav").classList = animateFast + "fadeIn chat-nav";
    $(".chat-container").classList = animateFast + "fadeIn chat-container";
  }, 400);
  setTimeout(() => {
    window.scrollTo({ top: $(".chat-wrapper").scrollHeight, left: 0, behavior: "smooth" }); //////scroll to bottom (only mobile)
  }, 800);

  displayChat($, $a);
}

export function displayChat($, $a) {
  console.log("[Function] || CHAT/chatbody.js | displayChat()");
  setTimeout(() => {
    $("#chat").scrollTo({ top: $(".chat-wrapper").scrollHeight, left: 0, behavior: "smooth" }); //////scroll to bottom (for desktop)
  }, 800);
  $(".menu-container").classList.remove("hide");
  if ($(".chat-nav").dataset.state === "new") {
    $(".dropdown").dataset.state = "closed";
    $(".dropdown").classList = "dropdown animate__animated animate__fadeOutUp";
    setTimeout(() => {
      $(".dropdown").classList.add("hide");
    }, 500);
    checkDataState($);
  } else {
    $(".dropdown").classList.add("hide");
  }
  //show chat
  $a("#chat, .profiles, .chat-wrapper, .unread-messages").forEach((elm) => {
    elm.classList.remove("hide");
  });
  //set data attributes to fit settings for this view
  $a(".chat-nav, .dropdown, .participants, .back").forEach((elm) => {
    elm.setAttribute("data-state", "view");
  });
  //hide the add new navigation
  $a(".search-participants, .add-new").forEach((elm) => {
    elm.classList.add("hide");
  });
  $("main").setAttribute("data-state", "chat");
}

export function setMessageActions($a) {
  console.log("[Function] || CHAT/chatbody.js | setMessageActions()");
  //eventlistner for the two options next to each mesage (smiley and three dots)
  $a(".reaction.btn, .more.btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      //set variables to match the clicked option
      HTML.chosen = e.target.classList[0];
      HTML.opposite = e.target.classList[0] === "more" ? "reaction" : "more";
      HTML.mainSvg = HTML.chosen === "more" ? "feather-more-vertical" : "feather-smile";
      HTML.oppositeSvg = HTML.chosen === "reaction" ? "feather-more-vertical" : "feather-smile";
      HTML.chosenSvg = HTML.mainSvg + ".btn";
      HTML.notChosenSvg = HTML.oppositeSvg + ".btn";
      displayMessageActions(e, $a);
    });
  });
  //remove delete option on messages sent by others
  $a(".you button.delete").forEach((btn) => {
    btn.classList.add("hide");
  });
  //reset all more/reaction wrappers
  $a(".more-container button, .reaction-container button").forEach((btn) => {
    //eventlistners for the next set of options (reactions or copy/info/delete)
    btn.addEventListener("click", (e) => {
      e.target.parentNode.classList = HTML.chosen + "-wrapper animate__animated animate__flipOutX";
      e.target.parentNode.parentNode.parentNode.querySelector("." + HTML.chosen + ".btn>svg").classList =
        "feather " + HTML.mainSvg + " btn gray-stroke";
      if (document.querySelector("body").clientWidth > 650) {
        setTimeout(() => {
          e.target.parentNode.parentNode.classList.add("hide");
        }, 800);
      } else {
        e.target.parentNode.parentNode.classList.add("hide");
      }
    });
  });
}

function displayMessageActions(e, $a) {
  console.log("[Function] || CHAT/chatbody.js | displayMessageActions()");
  $a(".chat-container ." + HTML.chosen + "-container").forEach((container) => {
    //Find the buttons pressed's 2 x parent and scoop down to find the buttons child .*-container
    if (
      container === e.target.parentNode.parentNode.querySelector("." + HTML.chosen + "-container") &&
      e.target.classList.contains("btn")
    ) {
      //If match => Animate in and out on click
      container.parentNode.querySelector("." + HTML.chosen + "-wrapper").classList.toggle("animate__flipOutX");
      container.parentNode.querySelector("." + HTML.chosen + "-wrapper").classList.toggle("animate__flipInX");
      /*       container.classList.contains("hide")
        ? container.classList.remove("hide")
        : setTimeout(() => {
            container.classList.add("hide");
          }, 800); */

      container.classList.contains("hide")
        ? container.classList.remove("hide")
        : !container.classList.contains("hide") && document.querySelector("body").clientWidth > 650
        ? setTimeout(() => {
            container.classList.add("hide");
          }, 800)
        : container.classList.add("hide");
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
    $a("." + HTML.notChosenSvg).forEach((svg) => {
      svg.parentNode.querySelector("." + HTML.notChosenSvg).classList =
        "feather " + HTML.oppositeSvg + " btn gray-stroke";
    });
  });
}
export function hideMessageActions($, $a) {
  console.log("[Function] || CHAT/chatbody.js | hideMessageActions()");
  //only mobile has a back button. hide and reset reaction/option containers when going back to inbox view
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

export function scrollHandler($) {
  console.log("[Function] || CHAT/chatbody.js | scrollHandler()");
  //remove the "X unread messages" when page is scolled to the top. Should be when there are no more unread messages
  $("#chat").addEventListener("scroll", () => {
    if ($("#chat").scrollTop === 0) {
      $(".unread-messages").classList = "unread-messages animate__animated animate__fadeOut";
    }
  });
}

export function displayOtherChat($, $a) {
  //fade the chat out and in while another function loads the data of the new chat
  $(".chat-wrapper").classList = "chat-wrapper animate__animated animate_fadeOut";
  setTimeout(() => {
    $(".chat-wrapper").classList = "chat-wrapper animate__animated animate__fadeIn";
  }, 500);
}
