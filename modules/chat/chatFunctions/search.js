export function searchChat($, $a) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/search.js | searchChat()");
  let instance = new Mark($(".chat-wrapper"));

  //search the chat
  $(".menu-dropdown svg").addEventListener("click", () => {
    instance.mark($(".mobile .search").value);
  });
  $(".search-chat-label.desktop svg").addEventListener("click", () => {
    instance.mark($(".desktop .search").value);
  });
  $a(".desktop .search, .mobile .search").forEach((input) => {
    input.addEventListener("keypress", function (e) {
      if (e.key === "Enter") {
        instance.mark($(".desktop .search").value);
        instance.mark($(".mobile .search").value);
      }
    });
  });

  //remove search result
  $(".mobile .search").addEventListener("keyup", () => {
    $(".mobile .search").value === "" ? instance.unmark() : "";
  });
  $(".desktop .search").addEventListener("keyup", () => {
    $(".desktop .search").value === "" ? instance.unmark() : "";
  });
  window.addEventListener("resize", () => {
    if ($("body").clientWidth > 650) {
      resetSearch();
    }
  });
  $a(".overview-wrapper, .back, .chat-wrapper").forEach((wrapper) => {
    wrapper.addEventListener("click", () => {
      resetSearch();
    });
  });
}
export function searchInbox($) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/search.js | searchInbox()");
  let instance = new Mark($(".inbox-container"));

  //search the inbox
  $(".inbox-container .feather-search").addEventListener("click", () => {
    instance.mark($(".search-messages").value);
  });

  $(".search-messages").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      instance.mark($(".search-messages").value);
    }
  });

  //remove search result
  $(".search-messages").addEventListener("keyup", () => {
    $(".search-messages").value === "" ? instance.unmark() : "";
  });
}

function resetSearch() {
  console.log("[Function] || CHAT/CHATFUNCTIONS/search.js | resetSearch()");
  $(".desktop .search").value = "";
  $(".mobile .search").value = "";
  $(".search-messages").value = "";
  instance.unmark();
}
