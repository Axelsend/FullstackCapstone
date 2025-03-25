import React, { useState } from "react";

const LoginForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSuccess(false);
    setError("");
    setLoading(true);


    if (!username || !password) {
      setError("Please fill in both username and password to login.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "https://soundsphere-jr5b.onrender.com/api/users/login",
        {
          method: "POST",
          headers: {
            "Content-Type": "application/json",
          },
          body: JSON.stringify({ username, password }),
        }
      );

      const data = await response.json();

      if (response.ok) {
        localStorage.setItem("authToken", data.token);
        console.log(data.token)
        setSuccess(true);
        setUsername("");
        setPassword("");
      } else {
        setError(data.message || "Invalid username or password.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form">
      <h2>Login</h2>

      {success && <p>Login successful!</p>}
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit} className="form2">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="username"
            id="loginUsername"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="loginPassword"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Logging in..." : "Login"}
        </button>
      </form>
    </div>
  );
};

export default LoginForm;