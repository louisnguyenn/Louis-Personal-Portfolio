import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Hero } from "./pages/Hero";
import { Blog1 } from "./pages/Blog1";
import { Blog } from "./pages/Blogs";

function App() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/blogs" element={<Blog />} />
          <Route path="/blog1" element={<Blog1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default App;
