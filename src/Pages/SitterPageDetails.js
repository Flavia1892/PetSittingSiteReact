import React from "react";
import { useParams } from "react-router-dom";
import data from "../props/SittersData";

function SitterPageDetails() {
  const { id } = useParams();

  function getSitter(id) {
    let sitters = data.persons;

    for (let key in sitters)
      if (sitters[key].id.value == id) return sitters[key];
  }

  let sitter = getSitter(id);

  return (
    <>
      <div class="container justify-center align-center mt-3">
        <div class="col  border-2 border-gray-900 rounded-xl text-center mb-4">
          <p class="text-3xl rounded-xl pt-3  pb-3 mb-4 text-bold bg-gradient-to-r from-amber-500 ...">
            {sitter.name.title} {sitter.name.first} {sitter.name.last}{" "}
          </p>
          <div class="flip-card m-auto">
            <div class="flip-card-inner">
              <div class="flip-card-front">
                <img
                  src={sitter.picture.large}
                  width="300px"
                  height="300px"
                  alt={sitter.name}
                ></img>
              </div>
              <div class="flip-card-back">
                <p class="font-bold text-lg">
                  Hi, my name is {sitter.name.first}.
                </p>
                <br></br>
                <p>
                  I would love to take care our you fur baby/babies. Please take
                  a look at my details below and let's see if we are a match!
                </p>
              </div>
            </div>
          </div>
          <p class="text-center text-2xl font-bold italic">
            Age: {sitter.dob.age}
          </p>
          <div class="text-left mt-3 mb-3">
            <ul class="list-disc ml-6 bg-gradient-to-l from-amber-500 ... ">
              <p class="text-3xl font-bold underline">Adress:</p>
              <li>
                {" "}
                <b>City: </b>
                {sitter.location.city}
              </li>
              <li>
                <b>State: </b>
                {sitter.location.state}
              </li>
            </ul>
          </div>

          <div class="text-left mb-3">
            <ul class="list-disc ml-6">
              <p class="text-3xl font-bold underline"> Contact:</p>
              <li>
                {" "}
                <b>Phone: </b>
                {sitter.cell}
              </li>
              <li>
                <a href="mailto:petsittersunited@gmail.com">
                  <b>Email: </b>
                  <span class="text-blue-600 underline">{sitter.email}</span>
                </a>
              </li>
            </ul>
          </div>

          <div class="bg-gradient-to-r from-amber-500 ... text-left mb-3 text-lg pl-5 pr-2">
            <p class="text-3xl font-bold underline"> Description:</p>
            {sitter.description}
          </div>
          <div class="text-left  pl-5 text-3xl font-bold mb-3">
            Nationality: {sitter.nat}
          </div>
        </div>
      </div>
    </>
  );
}

export default SitterPageDetails;
