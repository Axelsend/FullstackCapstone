import React, { useState } from "react";

const UpdateUser = () => {
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

    // Check if both fields are filled
    if (!username || !password) {
      setError("Please fill in both username and NEW password to update.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`http://localhost:3000/api/users/update`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ password, username }),
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        localStorage.setItem("authToken", data.token);
        console.log(data.token);
        setSuccess(true);
        setUsername("");
        setPassword("");
      } else {
        setError(data.message || "Invalid username or password.");
        console.log("hello");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="login-form">
      <h2>Change Password</h2>

      {success && <p>Password Updated!</p>}
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit} className="form3">
        <div>
          <label htmlFor="username">Username:</label>
          <input
            type="text"
            id="loginUsername"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">New Password:</label>
          <input
            type="password"
            id="newPassword"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Update Password"}
        </button>
      </form>
    </div>
  );
};

export default UpdateUser;