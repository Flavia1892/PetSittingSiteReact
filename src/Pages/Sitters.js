import React from "react";
import SitterCard from "../Components/SitterCard";
import data from "../props/SittersData";
import { useState } from "react";

function Sitters() {
  let sitters = data.persons;
  let [category, setCategory] = useState("all");

  let handleChange = (event) => {
    setCategory(event.target.value);
  };

  function handleClick() {
    if (category === "all") {
      sitters = data.persons;
    } else {
      let arrOfFilteredSitters = sitters.filter(
        (petSitter) => petSitter.preference === category
      );
      console.log(sitters);
      console.log(arrOfFilteredSitters);
      sitters = arrOfFilteredSitters;
    }
  }

  return (
    <>
      <div class="container sitterContainer">
        <div class="row font-bold text-5xl justify-center pt-2 mb-3 mt-4 sitterTitle">
          Our sitters
        </div>
        <div class="text-lg">
          <p class="underline">Filter by:</p>
          <select value={category} onChange={handleChange}>
            <option value="all">All</option>
            <option value="cat" onClick={handleClick()}>
              Cat
            </option>
            <option value="dog">Dog</option>
            <option value="fish">Fish</option>
            <option value="rodents">Rodents</option>
            <option value="birds">Birds</option>
          </select>
        </div>

        <div class="rowSitters pb-6 pt-5">
          {sitters.map((sitter) => {
            return <SitterCard {...sitter} />;
          })}
        </div>
      </div>
    </>
  );
}

export default Sitters;
