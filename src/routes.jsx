import "./App.css";
import "./index.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import { Hero } from "./pages/Hero";
import { Blog1 } from "./pages/Blog1";

function routes() {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Hero />} />
          <Route path="/blog1" element={<Blog1 />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default routes;
