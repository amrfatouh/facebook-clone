import React from "react";
import "./Feed.css";
import PostingForm from "./PostingForm";
import PostsContainer from "./PostsContainer";

function Feed() {
  return (
    <div className="feed">
      <PostingForm />
      <PostsContainer />
    </div>
  );
}

export default Feed;
