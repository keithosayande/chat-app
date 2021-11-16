const http = require("http");
const { Server } = require("socket.io");
const registerUserHandlers = require("./userHandlers");
const registerMessageHandlers = require("./messageHandlers");

const httpServer = http.createServer();

/* Socket.IO Initialization
Since server and client are at different location I have to se the cors option
*/
const io = new Server(httpServer, {
  cors: {
    origin: "http://localhost:3000",
  },
});

const onConnection = (socket) => {
  registerUserHandlers(io, socket);
  registerMessageHandlers(io, socket);
};

//Socket.io middleware. Checks if there is actually a username
io.use((socket, next) => {
  const username = socket.handshake.auth.username;
  if (!username) {
    return next(new Error("invalid username"));
  }
  socket.username = username;
  next();
});

io.on("connection", onConnection);


const PORT = process.env.PORT || 8080;

httpServer.listen(PORT, () =>
  console.log(`server listening at http://localhost:${PORT}`)
);
