import * as React from "react";
import User from "./User";
import "./Chat.css";
import MessagePanel from "./MessagePanel";

function Chat({ socket }) {
  const [users, setUsers] = React.useState([]);
  const [selectedUser, setSelectedUser] = React.useState(null);

  const onSelectUser = (user) => {
    setSelectedUser(user);
    user.hasNewMessages = false;
  };

  //Sends Message
  const onMessage = (message) => {
    if (selectedUser) {
      socket.emit("message:post", {
        message: message,
        to: selectedUser.userID,
      });

      setSelectedUser({
        ...selectedUser,
        messages: [
          ...selectedUser.messages,
          { message: message, fromSelf: true },
        ],
      });
    }
  };

  React.useEffect(() => {
    //Initial Connection 
    socket.on("connect", () => {
      setUsers(
        users.map((user, index) => {
          return user.self ? { ...user, connected: true } : user;
        })
      );
    });

    socket.on("disconnect", () => {
      setUsers(
        users.map((user, index) => {
          return user.self ? { ...user, connected: false } : user;
        })
      );
    });

    //Handles the user:list event from the server 
    socket.on("user:list", (users) => {
      const initialUsers = users.map((user, index) => {
        return {
          ...user,
          self: user.userID === socket.id,
          connected: true,
          messages: [],
          hasNewMessages: false,
        };
      });

      // put the current user first, and sort by username

      const sortedUsers = initialUsers.sort((a, b) => {
        if (a.self) return -1;
        if (b.self) return 1;
        if (a.username < b.username) return -1;
        return a.username > b.username ? 1 : 0;
      });
      setUsers([...sortedUsers]);
    });

    socket.on("user:connected", (user) => {
      setUsers([
        ...users,
        { ...user, connected: true, messages: [], hasNewMessages: false },
      ]);
    });

    socket.on("user:disconnected", (id) => {
      setUsers(
        users.map((user, index) => {
          return user.userID === id ? { ...user, connected: false } : user;
        })
      );
    });

    //The correct users get their messages
    socket.on("message:post", ({ message, from }) => {
      setUsers(
        users.map((user, index) => {
          return user.userID === from
            ? {
                ...user,
                messages: [
                  ...user.messages,
                  { message: message, fromSelf: false },
                ],
                hasNewMessages: user !== selectedUser ? true : false,
              }
            : user;
        })
      );
    });
  });

  return (
    <div>
      <div className="left-panel">
        {users.map((user, index) => (
          <User
            key={user.userID}
            user={user}
            selected={selectedUser === user}
            select={() => onSelectUser(user)}
          />
        ))}
      </div>
      {selectedUser && (
        <div className="right-panel">
          <MessagePanel user={selectedUser} submitMessage={onMessage} />
        </div>
      )}
    </div>
  );
}

export default Chat;
