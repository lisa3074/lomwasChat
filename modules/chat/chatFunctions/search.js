export function searchChat($, $a) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/search.js | searchChat()");
  //.chat-wrapper (the chat itself) is the container that is being searched
  let instance = new Mark($(".chat-wrapper"));

  //search the chat (display the search result on click on the search svg or with press on enter)
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

  //remove search result when the input field is empty
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

  //reset search on resize and on click on other elements on the page
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
  //.inbox-container (the inbox) is the container that is being searched
  let instance = new Mark($(".inbox-container"));

  //search the inbox on click on the search svg or on enter press
  $(".inbox-container .feather-search").addEventListener("click", () => {
    instance.mark($(".search-messages").value);
  });

  $(".search-messages").addEventListener("keypress", function (e) {
    if (e.key === "Enter") {
      instance.mark($(".search-messages").value);
    }
  });

  //remove search result when the input field is empty
  $(".search-messages").addEventListener("keyup", () => {
    $(".search-messages").value === "" ? instance.unmark() : "";
  });
  ["click", "touch"].forEach((event) => {
    $a(".overview-wrapper, .back, .chat-wrapper").forEach((element) => {
      element.addEventListener(event, () => {
        //reset search
        resetSearch($, instance);
      });
    });
  });
}

function resetSearch($, instance) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/search.js | resetSearch()");
  //Set input value to nothing and reset search
  $(".desktop .search").value = "";
  $(".mobile .search").value = "";
  $(".search-messages").value = "";
  instance.unmark();
}
