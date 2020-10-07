export function displayOptions() {
  console.log("[function] || displayOptions.js | displayOptions");

  document.querySelectorAll(".reaction").forEach((reaction) => {
    reaction.addEventListener("click", (e) => {
      document.querySelectorAll(".reaction-container").forEach((container) => {
        //Find the buttons pressed's 2 x parent and scoop down to find the .reaction-container
        //that is located in article with the pressed button
        if (container === e.target.parentNode.parentNode.querySelector(".reaction-container")) {
          if (e.target.classList.contains("btn")) {
            container.classList.toggle("hide");
            //Find the child and do
            container.parentNode.querySelector(".feather-smile.btn").classList.toggle("blue-stroke");
            container.parentNode.querySelector(".feather-smile,btn").classList.toggle("gray-stroke");
          }
        } else {
          //for all the .reaction.containers that did not macth the buttons
          container.classList.add("hide");
          //Find the child and do
          container.parentNode.querySelector(".feather-smile.btn").classList.remove("blue-stroke");
          container.parentNode.querySelector(".feather-smile.btn").classList.add("gray-stroke");
        }
        //hide all .more-containers
        document.querySelectorAll(".chat-container .more-container").forEach((container) => {
          container.classList.add("hide");
        });
        //Reset color on more buttons
        document.querySelectorAll(".feather-more-vertical.btn").forEach((more) => {
          more.parentNode.querySelector(".feather-more-vertical.btn").classList.remove("blue-stroke");
          more.parentNode.querySelector(".feather-more-vertical.btn").classList.add("gray-stroke");
        });
      });
    });
  });

  document.querySelectorAll(".more").forEach((more) => {
    more.addEventListener("click", (e) => {
      document.querySelectorAll(".chat-container .more-container").forEach((container) => {
        //Find the buttons pressed's 2 x parent and scoop down to find the .more-container
        //that is located in article with the pressed button
        if (container === e.target.parentNode.parentNode.querySelector(".chat-container .more-container")) {
          if (e.target.classList.contains("btn")) {
            container.classList.toggle("hide");
            //Find the child and do
            container.parentNode.querySelector(".feather-more-vertical.btn").classList.toggle("blue-stroke");
            container.parentNode.querySelector(".feather-more-vertical.btn").classList.toggle("gray-stroke");
          }
        } else {
          //for all the .more.containers that did not macth the buttons
          container.classList.add("hide");
          container.parentNode.querySelector(".feather-more-vertical.btn").classList.remove("blue-stroke");
          container.parentNode.querySelector(".feather-more-vertical.btn").classList.add("gray-stroke");
        }
        //hide all .reaction-containers
        document.querySelectorAll(".reaction-container").forEach((container) => {
          container.classList.add("hide");
        });
        //Reset color on reaction buttons
        document.querySelectorAll(".feather-smile.btn").forEach((reaction) => {
          reaction.parentNode.querySelector(".feather-smile.btn").classList.remove("blue-stroke");
          reaction.parentNode.querySelector(".feather-smile.btn").classList.add("gray-stroke");
        });
      });
    });
  });
}
