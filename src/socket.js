import { io } from "socket.io-client";

//Shared Socket Instance
const URL = "http://localhost:8080";
const socket = io(URL, { autoConnect: false });

socket.onAny((event, ...args) => {
  console.log(event, args);
});

export default socket;