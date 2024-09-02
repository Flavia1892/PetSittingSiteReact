import React from "react";
import { useState } from "react";

function FormSubmit(sitterObj) {
  let sitter = sitterObj.sitterObj;

  let [firstName, setfirstName] = useState("");
  let [lastName, setlastName] = useState("");

  const handleSubmit = (event) => {
    event.preventDefault();
    alert("Booking successful! Please wait for telephone confirmation");
    const bookingInfo = {
      firstName: firstName,
      lastName: lastName,
      sitterID: sitter.id.value,
      sitterFirstName: sitter.name.first,
      sitterLastName: sitter.name.last,
    };

    console.log(JSON.stringify(bookingInfo));
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
