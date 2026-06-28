import { useState } from "react";
import "../css/Contact.css";

export default function Contact() {

  const [form, setForm] = useState({
    name: "",
    email: "",
    phone: "",
    message: ""
  });

  const [errors, setErrors] = useState({});

  const handleChange = (e) => {
    setForm({
      ...form,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    let newErrors = {};

    if (!form.name.trim()) {
      newErrors.name = "Name is required";
    }

    if (!form.email.trim()) {
      newErrors.email = "Email is required";
    }

    if (!form.phone.trim()) {
      newErrors.phone = "Phone number is required";
    }

    if (!form.message.trim()) {
      newErrors.message = "Message is required";
    }

    setErrors(newErrors);

    if (Object.keys(newErrors).length === 0) {
      alert("Message sent successfully!");

      setForm({
        name: "",
        email: "",
        phone: "",
        message: ""
      });
    }
  };

  return (
    <div className="contact">

      <h1>Contact Royal Spice</h1>

      <div className="contact-info">

        <div className="info-card">
          <h3>📍 Address</h3>
          <p>123 Food Street, Chennai</p>
        </div>

        <div className="info-card">
          <h3>📞 Phone</h3>
          <p>+91 9876543210</p>
        </div>

        <div className="info-card">
          <h3>📧 Email</h3>
          <p>info@royalspice.com</p>
        </div>

      </div>

      <form onSubmit={handleSubmit} className="contact-form">

        <input
          type="text"
          placeholder="Your Name"
          name="name"
          value={form.name}
          onChange={handleChange}
        />

        {errors.name && <p className="error">{errors.name}</p>}

        <input
          type="email"
          placeholder="Your Email"
          name="email"
          value={form.email}
          onChange={handleChange}
        />

        {errors.email && <p className="error">{errors.email}</p>}

        <input
          type="text"
          placeholder="Phone Number"
          name="phone"
          value={form.phone}
          onChange={handleChange}
        />

        {errors.phone && <p className="error">{errors.phone}</p>}

        <textarea
          rows="5"
          placeholder="Your Message"
          name="message"
          value={form.message}
          onChange={handleChange}
        />

        {errors.message && <p className="error">{errors.message}</p>}

        <button type="submit">
          Send Message
        </button>

      </form>

    </div>
  );
}