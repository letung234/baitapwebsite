const User = require("../../models/user.model");

module.exports = (res) => {
  // Socket IO
  _io.once("connection", (socket) => {
    socket.on("CLIENT_ADD_FRIEND", async (userId) => {
      const myUserId = res.locals.user.id;

      // console.log(userId); // Id cua B
      // console.log(myUserId); // Id cua A

      // Thêm id của A vào acceptFriends của B
      const existAinB = await User.findOne({
        _id: userId,
        acceptFriends: myUserId,
      });
      if (!existAinB) {
        await User.updateOne(
          {
            _id: userId,
          },
          {
            $push: {
              acceptFriends: myUserId,
            },
          }
        );
      }
      // Thêm id của B vào requestFriends của A
      const existBinA = await User.findOne({
        _id: myUserId,
        requestFriends: userId,
      });
      if (!existBinA) {
        await User.updateOne(
          {
            _id: myUserId,
          },
          {
            $push: {
              requestFriends: userId,
            },
          }
        );
      }
      
    });
  });
};
