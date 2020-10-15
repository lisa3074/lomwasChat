export function addParticipant($) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/addParticipant.js | addParticipant()");
  document.querySelectorAll(".profiles, .arrow").forEach((element) => {
    element.classList.add("hide");
  });
  document.querySelectorAll(".search-participants, .add-new, .leave").forEach((element) => {
    element.classList.remove("hide");
  });
  document.querySelectorAll(".participants .dropdown, .chat-nav, .participants").forEach((element) => {
    element.setAttribute("data-state", "add");
  });
  $(".search-participants p").textContent = "Søg:";
  setTimeout(() => {
    $(".back").setAttribute("data-state", "add");
  }, 100);
}
