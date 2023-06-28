import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";

test("renders the BookingForm component", () => {
  render(
    <BookingForm onSubmit={() => {}} openModal={true} setOpenModal={() => {}} />
  );

  const chooseDateLabel = screen.getByLabelText("Choose date");
  const chooseTimeLabel = screen.getByLabelText("Choose time");
  const numberOfGuestsLabel = screen.getByLabelText("Number of guests");
  const occasionLabel = screen.getByLabelText("Occasion");
  const submitButton = screen.getByRole("button", {
    name: "Make your reservation",
  });

  expect(chooseDateLabel).toBeInTheDocument();
  expect(chooseTimeLabel).toBeInTheDocument();
  expect(numberOfGuestsLabel).toBeInTheDocument();

  expect(occasionLabel).toBeInTheDocument();
  expect(submitButton).toBeInTheDocument();
});

test("calls the onSubmit function when the form is submitted", () => {
  const handleSubmit = jest.fn();
  render(
    <BookingForm
      onSubmit={handleSubmit}
      openModal={true}
      setOpenModal={() => {}}
    />
  );

  fireEvent.change(screen.getByLabelText("Choose date"), {
    target: { value: "2023-06-23" },
  });
  fireEvent.change(screen.getByLabelText("Choose time"), {
    target: { value: "1800" },
  });
  fireEvent.change(screen.getByLabelText("Number of guests"), {
    target: { value: "4" },
  });

  fireEvent.change(screen.getByLabelText("Occasion"), {
    target: { value: "birthday" },
  });

  expect(screen.getByLabelText("Choose date")).toHaveValue("2023-06-23");
  expect(screen.getByLabelText("Choose time")).toHaveValue("1800");
  expect(screen.getByLabelText("Number of guests")).toHaveValue("4");

  expect(screen.getByLabelText("Occasion")).toHaveValue("birthday");

  fireEvent.submit(
    screen.getByRole("button", { name: "Make your reservation" })
  );

  expect(handleSubmit).toHaveBeenCalledTimes(1);
});
