import { faWindowClose } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useState } from "react";
import { auth } from "./firebase";
import "./SignupPage.css";

function SignupPage({ setShowSignup }) {
  let [name, setName] = useState("");
  let [photoUrl, setPhotoUrl] = useState("");
  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  const signup = (e) => {
    e.preventDefault();
    auth.createUserWithEmailAndPassword(email, password).then((authInfo) => {
      auth.currentUser.updateProfile({
        displayName: name,
        photoURL: photoUrl,
      });
    });
  };

  return (
    <div className="signup-page">
      <FontAwesomeIcon className="close" icon={faWindowClose} size={"lg"} onClick={() => setShowSignup(false)} />
      <form onSubmit={(e) => signup(e)}>
        <input required type="text" placeholder="name" onChange={(e) => setName(e.target.value)} value={name} />
        <input required type="text" placeholder="your photo url" onChange={(e) => setPhotoUrl(e.target.value)} value={photoUrl} />
        <input required type="email" placeholder="email" onChange={(e) => setEmail(e.target.value)} value={email} />
        <input required type="password" placeholder="password" onChange={(e) => setPassword(e.target.value)} value={password} />
        <input type="submit" value="Sign Up" />
      </form>
    </div>
  );
}

export default SignupPage;
