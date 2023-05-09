import "./css/Main.css";
import Button from "./Button";
import placeHolderImg from "./img/littleLemonLogo.jpg";
import MenuMain from "./MenuMain";
import ReserveMain from "./ReserveMain";
import AboutMain from "./AboutMain";
import TestimonialMain from "./TestimonialMain";

function Main() {
  return (
    <main>
      {/* Reservation section */}
      <ReserveMain />

      {/* Menu section */}
      <MenuMain />

      {/* Testimonial section */}
      <TestimonialMain />

      {/* About section */}
      <AboutMain />
    </main>
  );
}

export default Main;
