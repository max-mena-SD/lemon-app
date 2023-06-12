import { useState } from "react";
import "./css/BookingForm.css";

function BookingForm({ openModal, setOpenModal }) {
  const [booking, setBooking] = useState({
    date: "",
    time: "",
    number: "",
    occasion: "",
  });

  const [reserv, setReserv] = useState(false);

  const handleDate = (e) => {
    setBooking({ ...booking, date: e.target.value });
    // setDate(e.target.value);
  };
  const handleTime = (e) => {
    setBooking({ ...booking, time: e.target.value });
    // setTime(e.target.value);
  };
  const handleNumber = (e) => {
    setBooking({ ...booking, number: e.target.value });
    // setNumber(e.target.value);
  };
  const handleOccasion = (e) => {
    setBooking({ ...booking, occasion: e.target.value });
    // setOccasion(e.target.value);
  };

  const sendReserve = () => {
    setReserv(true);
    console.log(" Reserva ejecutada ");
    setTimeout(() => {
      setOpenModal(false);
    }, 2000);
  };

  return (
    <>
      {!reserv && (
        <dialog open>
          <h2 className="h2-form">Reserve a table.</h2>
          <form action="" className="modal-form">
            <label htmlFor="rest-date">
              Choose date
              <input type="date" id="rest-date" onChange={handleDate} />
            </label>
            <label htmlFor="res-time">
              Choose time
              <select name="res-time" id="res-time" onChange={handleTime}>
                <option value="1700">17:00</option>
                <option value="1800">18:00</option>
                <option value="1900">19:00</option>
                <option value="2000">20:00</option>
                <option value="2100">21:00</option>
                <option value="2200">22:00</option>
              </select>
            </label>
            <label htmlFor="guests">
              Number of guests
              <input
                type="number"
                placeholder="1"
                min={"1"}
                max={"10"}
                id="guests"
                onChange={handleNumber}
              />
            </label>
            <label htmlFor="occasion">
              Occasion
              <select name="occasion" id="occasion" onChange={handleOccasion}>
                <option value="birthday">Birthday</option>
                <option value="anniversary">Anniversary</option>
              </select>
            </label>
            <input
              type="submit"
              value={"Make your reservation"}
              onClick={sendReserve}
            />
          </form>
        </dialog>
      )}
      {reserv && (
        <dialog>
          <h2>Reservado</h2>
        </dialog>
      )}
    </>
  );
}

export default BookingForm;
