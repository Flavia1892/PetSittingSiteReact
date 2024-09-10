import React from "react";
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
import { RingLoader } from "react-spinners";
import paw from "../props/paw.avif";
import { useState } from "react";
import ReviewCard from "../Components/ReviewCard";

function Revies() {
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

  const { state } = useLocation();
  const app = initializeApp(firebaseConfig);
  const analytics = getAnalytics(app);
  const db = getDatabase(app);

  //reading the datatbase
  const dbRef = ref(getDatabase(app));

  let ar = [];
  onValue(ref(db, "reviews"), (snapshot) => {
    ar = JSON.parse(JSON.stringify(snapshot.val()));
  });

  console.log(ar);

  let reviewArr=[];
  for (let key in ar) {
    reviewArr.push(ar[key]);
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
        <div>
          <div class="container sitterContainer">
            <div class="row font-bold text-5xl justify-center pt-2 mb-3 mt-4 sitterTitle">
              Reviews
            </div>
            <div class="rowSitters pb-6 pt-5">
            {reviewArr.map((review) => {
              return <ReviewCard {...review} />;
            })}
          </div>
          </div>
          <img src={paw} width="600px" class="m-auto"></img>
          
        </div>
       
      )}
    </>
  );
}

export default Revies;
