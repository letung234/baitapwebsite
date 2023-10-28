//CLIENT_SEND_MESSAGE
const forSendData = document.querySelector(".chat .inner-form");
if(forSendData){
   forSendData.addEventListener("submit", (e) =>{
      e.preventDefault();
      const content = e.target.elements.content.value;
      console.log(content);
      if(content){
         socket.emit("CLIENT_SEND_MESSAGE",content);
         e.target.elements.content.value = '';
      }
   })
}
//End CLIENT_SEND_MESSAGE