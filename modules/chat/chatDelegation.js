import { resetParticipantList } from "./chatNavigation";
import { displayInboxGroups } from "../inbox/inbox";
import { checkDataState } from "../../script";
import { setMessageActions } from "./chatBody";
import { setReactions } from "./chatFunctions/reactions";
import { setParticipantList } from "./chatNavigation";
import { setMenu } from "./chatNavigation";
import { searchChat } from "./chatFunctions/search";
import { searchInbox } from "./chatFunctions/search";
import { findDevice } from "./chatFunctions/newChat";
import { setOptions } from "./chatFunctions/options";
import { unreadMessages } from "./chatBody";
import { hideMessageActions } from "./chatBody";
import { setParticipantMenu } from "./chatNavigation";

export function chatDelegation($, $a) {
  console.log("[Function] || CHAT/chatDelegation.js | chatDelegation()");
  const is_chrome = navigator.userAgent.indexOf("chrome") > -1 && !!window.chrome;
  const is_firefox = navigator.userAgent.indexOf("firefox") > -1;
  const is_safari = navigator.userAgent.indexOf("safari") > -1;

  setParticipantList($, $a);
  setParticipantMenu($);
  setMenu($, $a);

  //If .loading has a hide on, the data is loaded from db
  const checkIfLoaded = setInterval(() => {
    if ($(".loading").classList.contains("hide")) {
      setMessageActions($a, is_safari, is_chrome, is_firefox);
      setReactions($);
      setOptions($);
      $a("svg").forEach((svg) => {
        svg.setAttribute("viewBox", "0 0 24 24");
      });
      $("#chat").scrollTo({ top: $(".chat-wrapper").scrollHeight, left: 0, behavior: "smooth" }); //////scroll to bottom of chat
      clearInterval(checkIfLoaded);
    }
  }, 200);
  window.addEventListener("resize", () => {
    setParticipantMenu($);
  });

  $a(".search.mobile, .search.desktop").forEach((elm) => {
    elm.addEventListener("focus", () => {
      searchChat($, $a);
    });
  });
  $(".search-messages").addEventListener("focus", () => {
    searchInbox($, $a);
  });

  $(".unread-messages").addEventListener("click", () => {
    unreadMessages($);
  });

  $(".new-chat").addEventListener("click", () => {
    findDevice($, $a);
  });

  $a(".menu-container .menu, .back").forEach((elm) => {
    elm.addEventListener("click", (e) => {
      resetParticipantList($, e, $a);
      checkDataState($);
      displayInboxGroups($, $a, e);
    });
  });
  $(".back").addEventListener("click", () => {
    hideMessageActions($, $a, is_safari, is_chrome, is_firefox);
  });
}
