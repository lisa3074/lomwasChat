import { resetParticipantList } from "./chatNavigation";
import { displayInboxGroups } from "../inbox/inbox";
import { checkDataState } from "../../script";
import { setMessageActions } from "./chatBody";
import { setReactions } from "./chatFunctions/reactions";
import { setParticipantList } from "./chatNavigation";
import { setMenu } from "./chatNavigation";
import { search } from "./chatFunctions/search";
import { findDevice } from "./chatFunctions/newChat";
import { setOptions } from "./chatFunctions/options";
import { unreadMessages } from "./chatBody";
import { hideMessageActions } from "./chatBody";
import { setParticipantMenu } from "./chatNavigation";

export function chatDelegation($, $a) {
  console.log("[Function] || CHAT/chatDelegation.js | chatDelegation()");

  setMessageActions($a);
  setReactions($);
  setParticipantList($, $a);
  setMenu($);
  window.addEventListener("resize", () => {
    setParticipantMenu($);
  });
  setParticipantMenu($);

  $a(".search.mobile, .search.desktop").forEach((elm) => {
    elm.addEventListener("focus", () => {
      search($, $a);
    });
  });

  setOptions($);
  $(".unread-messages").addEventListener("click", () => {
    unreadMessages($);
  });

  $(".new-chat").addEventListener("click", () => {
    findDevice($, $a);
  });

  $a(".menu-container .menu, .back").forEach((elm) => {
    elm.addEventListener("click", (e) => {
      resetParticipantList($, e);
      checkDataState($);
      displayInboxGroups($, $a, e);
    });
  });
  $(".back").addEventListener("click", () => {
    hideMessageActions($, $a);
  });
}
