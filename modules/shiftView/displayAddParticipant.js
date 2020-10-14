export function displayAddParticipant($) {
  console.log("[Function] || displayAddParticipant.js | displayAddParticipant()");
  $(".profiles").classList.add("hide");
  $(".search-participants").classList.remove("hide");
  $(".add-new").classList.remove("hide");
  $(".arrow").classList.add("hide");
  $(".leave").classList.remove("hide");
  $(".search-participants p").textContent = "Søg:";
  $(".participants .dropdown").setAttribute("data-state", "add");
  $(".chat-nav").setAttribute("data-state", "add");
  $(".participants").setAttribute("data-state", "add");
  setTimeout(() => {
    $(".back").setAttribute("data-state", "add");
  }, 100);
}
