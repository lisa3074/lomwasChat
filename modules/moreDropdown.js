export function moreDropdown() {
  console.log("[Function] || moreDropdown.js | moreDropdown()");

  document.querySelector(".more-container").addEventListener("click", (e) => {
    console.log(e.target);
    e.target.classList.contains("search") === true || 
     e.target.classList.contains("feather-search") === true ? "" :
e.target.classList[0] === "more-container" || e.target.classList[0] === "more" ? hideDropdown() : displayAddNew();
  });

  document.querySelector(".mark-as-read").addEventListener("click", () => {
    document.querySelector(".unread-messages").classList = "unread-messages animate__animated animate__fadeOut"; 
}) 

}
 function hideDropdown(){
   console.log("HIDEDROPDOWN")
  const dropdown = document.querySelector(".more-dropdown-wrapper");
  const moreContainer = document.querySelector(".chat-nav .more-container");
  const participants = document.querySelector(".dropdown");
  dropdown.classList.remove("hide");
  dropdown.classList.toggle("animate__fadeInDown");
  dropdown.classList.toggle("animate__fadeOutUp");
  dropdown.setAttribute("data-open", dropdown.getAttribute("data-open") === "closed" ? "open" : "closed");
  /* dropdown.dataset.open === "closed" ? setTimeout(() => {
    dropdown.classList.add("hide");
  }, 800) : "";
  setTimeout(() => {
    participants.classList.add("hide");
  }, 800); */
  moreContainer.setAttribute("data-height", dropdown.getAttribute("data-open") === "open" ? "72px" : "68px");
  participants.classList.remove("animate__fadeInDown");
  participants.classList.add("animate__fadeOutUp");
  participants.setAttribute("data-open", "closed");
 }

 function displayAddNew(){
   console.log("displayAddNew")
   const dropdown = document.querySelector(".more-dropdown-wrapper");
  const moreContainer = document.querySelector(".chat-nav .more-container");
  dropdown.classList.remove("hide");
  dropdown.classList.toggle("animate__fadeInDown");
  dropdown.classList.toggle("animate__fadeOutUp");
  dropdown.setAttribute("data-open", dropdown.getAttribute("data-open") === "closed" ? "open" : "closed");
  moreContainer.setAttribute("data-height", dropdown.getAttribute("data-open") === "open" ? "72px" : "68px"); 

 }