// Show alert
const showAlert = document.querySelector("[show-alert]");
if (showAlert) {
  const time = parseInt(showAlert.getAttribute("data-time"));
  console.log(showAlert);
  setTimeout(() => {
    showAlert.classList.add("alert-hidden");
  }, time);
  const closeAlert = showAlert.querySelector("[close-alert]");
  closeAlert.addEventListener("click", () => {
    showAlert.classList.add("alert-hidden");
  });
}
// End Show alert

// Detect a Browser or Tab Close Event in JavaScript
// window.addEventListener("beforeunload", (event) => {
//   event.preventDefault();
//   socket.emit("CLIENT_CLOSE_WEB","TEST");
//   console.log("đã tắt web");
//   event.returnValue = "";
// });
// End detect a Browser or Tab Close Event in JavaScript
