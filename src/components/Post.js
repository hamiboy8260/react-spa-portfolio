import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLink } from "@fortawesome/free-solid-svg-icons";
import { faGithub } from "@fortawesome/free-brands-svg-icons";
import { useNavigate } from "react-router-dom";

export default function Post({ post }) {
  const navigate = useNavigate(); // hook to navigate to a new page
  const shortendDescription =
    post.description.length > 100
      ? post.description.slice(0, 100) + "..."
      : post.description;

  function handleClick() {
    navigate(`/posts/${post.id}`); // navigate to a specific post
  }

  function handleIconClick(event) {
    event.stopPropagation(); // stop the event from bubbling up to the parent element
  }

  return (
    <article onClick={handleClick}>
      <h2>{post.title}</h2>
      <img src={post.image} alt={post.title} />
      <p>{shortendDescription}</p>

      <div className="post-links">
        {post.gitHubLink && (
          <a
            href={post.gitHubLink}
            target="_blank"
            rel="noreferrer"
            onClick={handleIconClick}
          >
            <i>{<FontAwesomeIcon icon={faGithub} />}</i>
          </a>
        )}
        {post.liveLink && (
          <a
            href={post.liveLink}
            target="_blank"
            rel="noreferrer"
            onClick={handleIconClick}
          >
            <i>{<FontAwesomeIcon icon={faLink} />}</i>
          </a>
        )}
      </div>
      <p className="tags">
        {Array.isArray(post.tags) &&
          post.tags.length > 0 &&
          post.tags.map((tag, index) => <span key={index}>{tag}</span>)}
      </p>
    </article>
  );
}
