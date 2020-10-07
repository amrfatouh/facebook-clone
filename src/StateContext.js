import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { auth } from "./firebase";

export const StateContext = createContext();

function StateContextProvider({ children }) {
  const initialState = "initial state value";
  let [state, setState] = useState(initialState);

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setState({ ...state, user });
    });
  }, []);

  return <StateContext.Provider value={{ state, setState }}>{children}</StateContext.Provider>;
}

export default StateContextProvider;
