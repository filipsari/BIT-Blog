import React from "react";
import "./BlogList.css";
import { getData } from "../../services/services";
import { useState, useEffect } from "react";
import { Blog } from "../Blog/Blog";

export const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    getData().then((posts) => {
      setPosts(posts);
    });
  }, []);

  return (
    <div className="blogList">
      <h1>POSTS</h1>
      {posts.map((post, userId) => (
        <Blog post={post} key={userId} />
      ))}
    </div>
  );
};

// <div className="post-container">
//   <h1>POSTS</h1>
// <a href="#"> Title 1</a>
// <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

// <a href="#"> Title 2</a>
// <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

// <a href="#"> Title 3</a>
// <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

// <a href="#"> Title 4</a>
// <p> Lorem ipsum dolor, sit amet consectetur adipisicing elit.</p>

//  </div>

// )
// };
