import { Avatar, Button } from "@material-ui/core";
import React from "react";
import "./TweetBox.css";

function TweetBox() {
  return (
    <div className="tweet-box">
      <form>
        <div className="tweet-box-input">
          <Avatar src="https://source.unsplash.com/random/200x200/?img=1" />
          <input placeholder="What's happening?" type="text"></input>
        </div>
        <input className="text-box-image-input" placeholder="Optional: Enter Image URL" type="text"></input>
        <Button className="tweet-box-button">Tweet</Button>
      </form>
    </div>
  );
}

export default TweetBox;
