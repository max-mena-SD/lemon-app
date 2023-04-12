import Nav from "./Nav";
import logo from "./img/littleLemonLogo.jpg";
import "./css/Header.css";

function Header() {
  return (
    <header className="header">
      <img src={logo} alt="Little Lemon logo" className="logo" />
      <Nav />
    </header>
  );
}

export default Header;
