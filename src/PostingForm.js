import React from "react";
import "./PostingForm.css";

function PostingForm() {
  return (
    <div className="posting-form">
      <form>
        <h3>Make a Post</h3>
        <textarea placeholder="what's on your mind?"></textarea>
        <input placeholder="image url (optional)" />
        <input type="submit" value="post" style={{ display: "none" }} />
      </form>
    </div>
  );
}

export default PostingForm;
