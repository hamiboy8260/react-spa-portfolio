import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { faCircleXmark } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import imgPlaceholder from "../../images/img-placeholder.jpg";

export default function CreatePage() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [gitHubLink, setGitHubLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [errors, setErrors] = useState({});
  const [tags, setTags] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");

  async function createPost(event) {
    event.preventDefault(); // prevent the page from reloading

    if (!title || !description) {
      setErrors({
        title: !title ? "Title is required" : "",
        description: !description ? "Description is required" : "",
      });
      return;
    }

    const newPost = {
      title: title,
      description: description,
      image: image || imgPlaceholder,
      gitHubLink: gitHubLink,
      liveLink: liveLink,
      tags: tags,
    };

    const response = await fetch(
      "https://react-portfolio-spa-default-rtdb.firebaseio.com/posts.json",
      {
        method: "POST", // POST request to add data
        body: JSON.stringify(newPost), // the data to be added, needs to be converted to JSON format
      }
    );
    if (response.ok) {
      setSuccessMessage("Post created successfully!");
      setTimeout(() => {
        navigate(`/projects`);
      }, 1000);
    }
  }

  function handleKeyDown(event) {
    if (event.keyCode === 13) {
      event.preventDefault();
      const value = event.target.value.trim();
      if (value) {
        setTags([...tags, value]);
        event.target.value = "";
      }
    }
  }

  function removeTag(index) {
    // remove the tag from the array
    setTags(tags.filter((del, i) => i !== index));
  }

  return (
    <section className="page">
      <div className="text-centerCP">
        <h1 style={{ marginTop: "0px" }}>Create Page</h1>
      </div>
      <form onSubmit={createPost}>
        <input
          type="text"
          value={title}
          placeholder="Title"
          onChange={(event) => setTitle(event.target.value)}
        />
        {errors.title && <p className="error-msg">{errors.title}</p>}
        <textarea
          rows="5"
          cols="45"
          type="text"
          value={description}
          placeholder="Description"
          onChange={(event) => setDescription(event.target.value)}
        />
        {errors.description && (
          <p className="error-msg">{errors.description}</p>
        )}

        <input
          type="url"
          value={gitHubLink}
          placeholder="GitHub Link"
          onChange={(event) => setGitHubLink(event.target.value)}
        />
        <input
          type="url"
          value={liveLink}
          placeholder="Live Link"
          onChange={(event) => setLiveLink(event.target.value)}
        />

        <div className="tags-input-container">
          {tags.map((tag, index) => (
            <div className="tag-item" key={index}>
              <span className="text">{tag}</span>
              <span className="close" onClick={() => removeTag(index)}>
                <FontAwesomeIcon icon={faCircleXmark} />
              </span>
            </div>
          ))}
          <input
            onKeyDown={handleKeyDown}
            type="text"
            className="tags-input"
            placeholder="Press enter to add tags"
          />
        </div>
        <input
          type="url"
          value={image}
          placeholder="Image url"
          onChange={(event) => setImage(event.target.value)}
        />
        <img
          className="image-preview"
          src={image}
          alt="choose"
          onError={(event) => (event.target.src = imgPlaceholder)}
        />

        <button>Save</button>
        {successMessage && <p className="success-msg">{successMessage}</p>}
      </form>
    </section>
  );
}
