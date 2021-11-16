module.exports = (io, socket) => {
  socket.on("message:post", ({ message, to }) => {
    socket.to(to).emit("message:post", {
      message:message,
      from: socket.id,
    });
  });
};
