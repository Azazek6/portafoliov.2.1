import { BrowserRouter, Route, Routes } from "react-router-dom";
import notFound from "../pages/notFound";
import Home from "../pages/home";
import About from "../pages/about";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="*" element={<notFound />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
