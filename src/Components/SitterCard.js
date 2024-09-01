import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";
import { useNavigate } from "react-router-dom";

function SitterCard(person) {
  const navigate = useNavigate();
  let name = person.name;

  let id = person.id.value;

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

            <Button
              variant="primary"
              onClick={() => {
                navigate(`/sitterpagedetails/${id}`);
              }}
            >
              Profile
            </Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default SitterCard;
