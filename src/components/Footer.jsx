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
        <ul className="socialLinks">
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
        <ul className="socialIcons">
          <li>
            <a href="#">
              <svg width="48" height="48" fill="#1877F2">
                <path d="M22 12C22 6.48 17.52 2 12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12M18 12L14 12V16H11V12H7V9H11V6H14V9H18V12Z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg width="48" height="48" fill="#E4405F">
                <path d="M12,2.5C6.75,2.5 2.5,6.75 2.5,12C2.5,17.25 6.75,21.5 12,21.5C17.25,21.5 21.5,17.25 21.5,12C21.5,6.75 17.25,2.5 12,2.5M12,20C7.86,20 4.39,16.53 4.39,12C4.39,7.86 7.86,4.39 12,4.39C16.14,4.39 19.61,7.86 19.61,12C19.61,16.14 16.14,19.61 12,19.61M17.5,12A5.5,5.5 0 0,1 12,17.5A5.5,5.5 0 0,1 6.5,12A5.5,5.5 0 0,1 12,6.5A5.5,5.5 0 0,1 17.5,12Z"></path>
              </svg>
            </a>
          </li>
          <li>
            <a href="#">
              <svg width="48" height="48" fill="#0077B5">
                <path d="M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2M18 16.5H16.25V14.5C16.25 13.95 16.2 13.25 15.11 13.25C13.9 13.25 13.5 14 13.5 15V16.5H11.75V11H13.5V12.26C14 11.59 14.93 10.75 16.15 10.75C18.3 10.75 18 12.1 18 13.3V16.5Z"></path>
              </svg>
            </a>
          </li>
        </ul>
      </article>
    </footer>
  );
}

export default Footer;
