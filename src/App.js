import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.min.js";
import "bootstrap-icons/font/bootstrap-icons.css";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Cards from "./components/Cards";
import Footer from "./components/Footer";
import Header from "./components/Header";
import Search from "./components/Search";
import NotFound from "./components/NotFound";

export default function App() {
  return (
    <Router>
      <Header />
      <Routes>
        <Route path="*" element={<NotFound />} />
        <Route path="/" element={<Cards />} />
        <Route path="/:busqueda" element={<Search />}/>
      </Routes>
      <Footer />
    </Router>
  );
}
