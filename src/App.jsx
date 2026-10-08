import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home/Home";
import About from "./pages/about/About";
import Service from "./pages/Service/Service";
import Careers from "./pages/Careers/Careers";
import Blog from "./pages/Blog/Blog";
import Contactus from "./pages/Contactus/Contactus";
import Cloneproject from "./pages/Cloneproject/Cloneproject";
import Header from "./components/Header/Header";
import Footer from "./components/footer/Footer";

export default function App() {
  return (
    <>
      <Header />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<Service />} />
        <Route path="/careers" element={<Careers />} />
        <Route path="/blog" element={<Blog />} />
        <Route path="/contactus" element={<Contactus />} />
        <Route path="/cloneproject" element={<Cloneproject />} />
      </Routes>

      <Footer />
    </>
  );
}
