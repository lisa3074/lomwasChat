import * as timeago from "timeago.js";
import { scrollHandler } from "../chat/chatBody";

export function displayGroup(data) {
  console.log("[Function] || DB/getContent.js | displayGroup()");

  /* Variables */
  const $ = document.querySelector.bind(document);
  const $a = document.querySelectorAll.bind(document);
  const img1 = document.createElement("img");
  const img2 = document.createElement("img");
  const noPic = document.createElement("div");
  const noPic2 = document.createElement("div");

  noPic.innerHTML = "";
  const clone = $(".inbox-temp").cloneNode(true).content;
  //This assumes the first entry always is the current user (data.participant[0]) which we do not want in this overview.
  //If this is a group of 3 or more participants:
  if (data.participants.length > 2) {
    img1.classList = "img2";
    img2.classList = "img2";
    //if the first participant does not have a profile picture
    if (data.participants[1].image.length === 0) {
      const initials = getInitials(data, 1);
      noPic.classList = "no-img no-img2";
      clone.querySelector(".picture-wrapper").appendChild(noPic);
      noPic.appendChild(initials);
      //if the second participant does not have a profile picture
      if (data.participants[2].image.length === 0) {
        const initials = getInitials(data, 2);
        noPic2.classList = "no-img no-img3";
        clone.querySelector(".picture-wrapper").appendChild(noPic2);
        noPic2.appendChild(initials);
        //if the first participant does not have a profile picture but the second does
      } else {
        img2.src = "https://frontend-22d4.restdb.io/media/" + data.participants[2].image;
        clone.querySelector(".picture-wrapper").appendChild(img2);
      }
      //if the first participant has a profile picture but the second doesn't
    } else if (data.participants[1].image.length !== 0 && data.participants[2].image.length === 0) {
      img2.src = "https://frontend-22d4.restdb.io/media/" + data.participants[1].image;
      clone.querySelector(".picture-wrapper").appendChild(img2);
      const initials = getInitials(data, 2);
      noPic2.classList = "no-img no-img3";
      clone.querySelector(".picture-wrapper").appendChild(noPic2);
      noPic2.appendChild(initials);
      //if both participant have a profile picture
    } else {
      img2.src = "https://frontend-22d4.restdb.io/media/" + data.participants[1].image;
      clone.querySelector(".picture-wrapper").appendChild(img2);
      img1.src = "https://frontend-22d4.restdb.io/media/" + data.participants[2].image;
      clone.querySelector(".picture-wrapper").appendChild(img1);
    }
    //If this is a conversation between 2 participants
  } else {
    //if the participant does not have a profile picture
    img1.classList = "img1";
    if (data.participants[1].image.length === 0) {
      const initials = getInitials(data, 1);
      clone.querySelector(".picture-wrapper").appendChild(noPic);
      noPic.classList = "no-img";
      noPic.appendChild(initials);
    } else {
      img1.src = "https://frontend-22d4.restdb.io/media/" + data.participants[1].image;
      clone.querySelector(".picture-wrapper").appendChild(img1);
    }
  }

  /* NAMES */
  if (!data.name == "") {
    clone.querySelector(".name.overview").textContent = data.name;
  } else {
    data.participants.forEach((participant) => {
      let firstName = participant.name.substring(0, participant.name.indexOf(" ") + 1);
      let lastName = participant.name.substring(participant.name.lastIndexOf(" "));
      //If users name, set to nothing
      if (participant._id === "5f7c361dd279373c004baa92") {
        firstName = "";
        lastName = "";
      }
      clone.querySelector(".name.overview").textContent += " " + firstName + " " + lastName;
    });
  }
  /* MESSAGES */
  if (HTML.messages != undefined) {
    HTML.messages.forEach((m) => {
      m.chatgroup.forEach((group) => {
        if (group._id === data._id) {
          clone.querySelector(".message-preview").textContent = m.message;
          clone.querySelector(".time-posted.overview>p").textContent = timeago.format(m.time);
          //If particular date and time is needed
          /*  const year = m.time.substring(0, 4);
            const month = m.time.substring(5, 7);
            const day = m.time.substring(8, 10);
            const time = m.time.substring(11, 16);
            clone.querySelector(".time-posted.overview>p").textContent = `Sendt d. ${day}/${month}-${year} kl. ${time}`; */
        }
      });
    });
    //set eventlistner when content is loaded into DOM
    if (data.length !== 0) {
      $(".loading").classList.add("animate__fadeOut");
      setTimeout(() => {
        $(".loading").classList.add("hide");
      }, 1000);
      scrollHandler($);
    } else {
      $(".loading").classList.remove("hide");
      $(".loading").classList.remove("animate_fadeOut");
    }
  }

  /* AMOUNT OF PARTICIPANTS */
  const amountOfParticipants = data.participants.length;
  if (amountOfParticipants > 2) {
    const amount = document.createElement("div");
    const number = document.createTextNode(amountOfParticipants);
    clone.querySelector(".total-participants").appendChild(amount);
    amount.appendChild(number);
  }

  $(".overview-container").appendChild(clone);
}

function getInitials(data, count) {
  console.log("[Function] || DB/getContent.js | getInitials()");
  const firstLetter = data.participants[count].name.substring(0, 1);
  const lastLetter = data.participants[count].name.substring(
    data.participants[count].name.lastIndexOf(" ") + 1,
    data.participants[count].name.lastIndexOf(" ") + 2
  );

  const initials = document.createTextNode(firstLetter + lastLetter);
  return initials;
}
