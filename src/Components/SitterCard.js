import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";
import { useState } from "react";
import Modal from "react-bootstrap/Modal";

function SitterCard(person) {
  const navigate = useNavigate();
  let name = person.name;

  let id = person.id.value;
  let favoriteSitters = JSON.parse(localStorage.getItem("savedSitters"));

  const [show, setShow] = useState(false);

  const handleOpen = () => {
    setShow(true);
  };
  const handleClose = () => {
    setShow(false);
  };

  let message = "Sitter saved to favorite list";

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
              <div class="text-center">
                <button
                  type="button"
                  class="text-white bg-blue-500 pt-1 pb-2 pl-2 pr-2 rounded-md ml-3 mt-4"
                  onClick={() => {
                    let isDuplicate = false;

                    let lastList = JSON.parse(
                      localStorage.getItem("savedSitters")
                    );
                    if (lastList === null) lastList = [];

                    for (let key in lastList) {
                      if (lastList[key].id.value === id) {
                        isDuplicate = true;
                      }
                    }

                    if (isDuplicate == true) message = "Sitter already saved";

                    if (isDuplicate == false) {
                      lastList.push(person);
                      localStorage.setItem(
                        "savedSitters",
                        JSON.stringify(lastList)
                      );
                      lastList = [];
                      let arra = JSON.parse(
                        localStorage.getItem("savedSitters")
                      );

                      console.log(arra);
                    }
                    handleOpen();
                    isDuplicate = false;
                    
                  }}
                >
                  Add to favorites
                </button>
                <Modal show={show} onHide={handleClose}>
                  <Modal.Header closeButton>
                    <Modal.Title>{message}</Modal.Title>
                  </Modal.Header>
                </Modal>
              </div>
            </Card.Text>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default SitterCard;
