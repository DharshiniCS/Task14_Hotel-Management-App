import React from "react";
import useFetchMenu from "../hooks/useFetchMenu";
import { useContext } from "react";
import { CartContext } from "../context/CartContext";
import { Link, useSearchParams } from "react-router-dom";
import "../css/Menu.css";

export default function Menu() {
  const { menu, loading, error } = useFetchMenu();
  const [searchParams, setSearchParams] = useSearchParams();

const search = searchParams.get("search") || "";
  const {addToCart} = useContext(CartContext);

  if (loading) {
    return <h2 className="status">Loading menu...</h2>;
  }

  if (error) {
    return <h2 className="status">{error}</h2>;
  }

  return (
    <div className="menu-container">
      <h1 className="menu-title">Our Menu</h1><div className="search-box">

  <input
    type="text"
    placeholder="Search recipes..."
    value={search}
    onChange={(e) =>
      setSearchParams({
        search: e.target.value
      })
    }
  />

</div>


      <div className="menu-list">
        {
          menu
          .filter((item) =>
            item.name.toLowerCase().includes(search.toLowerCase())
          )
          .map((item) => (
          <div className="menu-card" key={item.id}>
            <img 
              src={item.image} 
              alt={item.name} 
              className="menu-image"
            />

            <h2>{item.name}</h2>
            <p>{item.cuisine}</p>

            <div className="menu-price">
              ₹{item.caloriesPerServing}
            </div>

            <button className="add-btn" onClick={()=>addToCart(item)}>
              Add to Cart
            </button>
            <Link
              to={`/menu/${item.id}`}
              className="details-btn"
            >
              View Details
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}