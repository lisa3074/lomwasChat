export function participantsDropdown() {
  console.log("[Function] || participantsDropdown.js | participantsDropdown()");
  const dropdown = document.querySelector(".dropdown");
  const more = document.querySelector(".more-dropdown-wrapper");
  const moreContainer = document.querySelector(".chat-nav .more-container");
  document.querySelector(".participants").addEventListener("click", () => {
    dropdown.classList.remove("hide");
    dropdown.classList.toggle("animate__fadeInDown");
    dropdown.classList.toggle("animate__fadeOutUp");
    dropdown.setAttribute("data-open", dropdown.getAttribute("data-open") === "closed" ? "open" : "closed");
    setTimeout(() => {
      more.classList.add("hide");
    }, 800);
    more.classList.remove("animate__fadeInDown");
    more.classList.add("animate__fadeOutUp");
    more.setAttribute("data-open", "closed");
    moreContainer.setAttribute("data-height", "68px");
  });
}
