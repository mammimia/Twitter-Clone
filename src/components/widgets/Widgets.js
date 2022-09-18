import { Search } from "@material-ui/icons";
import React from "react";
import { TwitterShareButton, TwitterTimelineEmbed, TwitterTweetEmbed } from "react-twitter-embed";
import "./Widgets.css";

function Widgets() {
  return (
    <div className="widgets">
      <div className="widgets-input">
        <Search className="search-icon" />
        <input placeholder="Search Twitter" type="text" />
      </div>
      <div className="widgets-container">
        <h2>What's happening</h2>
        <TwitterTweetEmbed tweetId="825063334072426499" />
        <TwitterTimelineEmbed sourceType="profile" screenName="elonmusk" options={{ height: 400 }} />
        <TwitterShareButton options={{ text: "Twitter clone successfully implemented." }} />
      </div>
    </div>
  );
}

export default Widgets;
