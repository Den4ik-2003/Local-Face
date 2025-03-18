import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Header from "../Components/Header/header";
import Home from "../Pages/Home/home";
import About from "../Pages/AboutUs/aboutUs";
import OurServices from "../Pages/OurServices/ourServices";
import Blog from "../Pages/Blog/blog";
import NotFound from "../Pages/NotFound/notFound";
import "./routing.css";
import Footer from "../Components/Footer/footer";
import Copyright from "../Components/Copyright/copyright";
import ProductsList from "../Pages/ProductsList/productsList";
import ProductDetail from "../Pages/ProductDetail/productDetail";
import Basket from "../Pages/Basket/basket";
import Favorites from "../Pages/Favorites/favorites";
import Order from "../Pages/Order/order";
import OrderEnd from "../Pages/OrderEnd/orderEnd";

function Routing() {
  return (
    <div className="routing">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/aboutus" element={<About />} />
          <Route path="/services" element={<OurServices />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/productslist" element={<ProductsList />} />
          <Route path="/basket" element={<Basket />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="/product/:id" element={<ProductDetail />} />
          <Route path="/order" element={<Order />} />
          <Route path="/orderEnd" element={<OrderEnd />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
        <Footer />
        <Copyright />
      </Router>
    </div>
  );
}

export default Routing;
