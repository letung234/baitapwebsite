const Chat = require("../../models/chat.model");
const User = require("../../models/user.model");
const uploadToCloudinary = require("../../helpers/uploadToCloudinary");

const chatSocket = require("../../sockets/client/chat.socket");
//GET /chat/:roomChatId

module.exports.index = async (req, res) => {
  const roomChatId = req.params.roomChatId;
  // Socket IO
  chatSocket(req,res);

  // End Socket IO

  // Lấy data từ database
  const chats = await Chat.find({
    room_chat_id : roomChatId,
    deleted: false,
  });
  for (const chat of chats) {
    const inforUser = await User.findOne({
      _id: chat.user_id,
    }).select("fullName");
    chat.inforUser = inforUser;
  };

  res.render("client/pages/chat/index", {
    pageTitle: "Chat",
    chats: chats,
  });
};
