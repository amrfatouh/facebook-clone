import React, { useState } from "react";
import { auth } from "./firebase";
import "./LoginPage.css";
import SignupPage from "./SignupPage";

function LoginPage() {
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");
  let [showSignup, setShowSignup] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password);
  };

  return (
    <div className="login-page">
      {showSignup && <SignupPage setShowSignup={setShowSignup} />}
      <div className="left">
        <img src="https://static.xx.fbcdn.net/rsrc.php/y8/r/dF5SId3UHWd.svg" alt="facebook-logo" />
        <p>Facebook helps you connect and share with the people in your life.</p>
      </div>
      <div className="right">
        <form onSubmit={(e) => handleSubmit(e)}>
          <input type="text" placeholder="Email address" value={email} onChange={(e) => setEmail(e.target.value)} />
          <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} />
          <input type="submit" value="Log In" />
          <a href="#">Forgotten Password?</a>
          <hr />
          <button type="button" onClick={() => setShowSignup(!showSignup)}>
            Create New Account
          </button>
        </form>
      </div>
    </div>
  );
}

export default LoginPage;
