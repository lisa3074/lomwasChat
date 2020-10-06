"use strict";
import { getContent } from "./modules/getContent";
import "@babel/polyfill";
window.addEventListener("DOMContentLoaded", init);

function init() {
  console.log("[Function] || init");
  getContent();
  //lav en createElement img, i inbox template, hvis det er en gruppebesked => noget lignende:
  /* if(image){
    let el = document.createElement("img");
    document.querySelector(".picture-wrapper").appendChild(el);
  }else {
      let el = document.createElement("div.no-picture");
      let initials = document.createElement("p.initials");
    document.querySelector(".picture-wrapper").appendChild(el);
    document.querySelector(".no-picture").appendChild(initials);
  }
    */
}
