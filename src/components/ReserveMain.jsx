import { useState } from "react";
import Button from "./Button";
import "./css/ReserveMain.css";
// import BookingForm from "./BookingForm";
import reservationImage from "./img/gourmet_dish_1.jpg";
import BookingForm from "./BookingForm";

function ReserveMain() {

  const [openModal, setOpenModal] = useState(false);

  const handleSubmit = () => {
    setOpenModal(true);
    console.log("setOpenModal cambia a true")
  };

  return (
    <section className="reservation" id="reservation">
      <article className="left">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
          dolores sit animi dolore expedita tempore. Lorem ipsum dolor sit amet
          consectetur adipisicing elit. Iste sit quasi, voluptatibus beatae
          perferendis in repellat eius laboriosam sed rerum?
        </p>
        <Button onClick={handleSubmit} text="Reserve a table" />
      </article>
      <article className="right">
        <div className="imageReservation">
          <img src={reservationImage} alt="image of a menu item" />
        </div>
      </article>
      {openModal && <BookingForm openModal={openModal} setOpenModal={setOpenModal} /> }
    </section>
  );
}

export default ReserveMain;
