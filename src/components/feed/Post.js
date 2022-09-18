import { Avatar } from "@material-ui/core";
import { ChatBubbleOutline, FavoriteBorder, Publish, Repeat, VerifiedUser } from "@material-ui/icons";
import React from "react";
import "./Post.css";

function Post({ displayName, userName, verified, timestamp, text, image, avatar }) {
  return (
    <div className="post">
      <div className="post-avatar">
        <Avatar src={avatar} />
      </div>
      <div className="post-body">
        <div className="post-header">
          <div className="post-header-text">
            <h3>
              {displayName}
              <span className="post-header-special">
                {verified && <VerifiedUser className="post-badge" />}
                {userName}
              </span>
            </h3>
          </div>
          <div className="post-header-description">
            <p>{text}</p>
          </div>
        </div>
        <img src={image} alt=""></img>
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
