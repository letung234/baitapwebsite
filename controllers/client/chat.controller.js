//GET /chat

module.exports.index = async (req, res) => {
  // Socket
  _io.on("connection", (socket) => {
    console.log("a user connected", socket.id);
  });

  // End
  res.render("client/pages/chat/index", {
    pageTitle: "Chat",
  });
};
