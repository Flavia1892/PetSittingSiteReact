import React from "react";
import SitterCard from "../Components/SitterCard";
import data from "../props/SittersData";
import { useState } from "react";
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
import { RingLoader } from "react-spinners";
import paw from "../props/paw.webp";
import { useNavigate } from "react-router-dom";

function Sitters() {
  const navigate = useNavigate();
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
  const analytics = getAnalytics(app);
  const db = getDatabase(app);

  //connection to the DB
  const dbRef = ref(getDatabase(app));

  let ar = [];
  onValue(ref(db, "booking"), (snapshot) => {
    ar = JSON.parse(JSON.stringify(snapshot.val()));
  });
  console.log(ar);

  let sitters = data.persons;
  let [category, setCategory] = useState("all");

  let handleChange = (event) => {
    setCategory(event.target.value);
  };

  function handleClick() {
    if (category === "all") {
      sitters = data.persons;
    } else {
      let arrOfFilteredSitters = sitters.filter(
        (petSitter) => petSitter.preference === category
      );

      sitters = arrOfFilteredSitters;
    }
  }

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 2000);

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
            <RingLoader />
          </div>

          <img src={paw} class="m-auto"></img>
        </div>
      ) : (
        <div class="container sitterContainer">
          <div class="row font-bold text-5xl justify-center pt-2 mb-3 mt-4 sitterTitle">
            Our sitters
          </div>
          <div class="text-lg">
            <p class="underline">Filter by:</p>
            <select value={category} onChange={handleChange}>
              <option value="all">All</option>
              <option value="cat" onClick={handleClick()}>
                Cat
              </option>
              <option value="dog">Dog</option>
              <option value="fish">Fish</option>
              <option value="rodents">Rodents</option>
              <option value="birds">Birds</option>
            </select>
          </div>
          <div class="flex justify-end">
            <button
              type="button"
              class="font-bold text-4xl bg-green-600 pt-1 pb-1 pl-2 pr-2 rounded-xl mb-4 border-2 border-black hover:bg-green-700"
              onClick={() => {
                navigate("/favoritesitters");
              }}
            >
              See favorite Sitters
            </button>
          </div>

          <div class="rowSitters pb-6 pt-5">
            {sitters.map((sitter) => {
              return <SitterCard {...sitter} />;
            })}
          </div>
        </div>
      )}
    </>
  );
}

export default Sitters;
