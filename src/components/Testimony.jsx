import "./css/Testimony.css";
function Testimony({ rating, image, name, review }) {
  return (
    <div className="cardTestimony">
      <div className="rating">
        <h3>Rating: 5 / {rating}</h3>
      </div>
      <div className="image">
        <img src={image} alt={name} />
      </div>
      <div className="name">
        <p>{name}</p>
      </div>
      <div className="review">
        <p>{review}</p>
      </div>
    </div>
  );
}

export default Testimony;
