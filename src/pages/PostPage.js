import { useState, useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

export default function PostPage({ isAuth }) {
  const [post, setPost] = useState([]);
  const params = useParams();
  const url = `https://react-portfolio-spa-default-rtdb.firebaseio.com/posts/${params.id}.json`;
  const navigate = useNavigate();

  // the side effect - fetch post
  useEffect(() => {
    async function getPost() {
      const response = await fetch(url); // fetching all posts from firebase
      const data = await response.json();
      setPost(data); // Setting the state to the array of objects
    }
    getPost();
  }, [url]); // empty array as second argument to run the function only once

  function deletePost() {
    const confirmed = window.confirm(
      "Are you sure you want to delete this post?"
    );
    if (confirmed) {
      fetch(url, {
        method: "DELETE",
      }).then(() => {
        navigate("/projects");
      });
    }
  }

  function showUpdate() {
    navigate(`/update/${params.id}`); // navigate to the specific post after clicking on the update button
  }

  return (
    <section className="page">
      <article className="post-detail">
        <img src={post.image} alt={post.title} />
        <section className="postpage-content">
          <h2>{post.title}</h2>

          {post.liveLink && (
            <a href={post.liveLink} target="_blank" rel="noreferrer">
              <i>{<FontAwesomeIcon icon={faLink} />}</i>
            </a>
          )}
          {post.gitHubLink && (
            <a href={post.gitHubLink} target="_blank" rel="noreferrer">
              <i>{<FontAwesomeIcon icon={faGithub} />}</i>
            </a>
          )}

          <p>{post.description}</p>
          {isAuth && (
            <>
              <button onClick={showUpdate}>Update post</button>
              <button className="btn-outline" onClick={deletePost}>
                Delete post
              </button>
            </>
          )}
        </section>
      </article>
    </section>
  );
}
