import * as Popper from "https://cdn.jsdelivr.net/npm/@popperjs/core@^2/dist/esm/index.js";
//CLIENT_SEND_MESSAGE
const forSendData = document.querySelector(".chat .inner-form");
if (forSendData) {
  forSendData.addEventListener("submit", (e) => {
    e.preventDefault();
    const content = e.target.elements.content.value;
    console.log(content);
    if (content) {
      socket.emit("CLIENT_SEND_MESSAGE", content);
      e.target.elements.content.value = "";
    }
  });
}
//End CLIENT_SEND_MESSAGE

// SERVER_RETURN_MESSAGE;
socket.on("SERVER_RETURN_MESSAGE", (data) => {
  const myId = document.querySelector("[my-id]").getAttribute("my-id");
  const body = document.querySelector(".chat .inner-body");

  const div = document.createElement("div");
  let htmlFullName = "";

  if (myId == data.userId) {
    div.classList.add("inner-outgoing");
  } else {
    htmlFullName = `<div class="inner-name">${data.fullName}</div>`;
    div.classList.add("inner-incoming");
  }
  div.innerHTML = `
 ${htmlFullName}
 <div class="inner-content">${data.content}</div>
  `;
  body.appendChild(div);
  body.scrollTop = body.scrollHeight;
});
//END SERVER_RETURN_MESSAGE;

// Scroll Chat To Bottom
const bodyChat = document.querySelector(".chat .inner-body");
if (bodyChat) {
  bodyChat.scrollTop = bodyChat.scrollHeight;
}
// End Scroll Chat To Bottom

// Show Icon Chat

// Show Popup
const buttonIcon = document.querySelector(".button-icon");
if (buttonIcon) {
  const tooltip = document.querySelector(".tooltip");
  Popper.createPopper(buttonIcon, tooltip);

  buttonIcon.addEventListener("click", (e) => {
    tooltip.classList.toggle("shown");
  });
}

// Show Popup
// Insert Icon to input
const emojiPicker = document.querySelector("emoji-picker");
const inputChat = document.querySelector(".chat .inner-form input[name='content']")
if(emojiPicker){
   emojiPicker.addEventListener("emoji-click", (e) =>{
      const icon = e.detail.unicode;
      inputChat.value = inputChat.value + icon;
   })
}

// Input Keyup
inputChat.addEventListener("keyup", () =>{
   socket.emit("CLIENT_SEND_TYPING","show")
})
// End Input Keyup

// End insert Icon to Input
// End Show Icon Chat

// SERVER_RETURN_TYPING
socket.on("SERVER_RETURN_TYPING",(data) =>{
   console.log(data);
});
// END SERVER_RETURN_TYPING