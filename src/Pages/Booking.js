import React from "react";
import FormSubmit from "../Components/FormSubmit";
import { useLocation } from "react-router-dom";

function Booking() {
  let { state } = useLocation();
  let sitterObj = state;
  
  return (
    <>
      <p>Book your sitter</p>
      <FormSubmit sitterObj={sitterObj}/>
    </>
  );
}

export default Booking;
