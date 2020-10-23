import { displayInbox, hideChatOnResize } from "../inbox/inbox";
import { addParticipant } from "./chatFunctions/addParticipants";

export function hideDropdowns($) {
  //resetChatNav
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

export function resetParticipantList($, e) {
  //resetNavBar
  console.log("[Function] || CHAT/chatNavigation.js | resetParticipantList()");
  const is_safari = navigator.userAgent.indexOf("Safari") > -1;
  if ($(".back").dataset.state === "new" && !is_safari) {
    $("#chat").classList = "animate__animated animate__fadeOut animate__faster";
    setTimeout(() => {
      $("#chat").classList = "animate__animated animate__fadeIn animate__faster";
    }, 400);
  }
  if ($(".back").dataset.state === "add" || $(".back").dataset.state === "new") {
    setTimeout(() => {
      $(".profiles").classList.remove("hide");
      $(".arrow").classList.remove("hide");
      $(".search-participants").classList.add("hide");
      $(".add-new").classList.add("hide");
      $(".leave").classList.add("hide");
      $(".chat-container .chat-wrapper").classList.remove("hide");
      $(".participants .dropdown").setAttribute("data-state", "view");
      $(".back").setAttribute("data-state", "view");
      $(".chat-nav").setAttribute("data-state", "view");
      $(".participants").setAttribute("data-state", "view");
    }, 500);
    //If more is clicked
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
      $(".dropdown").setAttribute(
        "data-open",
        $(".dropdown").getAttribute("data-open") === "closed" ? "open" : "closed"
      );
    }
  }
}
export function displayFirstNames($, $a) {
  console.log("[Function] || CHAT/chatNavigation.js | displayFirstNames()");

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

export function setMenu($) {
  console.log("[Function] || CHAT/chatNavigation.js | setMenu()");
  $(".menu-container .add-participant").addEventListener("click", (e) => {
    addParticipant($);
  });
  $(".menu").addEventListener("click", (e) => {
    $(".profiles").setAttribute("data-state", "closed");
    if ($(".back").dataset.state !== "new") {
      console.log(e.target);
      e.target.classList.contains("search") === true || e.target.classList.contains("feather-search") === true
        ? ""
        : e.target.classList[0] === "menu-container" ||
          e.target.classList[0] === "menu" ||
          e.target.classList[0] === "new-chat"
        ? hideParticipantList($)
        : displayMenu($);
    }
  });

  $(".mark-as-read").addEventListener("click", () => {
    $(".unread-messages").classList = "unread-messages animate__animated animate__fadeOut";
  });
}
function hideParticipantList($) {
  console.log("[Function] || CHAT/chatNavigation.js | hideParticipantList()");
  setTimeout(() => {
    $(".back").setAttribute("data-state", "view");
    $(".chat-nav").setAttribute("data-state", "view");
    $(".participants").setAttribute("data-state", "view");
    $(".dropdown").setAttribute("data-state", "view");
  }, 1000);
  $(".dropdown").classList.remove("animate__fadeInDown");
  $(".dropdown").classList.add("animate__fadeOutUp");
  $(".dropdown").setAttribute("data-open", "closed");
  displayMenu($);
}

function displayMenu($) {
  console.log("[Function] || CHAT/chatNavigation.js | displayMenu()");
  const menuWrapper = $(".menu-dropdown-wrapper");
  const menuContainer = $(".chat-nav .menu-container");
  menuWrapper.classList.remove("hide");
  menuWrapper.classList.toggle("animate__fadeInDown");
  menuWrapper.classList.toggle("animate__fadeOutUp");
  menuWrapper.setAttribute("data-open", menuWrapper.getAttribute("data-open") === "closed" ? "open" : "closed");
  menuContainer.setAttribute("data-height", menuWrapper.getAttribute("data-open") === "open" ? "72px" : "68px");
}

export function setParticipantMenu($) {
  if ($("body").clientWidth > 1200) {
    $(".plus").textContent = "Lisa, Sarah, Rikke, Henrik, Kristian, Anders, Stefanie";
  } else {
    $(".plus").textContent = "+2";
  }
}
