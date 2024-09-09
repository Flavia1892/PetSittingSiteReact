import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import { initializeApp } from "firebase/app";
import { getDatabase, ref, child, get, set, push } from "firebase/database";
import uuid from "react-uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import Modal from "react-bootstrap/Modal";

function FormSubmit(sitterObj) {
  const [startDate, setStartDate] = useState("");
  const [endDate, setEndDate] = useState("");
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  const handleClose = () => {
    setShow(false);
    navigate("homepage");
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
  function writeBookingData(id, data) {
    set(ref(db, "booking/" + id), data);
  }

  let [cookies, setCookie] = useCookies(["firstname", "lastname"]);

  let sitter = sitterObj.sitterObj;

  let [firstName, setfirstName] = useState("");
  let [lastName, setlastName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [fullAdress, setFullAdress] = useState("");
  let [time, setTime] = useState("");
  let [petType, setPetType] = useState("");

  let cancelCourse = () => {
    document.getElementById("form-submit").reset();
    setStartDate(null);
    setEndDate(null);
  };

  const handleSubmit = (event) => {
    event.preventDefault();

    console.log(cookies.firstname);
    console.log(cookies.lastname);

    const bookingInfo = {
      firstName: firstName,
      lastName: lastName,
      phone: phone,
      email: email,
      petType: petType,
      fullAdress: fullAdress,
      sitterID: sitter.id.value,
      sitterFirstName: sitter.name.first,
      sitterLastName: sitter.name.last,
      startDate: startDate,
      endDate: endDate,
      time: time,
    };
    setShow(true);
    writeBookingData(uuid(), bookingInfo);
    cancelCourse();
  };

  return (
    <>
      <div class="border-3 border-black">
        <form id="form-submit" class=" pl-4" onSubmit={handleSubmit}>
          <p class="text-3xl font-bold pb-4 text-center">Booking Form</p>
          <label class="text-lg mb-3">
            First Name:
            <input
              class="border-2"
              type="text"
              onChange={(event) => {
                setfirstName(event.target.value);
                setCookie("firstname", event.target.value, { path: "/" });
              }}
            />
          </label>
          <br></br>
          <label class="text-lg mb-3">
            Last Name:
            <input
              class="border-2"
              type="text"
              onChange={(event) => {
                setlastName(event.target.value);
                setCookie("lastname", event.target.value, { path: "/" });
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
            Pet type:
            <input
              class="border-2"
              type="text"
              placeholder="E.g: cat, dog, fish"
              onChange={(event) => {
                setPetType(event.target.value);
              }}
            />
          </label>
          <br></br>
          <label class="text-lg mb-3">
            Full Adress:
            <input
              class="border-2"
              type="text"
              onChange={(event) => {
                setFullAdress(event.target.value);
              }}
            />
          </label>
          <br></br>
          <p class="text-lg mb-3 font-bold">
            Sitter name:{sitter.name.first} {sitter.name.last}
          </p>
          <p class="text-lg mb-3 font-bold">Sitter ID:{sitter.id.value}</p>
          <label class="text-lg mb-3 ">
            Start date:
            <DatePicker
              selected={startDate}
              onChange={(date) => {
                setStartDate(date.toString());
              }}
              minDate={new Date()}
              //maxDate={new Date().setMonth(new Date().getMonth() + 1)}
              // inline
            />
          </label>{" "}
          <br></br>
          <labe class="text-lg mb-3">
            End date:
            <DatePicker
              selected={endDate}
              onChange={(date) => {
                setEndDate(date.toString());
              }}
              minDate={new Date() + 1}
              //maxDate={new Date().setMonth(new Date().getMonth() + 1)}
              // inline
            />
          </labe>{" "}
          <br></br>
          <label class="text-lg mb-3 mt-4">
            <p>
              Please choose a time periode:
              <label>
                <input
                  type="radio"
                  name="myRadio"
                  value="morning"
                  onClick={() => {
                    setTime("morning");
                  }}
                />{" "}
                Morning
              </label>
              <label>
                <input
                  type="radio"
                  name="myRadio"
                  value="afternoon"
                  onClick={() => {
                    setTime("afternoon");
                  }}
                />{" "}
                Afternoon
              </label>
              <label>
                <input
                  type="radio"
                  name="myRadio"
                  value="evening"
                  onClick={() => {
                    setTime("evening");
                  }}
                />{" "}
                Evening
              </label>
            </p>
          </label>
          <br></br>
          <input
            class="text-lg mt-3 mb-3 bg-blue-600 text-white pt-1 pb-1 pl-1 pr-1 rounded-lg"
            type="submit"
          />
        </form>
      </div>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Success!</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          Booking has been sucessfully made. Please await telephonic
          confirmation<br></br>
          We thank you for chosing us!
        </Modal.Body>
      </Modal>
    </>
  );
}

export default FormSubmit;
