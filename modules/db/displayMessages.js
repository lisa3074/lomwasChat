import * as timeago from "timeago.js";
import { resetParticipantList } from "../chat/chatNavigation";
import { displayConversation } from "../inbox/inbox";
import { checkDataState } from "../../script";
import { scrollHandler } from "../chat/chatBody";
import { displayOtherChat } from "../chat/chatBody";
export function messageDelegation(entry, group, data) {
  console.log(entry);
  const $ = document.querySelector.bind(document);
  const $a = document.querySelectorAll.bind(document);
  data.sort((a, b) => new Date(a.time) - new Date(b.time));
  entry.chatgroup.forEach((message) => {
    if ("5f7c3c35d279373c004bb955" === message._id) {
      displayImage(entry, $);
    }
  });

  const checkIfLoaded = setInterval(() => {
    if ($(".loading").classList.contains("hide")) {
      $a(".overview-wrapper").forEach((elm) => {
        elm.addEventListener("click", (e) => {
          $(".chat-wrapper").innerHTML = "";
          resetParticipantList($, e);
          checkDataState($);
          displayConversation($, $a);
          scrollHandler($);
          displayOtherChat($, $a);
          setTimeout(() => {
            setMessage(entry, $, e);
            $("#chat").scrollTo({ top: $(".chat-wrapper").scrollHeight, left: 0, behavior: "smooth" }); //////scroll to bottom
          }, 250);
        });
      });
      clearInterval(checkIfLoaded);
    }
  }, 500);
}

function setMessage(entry, $, e) {
  entry.chatgroup.forEach((groupId) => {
    if (e.target.dataset.id === groupId._id) {
      displayImage(entry, $);
    }
  });
}

function displayImage(entry, $) {
  const clone = $(".chat-temp").cloneNode(true).content;
  console.log(clone.querySelector(".message-wrapper"));
  const img = document.createElement("img");
  const div = document.createElement("div");
  entry.name.forEach((participant) => {
    //If posted from logged in user (hardcoded)
    if (participant._id === "5f7c361dd279373c004baa92") {
      clone.querySelector(".message-wrapper").classList = "message-wrapper me";
    } else {
      //If posted from other user
      clone.querySelector(".message-wrapper").classList = "message-wrapper you";
    }
    if (participant.image.length === 0) {
      console.log("no image");
      const initials = getInitials(participant);
      div.classList = "no-img no-img3";
      clone.querySelector(".message-wrapper").appendChild(div);
      div.appendChild(initials);
    } else {
      console.log("image");
      img.src = "https://lomwas-88eb.restdb.io/media/" + participant.image;
      img.classList = "profile-picture img1";
      clone.querySelector(".message-wrapper").appendChild(img);
    }
    displayMessageBox(clone, entry, $, participant);
  });
}

function displayMessageBox(clone, entry, $, participant) {
  clone.querySelector(".message-wrapper .name").textContent = participant.name;
  clone.querySelector(".message-wrapper .time-posted p").textContent = timeago.format(entry.time);
  clone.querySelector(".message-wrapper .message").textContent = entry.message;
  $(".chat-wrapper").appendChild(clone);
}

function getInitials(participant) {
  const firstLetter = participant.name.substring(0, 1);
  const lastLetter = participant.name.substring(
    participant.name.lastIndexOf(" ") + 1,
    participant.name.lastIndexOf(" ") + 2
  );
  const initials = document.createTextNode(firstLetter + lastLetter);
  return initials;
}
