import React from "react";
import SitterCard from "../Components/SitterCard";
import data from "../props/SittersData";

function Sitters() {
  let sitters = data.persons;

  return (
    <>
     

      <div class="container sitterContainer">
        <div class="row font-bold text-5xl justify-center pt-2 pb-2 mb-5 mt-4 sitterTitle">Our sitters</div>
        <div class="rowSitters pb-4 pt-4">
          {sitters.map((sitter) => {
            return <SitterCard {...sitter} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Sitters;
