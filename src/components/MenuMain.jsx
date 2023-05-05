import reservationImage from "./img/gourmet_dish_1.jpg";
import GreekSalad from "./img/greeksalad.jpg";
import LemmonDessert from "./img/lemondessert.jpg";
import Bruchetta from "./img/bruchetta.jpg";
import Button from "./Button";
import "./css/MenuMain.css";

function MenuMain() {
  return (
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
  );
}

export default MenuMain;
