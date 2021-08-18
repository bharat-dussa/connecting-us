import { Avatar } from "@material-ui/core";
import React, { useState } from "react";
import { PostContainer } from "./post-component-style";
import IconButtonComponent from "../utils/button/button-component";
import { ReactComponent as LikeButton } from "../../assets/posts/like-button.svg";
import { ReactComponent as CommentButton } from "../../assets/posts/comment-button.svg";
import { ReactComponent as SendButton } from "../../assets/posts/send-button.svg";
import { ReactComponent as ShareButton } from "../../assets/posts/share-button.svg";

const PostComponent = ({ name, description, message, mediaUrl }) => {
  

  return (
    <PostContainer>
      <div className="post_header">
        <Avatar />
        <div className="post_description">
          <h2>{name}</h2>
          <p>{description}</p>
        </div>
      </div>

      <div className="post_main_content">
        <p>
          {message}
        </p>
      </div>

      <div className="post_buttons_section">
        <IconButtonComponent Icon={LikeButton} title="Like" />
        <IconButtonComponent Icon={CommentButton} title="Comment" />
        <IconButtonComponent Icon={ShareButton} title="Share" />
        <IconButtonComponent Icon={SendButton} title="Send" />
      </div>
    </PostContainer>
  );
};

export default PostComponent;
