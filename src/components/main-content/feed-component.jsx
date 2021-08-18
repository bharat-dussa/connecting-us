import React, { useState, useEffect } from "react";
import { FeedContainer } from "./feed-component-style";
import PostContainer from "../post-component";
import { Avatar } from "@material-ui/core";
import { ReactComponent as ImagePhoto } from "../../assets/search/photo.svg";
import { ReactComponent as EventPhoto } from "../../assets/search/event.svg";
import { ReactComponent as VideoPhoto } from "../../assets/search/video.svg";
import { ReactComponent as ArticlePhoto } from "../../assets/search/write_article.svg";
import { ReactComponent as ShareButton } from "../../assets/posts/send-button.svg";

import IconButtonComponent from "../utils/button/button-component";
import { fireStoredb, auth } from "../../firebase-modules/firebase-config";
import firebase from "firebase";

const FeedComponent = () => {
  const [input, setInput] = useState("");
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fireStoredb.collection("posts").orderBy("timestamp", "desc").onSnapshot((snapshot) =>
      setPosts(
        snapshot.docs.map((doc) => ({
          id: doc.id,
          data: doc.data(),
        }))
      )
    );
    return () => {
      console.log("render this");
    };
  }, []);

  const sendPost = (e) => {
    e.preventDefault();
    
        fireStoredb.collection("posts").add({
            name: "Bharat Dussa",
            Description: "This is a Test",
            message: input,
            timestamp: firebase.firestore.FieldValue.serverTimestamp(),
          });
        console.log("send");
    setInput('')
  };

  return (
    <FeedContainer>
      <div className="feed_container">
        <div className="search_input">
          <Avatar className="avatar_logo" />
          <form>
            <input
              type="text"
              value={input}
              onChange={(e) => setInput(e.target.value)}
              placeholder="Start a post"
            />
            <button onClick={sendPost} type="submit">
              <ShareButton />
            </button>
          </form>
        </div>
        <div className="sub_section_div">
          <IconButtonComponent Icon={ImagePhoto} title="photo" />
          <IconButtonComponent Icon={VideoPhoto} title="Video" />
          <IconButtonComponent Icon={EventPhoto} title="Event" />
          <IconButtonComponent Icon={ArticlePhoto} title="Write Article" />
        </div>
      </div>

      {posts.map(({ id, data: { name, description, message } }) => (
        <PostContainer
          key={id}
          name={name}
          description={description}
          message={message}
        />
      ))}
      <PostContainer
        name="bharat dussa"
        description="Computer Engg"
        message={"It's working"}
      />
    </FeedContainer>
  );
};

export default FeedComponent;
