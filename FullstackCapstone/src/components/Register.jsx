import React, { useState } from "react";

const RegistrationForm = () => {
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
      setError("Please fill out form completely to register");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(
        "http://localhost:3000/api/users/register",
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
        setSuccess(true);
        setUsername("");
        setPassword("");
        
      } else {
        setError(data.message || "Something went wrong. Please try again.");
      }
    } catch (err) {
      setError("Network error. Please try again later.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="registration-form">
      <h2>Create an Account</h2>

      {success && <p>Account created successfully!</p>}
      {error && <p>{error}</p>}
<div className=" form-wrapper">
      <form onSubmit={handleSubmit} className="form1">

        <div>
          <label htmlFor="email">Username:</label>
          <input
            type="username"
            id="registerUsername"
            name="username"
            value={username}
            onChange={(event) => setUsername(event.target.value)}
            required
          />
        </div>

        <div>
          <label htmlFor="password">Password:</label>
          <input
            type="password"
            id="registerPassword"
            name="password"
            value={password}
            onChange={(event) => setPassword(event.target.value)}
            required
          />
        </div>

        <button type="submit" disabled={loading}>
          {loading ? "Creating account..." : "Register"}
        </button>
      </form>
      </div>
    </div>
  );
};

export default RegistrationForm;