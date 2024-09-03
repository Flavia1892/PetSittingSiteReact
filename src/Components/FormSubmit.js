import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";

function FormSubmit(sitterObj) {
  const navigate = useNavigate();
  let sitter = sitterObj.sitterObj;

  let [firstName, setfirstName] = useState("");
  let [lastName, setlastName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();

    const bookingInfo = {
      firstName: firstName,
      lastName: lastName,
      sitterID: sitter.id.value,
      sitterFirstName: sitter.name.first,
      sitterLastName: sitter.name.last,
    };

    fetch("http://localhost:8080/Bookings", {
      method: "POST",
      headers: {
        "Content-Type": "Application/JSON",
      },
      body: JSON.stringify(bookingInfo),
    })
      .then((respose) => respose.json())
      .then((newBooking) => {
        setfirstName("");
        setlastName("");

        navigate("/Bookings");
      })
      .catch((error) => {
        console.log(error);
      });
  };

  return (
    <>
      <div class="border-3 border-black">
        <form onSubmit={handleSubmit}>
          <p class="text-3xl font-bold">Booking Form</p>
          <label>
            First Name:
            <input
              type="text"
              onChange={(event) => setfirstName(event.target.value)}
            />
          </label>
          <br></br>
          <label>
            Last Name:
            <input
              type="text"
              onChange={(event) => setlastName(event.target.value)}
            />
          </label>
          <br></br>
          <label>
            Phone:
            <input type="text" />
          </label>
          <br></br>
          <label>
            Email:
            <input type="text" />
          </label>
          <br></br>
          <label>
            Full Adress:
            <input type="text" />
          </label>
          <br></br>
          <p>
            Sitter name:{sitter.name.first} {sitter.name.last}
          </p>
          <p>Sitter ID:{sitter.id.value}</p>
          <label>
            Periode:
            <input type="text" placeholder="dd/mm/yyyy" />
          </label>{" "}
          <br></br>
          <input type="submit" />
        </form>
      </div>
    </>
  );
}

export default FormSubmit;
