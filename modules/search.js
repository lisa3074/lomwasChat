export function search() {
  console.log("[Function] || search.js | search()");
  const search = document.querySelector(".mobile .search");
  const more = document.querySelector(".chat-wrapper");
  let instance = new Mark(document.querySelector("#chat"));
  document.querySelector(".more-dropdown svg").addEventListener("click", () => {
    instance.mark(search.value);
  });
  more.addEventListener("click", () => {
    instance.unmark();
    search.value = "";
  });
  search.addEventListener("keyup", () => {
    search.value === "" ? instance.unmark() : "";
  });
  document.querySelector(".back").addEventListener("click", () => {
    search.value = "";
    instance.unmark();
  });
}
