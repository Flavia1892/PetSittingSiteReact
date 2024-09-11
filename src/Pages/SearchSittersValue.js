import React from "react";
import { useLocation } from "react-router-dom";
import { useState } from "react";
import paw from "../props/paw.webp";
import { MoonLoader } from "react-spinners";
import SitterCard from "../Components/SitterCard";

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
import Sitters from "./Sitters";

function SearchSittersValue() {
  const location = useLocation();

  let sitters = location.state;
  const myApiKey = process.env.REACT_APP_API_KEY;
  const myAppId = process.env.REACT_APP_APP_ID;
  const myDBURL = process.env.REACT_APP_DB_URL;

  const [isLoading, setIsLoading] = useState(true);
  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

  console.log(sitters);
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
  const analytics = getAnalytics(app);
  const db = getDatabase(app);

  //connection to the DB
  const dbRef = ref(getDatabase(app));

  let ar = [];
  onValue(ref(db, "booking"), (snapshot) => {
    ar = JSON.parse(JSON.stringify(snapshot.val()));
  });
  console.log(ar);

  let [category, setCategory] = useState("all");

  let handleChange = (event) => {
    setCategory(event.target.value);
  };

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
          <div class="container sitterContainer">
            <div class="row font-bold text-5xl justify-center pt-2 mb-3 mt-5 sitterTitle">
              You searched for:{localStorage.getItem("searchedWords")}
            </div>

            <div class="rowSitters pb-6 pt-5">
              {sitters.map((sitter) => {
                return <SitterCard {...sitter} />;
              })}
            </div>
          </div>
        </div>
      )}
    </>
  );
}

export default SearchSittersValue;
