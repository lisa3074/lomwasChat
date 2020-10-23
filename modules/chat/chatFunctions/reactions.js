export function setReactions() {
  console.log("[Function] || CHAT/CHATFUNCTIONS/reactions.js | setReactions()");
  const $a = document.querySelectorAll.bind(document);

  $a(".heart.reaction").forEach((heart) => {
    //read current count from database when connected, then dbCount + count
    let count = 0;
    heart.addEventListener("click", (e) => {
      //make sure the user can only add +1 or remove
      count === 1 ? count-- : count++;
      //send count to database
      displayReactions(e, "heart", heart, count, $a);
    });
  });
  $a(".smile.reaction").forEach((smile) => {
    let count = 0;
    smile.addEventListener("click", (e) => {
      count === 1 ? count-- : count++;
      displayReactions(e, "smile", smile, count, $a);
    });
  });
  $a(".frown.reaction").forEach((frown) => {
    let count = 0;
    frown.addEventListener("click", (e) => {
      count === 1 ? count-- : count++;
      displayReactions(e, "frown", frown, count, $a);
    });
  });
  $a(".thumbs-up.reaction").forEach((thumbsUp) => {
    let count = 0;
    thumbsUp.addEventListener("click", (e) => {
      count === 1 ? count-- : count++;
      displayReactions(e, "thumbs-up", thumbsUp, count, $a);
    });
  });
  $a(".thumbs-down.reaction").forEach((thumbsDown) => {
    let count = 0;
    thumbsDown.addEventListener("click", (e) => {
      count === 1 ? count-- : count++;
      displayReactions(e, "thumbs-down", thumbsDown, count, $a);
    });
  });
}

function displayReactions(e, emoji, singleE, count, $a) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/reactions.js | displayReactions()");
  //mark selected reaction and display/hide same reaction underneath message
  e.target.parentNode.querySelector("." + emoji + ".reaction > svg").classList.toggle("blue-stroke");
  e.target.parentNode.querySelector("." + emoji + ".reaction > svg").classList.toggle("main-gray-stroke");
  count >= 1
    ? e.target.parentNode.parentNode.parentNode.parentNode
        .querySelector(".feedback-wrapper." + emoji)
        .classList.remove("hide")
    : e.target.parentNode.parentNode.parentNode.parentNode
        .querySelector(".feedback-wrapper." + emoji)
        .classList.add("hide");

  $a(".feedback-container").forEach((container) => {
    //if the clicked container is equal to one of the possible container in the chat
    if (container === e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".feedback-container")) {
      singleE.parentNode.parentNode.parentNode.parentNode.querySelector("." + emoji + "-count").textContent = count;
    }
  });
}
