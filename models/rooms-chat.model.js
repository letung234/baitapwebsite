const mongoose = require("mongoose");

const roomchatSchema = new mongoose.Schema(
  {
    title: String,
    avatar: String,
    typeRoom: String,
    status : String,
    users: [
      {
         user_id : String,
         role : String
      }
    ],
    deleted: {
      type: Boolean,
      default: false,
    },
    deletedAt: Date,
  },
  {
    timestamps: true,
  }
);
const RoomChat = mongoose.model("RoomChat", roomchatSchema, "rooms-chat");

module.exports = RoomChat;
