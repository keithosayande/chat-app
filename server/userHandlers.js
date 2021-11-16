module.exports = (io, socket) => {
  //When the client has a succesfull connection, all users are sent to client
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
  
  // Notifies all clients that a user has connected
  socket.broadcast.emit("user:connected", {
    userID: socket.id,
    username: socket.username,
  });

  //Notfies all clients that a user has disconted
  socket.on("disconnect", () => {
    socket.broadcast.emit("user:disconnected", socket.id);
  });

};
