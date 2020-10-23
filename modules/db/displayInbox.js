import * as timeago from "timeago.js";
import { scrollHandler } from "../chat/chatBody";

export function displayGroupDelegation(data, previewMessage) {
  console.log("[Function] || DB/getContent.js | displayGroup()");
  const $ = document.querySelector.bind(document);
  const clone = $(".inbox-temp").cloneNode(true).content;

  profilePicture(data, clone);
  namePreview(data, clone);
  messagePreview(data, clone, previewMessage);
  preLoader(data, $);
  numberOfParticipants(data, clone, $);
}

function profilePicture(data, clone) {
  //console.log("[Function] || DB/getContent.js | profilePicture()");
  /* Vars */
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const noPic1 = document.createElement("div");
  const noPic2 = document.createElement("div");

  //This assumes the first entry always is the current user (data.participant[0]) which we do not want in this overview.
  //A group of 3 or more participants:
  if (data.participants.length > 2) {
    img1.classList = "img2";
    img2.classList = "img2";
    //if the participant does not have a profile picture
    for (let i = 0; i < 3; i++) {
      if (data.participants[i].image.length === 0) {
        const initials = getInitials(data, i);
        const ii = i + 1;
        if (i === 1) {
          noPic1.classList = "no-img no-img" + ii;
          clone.querySelector(".picture-wrapper").appendChild(noPic1);
          noPic1.appendChild(initials);
        } else if (i === 2) {
          noPic2.classList = "no-img no-img" + ii;
          clone.querySelector(".picture-wrapper").appendChild(noPic2);
          noPic2.appendChild(initials);
        }
        //if the participant does have a profile picture
      } else {
        if (i === 1) {
          img1.src = "https://lomwas-88eb.restdb.io/media/" + data.participants[1].image;
          clone.querySelector(".picture-wrapper").appendChild(img1);
        } else if (i === 2) {
          img2.src = "https://lomwas-88eb.restdb.io/media/" + data.participants[2].image;
          clone.querySelector(".picture-wrapper").appendChild(img2);
        }
      }
    }
    //A private conversation between 2 participants
  } else {
    img1.classList = "img1";
    //No profile picture
    if (data.participants[1].image.length === 0) {
      const initials = getInitials(data, 1);
      clone.querySelector(".picture-wrapper").appendChild(noPic1);
      noPic1.classList = "no-img";
      noPic1.appendChild(initials);
    } else {
      //Profile picture
      img1.src = "https://frontend-22d4.restdb.io/media/" + data.participants[1].image;
      clone.querySelector(".picture-wrapper").appendChild(img1);
    }
  }
}

function namePreview(data, clone) {
  // console.log("[Function] || DB/getContent.js | namePreview()");
  //If there is a team name
  if (data.name !== "") {
    clone.querySelector(".name.overview").textContent = data.name;
  } else {
    //If there's no team name, use the participants names
    data.participants.forEach((participant) => {
      let firstName = participant.name.substring(0, participant.name.indexOf(" ") + 1);
      let lastName = participant.name.substring(participant.name.lastIndexOf(" "));
      //If users own name, set to nothing (For now this is hardcoded with static ID from API)
      if (participant._id === "5f7c361dd279373c004baa92") {
        firstName = "";
        lastName = "";
      }
      clone.querySelector(".name.overview").textContent += " " + firstName + " " + lastName;
    });
  }
}

function messagePreview(data, clone, previewMessage) {
  //console.log("[Function] || DB/getContent.js | messagePreview()");
  previewMessage.forEach((m) => {
    m.chatgroup.forEach((group) => {
      //if the message was sent in this group (if group._id matches the group._id in messages)
      if (group._id === data._id) {
        clone.querySelector(".overview-wrapper").setAttribute("data-id", group._id);
        clone.querySelector(".message-preview").textContent = m.message;
        clone.querySelector(".time-posted.overview>p").textContent = timeago.format(m.time);
      }
    });
  });
}

function preLoader(data, $) {
  //console.log("[Function] || DB/getContent.js | preLoader()");
  //set show pre-loader until content is loaded into DOM
  if (data.length !== 0) {
    $(".loading").classList.add("animate__fadeOut");
    setTimeout(() => {
      $(".loading").classList.add("hide");
    }, 1000);
    if ($("body").clientWidth > 650) {
      scrollHandler($);
    }
  }
}

function numberOfParticipants(data, clone, $) {
  //console.log("[Function] || DB/getContent.js | numberOfParticipants()");
  if (data.participants.length > 2) {
    const mark = document.createElement("div");
    const text = document.createElement("p");
    const number = document.createTextNode(data.participants.length);
    clone.querySelector(".total-participants").appendChild(mark);
    mark.appendChild(text);
    text.appendChild(number);
  }
  $(".overview-container").appendChild(clone);
}

export function getInitials(data, count) {
  //console.log("[Function] || DB/getContent.js | getInitials()");
  const firstLetter = data.participants[count].name.substring(0, 1);
  const lastLetter = data.participants[count].name.substring(
    data.participants[count].name.lastIndexOf(" ") + 1,
    data.participants[count].name.lastIndexOf(" ") + 2
  );
  const initials = document.createTextNode(firstLetter + lastLetter);
  return initials;
}
