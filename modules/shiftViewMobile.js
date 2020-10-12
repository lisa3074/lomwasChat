const HTML = {};

export function shiftviewMobile() {
  console.log("[Function] || shiftviewMobile.js | shiftviewMobile()");
  /* vars */
  const $ = document.querySelector.bind(document);
  const $a = document.querySelectorAll.bind(document);
  HTML.inboxContainer = $(".inbox-container");
  HTML.chatContainer = $(".chat-container");
  HTML.chatNav = $(".chat-nav");
  HTML.inboxNav = $(".inbox-nav");
  HTML.chatList = $(".chat-wrapper");
  HTML.chat = $("#chat");
  HTML.inbox = $("#inbox");


  //display chat interface with click om group overview and hide overview
  $a(".overview-wrapper").forEach((conversation) => {
    conversation.addEventListener("click", () => {
      displayChat();
    });
  });

  $(".more-container .add-participant").addEventListener("click", displayAddParticipant);


  //display inbox with clik on "back" and hide chat interface
  $a(".back, .more").forEach((btn)=>{
    btn.addEventListener("click", (e)=>{
      resetNavBar(e);
    })
  })
    
  //scroll to top, when clicking "unread messages". Should be replaced with a scroll to first unread message.
  $(".unread-messages").addEventListener("click", () => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" }); //////scroll to top
    $(".unread-messages").classList = "unread-messages animate__animated animate__fadeOut";
  });
}

function resetNavBar(e){
  const $ = document.querySelector.bind(document);
  const back = $(".back");
  const dropdown = $(".dropdown");

  if(back.dataset.state === "add"){
    setTimeout(() => {
      $(".profiles").classList.remove("hide");
      $(".search-participants").classList.add("hide");
      $(".add-new").classList.add("hide");
      $(".participants .dropdown").setAttribute("data-state", "view");
      $(".back").setAttribute("data-state", "view");
      $(".participants").setAttribute("data-state", "view");
      $(".arrow").classList.remove("hide");
      $(".leave").classList.add("hide"); 
    }, 500);
  if(e.target.classList.contains("back")){
    dropdown.setAttribute("data-open", "closed");
    dropdown.classList.toggle("animate__fadeInDown");
    dropdown.classList.toggle("animate__fadeOutUp");
    }
  }else if(e.target.classList.contains("back")){
   displayInbox();
  }
}

function displayChat() {
  const $ = document.querySelector.bind(document);
  console.log("[Function] || shiftviewMobile.js | displayChat()");
  $("main").setAttribute("data-state", "chat");
  HTML.chat.classList.remove("hide");
  HTML.inboxNav.classList = "inbox-nav animate__animated animate__fadeOut animate-faster";
  HTML.inboxContainer.classList = "inbox-container animate__animated animate__slideOutLeft animate__faster";
  HTML.chatContainer.classList = "chat-container animate__animated animate__slideInRight animate__faster";
  setTimeout(() => {
    HTML.inbox.classList.add("hide");
    HTML.inboxNav.classList.add("hide");
    HTML.chatNav.classList = "chat-nav animate__animated animate__fadeIn animate__faster";
    HTML.chatContainer.classList = "chat-container animate__animated animate__fadeIn animate__faster";
    window.scrollTo({ top: HTML.chatList.scrollHeight, left: 0, behavior: "smooth" }); //////scroll to bottom
  }, 400);
  $(".dropdown").setAttribute("data-state", "view");
  $(".back").setAttribute("data-state", "view");
  $(".participants").setAttribute("data-state", "view");
  $(".profiles").classList.remove("hide");
  $(".chat-wrapper").classList.remove("hide");
  $(".unread-messages").classList.remove("hide");
  $(".search-participants").classList.add("hide");
  $(".add-new").classList.add("hide");
}

function displayInbox() {
  const $ = document.querySelector.bind(document);
  console.log("[Function] || shiftviewMobile.js | displayInbox()");
  HTML.inbox.classList.remove("hide");
  HTML.chatNav.classList = "chat-nav animate__animated animate__fadeOut animate-faster";
  HTML.inboxContainer.classList = "inbox-container animate__animated animate__slideInLeft animate__faster";
  HTML.chatContainer.classList = "chat-container animate__animated animate__slideOutRight animate__faster";
  $("main").setAttribute("data-state", "inbox");

  setTimeout(() => {
    window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
    HTML.chat.classList.add("hide");
    HTML.inboxNav.classList = "inbox-nav animate__animated animate__fadeIn animate-faster";
    HTML.chatNav.classList.add("hide");
  }, 400);
  resetChatNav();
}

function resetChatNav() {
  const $ = document.querySelector.bind(document);
  console.log("[Function] || shiftviewMobile.js | reset()");
  const participants = $(".dropdown");
  const more = $(".more-dropdown-wrapper");
  const moreContainer = $(".chat-nav .more-container");

  //Close dropdowns from top navigation, and reset animation classes if any open.
  more.classList.remove("animate__fadeInDown");
  more.classList.add("animate__fadeOutUp");
  more.setAttribute("data-open", "closed");
  moreContainer.setAttribute("data-height", "68px");
  participants.classList.remove("animate__fadeInDown");
  participants.classList.add("animate__fadeOutUp");
  participants.setAttribute("data-open", "closed");
  setTimeout(() => {
    more.classList.add("hide");
    participants.classList.add("hide");
  }, 800);
}

function displayAddParticipant(){
  const $ = document.querySelector.bind(document);
$(".profiles").classList.add("hide");
$(".search-participants").classList.remove("hide");
$(".add-new").classList.remove("hide");
$(".arrow").classList.add("hide");
$(".leave").classList.remove("hide");
$(".search-participants p").textContent ="Søg:";
$(".participants .dropdown").setAttribute("data-state", "add");
$(".participants").setAttribute("data-state", "add");
setTimeout(() => {
  
  $(".back").setAttribute("data-state", "add");
}, 1000);
}