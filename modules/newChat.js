export function newChat(){
    const $ = document.querySelector.bind(document);
    const $a = document.querySelectorAll.bind(document);
   $(".new-chat").addEventListener("click", ()=>{
        $("#inbox").classList.add("hide");
     
        $("#chat").classList.remove("hide");
        
      $a(".chat-wrapper").forEach(wrapper => {
          wrapper.classList.add("hide");
      });
      $(".unread-messages").classList.add("hide")
      $(".profiles").classList.add("hide")
      $(".dropdown").classList.add("animate__fadeInDown");
      $(".search-participants").classList.remove("hide")
      $(".dropdown").classList.remove("animate__fadeOutUp");
      $(".add-new").classList.remove("hide");
      $(".dropdown").classList.remove("hide");
      $(".search-participants p").textContent ="Til:";
      $(".dropdown").setAttribute("data-open", "open")
     $(".dropdown").setAttribute("data-state", "new");
     $(".back").setAttribute("data-state", "new");
     $(".participants").setAttribute("data-state", "new");
     $("main").setAttribute("data-state", "chat");
     $(".chat-nav").classList ="chat-nav animate__animated animate__fadeIn animate-faster"
    });
}