import React, { useState } from "react";
import { Link } from "react-router-dom";
import { useAuth } from "../../context/AuthContext";

function ForgotPassword() {
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const { reset } = useAuth();
  const handleMail = (e) => {
    setEmail(e.target.value);
  };
  const handleSubmit = async () => {
    if (!email) {
      return setError("Please enter your email address");
    }
    try {
      setMessage("");
      setError("");
      setLoading(true);
      await reset(email);
      setMessage("Check you inbox");
      setEmail("");
    } catch {
      setError("Failed to send password reset link.");
    }
    setLoading(false);
  };
  return (
    <div className="forgotPasswordPage">
      <div className="forgotPasswordContainerOne">
        <div className="forgotPasswordContainer d-flex litegrey flex-column">
          <h2 className="mainHeadings">Forgot password?</h2>
          <p>No worries, we got you...</p>
          {error && <div>* {error}</div>}
          {message && <div>* {message}</div>}
          <div className="RegisterContainer rightAnimation  mt-4 mb-4">
            <input
              value={email}
              onChange={handleMail}
              type="text"
              className="inputLiteBorder"
              required
            />
            <label className="litegrey"> Mail id</label>
          </div>
          <div className="getLinkButtonContainer">
            <button
              disabled={loading}
              onClick={handleSubmit}
              className="getLinkButton dark p-2 mb-3"
            >
              Get link
            </button>
          </div>
        </div>
        <div className="forgotPasswordReturn">
          Return to <Link to="/login">Login</Link> page?
        </div>
      </div>
    </div>
  );
}

export default ForgotPassword;
