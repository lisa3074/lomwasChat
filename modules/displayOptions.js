const HTML = {};

export function displayOptions() {
  console.log("[function] || displayOptions.js | displayOptions");
  document.querySelectorAll(".reaction.btn, .more.btn").forEach((btn) => {
    btn.addEventListener("click", (e) => {
      HTML.chosen = e.target.classList[0];
      HTML.opposite = e.target.classList[0] === "more" ? "reaction" : "more";
      HTML.mainSvg = HTML.chosen === "more" ? "feather-more-vertical" : "feather-smile";
      HTML.oppositeSvg = HTML.chosen === "reaction" ? "feather-more-vertical" : "feather-smile";
      HTML.chosenSvg = HTML.mainSvg + ".btn";
      HTML.notChosenSvg = HTML.oppositeSvg + ".btn";
      reaction1(e);
    });
  });
}

function reaction1(e) {
  document.querySelectorAll("." + HTML.chosen + "-container").forEach((container) => {
    //Find the buttons pressed's 2 x parent and scoop down to find the buttons child .*-container
    if (
      container === e.target.parentNode.parentNode.querySelector("." + HTML.chosen + "-container") &&
      e.target.classList.contains("btn")
    ) {
      console.log("if match");
      container.parentNode.querySelector("." + HTML.chosen + "-wrapper").classList.toggle("animate__flipOutX");
      container.parentNode.querySelector("." + HTML.chosen + "-wrapper").classList.toggle("animate__flipInX");
      container.classList.contains("hide")
        ? container.classList.remove("hide")
        : setTimeout(() => {
            container.classList.add("hide");
          }, 800);
      //Find the child and toggle
      container.parentNode.querySelector("." + HTML.chosenSvg).classList.toggle("blue-stroke");
      container.parentNode.querySelector("." + HTML.chosenSvg).classList.toggle("gray-stroke");
    } else {
      console.log("if NO match");
      container.classList.add("hide"); //for all the .*-containers that did not macth the buttons
      //Find the child and set classes
      container.parentNode.parentNode.querySelector("." + HTML.chosenSvg).classList =
        "feather " + HTML.mainSvg + " btn gray-stroke";

      //remove animated_flipInX on all the chosen  *-wrappers not clicked
      container.parentNode.parentNode.querySelector("." + HTML.chosen + "-wrapper").classList =
        HTML.chosen + "-wrapper animate__animated animate__flipOutX";
    }
    //hide all not chosen containers and animate not chosen wrapper out
    document.querySelectorAll(".chat-container ." + HTML.opposite + "-container").forEach((container) => {
      container.classList.add("hide");
      document.querySelectorAll("." + HTML.opposite + "-wrapper").forEach((wrapper) => {
        wrapper.classList = HTML.opposite + "-wrapper animate__animated animate__flipOutX";
      });
    });
    //Reset color on unselected buttons
    document.querySelectorAll("." + HTML.notChosenSvg).forEach((more) => {
      more.parentNode.querySelector("." + HTML.notChosenSvg).classList =
        "feather " + HTML.oppositeSvg + " btn gray-stroke";
    });
  });
}
