import React from "react";
import Accordion from "react-bootstrap/Accordion";
import Card from "react-bootstrap/Card";
import books from "../props/books.jpeg";
import { useState } from "react";

function Faq() {
  let [quote, setQuote] = useState({
    id: 1,
    quote: "Life isn't about getting and having, it's about giving and being.",
    author: "Kevin Kruse",
  });
  function handleClick() {
    fetch("https://dummyjson.com/quotes") // api for the get request
      .then((response) => response.json())
      .then((dataJSON) => {
        let num = Math.floor(Math.random() * (30 - 0) + 0);

        setQuote(dataJSON.quotes[num]);
      });
  }

  return (
    <>
      <div class="text-center font-bold text-4xl mt-4 mb-4 text-indigo-900">
        Frequently Asked Questions<br></br>(FAQ)
      </div>
      <Accordion>
        <Accordion.Item eventKey="0">
          <Accordion.Header>
            <p class="font-bold text-2xl hover:underline">
              What is a Pet Sitter?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <p class="italic">
              {" "}
              Pet Sitter is a verified and trusted pet lover with experience,
              who can offer pet boarding in their home, or visit pets at your
              place or dog walking.
            </p>
          </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
          <Accordion.Header>
            <p class="font-bold text-2xl hover:underline">
              How can I find or contact a Pet Sitter?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <p class="italic">
              You can call OR email us (details at Contact). Or you can fill out
              the form provided on the site and we will get back to you ASAP.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="2">
          <Accordion.Header>
            <p class="font-bold text-2xl hover:underline">
              Do you also offer insurance?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <p class="italic">
              {" "}
              We are planning to launch an insurance offering for accidents and
              emergencies soon.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="3">
          <Accordion.Header>
            <p class="font-bold text-2xl hover:underline">
              How do you verify sitters?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <p class="italic">
              {" "}
              We verify the id cards and other documents that prove their
              experience with pets and we perform interviews with each of them.
              Optionally we can verify their social media profiles or track
              record.
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="4">
          <Accordion.Header>
            <p class="font-bold text-2xl hover:underline">How do I pay?</p>
          </Accordion.Header>
          <Accordion.Body>
            <p class="italic">
              {" "}
              Once your booking has been confirmed, a deposit must be submitted
              to our bank account and the rest cand be paid either CASH or BANK
              TRANSFER (at the latest on the day after the last day of
              sitting/housing).
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="5">
          <Accordion.Header>
            <p class="font-bold text-2xl hover:underline">
              Can I get a refund if I return early?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <p class="italic">
              Yes but you must first contact us and the sitter either by phone
              or email(we strongly recommend the phone option).
            </p>
          </Accordion.Body>
        </Accordion.Item>
        <Accordion.Item eventKey="6">
          <Accordion.Header>
            <p class="font-bold text-2xl hover:underline">
              What is my pet gets sick or is on some medication?
            </p>
          </Accordion.Header>
          <Accordion.Body>
            <p class="italic">
              {" "}
              In case of ongoing treatment for the pet this aspect must be
              communicated beforehand as our sitters are all trained to
              administer simple treatments(pills, syrups, even shots).
              Contagious diseases must be known beforehand as in that case we
              can only offer homevisits or house sitting and also it is for the
              protection of our sitters and other pets/clients.
              <br></br>
              In case the pet gets sick we will take it urgently to your
              specified veterinarian or to our veterinary clinic.
            </p>
          </Accordion.Body>
        </Accordion.Item>
      </Accordion>
      <div class="text-center">
        <button
          type="button"
          class="bg-blue-800 pt-2 pb-2 pl-2 pr-2 text-white hover:bg-stone-600 mt-4"
          onClick={() => {
            handleClick();
            console.log(quote);
          }}
        >
          Random Quote
        </button>
        <div class=" flex justify-center">
          <div class="mt-4 mb-4">
            <Card style={{ width: "18rem" }}>
              <Card.Img variant="top" src={books} />
              <Card.Body>
                <Card.Title>
                  <p class="italic font-serif">{quote.quote}</p>
                </Card.Title>
                <Card.Text>
                  <b>{quote.author}</b>
                </Card.Text>
              </Card.Body>
            </Card>
          </div>
        </div>
      </div>
    </>
  );
}
export default Faq;
