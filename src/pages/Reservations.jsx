import { useState ,useEffect} from "react";
import "../css/Reservations.css";

export default function Reservations() {

  const [reservation, setReservation] = useState({
    name: "",
    guests: "",
    time: ""
  });

  const [reservations, setReservations] = useState(() => {
  const savedReservations = localStorage.getItem("reservations");
  return savedReservations ? JSON.parse(savedReservations) : [];
});

  const [editId, setEditId] = useState(null);

  useEffect(() => {
  localStorage.setItem(
    "reservations",
    JSON.stringify(reservations)
  );
}, [reservations]);

  const handleChange = (e) => {
    setReservation({
      ...reservation,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      reservation.name === "" ||
      reservation.guests === "" ||
      reservation.time === ""
    ) {
      alert("Please fill all fields.");
      return;
    }

    if (editId !== null) {

      setReservations(
        reservations.map((item) =>
          item.id === editId
            ? { ...reservation, id: editId }
            : item
        )
      );

      setEditId(null);

    } else {

      const newReservation = {
        ...reservation,
        id: Date.now()
      };

      setReservations([
        ...reservations,
        newReservation
      ]);

    }

    setReservation({
      name: "",
      guests: "",
      time: ""
    });
  };

  const handleEdit = (item) => {

    setReservation(item);

    setEditId(item.id);

  };

  const handleDelete = (id) => {

    setReservations(
      reservations.filter(
        item => item.id !== id
      )
    );

  };

  return (

    <div className="reservation-container">

      <h1>Table Reservations</h1>

      <form
        className="reservation-form"
        onSubmit={handleSubmit}
      >

        <input
          type="text"
          name="name"
          placeholder="Customer Name"
          value={reservation.name}
          onChange={handleChange}
        />

        <input
          type="number"
          name="guests"
          placeholder="Guests"
          value={reservation.guests}
          onChange={handleChange}
        />

        <input
          type="time"
          name="time"
          value={reservation.time}
          onChange={handleChange}
        />

        <button type="submit">

          {editId ? "Update Reservation" : "Add Reservation"}

        </button>

      </form>

      <div className="reservation-list">

        {reservations.map((item) => (

          <div
            className="reservation-card"
            key={item.id}
          >

            <h2>{item.name}</h2>

            <p>Guests : {item.guests}</p>

            <p>Time : {item.time}</p>

            <div className="buttons">

              <button
                className="edit-btn"
                onClick={() => handleEdit(item)}
              >
                Edit
              </button>

              <button
                className="delete-btn"
                onClick={() => handleDelete(item.id)}
              >
                Delete
              </button>

            </div>

          </div>

        ))}

      </div>

    </div>

  );

}