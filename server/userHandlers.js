module.exports = (io, socket) => {
  const getUsers = () => {
    const users = [];
    
    for (let [id, socket] of io.of("/").sockets) {
      users.push({
        userID: id,
        username: socket.username,
      });
    }
    return users
  };
  
  socket.emit("user:list", getUsers())
  
  socket.broadcast.emit("user:connected", {
    userID: socket.id,
    username: socket.username,
  });

  socket.on("disconnect", () => {
    socket.broadcast.emit("user:disconnected", socket.id);
  });

};
