import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set, push } from "firebase/database";
import uuid from "react-uuid";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-bootstrap/Modal";
import paw from "../props/paw.avif";
import { Rating } from "primereact/rating";


function FormReview() {
  const [value, setValue] = useState(null);
  useEffect(() => {
    window.scrollTo(0, 0);
  });
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate("/homepage");
  };
  //Stuff to hide API_KEY and access it

  const myApiKey = process.env.REACT_APP_API_KEY;
  const myAppId = process.env.REACT_APP_APP_ID;
  const myDBURL = process.env.REACT_APP_DB_URL;

  //end of stuff

  const firebaseConfig = {
    apiKey: myApiKey,
    authDomain: "flaviapetsittersunited.firebaseapp.com",
    projectId: "flaviapetsittersunited",
    storageBucket: "flaviapetsittersunited.appspot.com",
    messagingSenderId: "851943201993",
    appId: myAppId,
    measurementId: "G-MEPWC7FBLQ",
    databaseURL: myDBURL,
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const db = getDatabase(app);

  //function to connect to database
  const dbRef = ref(getDatabase(app));

  //function to write a booking in database
  function writeReviewgData(id, data) {
    set(ref(db, "reviews/" + id), data);
  }

  let [name, setName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [title, setTitle] = useState("");
  let [sitter, setSitter] = useState("");
  let [message, setMessage] = useState("");
  let [stars, setStars] = useState(null);

  const handleSubmit = (event) => {
    event.preventDefault();

    const bookingInfo = {
      name: name,
      phone: phone,
      email: email,
      title: title,
      sitter: sitter,
      message: message,
      stars: stars,
    };
    setShow(true);
    writeReviewgData(uuid(), bookingInfo);
  };

  return (
    <>
      <div class="border-3 border-black">
        <form id="form-submit" class=" pl-4" onSubmit={handleSubmit}>
          <p class="text-3xl font-bold pb-4 text-center">Review Form</p>
          <label>
            <div className="card flex justify-content-center">
              <Rating
                value={value}
                onChange={(e) => {
                  setValue(e.value);
                  setStars(e.value);
                }}
              />
            </div>
          </label>
          <br></br>
          <label class="text-lg mb-3">
            Ttile:
            <input
              class="border-2"
              type="text"
              placeholder="A catchy title"
              onChange={(event) => {
                setTitle(event.target.value);
              }}
            />
          </label>
          <br></br>

          <label class="text-lg mb-3">
            Full Name:
            <input
              class="border-2"
              type="text"
              onChange={(event) => {
                setName(event.target.value);
              }}
            />
          </label>
          <br></br>

          <label class="text-lg mb-3">
            Phone:
            <input
              class="border-2"
              type="text"
              placeholder="ex:0721445386"
              onChange={(event) => {
                setPhone(event.target.value);
              }}
            />
          </label>
          <br></br>
          <label class="text-lg mb-3">
            Email:
            <input
              class="border-2"
              type="text"
              onChange={(event) => {
                setEmail(event.target.value);
              }}
            />
          </label>
          <br></br>

          <label class="text-lg mb-3">
            Sitter name:
            <input
              class="border-2"
              type="text"
              onChange={(event) => {
                setSitter(event.target.value);
              }}
            />
          </label>
          <br></br>
          <label class="text-xl mb-3">
            Message:
            <br></br>
            <textarea
              class="border-2"
              name="reviewMessage"
              rows={6}
              cols={50}
              onChange={(event) => {
                setMessage(event.target.value);
              }}
            />
          </label>

          <br></br>
          <input
            class="text-lg mt-3 mb-3 bg-blue-600 text-white pt-1 pb-1 pl-1 pr-1 rounded-lg"
            type="submit"
          />
        </form>
      </div>
      <div>
        <img src={paw} alt="Paw image" class="m-auto" width="500px"></img>{" "}
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Your review has been succesfully submited! It will appear after review
          by our staff!
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FormReview;
