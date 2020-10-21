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
  ["keyup", "focus"].forEach((event) => {
    $(".mobile .search").addEventListener(event, () => {
      $(".mobile .search").value === "" ? instance.unmark() : "";
    });
  });
  ["keyup", "focus"].forEach((event) => {
    $(".desktop .search").addEventListener(event, () => {
      $(".desktop .search").value === "" ? instance.unmark() : "";
    });
  });

  window.addEventListener("resize", () => {
    if ($("body").clientWidth > 650) {
      resetSearch($, instance);
    }
  });
  ["click", "touch"].forEach((event) => {
    $a(".overview-wrapper, .back, .chat-wrapper").forEach((element) => {
      element.addEventListener(event, () => {
        resetSearch($, instance);
      });
    });
  });
}
export function searchInbox($, $a) {
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
  ["click", "touch"].forEach((event) => {
    $a(".overview-wrapper, .back, .chat-wrapper").forEach((element) => {
      element.addEventListener(event, () => {
        resetSearch($, instance);
      });
    });
  });
}

function resetSearch($, instance) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/search.js | resetSearch()");
  $(".desktop .search").value = "";
  $(".mobile .search").value = "";
  $(".search-messages").value = "";
  instance.unmark();
}
