import { displayGroupDelegation } from "./displayInbox";
import { messageDelegation } from "./displayMessages";

const HTML = {};

export function dbDelegation() {
  console.log("[function] || DB/getContent.js | getContent");
  const chatGroup = "chatgroup";
  const chatMessage = "chatmessage";
  getContent(chatMessage);
  getContent(chatGroup);
  HTML.previewMessage;
  HTML.group;
}

async function getContent(url) {
  console.log("[Function] || DB/getContent.js | getGroup()");
  let response = await fetch("https://lomwas-88eb.restdb.io/rest/lomwas-" + url, {
    method: "get",
    headers: {
      "Content-Type": "application/json; charset=utf-8",
      "x-apikey": "5f910db2d57649786096da6c",
      "cache-control": "no-cache",
    },
  });
  let data = await response.json();
  setTimeout(() => {
    inspectData(data, url);
  }, 1000);
}

function inspectData(data, url) {
  console.log("[Function] || DB/getContent.js | inspectData()");
  if (url === "chatgroup") {
    HTML.group = data;
    const checkIfMessagesHasLoaded = setInterval(() => {
      if (HTML.previewMessage !== undefined) {
        clearInterval(checkIfMessagesHasLoaded);
        data.forEach((entry) => {
          displayGroupDelegation(entry, HTML.previewMessage);
        });
      }
    }, 200);
  } else {
    HTML.previewMessage = data;
    const checkIfGroupHasLoaded = setInterval(() => {
      if (HTML.group !== undefined) {
        clearInterval(checkIfGroupHasLoaded);
        data.forEach((entry) => {
          messageDelegation(entry, HTML.group, data);
        });
      }
    }, 200);
  }
}
