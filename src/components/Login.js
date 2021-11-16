import * as React from "react";
import './Login.css'

function Login({login}) {
  const [username, setUsername] = React.useState("");
  const handleSubmit = (e) => {
    e.preventDefault();
    login(username);
  };

  return (
    <div className="login">
      <form onSubmit={handleSubmit}>
        <input
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
          placeholder="Your username..."
        />
        <button disabled={username.length < 2}>Send</button>
      </form>
    </div>
  );
}

export default Login;
