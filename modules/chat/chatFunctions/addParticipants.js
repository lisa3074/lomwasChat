export function addParticipant($) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/addParticipant.js | addParticipant()");
  document.querySelectorAll(".profiles, .arrow").forEach((elm) => {
    elm.classList.add("hide");
  });
  document.querySelectorAll(".search-participants, .add-new, .leave").forEach((elm) => {
    elm.classList.remove("hide");
  });
  document.querySelectorAll(".participants .dropdown, .chat-nav, .participants").forEach((elm) => {
    elm.setAttribute("data-state", "add");
  });
  $(".search-participants p").textContent = "Søg:";
  setTimeout(() => {
    $(".back").setAttribute("data-state", "add");
  }, 100);
}
