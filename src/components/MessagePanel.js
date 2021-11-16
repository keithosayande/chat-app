import * as React from "react";
import "./MessagePanel.css";

function MessagePanel({ user, submitMessage }) {
  const [input, setInput] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    submitMessage(input);
    setInput("");
  };
  const displaySender = (message, index) => {
    return (
      index === 0 ||
      user.messages[index - 1].fromSelf !== user.messages[index].fromSelf
    );
  };

  return (
    <div>
      <div className="header">
        <i className={`icon ${user.connected ? "connected" : ""}`}></i>
        {user.username}
      </div>
      <ul className="messages">
        {user.messages.map((message, index) => (
          <li key={index} className="message">
            {displaySender(message, index) && (
              <div>{message.fromSelf ? "(yourself)" : user.username}</div>
            )}
            {message.message}
          </li>
        ))}
      </ul>
      <form onSubmit={handleSubmit} className="form">
        <textarea
          value={input}
          placeholder="Your message..."
          className="input"
          onChange={(e) => setInput(e.target.value)}
        />
        <button disabled={input.length < 1} className="send-button">
          Send
        </button>
      </form>
    </div>
  );
}

export default MessagePanel;
