import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import "./App.css";
import Feed from "./Feed";
import { auth } from "./firebase";
import Header from "./Header";
import Sidebar from "./Sidebar";
import { StateContext } from "./StateContext";

function App() {
  /* learned lessons:
    - don't check context state value from console.log - check it from react components in chrome
    - when using onAuthStateChanged --> use it in the App component (or in the context) but not in any other component
  */

  let [email, setEmail] = useState("");
  let [password, setPassword] = useState("");

  return (
    <div className="app">
      <Header />
      <div className="page">
        <Sidebar />
        <Feed />
      </div>
      <button
        onClick={() => {
          if (auth.currentUser) auth.signOut();
        }}>
        logout
      </button>
      <form
        onSubmit={(e) => {
          e.preventDefault();
          auth.signInWithEmailAndPassword(email, password);
        }}>
        <input type="text" onChange={(e) => setEmail(e.target.value)} />
        <input type="password" onChange={(e) => setPassword(e.target.value)} />
        <input type="submit" value="login" />
      </form>
    </div>
  );
}

export default App;
