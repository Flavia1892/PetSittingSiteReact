import React from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { CookiesProvider, useCookies } from "react-cookie";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getDatabase, ref, child, get, set, push } from "firebase/database";
import data from "../props/SittersData";
import uuid from "react-uuid";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
//

function FormSubmit(sitterObj) {
  const [startDate, setStartDate] = useState(null);
  const [endDate, setEndDate] = useState(null);

  const firebaseConfig = {
    apiKey: "AIzaSyCgwdyYKBF7K0eM0IftPQyPCz2yi-oR2ug",
    authDomain: "flaviapetsittersunited.firebaseapp.com",
    projectId: "flaviapetsittersunited",
    storageBucket: "flaviapetsittersunited.appspot.com",
    messagingSenderId: "851943201993",
    appId: "1:851943201993:web:c6837ffb6066cfe97e0118",
    measurementId: "G-MEPWC7FBLQ",
    databaseURL:
      "https://flaviapetsittersunited-default-rtdb.europe-west1.firebasedatabase.app",
  };

  // Initialize Firebase
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);

  //reading the datatbase
  const dbRef = ref(getDatabase(app));
  //console.log(getDatabase(app).app);
  // get(child(dbRef, `book`))
  //   .then((snapshot) => {
  //     if (snapshot.exists()) {
  //       console.log(snapshot.val());
  //     } else {
  //       console.log("No data available");
  //     }
  //   })
  //   .catch((error) => {
  //     console.error(error);
  //   });

  //function to write a booking in database
  function writeBookingData(id, data) {
    set(ref(db, "booking/" + id), data);
  }
  // function writeUserDataSitter(id, data) {
  //   set(ref(db, "sitter/" + id), data);
  // }

  const navigate = useNavigate();
  let [cookies, setCookie] = useCookies(["firstname", "lastname"]);

  let sitter = sitterObj.sitterObj;

  let [firstName, setfirstName] = useState("");
  let [lastName, setlastName] = useState("");
  let [phone, setPhone] = useState("");
  let [email, setEmail] = useState("");
  let [fullAdress, setFullAdress] = useState("");
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
      fullAdress: fullAdress,
      sitterID: sitter.id.value,
      sitterFirstName: sitter.name.first,
      sitterLastName: sitter.name.last,
      startDate: startDate,
      endDate: endDate,
    };
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
                setStartDate(date);
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
                setEndDate(date);
              }}
              minDate={new Date() + 1}
              //maxDate={new Date().setMonth(new Date().getMonth() + 1)}
              // inline
            />
          </labe>{" "}
          <br></br>
          <input
            class="text-lg mt-3 mb-3 bg-blue-600 text-white pt-1 pb-1 pl-1 pr-1 rounded-lg"
            type="submit"
          />
        </form>
      </div>
    </>
  );
}

export default FormSubmit;
