import { useEffect, useState } from "react";
import Post from "../components/Post";

export default function ProjectsPage() {
  const [posts, setPosts] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const response = await fetch(
      "https://react-portfolio-spa-default-rtdb.firebaseio.com/posts.json"
    );
    const data = await response.json();
    const array = Object.keys(data).map((key) => ({ id: key, ...data[key] }));
    setPosts(array);
  }

  // filter the posts based on tags
  const filteredPosts =
    searchTerm.trim() === "" // if the search term is empty
      ? posts // return all posts
      : posts.filter(
          // otherwise, filter the posts
          (
            post // if the post has tags
          ) =>
            post.tags && // and if any of the tags includes the search term
            post.tags.some(
              (
                tag // (some() methods checks if any of the tags includes the search term)
              ) => tag.toLowerCase().includes(searchTerm.toLowerCase())
            )
        );

  return (
    <section className="page">
      <div className="site-heading">
        <h1>PROJECTS</h1>
      </div>

      <form className="search-form" onSubmit={(e) => e.preventDefault()}>
        <input
          type="text"
          placeholder="Search by tag"
          value={searchTerm}
          onChange={(e) => setSearchTerm(e.target.value)}
        />
      </form>

      <section className="grid-container">
        {filteredPosts.map((post) => (
          <Post key={post.id} post={post} />
        ))}
      </section>
    </section>
  );
}
