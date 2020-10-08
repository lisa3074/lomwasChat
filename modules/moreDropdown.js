export function moreDropdown() {
  console.log("[Function] || moreDropdown.js | moreDropdown()");
  const dropdown = document.querySelector(".more-dropdown-wrapper");
  const moreContainer = document.querySelector(".chat-nav .more-container");
  const participants = document.querySelector(".dropdown");

  document.querySelector(".more-container").addEventListener("click", (e) => {
    console.log(e.target);
    if (e.target.classList.contains("search") || e.target.classList.contains("feather-search")) {
    } else {
      dropdown.classList.remove("hide");
      dropdown.classList.toggle("animate__fadeInDown");
      dropdown.classList.toggle("animate__fadeOutUp");
      dropdown.setAttribute("data-open", dropdown.getAttribute("data-open") === "closed" ? "open" : "closed");
      moreContainer.setAttribute("data-height", dropdown.getAttribute("data-open") === "open" ? "72px" : "68px");
      setTimeout(() => {
        participants.classList.add("hide");
      }, 800);
      participants.classList.remove("animate__fadeInDown");
      participants.classList.add("animate__fadeOutUp");
      participants.setAttribute("data-open", "closed");
    }
  });
}
