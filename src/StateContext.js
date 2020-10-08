import React, { createContext, useState } from "react";
import { useEffect } from "react";
import { auth, db } from "./firebase";

export const StateContext = createContext();

function StateContextProvider({ children }) {
  let [user, setUser] = useState(null);
  let [posts, setPosts] = useState([
    { postId: "123", postData: { text: "test1" } },
  ]);

  debugger;

  useEffect(() => {
    auth.onAuthStateChanged((user) => {
      setUser(user);
    });
    db.collection("posts").onSnapshot((snapshot) => {
      let newPosts = [...posts];
      snapshot.docChanges().forEach((change) => {
        if (change.type === "added") {
          newPosts.push({ postId: change.doc.id, postData: change.doc.data() });
        }
        if (change.type === "modified") {
          console.log("Modified city: ", change.doc.data());
        }
        if (change.type === "removed") {
          newPosts.filter((post) => post.postId !== change.doc.id);
        }
      });
      setPosts(newPosts);
    });
  }, []);

  return (
    <StateContext.Provider value={{ user, setUser, posts, setPosts }}>
      {children}
    </StateContext.Provider>
  );
}

export default StateContextProvider;
