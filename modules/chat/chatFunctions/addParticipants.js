export function addParticipant($) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/addParticipant.js | addParticipant()");
  //hide the back arrow anf the profilepitures on the navigation
  document.querySelectorAll(".profiles, .arrow").forEach((elm) => {
    elm.classList.add("hide");
  });
  //show the search field, the X and the list of possible new participants
  document.querySelectorAll(".search-participants, .add-new, .leave").forEach((elm) => {
    elm.classList.remove("hide");
  });
  //set data-state to add for the right settings
  document.querySelectorAll(".participants .dropdown, .chat-nav, .participants").forEach((elm) => {
    elm.setAttribute("data-state", "add");
  });
  $(".search-participants p").textContent = "Søg:";
  setTimeout(() => {
    $(".back").setAttribute("data-state", "add");
  }, 100);
}
