import { useState } from "react";
import { Navigate, Route, Routes } from "react-router-dom";
import Nav from "./components/Nav";
import NavAdmin from "./components/NavAdmin";
// import ProjectsPage from "./pages/ProjectsPage";
import AboutPage from "./pages/AboutPage";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import ProjectsPage from "./pages/ProjectsPage";
import CreatePage from "./pages/admin/CreatePage";
import PostPage from "./pages/PostPage";
import UpdatePage from "./pages/admin/UpdatePage";
import Footer from "./components/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowUp } from "@fortawesome/free-solid-svg-icons";
import ContactPage from "./pages/ContactPage";

function App() {
  const [isAuth, setIsAuth] = useState(localStorage.getItem("isAuth")); // default value comes from localStorage
  const [backtoTop, setBacktoTop] = useState(false);

  // function to scroll to top of page
  function handleScroll() {
    if (window.pageYOffset > 300) {
      setBacktoTop(true);
    } else {
      setBacktoTop(false);
    }
  }

  function handleClick() {
    window.scrollTo({ top: 0, behavior: "smooth" });
  }

  window.addEventListener("scroll", handleScroll);

  // variable to store all private routes including the admin nav bar
  const privateRoutes = (
    <>
      <NavAdmin setAuth={setIsAuth} />

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/posts/:id" element={<PostPage isAuth={isAuth} />} />
        <Route path="/update/:id" element={<UpdatePage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/create" element={<CreatePage />} />

        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );

  // variable to store all public routes including the nav bar
  const publicRoutes = (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route path="/about" element={<AboutPage />} />
        <Route path="/posts/:id" element={<PostPage isAuth={isAuth} />} />
        <Route path="/update/:id" element={<UpdatePage />} />
        <Route path="/projects" element={<ProjectsPage />} />
        <Route path="/contact" element={<ContactPage />} />
        <Route path="/sign-in" element={<SignInPage setAuth={setIsAuth} />} />
        <Route path="*" element={<Navigate to="/" />} />
      </Routes>
    </>
  );

  // if user is authenticated, show privateRoutes, else show publicRoutes
  return (
    <div className="App">
      <main>{isAuth ? privateRoutes : publicRoutes}</main>
      <Footer />
      {backtoTop && (
        <button className="back-to-top-button" onClick={handleClick}>
          <FontAwesomeIcon icon={faArrowUp} />
        </button>
      )}
    </div>
  );
}

export default App;
