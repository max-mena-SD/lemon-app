import "./css/Nav.css";

function Nav() {
  return (
    <nav>
      <ul className="nav-links">
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#menu">Menu</a>
        </li>
        <li>
          <a href="#reservation">Reservations</a>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
