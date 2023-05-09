import Button from "./Button";
import "./css/ReserveMain.css";
import reservationImage from "./img/gourmet_dish_1.jpg";

function ReserveMain() {
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
        <Button text="Reserve a table" />
      </article>
      <article className="right">
        <div className="imageReservation">
          <img src={reservationImage} alt="image of a menu item" />
        </div>
      </article>
    </section>
  );
}

export default ReserveMain;
