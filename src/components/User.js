import "./User.css";
function User({ user, selected, select  }) {
  const handleClick = (e) => {
    select()
  };
  return (
    <div className={`user ${selected ? "selected" : ""}`} onClick={handleClick}>
      <div className="description">
        <div className="name">
          {`${user.username} ${user.self ? " (yourself)" : ""}`}
        </div>
        <div className="status">
          <i className={`icon ${user.connected ? "connected" : ""}`}></i>{" "}
          {user.connected ? "online" : "offline"}
        </div>
      </div>
      {user.hasNewMessages && <div className="new-messages">!</div>}
    </div>
  );
}

export default User;
