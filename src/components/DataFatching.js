import React, { useState, useEffect } from "react";
import axios from "axios";

const DataFatching = () => {
  const [post, setPost] = useState({});
  const [id, setId] = useState(1);
  const [buttom, setButton] = useState(1);

  useEffect(() => {
    axios
      .get(`https://jsonplaceholder.typicode.com/posts/${buttom}`)
      .then((res) => {
        console.log(res);
        setPost(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, [buttom]);
  const handleClick = () => {
    setButton(id);
  };
  return (
    <div>
      <input type="text" value={id} onChange={(e) => setId(e.target.value)} />
      <button type="button" onClick={handleClick}>
        fatch
      </button>
      {/* <ul>
        {posts.map((post) => (
          <li key={post.id}>{post.title}</li>
        ))}
      </ul> */}
      {post.title}
    </div>
  );
};

export default DataFatching;
