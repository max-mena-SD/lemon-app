import Testimony from "./Testimony";
import "./css/TestimonialMain.css";
import React from "react";

let reviewsPull = [
  {
    rating: 5,
    image: "https://i.pravatar.cc/150?img=1",
    name: "Juan Perez",
    comment: "Excelente servicio, muy recomendado para cualquier ocasión.",
  },
  {
    rating: 4,
    image: "https://i.pravatar.cc/150?img=2",
    name: "Ana Lopez",
    comment:
      "Me encantó la comida y la atención. Definitivamente volveré pronto.",
  },
  {
    rating: 3,
    image: "https://i.pravatar.cc/150?img=3",
    name: "Mario Rodríguez",
    comment:
      "Buen lugar para pasar un rato agradable con amigos, pero un poco ruidoso para mi gusto.",
  },
  {
    rating: 2,
    image: "https://i.pravatar.cc/150?img=4",
    name: "María García",
    comment:
      "No me gustó mucho la comida y el servicio fue un poco lento. No volvería.",
  },
];

function TestimonialMain() {
  const reviews = reviewsPull;
  return (
    <section className="testimonial" id="testimonial">
      <section className="centerSection">
        {reviews.map((review) => (
          <Testimony
            key={review.name}
            rating={review.rating}
            image={review.image}
            name={review.name}
            review={review.comment}
          />
        ))}
      </section>
    </section>
  );
}

export default TestimonialMain;
