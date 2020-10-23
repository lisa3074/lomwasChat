import * as timeago from "timeago.js";

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
      //Don't set eventlistners until data has been loaded (data is loaded when spinner is hidden)
      $a(".overview-wrapper").forEach((elm) => {
        elm.addEventListener("click", (e) => {
          setTimeout(() => {
            //set up the append list with chosen data
            setMessage(entry, $, e);
          }, 550);
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
  clone.querySelector(".message-wrapper").setAttribute("data-id", entry._id);
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
