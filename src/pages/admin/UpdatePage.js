import { useParams, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";
import imgPlaceholder from "../../images/img-placeholder.jpg";
// import { AiFillCloseCircle } from "react-icons/ai";

export default function UpdatePage() {
  const params = useParams();
  const url = `https://react-portfolio-spa-default-rtdb.firebaseio.com/posts/${params.id}.json`;
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image, setImage] = useState("");
  const [gitHubLink, setGitHubLink] = useState("");
  const [liveLink, setLiveLink] = useState("");
  const [tags, setTags] = useState([]);
  const [successMessage, setSuccessMessage] = useState("");
  const [errors, setErrors] = useState({});

  useEffect(() => {
    async function getPost() {
      const response = await fetch(url); // read all posts from firebase
      const post = await response.json();
      setTitle(post.title);
      setDescription(post.description);
      setImage(post.image);
      setGitHubLink(post.gitHubLink);
      setLiveLink(post.liveLink);

      // if the post has tags, set the tags state to the post tags
      if (post.tags) {
        setTags(post.tags);
      } else {
        setTags([]);
      }
    }
    getPost(); // call the function
  }, [url]); // empty array as second argument to run the function only once

  async function updatePost(event) {
    event.preventDefault(); // prevent the page from reloading

    // if (!title.trim() || !description.trim()) {
    //   setErrorMessage("Title and description cannot be empty");
    //   return;
    // }

    if (!title || !description) {
      setErrors({
        title: !title ? "Title is required" : "",
        description: !description ? "Description is required" : "",
      });
      return;
    }

    const postToUpdate = {
      title: title,
      description: description,
      image: image,
      gitHubLink: gitHubLink,
      liveLink: liveLink,
      tags: tags,
    };

    const response = await fetch(url, {
      method: "PUT",
      body: JSON.stringify(postToUpdate),
    });
    if (response.ok) {
      setSuccessMessage("Post updated successfully!");

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
    // remove the tag from the tags array
    setTags(tags.filter((del, i) => i !== index));
  }

  return (
    <section className="page">
      <h1>Update "{title}" </h1>

      {/* render the success message if isUpdated is true */}
      <form onSubmit={updatePost}>
        <input
          type="text"
          value={title}
          placeholder="Type a title"
          onChange={(e) => setTitle(e.target.value)}
        />
        {errors.title && <p className="error-msg">{errors.title}</p>}

        <textarea
          type="text"
          value={description}
          placeholder="Type a description"
          onChange={(e) => setDescription(e.target.value)}
        />
        {errors.description && (
          <p className="error-msg">{errors.description}</p>
        )}

        <input
          type="text"
          value={gitHubLink}
          placeholder="Paste GitHub URL"
          onChange={(e) => setGitHubLink(e.target.value)}
        />
        <input
          type="text"
          value={liveLink}
          placeholder="Paste live URL"
          onChange={(e) => setLiveLink(e.target.value)}
        />

        <div className="tags-input-container">
          {tags &&
            tags.map((tag, index) => (
              <div className="tag-item" key={index}>
                <span className="text">{tag}</span>
                <span className="close" onClick={() => removeTag(index)}>
                  {/* <AiFillCloseCircle /> */}
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

        <button type="submit">Update</button>
        {successMessage && <p className="success-msg">{successMessage}</p>}
        {/* {errorMessage && <p className="error-msg">{errorMessage}</p>} */}
      </form>
    </section>
  );
}
