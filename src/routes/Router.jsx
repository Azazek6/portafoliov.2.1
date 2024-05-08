import { BrowserRouter, Routes, Route } from "react-router-dom";
import NotFoundPage from "../pages/404";
import Home from "../pages/home";
import About from "../pages/about";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route exact path="/about" element={<About />} />
        <Route exact path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
