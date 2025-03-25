import React, { useState } from "react";

const DeleteUser = () => {
  const [username, setUsername] = useState("");
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [error, setError] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    setSuccess(false);
    setError("");
    setLoading(true);

    // Check if both fields are filled
    if (!username) {
      setError("Please fill in username to update.");
      setLoading(false);
      return;
    }

    try {
      const response = await fetch(`https://soundsphere-jr5b.onrender.com/api/users/delete`, {
        method: "DELETE",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username }),
      });
      const data = await response.json();
      console.log(data);

      if (response.ok) {
        setSuccess(true);
        setUsername("");
      } else {
        setError(data.message || "Invalid username.");
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
      <h2>Delete User</h2>

      {success && <p>User Deleted!</p>}
      {error && <p>{error}</p>}

      <form onSubmit={handleSubmit} className="form4">
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

        <button type="submit" disabled={loading}>
          {loading ? "Updating..." : "Delete User"}
        </button>
      </form>
    </div>
  );
};

export default DeleteUser;