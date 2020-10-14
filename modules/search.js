export function search($) {
  console.log("[Function] || search.js | search()");
  let instance = new Mark($(".chat-wrapper"));

  //search the chat
  $(".more-dropdown svg").addEventListener("click", () => {
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
    reset();
  });
  document.querySelectorAll(".overview-wrapper, .back, .chat-wrapper").forEach((wrapper) => {
    wrapper.addEventListener("click", () => {
      reset();
    });
  });

  function reset() {
    $(".desktop .search").value = "";
    $(".mobile .search").value = "";
    instance.unmark();
  }
}
