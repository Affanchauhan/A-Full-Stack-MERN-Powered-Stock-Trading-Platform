// import "./App.css";
import HomePage from "./Landing_Page/Home/HomePage";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import PricingPage from "./Landing_Page/Pricing/PricingPage";
import Signup from "./Landing_Page/Signup/Signup";
import AboutPage from "./Landing_Page/About/AboutPage";
import ProductsPage from "./Landing_Page/Products/ProductsPage";
import SupportPage from "./Landing_Page/Support/SupportPage";
import Navbar from "./Landing_Page/Nevbar";
import Footer from "./Landing_Page/Footer";
import NotFound from "./Landing_Page/NotFound";

function App() {
  return (
    <BrowserRouter>
      <Navbar />
      <Routes>
        <Route path="/" element={<HomePage />}></Route>
        <Route path="/signup" element={<Signup />}></Route>
        <Route path="/about" element={<AboutPage />}></Route>
        <Route path="/products" element={<ProductsPage />}></Route>
        <Route path="/pricing" element={<PricingPage />}></Route>
        <Route path="/support" element={<SupportPage />}></Route>
        <Route path="*" element={<NotFound />}></Route>
      </Routes>
      <Footer />
    </BrowserRouter>
  );
}

export default App;
