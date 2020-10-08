import React, { useContext, useEffect, useState } from "react";
import { db } from "./firebase";
import Post from "./Post";
import "./PostsContainer.css";
import { StateContext } from "./StateContext";
function PostsContainer() {
  let { posts } = useContext(StateContext);

  return (
    <div className="posts-container">
      <Post />
      <div>state:</div>
      {posts.map((post) => {
        console.log(post);
        return <div key={Math.random()}>{post.postData.text}</div>;
      })}
    </div>
  );
}

export default PostsContainer;
