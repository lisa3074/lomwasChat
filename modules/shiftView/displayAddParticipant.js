export function displayAddParticipant() {
  console.log("ADDPARTICIPANT");
  const $ = document.querySelector.bind(document);
  const $a = document.querySelectorAll.bind(document);
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

  /*   setTimeout(() => {
    const nav = document.querySelector(".chat-nav");
    console.log(nav.dataset.state);
    if (nav.dataset.state === "add" || nav.dataset.state === "new") {
      console.log("WHY");
      document.querySelectorAll(".participant-list .participant-wrapper h4").forEach((fullName) => {
        const name = fullName.textContent;
        const space = name.indexOf(" ");
        console.log(name);
        console.log(name.substring(0, space));
        fullName.textContent = name.substring(0, space);
      });
    }
  }, 100); */
}
