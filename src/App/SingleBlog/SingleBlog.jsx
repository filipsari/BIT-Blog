import { useEffect, useState } from "react";
import { useParams } from "react-router";
import { Link } from "react-router-dom";
import { getPost } from "../../services/services.js";
import { getAuthorName } from "../../services/services.js";
import { getMorePosts } from "../../services/services.js";


export const SingleBlog = () => {
  let { id } = useParams("id");

  const [post, setPost] = useState({});
  const [authorName, setAuthorName] = useState("");
  const [morePosts, setMorePosts] = useState([]);

  useEffect(() => {
    getPost(id)
      .then((postData) => {
        setPost(postData);
        return postData.userId;
      })
      .then((userId) => {
        // author name
        getAuthorName(userId).then((authorData) => {
          setAuthorName(authorData);
        });
        getMorePosts(userId).then((postsArr) => {
          setMorePosts(postsArr);
        });
      });
  }, [id]);
  return (
    <div className="mainContainer">
      <h1 className="text-center">{post.title}</h1>
      <Link to={`/authors/${post.userId}`}>
        <h3>{authorName}</h3>
      </Link>
      <p> {post.body} </p>
      <h5>3 more posts from same author</h5>
      {morePosts.map((morePost) => {
        return (
          <Link to={`/posts/${morePost.id}`}>
            <p>{morePost.title}</p>
          </Link>
        );
      })}
    </div>
  );
};
