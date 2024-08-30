import React from "react";
import pict from "../props/aboutus.jpg";

function AboutUs() {
  return (
    <>
      <div class="container">
        
          <div class="col">
            <img
              class="imgAboutUs mt-3"
              src={pict}
              width="400"
              height="300"
              alt="PetSittersUnited"
            ></img>
            <div class="row justify-center">
              <p class="text-center"> blblblb</p>
            </div>
          </div>
        </div>
      
    </>
  );
}

export default AboutUs;
