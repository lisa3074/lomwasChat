import * as timeago from "timeago.js";
export function setOptions() {
  console.log("[Function] || CHAT/CHATFUNCTIONS/options.js | setOptions()");
  const $a = document.querySelectorAll.bind(document);

  //add eventlistners to option buttons
  $a(".copy").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const parentNodes = e.target.parentNode.parentNode.parentNode.parentNode;
      copy(parentNodes, e, "copy");
    });
  });
  $a(".info").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const parentNodes = e.target.parentNode.parentNode.parentNode.parentNode;
      info(parentNodes, e, "info");
    });
  });
  $a(".delete").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const parentNodes = e.target.parentNode.parentNode.parentNode.parentNode;
      deleteIt(parentNodes, e, "trash");
    });
  });
}

function copy(parentNodes, e, svg) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/options.js | copy()");
  const copyText = parentNodes.querySelector(".message").textContent;
  //make text blue for 1s to show it's been copied
  parentNodes.querySelector(".message").classList.add("copy_text");
  setTimeout(() => {
    parentNodes.querySelector(".message").classList.remove("copy_text");
  }, 1000);
  navigator.clipboard.writeText(copyText);
  chosenOption(e, svg);
}

async function info(parentNodes, e, svg) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/options.js | info()");
  parentNodes.querySelector(".time-posted p").textContent = "...";
  //get the original posted time of the message
  let response = await fetch("https://lomwas-88eb.restdb.io/rest/lomwas-chatmessage", {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5f910db2d57649786096da6c",
      "cache-control": "no-cache",
    },
  });
  let data = await response.json();
  setTime(data, parentNodes, e, svg);
}

function setTime(data, parentNodes, e, svg) {
  console.log("[Function] || DB/getContent.js | setTime()");
  //when the data has been fetched
  if (data.length !== 0) {
    data.forEach((entry) => {
      if (parentNodes.dataset.id === entry._id) {
        const year = entry.time.substring(0, 4);
        const month = entry.time.substring(5, 7);
        const day = entry.time.substring(8, 10);
        const time = entry.time.substring(11, 16);
        //set to original date / time and make blue
        parentNodes.querySelector(".time-posted>p").textContent = `Sendt d. ${day}/${month}-${year} kl. ${time}`;
        parentNodes.querySelector(".time-posted p").style.color = "var(--blue)";
        parentNodes.querySelector(".time-posted svg").classList.add("blue-stroke");
        setTimeout(() => {
          //set to timeago format / time and make grey
          parentNodes.querySelector(".time-posted p").textContent = timeago.format(entry.time);
          parentNodes.querySelector(".time-posted p").style.color = "var(--main-gray)";
          parentNodes.querySelector(".time-posted svg").classList.remove("blue-stroke");
        }, 6000);
        chosenOption(e, svg);
      }
    });
  }
}

function deleteIt(parentNodes, e, svg) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/options.js | deleteIt()");
  parentNodes.classList = "message-wrapper me animate__animated animate__zoomOut";
  setTimeout(() => {
    parentNodes.classList.add("hide");
    //remove from databse
  }, 300);
  chosenOption(e, svg);
}

function chosenOption(e, svg) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/options.js | chosenOption()");
  //ark the selcted svg with a blue stroke
  e.target.parentNode.querySelector(".feather-" + svg).classList.add("blue-stroke");
  e.target.parentNode.querySelector(".feather-" + svg).classList.remove("main-gray-stroke");
  setTimeout(() => {
    //reset the svg to gray stroke
    e.target.parentNode.querySelector(".feather-" + svg).classList.remove("blue-stroke");
    e.target.parentNode.querySelector(".feather-" + svg).classList.add("main-gray-stroke");
  }, 1000);
}
