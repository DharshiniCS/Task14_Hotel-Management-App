import "../css/About.css";

export default function About() {
  return (
    <div className="about">

      <section className="about-hero">
        <h2>About Royal Spice</h2>
        <p>
          Bringing people together through delicious food,
          exceptional service, and unforgettable dining experiences.
        </p>
      </section>

      <section className="our-story">

        <div className="story-image">
          <img
            src="https://images.unsplash.com/photo-1559339352-11d035aa65de?auto=format&fit=crop&w=900&q=80"
            alt="Restaurant"
          />
        </div>

        <div className="story-content">
          <h2>Our Story</h2>

          <p>
            Royal Spice was founded with a passion for serving authentic
            flavors using the freshest ingredients. Every recipe is carefully
            crafted by experienced chefs to deliver an unforgettable dining
            experience.
          </p>

          <p>
            From family dinners to special celebrations, we create memorable
            moments with delicious food and warm hospitality.
          </p>

        </div>

      </section>
      <section className="why-us">

  <h2>Why Choose Royal Spice?</h2>

  <div className="why-container">

    <div className="why-card">
      <span>🥗</span>
      <h3>Fresh Ingredients</h3>
      <p>
        Every dish is prepared using fresh vegetables, premium spices,
        and high-quality ingredients.
      </p>
    </div>

    <div className="why-card">
      <span>👨‍🍳</span>
      <h3>Expert Chefs</h3>
      <p>
        Our experienced chefs combine tradition and creativity
        to create unforgettable flavors.
      </p>
    </div>

    <div className="why-card">
      <span>🏆</span>
      <h3>Luxury Dining</h3>
      <p>
        Experience elegant interiors, excellent service,
        and a welcoming atmosphere.
      </p>
    </div>

  </div>

</section>
<section className="mission">

  <div className="mission-box">

    <h2>🎯 Our Mission</h2>

    <p>
      To deliver authentic flavors, outstanding service,
      and memorable dining experiences for every guest.
    </p>

  </div>

  <div className="mission-box">

    <h2>👑 Our Vision</h2>

    <p>
      To become one of the most loved luxury restaurants by
      combining tradition, innovation, and exceptional hospitality.
    </p>

  </div>

</section>
<section className="chef">

  <img
    src="https://images.unsplash.com/photo-1583394293214-28ded15ee548?auto=format&fit=crop&w=700&q=80"
    alt="Head Chef"
  />

  <div className="chef-content">

    <h2>Meet Our Head Chef</h2>

    <h3>Chef Daniel Martin</h3>

    <p>
      With over 15 years of culinary experience, Chef Daniel
      blends traditional recipes with modern techniques to create
      unforgettable dishes loved by every guest.
    </p>

  </div>

</section>

    </div>
  );
}