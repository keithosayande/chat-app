import * as React from "react";
import Login from "./components/Login";
import Chat from "./components/Chat";
import socket from "./socket";

function App() {
  const [connectedSocket, setConnectedSocket] = React.useState(null);
  const login = (username) => {
    socket.auth = { username };
    setConnectedSocket(socket.connect());
  };
  return connectedSocket ? <Chat socket={socket}/> : <Login login={login} />;
}

export default App;
