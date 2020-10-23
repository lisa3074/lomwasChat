import { resetParticipantList } from "../chat/chatNavigation";
import { displayConversation } from "./inbox";
import { checkDataState } from "../../script";
import { scrollHandler } from "../chat/chatBody";
import { setMessageActions } from "../chat/chatBody";
import { setReactions } from "../chat/chatFunctions/reactions";
import { setOptions } from "../chat/chatFunctions/options";
import { displayOtherChat } from "../chat/chatBody";

export function inboxDelegation($, $a) {
  console.log("[Function] || INBOX/inboxDelegation.js | inboxDelegation()");
  //check if data is loaded before setting eventlisteners. If .loaded contains "hide", then data is loaded.
  const checkIfLoaded = setInterval(() => {
    if ($(".loading").classList.contains("hide")) {
      window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
      $a(".overview-wrapper").forEach((elm) => {
        elm.addEventListener("click", (e) => {
          resetParticipantList($, e);
          checkDataState($);
          displayConversation($, $a);
          scrollHandler($);
          displayOtherChat($, $a);
          setTimeout(() => {
            //clear the append list
            $(".chat-wrapper").innerHTML = "";
          }, 400);
          //Make sure eventlistners in the below functions isn't set until the data has been loaded
          setTimeout(() => {
            setMessageActions($a);
            setReactions($);
            setOptions($);
            $a("svg").forEach((svg) => {
              svg.setAttribute("viewBox", "0 0 24 24");
            });
          }, 600);
        });
      });
      clearInterval(checkIfLoaded);
    }
  }, 500);
}
