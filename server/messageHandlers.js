module.exports = (io, socket) => {
  /*This functions allows users to send  messages to each other privately without notifying all users
  This allows my app to operate like a DM instead of a chat room
  */
  socket.on("message:post", ({ message, to }) => {
    socket.to(to).emit("message:post", {
      message:message,
      from: socket.id,
    });
  });
};
