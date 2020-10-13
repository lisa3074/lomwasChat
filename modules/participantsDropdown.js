export function participantsDropdown() {
  console.log("[Function] || participantsDropdown.js | participantsDropdown()");
  const dropdown = document.querySelector(".dropdown");
  const more = document.querySelector(".more-dropdown-wrapper");
  const moreContainer = document.querySelector(".chat-nav .more-container");

  document.querySelector(".participants").addEventListener("click", () => {
    if (document.querySelector(".participants").dataset.state !== "add") {
      dropdown.classList.remove("hide");
      dropdown.classList.toggle("animate__fadeInDown");
      dropdown.classList.toggle("animate__fadeOutUp");
      dropdown.setAttribute("data-open", dropdown.getAttribute("data-open") === "closed" ? "open" : "closed");
      more.classList.remove("animate__fadeInDown");
      more.classList.add("animate__fadeOutUp");
      more.setAttribute("data-open", "closed");
      moreContainer.setAttribute("data-height", "68px");
    }
  });

  document.querySelector(".add-participant").addEventListener("click", () => {
    dropdown.classList.remove("hide");
    dropdown.classList.add("animate__fadeInDown");
    dropdown.classList.remove("animate__fadeOutUp");
    dropdown.setAttribute("data-open", dropdown.getAttribute("data-open") === "closed" ? "open" : "closed");
    displayFirstNames();
  });

  document.querySelector(".new-chat").addEventListener("click", displayFirstNames);
}

function displayFirstNames() {
  const fullNames = [];
  setTimeout(() => {
    const nav = document.querySelector(".chat-nav");
    if (nav.dataset.state === "add" || nav.dataset.state === "new") {
      console.log("WHY");

      document.querySelectorAll(".participant-list .participant-wrapper h4").forEach((fullName) => {
        const name = fullName.textContent;
        const space = name.indexOf(" ");
        fullName.textContent = name.substring(0, space + 1);
      });
    }
  }, 100);
}
