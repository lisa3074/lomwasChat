export function search($, $a) {
  console.log("[Function] || CHAT/CHATFUNCTIONS/search.js | search()");
  let instance = new Mark($(".chat-wrapper"));

  //search the chat
  $(".menu-dropdown svg").addEventListener("click", () => {
    instance.mark($(".mobile .search").value);
  });
  $(".search-chat-label.desktop svg").addEventListener("click", () => {
    instance.mark($(".desktop .search").value);
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

  function resetSearch() {
    console.log("[Function] || CHAT/CHATFUNCTIONS/search.js | resetSearch()");
    $(".desktop .search").value = "";
    $(".mobile .search").value = "";
    instance.unmark();
  }
}
