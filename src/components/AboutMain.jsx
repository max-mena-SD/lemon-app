import "./css/AboutMain.css";
import EntranceImage from "./img/entrance-Chicago.jpg";
import BarImage from "./img/bar-Chicago.jpg";

function AboutMain() {
  return (
    <section className="about" id="about">
      <div></div>
      <article className="left">
        <h2>Little Lemon</h2>
        <h3>Chicago</h3>
        <p>
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Aspernatur
          est dignissimos quos, quidem delectus officia eligendi! Beatae aliquam
          ut omnis distinctio delectus consequuntur in. Tempore fuga culpa illum
          magnam voluptas voluptatum impedit, facilis quidem accusamus
          consequatur excepturi cumque vitae incidunt eveniet in iure debitis
          dolorem rerum repellat beatae omnis consequuntur?
        </p>
      </article>
      <article className="right">
        <div className="card">
          <img src={BarImage} alt="View of the coffee bar" />
        </div>
        <div className="card">
          <img src={EntranceImage} alt="Entrance of the restaurant" />
        </div>
      </article>
      <div></div>
    </section>
  );
}

export default AboutMain;
