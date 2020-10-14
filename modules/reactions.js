export function reactions() {
  console.log("[function] || reactions.js | reactions()");
  const $a = document.querySelectorAll.bind(document);

  $a(".heart.reaction").forEach((heart) => {
    //read current count from database
    let count = 0;
    heart.addEventListener("click", (e) => {
      count === 1 ? count-- : count++;
      //send count to database
      setReactions(e, "heart", heart, count, $a);
    });
  });
  $a(".smile.reaction").forEach((smile) => {
    let count = 0;
    smile.addEventListener("click", (e) => {
      count === 1 ? count-- : count++;
      setReactions(e, "smile", smile, count, $a);
    });
  });
  $a(".frown.reaction").forEach((frown) => {
    let count = 0;
    frown.addEventListener("click", (e) => {
      count === 1 ? count-- : count++;
      setReactions(e, "frown", frown, count, $a);
    });
  });
  $a(".thumbs-up.reaction").forEach((thumbsUp) => {
    let count = 0;
    thumbsUp.addEventListener("click", (e) => {
      count === 1 ? count-- : count++;
      setReactions(e, "thumbs-up", thumbsUp, count, $a);
    });
  });
  $a(".thumbs-down.reaction").forEach((thumbsDown) => {
    let count = 0;
    thumbsDown.addEventListener("click", (e) => {
      count === 1 ? count-- : count++;
      setReactions(e, "thumbs-down", thumbsDown, count, $a);
    });
  });
}

function setReactions(e, emoji, singleE, count, $a) {
  console.log("[function] || reactions.js | setReactions()");

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
    console.log(e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".feedback-container"));
    if (container === e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".feedback-container")) {
      singleE.parentNode.parentNode.parentNode.parentNode.querySelector("." + emoji + "-count").textContent = count;
    }
  });
}
