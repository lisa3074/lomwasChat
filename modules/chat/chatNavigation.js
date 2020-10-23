import { displayInbox, hideChatOnResize } from "../inbox/inbox";
import { addParticipant } from "./chatFunctions/addParticipants";

export function hideDropdowns($) {
  console.log("[Function] || CHAT/chatNavigation.js | hideDropdowns()");
  //Close dropdowns from top navigation, and reset animation classes if any open.
  $(".menu-dropdown-wrapper").classList.remove("animate__fadeInDown");
  $(".menu-dropdown-wrapper").classList.add("animate__fadeOutUp");
  $(".menu-dropdown-wrapper").setAttribute("data-open", "closed");
  $(".chat-nav .menu-container").setAttribute("data-height", "68px");
  $(".dropdown").classList.remove("animate__fadeInDown");
  $(".dropdown").classList.add("animate__fadeOutUp");
  $(".dropdown").setAttribute("data-open", "closed");
  setTimeout(() => {
    $(".menu-dropdown-wrapper").classList.add("hide");
    $(".dropdown").classList.add("hide");
  }, 800);
}

export function resetParticipantList($, e, $a) {
  console.log("[Function] || CHAT/chatNavigation.js | resetParticipantList()");
  const is_safari = navigator.userAgent.indexOf("Safari") > -1;
  //only browsers that are not safari sets animation
  if ($(".back").dataset.state === "new" && !is_safari) {
    $("#chat").classList = "animate__animated animate__fadeOut animate__faster";
    setTimeout(() => {
      $("#chat").classList = "animate__animated animate__fadeIn animate__faster";
    }, 400);
  }
  if ($(".back").dataset.state === "add" || $(".back").dataset.state === "new") {
    setTimeout(() => {
      $a(".profiles, .arrow, .chat-container .chat-wrapper").forEach((element) => {
        element.classList.remove("hide");
      });
      $a(".search-participants, .add-new, .leave").forEach((element) => {
        element.classList.add("hide");
      });
      $a(".participants .dropdown, .back, .chat-nav, .participants").forEach((element) => {
        element.setAttribute("data-state", "view");
      });
    }, 500);
    //if back or inbox is clicked (desktop)
    if (e.target.classList.contains("back") || e.target.classList.contains("overview-wrapper")) {
      $(".dropdown").setAttribute("data-open", "closed");
      $(".dropdown").classList.toggle("animate__fadeInDown");
      $(".dropdown").classList.toggle("animate__fadeOutUp");
    }
  } else if (e.target.classList.contains("back")) {
    //.back is only present in mobile view
    displayInbox($);
    window.addEventListener("resize", hideChatOnResize($));
  }
}

export function setParticipantList($, $a) {
  console.log("[Function] || CHAT/chatNavigation.js | setParticipantList()");
  const menu = $(".menu-dropdown-wrapper");
  const menuContainer = $(".chat-nav .menu-container");

  $(".participants").addEventListener("click", () => {
    if ($(".participants").dataset.state === "view") {
      //toggle data-state
      $(".profiles").setAttribute(
        "data-state",
        $(".profiles").getAttribute("data-state") === "open" ? "closed" : "open"
      );
    }
    if ($(".participants").dataset.state !== "add") {
      displayParticipantList();
      menu.classList.remove("animate__fadeInDown");
      menu.classList.add("animate__fadeOutUp");
      menu.setAttribute("data-open", "closed");
      menuContainer.setAttribute("data-height", "68px");
    }
  });
  //when adding a participant to a chat
  $(".add-participant").addEventListener("click", () => {
    displayParticipantList();
    $(".search-participants").dataset.state = "open";
    $(".back").addEventListener("click", () => {
      $(".profiles").setAttribute("data-state", "closed");
      $(".search-participants").setAttribute("data-state", "closed");
      $(".participants").setAttribute("data-open", "closed");
    });
    displayFirstNames($, $a);
  });

  function displayParticipantList() {
    console.log("[Function] || CHAT/chatNavigation.js | displayParticipantList()");
    if ($(".participants").dataset.state === "view") {
      $(".dropdown").classList.remove("hide");
      $(".dropdown").classList.toggle("animate__fadeInDown");
      $(".dropdown").classList.toggle("animate__fadeOutUp");
      //toggle data-state
      $(".dropdown").setAttribute(
        "data-open",
        $(".dropdown").getAttribute("data-open") === "closed" ? "open" : "closed"
      );
    }
  }
}
export function displayFirstNames($, $a) {
  console.log("[Function] || CHAT/chatNavigation.js | displayFirstNames()");
  //display first names only in the navigation
  setTimeout(() => {
    const nav = $(".chat-nav");
    if (nav.dataset.state === "add" || nav.dataset.state === "new") {
      $a(".participant-list .participant-wrapper h4").forEach((fullName) => {
        const name = fullName.textContent;
        const space = name.indexOf(" ");
        fullName.textContent = name.substring(0, space + 1);
      });
    }
  }, 100);
}

export function setMenu($, $a) {
  console.log("[Function] || CHAT/chatNavigation.js | setMenu()");
  $(".menu-container .add-participant").addEventListener("click", () => {
    addParticipant($);
  });
  $(".menu").addEventListener("click", (e) => {
    $(".profiles").setAttribute("data-state", "closed");
    if ($(".back").dataset.state !== "new") {
      e.target.classList.contains("search") === true || e.target.classList.contains("feather-search") === true
        ? ""
        : e.target.classList[0] === "menu-container" ||
          e.target.classList[0] === "menu" ||
          e.target.classList[0] === "new-chat"
        ? hideParticipantList($, $a)
        : displayMenu($);
    }
  });
  $(".mark-as-read").addEventListener("click", () => {
    $(".unread-messages").classList = "unread-messages animate__animated animate__fadeOut";
  });
}

function hideParticipantList($, $a) {
  console.log("[Function] || CHAT/chatNavigation.js | hideParticipantList()");
  setTimeout(() => {
    $a(".back, .chat-nav, .participants, .dropdown").forEach((element) => {
      element.setAttribute("data-state", "view");
    });
  }, 1000);
  $(".dropdown").classList.remove("animate__fadeInDown");
  $(".dropdown").classList.add("animate__fadeOutUp");
  $(".dropdown").setAttribute("data-open", "closed");
  displayMenu($);
}

function displayMenu($) {
  console.log("[Function] || CHAT/chatNavigation.js | displayMenu()");
  $(".menu-dropdown-wrapper").classList.remove("hide");
  $(".menu-dropdown-wrapper").classList.toggle("animate__fadeInDown");
  $(".menu-dropdown-wrapper").classList.toggle("animate__fadeOutUp");
  //toggle data-states
  $(".menu-dropdown-wrapper").setAttribute(
    "data-open",
    $(".menu-dropdown-wrapper").getAttribute("data-open") === "closed" ? "open" : "closed"
  );
  $(".chat-nav .menu-container").setAttribute(
    "data-height",
    $(".menu-dropdown-wrapper").getAttribute("data-open") === "open" ? "72px" : "68px"
  );
}

export function setParticipantMenu($) {
  if ($("body").clientWidth > 1200) {
    //static data. Should be replaced
    $(".plus").textContent = "Lisa, Sarah, Rikke, Henrik, Kristian, Anders, Stefanie";
  } else {
    $(".plus").textContent = "+2";
  }
}
