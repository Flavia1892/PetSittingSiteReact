import React from "react";

import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function SitterCard2(person) {
  const navigate = useNavigate();
  let name = person.name;

  let id = person.id.value;
 
  let favoriteSitters = JSON.parse(localStorage.getItem("savedSitters"));

  return (
    <div className="sittercard">
      <div class="zoom">
        <Card style={{ width: "21rem" }}>
          <Card.Img variant="top" src={person.picture.large} />

          <Card.Body>
            <Card.Title>
              <p class="font-serif text-3xl">
                {person.name.title} {person.name.first} {person.name.last}
              </p>
            </Card.Title>
            <Card.Text>
              <p>
                <b>Phone: </b>
                {person.cell}
              </p>
              <p class="mb-3">
                <b>Email:</b>
                <a href="mailto:petsittersunited@gmail.com">
                  <span class="text-blue-600 underline">{person.email}</span>
                </a>
              </p>
            </Card.Text>

            <div class="text-center">
              <Button
                variant="primary"
                onClick={() => {
                  navigate(`/sitterpagedetails/${id}`);
                }}
              >
                Profile
              </Button>
              <button
                type="button"
                class="text-white bg-blue-500 pt-1 pb-2 pl-2 pr-2 rounded-md ml-3"
                onClick={() => {
                  navigate("/book", { state: person });
                }}
              >
                Book
              </button>

              <button
                type="button"
                class="text-white bg-blue-500 pt-1 pb-2 pl-2 pr-2 rounded-md ml-3"
                onClick={() => {
                  navigate("/bookingsshow", { state: id });
                }}
              >
                Appointments
              </button>
            </div>
            <Card.Text>
              <button
                type="button"
                class="bg-red-600 font-bold text-xl pt-1 pb-2 pl-2 pr-2 mt-4 rounded-xl"
                onClick={() => {
                  let id = person.id.value;
                  let arra = JSON.parse(localStorage.getItem("savedSitters"));
                  for (let key in arra) {
                    if (arra[key].id.value === id) arra.splice(key, 1);
                  }
                  localStorage.setItem("savedSitters", JSON.stringify(arra));
                  alert("Sitter removed from list");
                  window.location.reload();
                }}
              >
                Delete
              </button>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default SitterCard2;
