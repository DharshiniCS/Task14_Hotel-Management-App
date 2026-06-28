import { Link } from "react-router-dom";
import "../css/Home.css"

export default function Home() {
    const features = [
  {
    id: 1,
    icon: "🥗",
    title: "Fresh Ingredients",
    description:
      "We use fresh, handpicked ingredients to prepare every meal."
  },

  {
    id: 2,
    icon: "👨‍🍳",
    title: "Expert Chefs",
    description:
      "Our experienced chefs craft every dish with passion and perfection."
  },

  {
    id: 3,
    icon: "🏆",
    title: "Luxury Dining",
    description:
      "Enjoy an elegant dining atmosphere with exceptional service."
  }
];
  return (
  <div>

    <section className="hero">
      <div className="hero-content">

        <h1>🍽️ Royal Spice</h1>

        <h2>Experience Fine Dining Like Never Before</h2>

        <p>
          Enjoy handcrafted dishes prepared with the freshest
          ingredients in a luxurious and welcoming atmosphere.
        </p>

        <div className="hero-buttons">

          <Link to="/menu" className="btn">
            Explore Menu
          </Link>

          <Link to="/contact" className="btn secondary-btn">
            Reserve Table
          </Link>

        </div>

      </div>
    </section>

    <section className="features">

      <h2>Why Choose Royal Spice?</h2>

      <div className="feature-container">

        {features.map((feature) => (
          <div className="feature-card" key={feature.id}>

            <h1>{feature.icon}</h1>

            <h3>{feature.title}</h3>

            <p>{feature.description}</p>

          </div>
        ))}

      </div>

    </section>

  </div>
);
    
}
