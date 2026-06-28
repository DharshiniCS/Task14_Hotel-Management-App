import { NavLink, Outlet } from "react-router-dom";
import "../css/Services.css";

export default function Services() {
  return (
    <div className="services">

      <h1>Our Services</h1>

      <p className="service-text">
        We offer multiple dining experiences to make every meal special.
      </p>

      <div className="service-links">

        <NavLink to="dinein">Dine In</NavLink>

        <NavLink to="delivery">Home Delivery</NavLink>

        <NavLink to="catering">Catering</NavLink>
        <NavLink to="reservations">Reservations</NavLink>

      </div>

      {/* Nested pages appear here */}

      <Outlet />

    </div>
  );
}