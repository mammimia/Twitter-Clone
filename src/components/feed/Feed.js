import React, { useEffect, useState } from "react";
import "./Feed.css";
import Post from "./Post";
import TweetBox from "./TweetBox";
import db from "../../services/firebase/firebase";
import { collection, getDocs } from "firebase/firestore/lite";

function Feed() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const postsCollection = collection(db, "posts");
      const postSnapshat = await getDocs(postsCollection);
      const postList = postSnapshat.docs.map((doc) => doc.data());
      setPosts(postList);
    };

    fetchData().catch(console.error);
  }, []);

  return (
    <div className="feed">
      <div className="feed-header">
        <h2>Home</h2>
      </div>
      <TweetBox />
      {posts.map((post) => (
        <Post
          displayName={post.displayName}
          userName={post.userName}
          verified={post.verified}
          text={post.text}
          avatar={post.avatar}
          image={post.image}
        />
      ))}
      <Post
        displayName="Mammimia"
        userName="@mammimia"
        verified
        text="It's working bud."
        avatar="https://source.unsplash.com/random/200x200/?img=2"
        image="https://source.unsplash.com/random/400x300/?img=3"
      />
    </div>
  );
}

export default Feed;
