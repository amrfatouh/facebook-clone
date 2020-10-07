import React from "react";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import "./App.css";
import Feed from "./Feed";
import { auth } from "./firebase";
import Header from "./Header";
import LoginPage from "./LoginPage";
import Sidebar from "./Sidebar";
import { StateContext } from "./StateContext";

function App() {
  /* learned lessons:
    - don't check context state value from console.log - check it from react components in chrome
    - when using onAuthStateChanged --> use it in the App component (or in the context) but not in any other component
  */

  let { state } = useContext(StateContext);

  return (
    <div className="app">
      {state.user ? (
        <>
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
        </>
      ) : (
        <LoginPage />
      )}
    </div>
  );
}

export default App;
