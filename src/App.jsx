import { BrowserRouter,Routes,Route } from "react-router-dom"
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Home from "./pages/Home";
import Menu from "./pages/Menu";
import Services from "./pages/Services";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Cart from "./pages/Cart";
import Login from "./pages/Login";
import DineIn from "./pages/DineIn";
import Delivery from "./pages/Delivery";
import Catering from "./pages/Catering";
import RecipeDetails from "./pages/RecipeDetails";
import Reservations from "./pages/Reservations";
import NotFound from "./pages/NotFound";
import "./App.css"

export default function App() {
  return (
    <div>
      <BrowserRouter>
        <Navbar/>
        <main className="main-content">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/about" element={<About />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/services" element={<Services />}>
            <Route path="dinein" element={<DineIn />} />
            <Route path="delivery" element={<Delivery />} />
            <Route path="catering" element={<Catering />} />
            <Route path="reservations" element={<Reservations />} />
          </Route>
          <Route path="/menu/:id" element={<RecipeDetails />} />
          <Route path="/login" element={<Login />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
        <Footer/>

      </BrowserRouter>
      
    </div>
  )
}
