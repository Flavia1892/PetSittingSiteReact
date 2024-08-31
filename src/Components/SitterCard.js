import React from "react";
import Button from "react-bootstrap/Button";
import Card from "react-bootstrap/Card";

function SitterCard(person) {
  console.log("the person is:");
  console.log(person);
  let name = person.name;
  console.log(name);
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
                {person.email}
              </p>
            </Card.Text>

            <Button variant="primary">Profile</Button>
          </Card.Body>
        </Card>
      </div>
    </div>
  );
}

export default SitterCard;
