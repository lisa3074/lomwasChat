import { resetParticipantList } from "./chatNavigation";
import { displayInboxGroups } from "../inbox/inbox";
import { checkDataState } from "../../script";
import { setMessageActions } from "./chatBody";
import { setReactions } from "./chatFunctions/reactions";
import { setParticipantList } from "./chatNavigation";
import { setMenu } from "./chatNavigation";
import { search } from "./chatFunctions/search";
import { setNewChat } from "./chatFunctions/newChat";
import { setOptions } from "./chatFunctions/options";
import { unreadMessages } from "./chatBody";

export function chatDelegation($, $a) {
  console.log("[Function] || CHAT/chatDelegation.js | chatDelegation()");

  setMessageActions($);
  setReactions($);
  setParticipantList($);
  setMenu($);

  $a(".search.mobile, .search.desktop").forEach((element) => {
    element.addEventListener("focus", () => {
      search($, $a);
    });
  });

  setOptions($);
  $(".unread-messages").addEventListener("click", () => {
    unreadMessages($);
  });

  $(".new-chat").addEventListener("click", () => {
    setNewChat($);
  });

  $a(".menu-container .menu, .back").forEach((element) => {
    element.addEventListener("click", (e) => {
      resetParticipantList($, e);
      checkDataState($);
      displayInboxGroups($, $a, e);
    });
  });
}
