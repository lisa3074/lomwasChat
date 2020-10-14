export function messageOptions() {
  console.log("[function] || messageOptions.js | messageOptions()");
  const $a = document.querySelectorAll.bind(document);

  //Copy message
  $a(".copy").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const copyText = e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".message").textContent;
      e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".message").classList.add("copy_text");
      setTimeout(() => {
        e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".message").classList.remove("copy_text");
      }, 800);
      navigator.clipboard.writeText(copyText);
    });
  });
  $a(".info").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      const originalTime = e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".time-posted p")
        .textContent;
      e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".time-posted p").textContent =
        "Sendt d. 06/10-2020 kl. 13.45";
      e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".time-posted p").style.color = "var(--blue)";
      e.target.parentNode.parentNode.parentNode.parentNode
        .querySelector(".time-posted svg")
        .classList.add("blue-stroke");
      setTimeout(() => {
        e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".time-posted p").textContent = originalTime;
        e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".time-posted p").style.color =
          "var(--main-gray)";
        e.target.parentNode.parentNode.parentNode.parentNode
          .querySelector(".time-posted svg")
          .classList.remove("blue-stroke");
      }, 5000);
      //Put db timeDate in
      /*  const year = db.time.substring(0, 4);
          const month = db.time.substring(5, 7);
          const day = db.time.substring(8, 10);
          const time = db.time.substring(11, 16);
          e.target.parentNode.parentNode.parentNode.parentNode.querySelector(".time-posted>p").textContent = `Sendt d. ${day}/${month}-${year} kl. ${time}`; */
    });
  });
  $a(".delete").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      e.target.parentNode.parentNode.parentNode.parentNode.classList =
        "message-wrapper me animate__animated animate__zoomOut";
      setTimeout(() => {
        e.target.parentNode.parentNode.parentNode.parentNode.classList.add("hide");
      }, 300);
    });
  });
}
