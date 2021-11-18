import React, { useEffect, useState } from "react";
import "./Feed.css";
import InputOption from "./InputOption";
import Post from "./Post";
// import { db } from "./firebase";
// import firebase from firebase;

function Feed() {
  // const [input, setInput] = useState("");

  const [posts, setPosts] = useState([]);

  // useEffect(() => {
  //   db.collection("posts").orderBy('timestamp', 'desc').onSnapshot((snapshot) =>
  //     setPosts(
  //       snapshot.docs.map((doc) => ({
  //         id: doc.id,
  //         data: doc.data(),
  //       }))
  //     )
  //   );
  // }, []);

  // const sendPost = (e) => {
  //   e.preventDefault();

  // db.collection("posts").add({
  // name: "Madhav Arora",
  // description: "this is a test",
  // message: input,
  // photoUrl: '',
  // timestamp: firebase.firestore.FieldValue.serverTimestamp(),
  //   });
  // setInput('');
  // };

  return (
    <div className="feed">
      <div className="feed__inputContainer">
        <div className="feed__input">
          <form>
            <input
              /*value={input} onChange={e => setInput(e.target.value)}*/ type="text"
            />
            <button /*onClick={sendPost}*/ type="submit">Send</button>
          </form>
        </div>
        <div className="feed__inputOptions">
          <InputOption /*Icon = {ImageIcon}*/ title="Photo" />
          <InputOption /*Icon = {ImageIcon}*/ title="Video" />
          <InputOption /*Icon = {ImageIcon}*/ title="Event" />
          <InputOption /*Icon = {ImageIcon}*/ title="Write article" />
        </div>
      </div>

      {/* posts */}
      {posts.map(({ id, data: { name, description, message, photoUrl } }) => (
        <Post />
      ))}
      <Post
        // key={id}
        name="Madhav Arora"
        description="This is a test"
        message="Wow it worked"
      />
    </div>
  );
}

export default Feed;
