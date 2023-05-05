import "./css/Footer.css";
import placeHolderImg from "./img/littleLemonLogo.jpg";

function Footer() {
  return (
    <footer>
      <img src={placeHolderImg} alt="Little Lemon footer image" />
      <article>
        <h2>Doormat Navigation</h2>
        <ul>
          <li>
            <a href="#">Home</a>
          </li>
          <li>
            <a href="#">About</a>
          </li>
          <li>
            <a href="#">Menu</a>
          </li>
          <li>
            <a href="#">Reservations</a>
          </li>
          <li>
            <a href="#">Order Online</a>
          </li>
          <li>
            <a href="#">Login</a>
          </li>
        </ul>
      </article>

      <article>
        <h2>Contact</h2>
        <ul>
          <li>
            <a href="#">Address</a>
          </li>
          <li>
            <a href="#">Phone number</a>
          </li>
          <li>
            <a href="#">Email</a>
          </li>
        </ul>
      </article>
      <article>
        <h2>Social Media Links</h2>
        <ul>
          <li>
            <a href="#">Facebook</a>
          </li>
          <li>
            <a href="#">Instagram</a>
          </li>
          <li>
            <a href="#">linkedin</a>
          </li>
        </ul>
      </article>
    </footer>
  );
}

export default Footer;
