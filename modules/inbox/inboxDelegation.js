import { resetParticipantList } from "../chat/chatNavigation";
import { displayConversation } from "./inbox";
import { checkDataState } from "../../script";

export function inboxDelegation($, $a) {
  console.log("[Function] || INBOX/inboxDelegation.js | inboxDelegation()");
  const checkIfLoaded = setInterval(() => {
    if ($(".loading").classList.contains("hide")) {
      $a(".overview-wrapper").forEach((element) => {
        console.log("loaded");
        element.addEventListener("click", (e) => {
          resetParticipantList($, e);
          checkDataState($);
          displayConversation($);
        });
      });
      clearInterval(checkIfLoaded);
    } else {
      console.log("not loaded");
    }
  }, 500);
}
