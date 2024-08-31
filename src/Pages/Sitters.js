import React from "react";
import SitterCard from "../Components/SitterCard";
import data from "../props/SittersData";

function Sitters() {
  let sitters = data.persons;

  console.log(sitters);
  console.log(Array.isArray(sitters));

  return (
    <>
      <p class="text-3xl">Our sitters</p>

      <div class="container sitterContainer mb-4">
        <div class="rowSitters">
          {sitters.map((sitter) => {
            //console.log(sitter);
            return <SitterCard {...sitter} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Sitters;
