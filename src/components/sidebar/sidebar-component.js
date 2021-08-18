import { Avatar, Typography } from "@material-ui/core";
import React from "react";
import { SideBarContainer } from "./sidebar-style";
import SiderBarStatus from "../sidebar/sider-utils/sider-status-component";
import BookmarkIcon from "@material-ui/icons/Bookmark";

const SideBar = () => {
  const recentHashtags = (tag) => {
    return (
      <div className="sidebar_bottom_recenttags">
        <span className="sidebar_bottom_hash">#</span>
        <span>{tag}</span>
      </div>
    );
  };
  return (
    <SideBarContainer>
      <div className="sidebar_top">
        <div className="siderbar_image">
          <img
            src={
              "https://images.unsplash.com/photo-1625483149117-18ee31d8cf9e?ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&ixlib=rb-1.2.1&auto=format&fit=crop&w=1993&q=80"
            }
            alt="background"
          />
          <Avatar className={"avatar_logo"} />
        </div>
        <div className="avatar_description">
          <div>
            <Typography className="title">Bharat Dussa</Typography>
            <Typography className="sub_title">
              Software Engineer at Deuex Solution
            </Typography>
          </div>
        </div>
        <hr className="divider" />
        <div className="sidebar_status">
          <SiderBarStatus status="Who viewed your profile" views={"650"} />
          <SiderBarStatus status="Views of the post" views={"233"} />
        </div>
        <hr className="divider" />
        <div className="my_items">
          <BookmarkIcon className="bookmark_icon" />
          <p>My items</p>
        </div>
      </div>

      <div className="sidebar_bottom">
        <div>
          <p>Recent</p>
          {recentHashtags("ReactJs")}
          {recentHashtags("Nodejs")}
          {recentHashtags("VueJs")}
          {recentHashtags("CyberSecurity")}
        </div>
      </div>
    </SideBarContainer>
  );
};

export default SideBar;
