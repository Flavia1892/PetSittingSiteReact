import React, { useState } from "react";
import { useLocation } from "react-router-dom";
import {
  getDatabase,
  ref,
  child,
  get,
  set,
  push,
  onValue,
} from "firebase/database";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import Card from "react-bootstrap/Card";
import pets2 from "../props/pets2.avif";
import { MoonLoader } from "react-spinners";
import paw from "../props/paw.webp";

function BookingsShow() {
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
    databaseURL:
      myDBURL,
  };

  const { state } = useLocation();
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);

  //reading the datatbase
  const dbRef = ref(getDatabase(app));

  let ar = [];
  onValue(ref(db, "booking"), (snapshot) => {
    ar = JSON.parse(JSON.stringify(snapshot.val()));
  });

  let filteredArray = [];

  for (let key in ar) {
    if (ar[key].sitterID === state) filteredArray.push(ar[key]);
  }

  console.log(filteredArray);

  if (filteredArray.length === 0) {
    filteredArray.push({
      email: "NaN",
      endDate: "Nan",
      startDate: "nan",
      firstname: " not existant",
      lastname: " not existant",
      fullAdress: "not existant",
      phone: "not existant",
    });
  }

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 3000);

  return (
    <>
      {isLoading ? (
        <div>
          <div
            style={{
              width: "100px",
              margin: "auto",
              paddingTop: "300px",
              paddingBottom: "30px",
            }}
          >
            <MoonLoader />
          </div>
          <img src={paw} class="m-auto"></img>
        </div>
      ) : (
        <div>
          <div class="text-3xl pt-2 pb-2 text-center mb-5">
            Show Bookings for {filteredArray[0].sitterFirstName}
          </div>

          <div class="container ">
            <div class="row mb-5">
              {filteredArray.map((appointment) => {
                return (
                  <Card style={{ width: "18rem" }}>
                    <Card.Body>
                      <Card.Title>
                        {appointment.sitterFirstName}{" "}
                        {appointment.sitterLastName}
                      </Card.Title>
                      <Card.Subtitle className="mb-2 text-muted">
                        ID:{appointment.sitterID}
                      </Card.Subtitle>
                      <Card.Text>
                        Client details:
                        <ul class="list-disc">
                          <li>
                            {" "}
                            {appointment.firstName} {appointment.lastName}
                          </li>
                          <li>{appointment.email}</li>
                          <li>{appointment.phone}</li>
                          <li>{appointment.fullAdress}</li>
                          <li>Pet:{appointment.petType}</li>
                          <li>Start date:{appointment.startDate}</li>
                          <li>End date:{appointment.endDate}</li>
                          <li>Time:{appointment.time}</li>
                        </ul>
                      </Card.Text>
                    </Card.Body>
                  </Card>
                );
              })}
            </div>
            <div class="row">
              <img src={pets2}></img>
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default BookingsShow;
