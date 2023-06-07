import { useState } from "react";

function BookingForm() {
  //   const [date, setDate] = useState("");
  //   const [time, setTime] = useState("");
  //   const [number, setNumber] = useState("");
  //   const [occasion, setOccasion] = useState("");
  const [booking, setBooking] = useState({
    date1: "",
    time1: "",
    number1: "",
    occasion1: "",
  });

  const handleDate = (e) => {
    setBooking({ ...booking, date1: e.target.value });
    // setDate(e.target.value);
  };
  const handleTime = (e) => {
    setBooking({ ...booking, time1: e.target.value });
    // setTime(e.target.value);
  };
  const handleNumber = (e) => {
    setBooking({ ...booking, number1: e.target.value });
    // setNumber(e.target.value);
  };
  const handleOccasion = (e) => {
    setBooking({ ...booking, occasion1: e.target.value });
    // setOccasion(e.target.value);
  };

  return (
    <form action="" style={"display: grid; max-width: 200px; gap: 20px"}>
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
        placeholder="1"
        min={"1"}
        max={"10"}
        id="guests"
        onChange={handleNumber}
      />
      <label htmlFor="occasion">Occasion</label>
      <select name="occasion" id="occasion" onChange={handleOccasion}>
        <option value="birthday">Birthday</option>
        <option value="anniversary">Anniversary</option>
      </select>
      <input type="submit" value={"Make your reservation"} />
    </form>
  );
}

export default BookingForm;
