import React from "react";
import cat from "../props/catlogo.webp";

function Title() {
  return (
    <>
      <div
        className="light text-6xl text-indigo-900 font-bold py-10 banner"
        id="title"
      >
        {" "}
        <div id="petSittersUnited">Pet Sitters United</div>
        <img
          className="imageLogo mt-3 shadow-md"
          src={cat}
          width="150px"
          height="150px"
          alt="Pet Sitters United"
        />
      </div>
    </>
  );
}

export default Title;
