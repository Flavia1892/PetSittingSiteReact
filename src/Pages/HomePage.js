import React from "react";
import { useState } from "react";
import Cookies from "js-cookie";
import Button from "react-bootstrap/Button";
import Modal from "react-bootstrap/Modal";
import about1 from "../props/about1.jpg";
import about2 from "../props/about2.jpg";
import Carousel from "../Components/Carousel";
import img1 from "../props/carousel/cat1.webp";
import img2 from "../props/carousel/cat2.jpg";
import img3 from "../props/carousel/cat3.avif";
import img4 from "../props/carousel/cat4.jpg";
import img5 from "../props/blackcat.webp";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import ReviewCard from "../Components/ReviewCard";
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
import { useLocation } from "react-router-dom";

function HomePage() {
  const images = [`${img1}`, `${img2}`, `${img3}`, `${img4}`, `${img5}`];
  const [show, setShow] = useState(false);
  const navigate = useNavigate();

  useEffect(() => {
    setTimeout(() => {
      setShow(true);
    }, 1500);
  }, []);

  const handleAcceptCookies = () => {
    Cookies.set("cookieConsent", true);
  };

  const handleRejectCookies = () => {
    Cookies.remove("cookieConsent", "firstname", "lastname");
  };

  const handleClose = () => {
    setShow(false);
    sessionStorage.setItem("modalDisplayed", "true");
  };

  const modalDisplayed = sessionStorage.getItem("modalDisplayed");

  //Modal for success Message at cookie agreement
  const [success, setSuccess] = useState(false);
  const handleSuccess = () => {
    setSuccess(true);
  };
  const handleFail = () => {
    setSuccess(false);
  };

  //Modal for Become a Sitter Button
  const [reveal, setReveal] = useState(false);
  const handleOpen = () => {
    setReveal(true);
  };
  const handleDisappear = () => {
    setReveal(false);
  };

  //Acess DB data for show
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

  let reviewArr = [];
  for (let key in ar) {
    reviewArr.push(ar[key]);
  }
  let reviewArrShort = reviewArr.slice(0, 3);

  //End

  return (
    <>
      <div>
        <p className="text-6xl text-center mt-3 mb-3 pt-3 pb-3 font-bold titleHome">
          Your solution for professional loving pet care!
        </p>
        <div class="mt-4 text-center">
          <button
            type="button"
            class="font-bold text-3xl bg-amber-600 text-white rounded-xl pt-2 pb-2 pl-2 pr-2 hover:bg-amber-900"
            onClick={() => {
              navigate("/reviews");
            }}
          >
            Our reviews
          </button>
        </div>
        <div class="container">
          <div class="row  pt-3 pb-3">
            <div class="col ">
              <img
                src={about1}
                width="300px"
                height="300px"
                alt="cat and dogs"
                class="m-auto border-2 pictHome rounded-lg"
              ></img>
              <ul class="list-disc  ml-2">
                <p class="font-bold text-2xl mt-4 mb-2">
                  {" "}
                  Our Pet Care Services
                </p>
                <li> Pet sitting </li>
                <li> Mid-day visits </li>
                <li> Daily dog walking</li>
                <li>Pet transportation service </li>
                <li> Litter box cleaning </li>
                <li>Pet related errands</li>
                <li>House sitting and other home care services</li>
              </ul>
            </div>
            <div class="col">
              <img
                src={about2}
                width="300px"
                height="300px"
                alt="cat and dogs"
                class="m-auto pictHome rounded-lg"
              ></img>
              <ul class="list-disc  ml-2">
                <p class="font-bold text-2xl mt-4 mb-2"> Our Service Area</p>
                <p>
                  For your convenience, our pet sitters and dog walkers are
                  available in the following areas:
                </p>
                <li> Brasov</li>
                <li> Zarnesti </li>
                <li> Vulcan</li>
                <li>Codlea </li>
                <li> Victoria </li>
                <li>Rotbav</li>
              </ul>
            </div>
          </div>
          <div class="row mt-3 pb-3  bg-gradient-to-r from-amber-400 to-...">
            <p class="font-bold text-3xl text-center pt-3 pb-3">
              We are here for you and your pets!{" "}
            </p>
            <p class="text-lg pl-4">
              You want the best for your pet family. You will receive
              dependable, professional, loving in-home pet sitting, dog walking,
              and other pet care services when you use Pet Sitters United®. Our
              track record proves it, with <b>OVER 5 years</b> of providing care
              for dogs, cats, and other pets. You will have “Peace of Mind”
              knowing that your pet family is being cared for by a reliable,
              qualified, and passionate pet sitter or dog walker. We bring you
              and your family the absolute best to assist you with your pet
              needs!
            </p>
          </div>
          <div class="flex justify-center">
            <button
              type="button"
              class="font-bold text-xl pt-3 pb-3 pl-2 pr-2 border-2  border-black rounded-xl bg-amber-600 text-white mt-5 hover:bg-amber-900"
              onClick={handleOpen}
            >
              Become a Pet Sitter
            </button>
          </div>

          <Modal show={reveal} onHide={handleDisappear}>
            <Modal.Header closeButton>
              <Modal.Title>So, you want to join our family?</Modal.Title>
            </Modal.Header>
            <Modal.Body>
              Awesome! We are always on the lookout for new Sitters!<br></br>
              If you want to join us please send you CV to{" "}
              <b>petsittersunited@gmail.com</b>
              <br></br>We will get back to you ASAP!
            </Modal.Body>
          </Modal>
          <div class="flex justify-center">
            <button
              type="button"
              class="font-bold text-4xl text-white bg-green-700 pt-1 pb-1 pl-2 pr-2 border-2 border-black rounded-xl mt-5 hover:bg-green-900 "
              onClick={() => {
                navigate("/favoritesitters");
              }}
            >
              See favorite Sitters
            </button>
          </div>

          <div class="border-2 border-gray-300 mt-5">
            <Carousel images={images} />
          </div>

          <div class="row font-bold text-2xl pt-5 pb-5 border-1 border-black rounded-xl mt-5 bg-gradient-to-l from-amber-400 to-...">
            <p class="text-center">
              Our pet sitters and dog walkers are qualified professionals and
              look forward to caring for your dogs, cats, and small pets.
            </p>
          </div>
          <div class="text-center">
            <button
              type="button"
              class="text-3xl bg-amber-600 text-white pt-2 pb-2 pl-2 pr-2 mt-4 rounded-xl hover:bg-amber-900"
              onClick={() => {
                navigate("/formreview");
              }}
            >
              Write a review
            </button>
          </div>
          <div>
            <div class="font-bold text-3xl underline mt-3 ">What our clients say</div>
            <div class="rowSitters pb-5 pt-5 mt-5">
              {reviewArrShort.map((review) => {
                return <ReviewCard {...review} />;
              })}
            </div>
          </div>
        </div>

        <div class="background m-auto mt-4">
          <div class="transbox">
            <p class="text-center text-xl text-amber-100">
              {" "}
              Bonded and Insured Emergency <br></br>1st Aid and CPR Trained{" "}
              <br></br>Locally owned and operated <br></br>Pet Sitters are
              employees <br></br>Providing in-home pet care
            </p>
          </div>
        </div>

        <div
          className="modal show"
          style={{ display: "block", position: "initial" }}
        >
          {!modalDisplayed && (
            <Modal show={show} onHide={handleClose}>
              <Modal.Header closeButton>
                <Modal.Title>Cookie Agreement</Modal.Title>
              </Modal.Header>
              <Modal.Body>
                This website uses cookies to improve your experience. Do you
                accept cookies?
              </Modal.Body>
              <Modal.Footer>
                <Button
                  variant="secondary"
                  onClick={() => {
                    handleClose();
                    handleAcceptCookies();
                    handleSuccess();
                  }}
                >
                  Agree and close
                </Button>
                <Button
                  variant="primary"
                  onClick={() => {
                    handleClose();
                    handleRejectCookies();
                    handleSuccess();
                  }}
                >
                  Reject and close
                </Button>
              </Modal.Footer>
            </Modal>
          )}
        </div>
        <Modal show={success} onHide={handleFail}>
          <Modal.Header closeButton>
            <Modal.Title>Your options have been saved</Modal.Title>
          </Modal.Header>
          <Modal.Body>Thank you for your choice!</Modal.Body>
        </Modal>

        <sub>Cookie set: {Cookies.get("cookieConsent")}</sub>
      </div>
    </>
  );
}

export default HomePage;
