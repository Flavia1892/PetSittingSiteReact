import React from "react";
import FormSubmit from "../Components/FormSubmit";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import paw from "../props/paw.webp";

function Booking() {
  let { state } = useLocation();
  let sitterObj = state;
  useEffect(() => {
    window.scrollTo(0, 0);
  });

  return (
    <>
      <div class="mt-3 mb-3 ml-5 mr-9">
        <FormSubmit sitterObj={sitterObj} />
      </div>

      <img src={paw} class="m-auto"></img>
    </>
  );
}

export default Booking;
