import { Avatar } from "@material-ui/core";
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from "@material-ui/icons";
import React from "react";
import "./Post.css";

function Post({ displayName, userName, verified, timestamp, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src="https://source.unsplash.com/random/200x200/?img=1" />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-header-text">
            <h3>
              Mammimia
              <span className="post-header-special">
                <VerifiedUser className="post-badge" />
                @mammimia
              </span>
            </h3>
          </div>
          <div className="post-header-description">
            <p>Duis eget imperdiet ex, in fringilla velit. Nunc vitae risus eget magna tempus porta eget a odio. </p>
          </div>
        </div>
        <img src="https://source.unsplash.com/random/400x300/?img=1" alt=""></img>
        <div className="post-footer">
          <ChatBubbleOutline fontSize="small" />
          <Repeat fontSize="small" />
          <FavoriteBorder fontSize="small" />
          <Publish fontSize="small" />
        </div>
      </div>
    </div>
  );
}

export default Post;
