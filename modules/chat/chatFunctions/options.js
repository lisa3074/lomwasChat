export function setOptions() {
  console.log("[Function] || CHAT/CHATFUNCTIONS/options.js | setOptions()");
  const $a = document.querySelectorAll.bind(document);

  //Copy message
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
  //e.target.classList.toggle("main-gray-stroke");
  const copyText = parentNodes.querySelector(".message").textContent;
  parentNodes.querySelector(".message").classList.add("copy_text");
  setTimeout(() => {
    parentNodes.querySelector(".message").classList.remove("copy_text");
  }, 800);
  navigator.clipboard.writeText(copyText);
  chosenOption(e, svg);
}

function info(parentNodes, e, svg) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/options.js | info()");
  const originalTime = parentNodes.querySelector(".time-posted p").textContent;
  parentNodes.querySelector(".time-posted p").textContent = "Sendt d. 06/10-2020 kl. 13.45";
  parentNodes.querySelector(".time-posted p").style.color = "var(--blue)";
  parentNodes.querySelector(".time-posted svg").classList.add("blue-stroke");
  setTimeout(() => {
    parentNodes.querySelector(".time-posted p").textContent = originalTime;
    parentNodes.querySelector(".time-posted p").style.color = "var(--main-gray)";
    parentNodes.querySelector(".time-posted svg").classList.remove("blue-stroke");
  }, 5000);
  chosenOption(e, svg);
  //Put db timeDate in
  /*  const year = db.time.substring(0, 4);
  const month = db.time.substring(5, 7);
  const day = db.time.substring(8, 10);
  const time = db.time.substring(11, 16);
  parentNodes.querySelector(".time-posted>p").textContent = `Sendt d. ${day}/${month}-${year} kl. ${time}`; */
}

function deleteIt(parentNodes, e, svg) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/options.js | deleteIt()");
  parentNodes.classList = "message-wrapper me animate__animated animate__zoomOut";
  setTimeout(() => {
    parentNodes.classList.add("hide");
  }, 300);
  chosenOption(e, svg);
}

function chosenOption(e, svg) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/options.js | chosenOption()");
  e.target.parentNode.querySelector(".feather-" + svg).classList.add("blue-stroke");
  e.target.parentNode.querySelector(".feather-" + svg).classList.remove("main-gray-stroke");
  setTimeout(() => {
    e.target.parentNode.querySelector(".feather-" + svg).classList.remove("blue-stroke");
    e.target.parentNode.querySelector(".feather-" + svg).classList.add("main-gray-stroke");
  }, 1000);
}
