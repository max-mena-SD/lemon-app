import "./css/Footer.css";

function Footer() {
  return (
    <footer>
      <img src="#" alt="Little Lemon footer image" />
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
          <li>Address</li>
          <li>Phone number</li>
          <li>Email</li>
        </ul>
      </article>
      <article>
        <h2>Social Media Links</h2>
        <ul>
          <li>Facebook</li>
          <li>Instagram</li>
          <li>linkedin</li>
        </ul>
      </article>
    </footer>
  );
}

export default Footer;
