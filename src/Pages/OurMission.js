import React from "react";
import dog from "../props/dog.jpg";
import { useState } from "react";
import Carousel from "../Components/Carousel";
import img1 from "../props/carousel/cat1.webp";
import img2 from "../props/carousel/cat2.jpg";
import img3 from "../props/carousel/cat3.avif";
import img4 from "../props/carousel/cat4.jpg";
import img5 from "../props/carousel/cat5.jpeg";

function OurMission() {
  let [fact, setfact] = useState("A cat is an angel without wings");
  const images = [`${img1}`, `${img2}`, `${img3}`, `${img4}`, `${img5}`];
  function getRandomCatfacts() {
    fetch("https://catfact.ninja/fact")
      .then((response) => response.json())
      .then((responseJSON) => {
        setfact(responseJSON.fact);
      });
  }

  return (
    <>
      <p class="text-5xl text-center pt-3 pb-3 font-serif">Our Mission</p>
      <div class="container">
        <div class="col missionCol">
          <p class="text-4xl font-bold italic text-rock-300 missionSmall">
            Our Promise
          </p>
          <p class="text-3xl pt-3 pb-3 font-light missionSmall">
            Pet Sitters United® will provide quality and excellent care to your
            pets and home, while conducting our business with honesty and
            integrity. Our team will be conscientious, thorough, dependable and
            helpful. Our reputation depends on your satisfaction.
          </p>
          <p class="text-4xl font-bold italic text-rock-300 missionSmall">
            Our Mission
          </p>
          <p class="text-3xl pt-3 pb-3 font-light missionSmall">
            Pet Sitters United® mission is to provide “Peace of Mind” to pet
            owners in the care of their pets. We want to provide the absolute
            best pet care in the The Colony and surrounding areas while
            maintaining the highest ethical standards. We exist to teach proper
            pet care and to help pet owners provide their pets with the best
            care so that their pets are healthy, happy and good companions.
          </p>
          <ul class="list-disc pb-3 missionSmall">
            <p class="text-4xl font-bold italic text-rock-300 pb-3 missionSmall">
              Our qualifications
            </p>
            <li class="text-xl">
              Bonded and Insured Emergency
              <li>1st Aid and CPR</li>
              <li>Trained Locally owned and operated </li>
              <li>Pet Sitters are employees not Independent Contractors</li>
              <li> Providing in-home pet care since 2020</li>
            </li>
          </ul>
          <ol class="list-disc pb-3 missionSmall">
            <p class="text-4xl font-bold italic text-rock-300 pb-3 missionSmall">
              Our Guarantee
            </p>
            <li class="text-xl missionSmall">Peace of Mind </li>{" "}
            <li class="text-xl missionSmall">
              Consistent quality service (Each visit is performed as if it will
              be our last before you return home!)
            </li>{" "}
            <li class="text-xl missionSmall">
              {" "}
              Professional and friendly pet care providers
            </li>
            <li class="text-xl missionSmall">
              {" "}
              One on one time with your pet(s)
            </li>
            <li class="text-xl missionSmall">
              We will be there for you and your pets!
            </li>
          </ol>
          <p class="text-4xl missionSmall font-serif mb-3 mt-3 text-center border-2 border-black pt-2 pb-2 pl-2 pr-2 bg-gradient-to-r from-gray-900 to-gray-400 ... text-white">
            You can relax knowing our “TEAM” is on the JOB! We work as a team,
            so you don’t have to be concerned about availability when YOU need
            service.
          </p>

          <img
            src={dog}
            width="500px"
            height="500px"
            alt="Cute Dogs"
            class="m-auto rounded-full mt-4"
          ></img>

          <p class="text-3xl missionSmall  mt-5 text-center font-serif pt-2 pb-2 border-2 border-black bg-gradient-to-l from-gray-900 to-gray-400 ... text-white">
            We know you and your pet like consistency and that is why YOU are
            assigned you two pet sitters. We know that “life happens” and we
            want to be sure you have coverage for when you need our service!
            Isn’t it nice to know YOU and your pets have coverage when YOU need
            it?
          </p>

          <div class="border-2 border-black mt-5">
            <Carousel images={images} />
          </div>

          <div class="pt-3 pb-3 text-center mt-8">
            <button
              class="border-2 border-black pt-1 pb-1 pl-1 pr-1 bg-gray-300  rounded-xl mb-2"
              type="button"
              onClick={getRandomCatfacts}
            >
              Random cat facts
            </button>
            <p class="text-3xl font-serif mt-2 text-white pt-3 pb-3 bg-gradient-to-r from-gray-900 to-gray-400 ... missionSmall ">
              {fact}
            </p>
          </div>
        </div>
      </div>
    </>
  );
}

export default OurMission;
