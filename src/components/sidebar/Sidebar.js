import React from "react";
import "./Sidebar.css";
import TwitterIcon from "@material-ui/icons/Twitter";
import SidebarOptions from "./SidebarOptions";
import { Button } from "@material-ui/core";

function Sidebar() {
  return (
    <div className="sidebar">
      <TwitterIcon className="sidebar-twitter-icon" />
      <SidebarOptions />
      <Button variant="outlined" className="sidebar-tweet-button" fullWidth>
        Tweet
      </Button>
    </div>
  );
}

export default Sidebar;
