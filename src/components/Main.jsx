import "./css/Main.css";
import Button from "./Button";
import placeHolderImg from "./img/littleLemonLogo.jpg";
import reservationImage from "./img/gourmet_dish_1.jpg";
function Main() {
  return (
    <main>
      <section className="reservation" id="reservation">
        <article></article>
        <article className="left">
          <h2>Little Lemon</h2>
          <h3>Chicago</h3>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptate,
            dolores sit animi dolore expedita tempore. Lorem ipsum dolor sit
            amet consectetur adipisicing elit. Iste sit quasi, voluptatibus
            beatae perferendis in repellat eius laboriosam sed rerum?
          </p>
          <Button text="Reserve a table" />
        </article>
        <article className="right">
          <div className="imageReservation">
            <img src={reservationImage} alt="image of the reservations " />
          </div>
        </article>
        <article></article>
      </section>
      <section>Menu</section>
      <section>Testimonials</section>
      <section>
        <article className="left">
          <img src={placeHolderImg} alt="" />
        </article>
        <article className="right">right</article>
      </section>
    </main>
  );
}

export default Main;
