import React from "react";
import Card from "react-bootstrap/Card";
import map from "../props/map.jpg";

function Contact() {
  return (
    <>
      <div>Contact</div>

      <Card className="bg-dark text-white">
        <Card.Img src={map} alt="Card image" />
        <Card.ImgOverlay>
          <Card.Title>Our location</Card.Title>
          <Card.Text>
            Our headquarters is situated in the Steagu/Astra area of Brasov,
            right next to the Town General Hospital.
          </Card.Text>
          <Card.Text>Last updated 3 mins ago</Card.Text>
        </Card.ImgOverlay>
      </Card>
      <br></br>
      <Card>
        <Card.Header as="h5">How to get in touch with us</Card.Header>
        <Card.Body>
          <Card.Title>Our adress</Card.Title>
          <Card.Text>Str Arbustilor nr 5 bloc 134 sc B apt 34</Card.Text>
          <Card.Title>Our phone number</Card.Title>
          <Card.Text>0754 335 778</Card.Text>
          <Card.Title>Email</Card.Title>
          <Card.Text>petsittersunited@gmail.com</Card.Text>
        </Card.Body>
      </Card>
    </>
  );
}

export default Contact;
