import "./css/Main.css";
import Button from "./Button";
import placeHolderImg from "./img/littleLemonLogo.jpg";
import reservationImage from "./img/gourmet_dish_1.jpg";
import GreekSalad from "./img/greeksalad.jpg";
import LemmonDessert from "./img/lemondessert.jpg";
import Bruchetta from "./img/bruchetta.jpg";
function Main() {
  return (
    <main>
      {/* Reservation section */}
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
            <img src={reservationImage} alt="image of a menu item" />
          </div>
        </article>
        <article></article>
      </section>

      {/* Menu section */}
      <section className="menu" id="menu">
        <div></div>
        <article className="menuItem">
          <section className="itemTop">
            <h2>This week special!</h2>
            <Button text={"Online Menu"} />
          </section>
          {/* .
            .
            . */}

          <section className="itemBottom">
            <article className="specialItem">
              <div className="imageItem">
                <img src={GreekSalad} alt="Greek salad" />
              </div>
              <div className="itemTitle">
                <h4>Greek Salad</h4> <h4 className="priceTag">$12.99</h4>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi, suscipit explicabo fugit dolorum distinctio sit.
                Tenetur, enim debitis quaerat quod architecto provident.
                Voluptatem, sit similique.
              </p>
              <p className="orderLink">Order a delivery 👨🏻‍🍳</p>
            </article>
            <article className="specialItem">
              <div className="imageItem">
                <img src={Bruchetta} alt="Bruchetta" className="imageItem" />
              </div>
              <div className="itemTitle">
                <h4>Bruchetta</h4> <h4 className="priceTag">$12.99</h4>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi, suscipit explicabo fugit dolorum distinctio sit.
                Tenetur, enim debitis quaerat quod architecto provident.
                Voluptatem, sit similique.
              </p>
              <p className="orderLink">Order a delivery 👨🏻‍🍳</p>
            </article>
            <article className="specialItem">
              <div className="imageItem">
                <img
                  src={LemmonDessert}
                  alt="Lemon dessert"
                  className="imageItem"
                />
              </div>
              <div className="itemTitle">
                <h4>Lemon dessert</h4> <h4 className="priceTag">$12.99</h4>
              </div>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Eligendi, suscipit explicabo fugit dolorum distinctio sit.
                Tenetur, enim debitis quaerat quod architecto provident.
                Voluptatem, sit similique.
              </p>
              <p className="orderLink">Order a delivery 👨🏻‍🍳</p>
            </article>
          </section>
          {/* .
            .
            . */}
        </article>
        <div></div>
      </section>

      {/* Testimonial section */}
      <section className="testimonial" id="testimonial">
        <div></div>
        <article className="testimonialItem">Testimonials</article>
        <div></div>
      </section>

      {/* About section */}
      <section className="about" id="about">
        <div></div>
        <article className="left">
          <img src={placeHolderImg} alt="" />
        </article>
        <article className="right">right</article>
        <div></div>
      </section>
    </main>
  );
}

export default Main;
