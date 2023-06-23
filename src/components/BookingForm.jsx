import { useState } from "react";
import "./css/BookingForm.css";

function BookingForm({ onSubmit, openModal, setOpenModal }) {
  const [info, setInfo] = useState({
    date: "",
    time: "",
    number: "",
    occasion: "",
  });

  const handleDate = (e) => {
    const cDate = e.target.value;
    setInfo({ ...info, date: cDate });
  };
  const handleTime = (e) => {
    const cTime = e.target.value;
    setInfo({ ...info, time: cTime });
  };
  const handleNumber = (e) => {
    const cNumber = e.target.value;
    setInfo({ ...info, number: cNumber });
  };
  const handleOccasion = (e) => {
    const cOccasion = e.target.value;
    setInfo({ ...info, occasion: cOccasion });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    onSubmit(info);
    setOpenModal(false);
  };

  return (
    <>
      {openModal && (
        <dialog open>
          <h2 className="h2-form">Reserve a table.</h2>
          <form className="modal-form" onSubmit={handleSubmit}>
            <label htmlFor="rest-date">Choose date</label>
            <input type="date" id="rest-date" onChange={handleDate} />
            <label htmlFor="res-time">Choose time</label>
            <select name="res-time" id="res-time" onChange={handleTime}>
              <option value="1700">17:00</option>
              <option value="1800">18:00</option>
              <option value="1900">19:00</option>
              <option value="2000">20:00</option>
              <option value="2100">21:00</option>
              <option value="2200">22:00</option>
            </select>
            <label htmlFor="guests">Number of guests</label>
            <input
              type="number"
              placeholder="Select a quantity"
              min={"1"}
              max={"10"}
              id="guests"
              onChange={handleNumber}
            />
            <label htmlFor="occasion">Occasion</label>
            <select
              name="occasion"
              id="occasion"
              value={info.occasion}
              onChange={handleOccasion}
            >
              <option value="">Select an option</option>
              <option value="birthday">Birthday</option>
              <option value="anniversary">Anniversary</option>
            </select>
            <input type="submit" value={"Make your reservation"} />
          </form>
        </dialog>
      )}
    </>
  );
}

export default BookingForm;
