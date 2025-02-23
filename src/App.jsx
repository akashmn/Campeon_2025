import { useEffect, useState } from "react";
import "./App.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Events from "./pages/Events";
import About from "./pages/About";
import Leaderboard from "./pages/Leaderboard";
import Loader from "./components/Loader";
import Footer from "./components/Footer";
import Navbar from "./components/Navbar";
import IndiviEvent from "./pages/IndiviEvent";
import AOS from "aos";
import "aos/dist/aos.css";

function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    //scroling to top
    window.scrollTo(0, 0);

    // Initialize AOS
    AOS.init({
      duration: 1000,
      once: false,
    });
    //loading screen
    const timeOut = setTimeout(() => {
      setLoading(false);
    }, 2800); // Slightly longer to ensure glitch effect is visible
    return () => clearTimeout(timeOut);
  }, [Location]);

  return (
    <Router>
      <div className="app-container">
        <Loader className={!loading ? "loaderHidden" : ""} />
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/events" element={<Events />} />
          <Route path="/about" element={<About />} />
          <Route path="/leaderboard" element={<Leaderboard />} />
          <Route path="/events/:id" element={<IndiviEvent />} />
        </Routes>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
