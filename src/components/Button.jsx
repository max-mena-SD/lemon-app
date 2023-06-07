import "./css/Button.css";
function Button({ text, openModal }) {
  return <button onClick={openModal}>{text}</button>;
}

export default Button;
