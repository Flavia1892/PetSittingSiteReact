import React from "react";
import Card from "react-bootstrap/Card";
import map from "../props/map.jpg";
import CustomMap from "../Components/Map";
import { APIProvider } from "@vis.gl/react-google-maps";
import { CircleLoader } from "react-spinners";
import paw from "../props/paw.webp";
import { useState } from "react";

function Contact() {
  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1500);

  const myAPIKEYCONTACT = process.env.REACT_APP_GOOGLE_API_KEY;

  return (
    <>
      {isLoading ? (
        <div>
          <div
            style={{
              width: "100px",
              margin: "auto",
              paddingTop: "300px",
              paddingBottom: "50px",
            }}
          >
            <CircleLoader />
          </div>

          <img src={paw} class="m-auto"></img>
        </div>
      ) : (
        <div>
          <p class="text-5xl pb-3 pt-3 text-center text-blue-900 italic font-bold">
            Contact Info
          </p>
          <div class="text-center ">
            <Card>
              <Card.Header as="h5">How to get in touch with us</Card.Header>
              <Card.Body>
                <Card.Title>Our adress</Card.Title>
                <Card.Text>
                  <p class="mb-5">Str Arbustilor nr 5 bloc 134 sc B apt 34</p>
                </Card.Text>
                <Card.Title>Our phone number</Card.Title>
                <Card.Text>
                  <p class="mb-5 text-xl">0754 335 778</p>
                </Card.Text>
                <Card.Title>Email</Card.Title>
                <Card.Text>
                  <a href="mailto:petsittersunited@gmail.com">
                    <b class="hover:text-blue-600 hover:underline">
                      petsittersunited@gmail.com
                    </b>
                  </a>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>

          <br></br>

          <br></br>
          <div>
            <Card>
              <div class="text-center">
                <Card.Header as="h5">How to get in touch with us</Card.Header>
                <Card.Body>
                  <Card.Title>Our Location</Card.Title>
                  <Card.Text>
                    Str Arbustilor nr 5 bloc 134 sc B apt 34
                  </Card.Text>
                  <Card.Text>
                    {" "}
                    Our headquarters is situated in the Steagu/Astra area of
                    Brasov, right next to the Town General Hospital.
                  </Card.Text>
                  <APIProvider apiKey={myAPIKEYCONTACT}>
                    <div class="flex justify-center">
                      <CustomMap />
                    </div>
                  </APIProvider>
                </Card.Body>
              </div>
            </Card>
          </div>
        </div>
      )}
    </>
  );
}

export default Contact;
