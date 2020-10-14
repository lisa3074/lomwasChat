export function moreDropdown($) {
  console.log("[Function] || moreDropdown.js | moreDropdown()");

  $(".more").addEventListener("click", (e) => {
    if ($(".back").dataset.state !== "new") {
      console.log(e.target);
      e.target.classList.contains("search") === true || e.target.classList.contains("feather-search") === true
        ? ""
        : e.target.classList[0] === "more-container" ||
          e.target.classList[0] === "more" ||
          e.target.classList[0] === "new-chat"
        ? hideDropdown($)
        : displayAddNew($);
    }
  });

  $(".mark-as-read").addEventListener("click", () => {
    $(".unread-messages").classList = "unread-messages animate__animated animate__fadeOut";
  });
}
function hideDropdown($) {
  const participants = $(".dropdown");
  setTimeout(() => {
    $(".back").setAttribute("data-state", "view");
    $(".chat-nav").setAttribute("data-state", "view");
    $(".participants").setAttribute("data-state", "view");
    $(".dropdown").setAttribute("data-state", "view");
  }, 1000);
  participants.classList.remove("animate__fadeInDown");
  participants.classList.add("animate__fadeOutUp");
  participants.setAttribute("data-open", "closed");
  displayAddNew($);
}

function displayAddNew($) {
  console.log("displayAddNew");
  const dropdown = $(".more-dropdown-wrapper");
  const moreContainer = $(".chat-nav .more-container");
  dropdown.classList.remove("hide");
  dropdown.classList.toggle("animate__fadeInDown");
  dropdown.classList.toggle("animate__fadeOutUp");
  dropdown.setAttribute("data-open", dropdown.getAttribute("data-open") === "closed" ? "open" : "closed");
  moreContainer.setAttribute("data-height", dropdown.getAttribute("data-open") === "open" ? "72px" : "68px");
}
