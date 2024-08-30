import React from "react";
import pict from "../props/aboutus.jpg";
import fondatoare from "../props/fondatoare.jpg";
import blacky from "../props/blacky.jpg";

function AboutUs() {
  return (
    <>
      <div class="container">
        <div class="col">
          <img
            class="imgAboutUs mt-3"
            src={pict}
            width="400"
            height="300"
            alt="PetSittersUnited"
          ></img>
          <div class="row justify-center">
            <p class="text-center font-bold text-4xl mt-4"> Our story</p>
            <p class="mt-3">
              Iubirea pentru animale a fost prezenta in viata noastra inca din
              frageda pruncie. Daca ne intrebi ce super putere ne-am dori, ti-am
              raspunde ca ne-ar placea mult sa putem comunica cu animalele. Si
              pentru ca, din pacate, asta nu se poate, am stat si ne-am gandit
              ce am putea face. Asa ca am luat dragostea noastra pentru animale,
              am combinat-o cu pasiunea pentru antreprenoriat si cu experienta
              in lumea digitala si astfel a aparut Pet Sitters United.<br></br>{" "}
              Pet Sitters United este o platforma de pet sitting care aduce
              impreuna iubitorii de animale, fie ei pet sitteri sau veterinari
              si animalutele in cautare de un adapost temporar.
            </p>
            <p class="font-bold text-3xl text-center mt-5">Valori & Viziune</p>
            <p class="mt-3">
              Noi rezonam cu un stil de viata activ. Ne place sa calatorim, sa
              fim implicati in tot felul de proiecte si deci, in viata noastra,
              exista si perioade mai incarcate. Si voi, ca si noi, iubiti
              animalutele si doriti sa aiba parte de toata atentia, sa se simta
              fericite si iubite, iar noi ne dorim sa va venim in ajutor. Am
              creat aceasta platforma deoarece va intelegem nevoile si ne dorim
              ca animalutele voastre sa fie pe maini bune si ingrijite in timp
              ce voi va puteti bucura de vacante sau cariera.
            </p>
            <p class="font-bold text-3xl text-center mt-5">Statistici</p>
            <ul class="list-disc">
              <li>
                avem momentan 10 pet sitteri aprobati in judetul Brasov,
                Romania. Insa nu ne oprim aici, urmeaza si alte orase din
                Romania.
              </li>
              <li>
                {" "}
                sunt 10M animale de companie inregistrate in Romania si 100M in
                Europa{" "}
              </li>
              <li>
                in 4 din 10 gospodarii exista cel putin un animal de companie
              </li>{" "}
              <li>
                {" "}
                20% dintre stapanii de animale de companie din Romania au platit
                deja pentru servicii de pet sitting{" "}
              </li>
              <li>
                romanii cheltuie circa 200 mil. euro pe an pe hrana si
                ingrijirea prietenilor lor blanosi
              </li>
            </ul>
          </div>

          <div className="founderRow">
            <div>
              <div className="containerFounderPicture">
                <img
                  className="founderPicture"
                  src={fondatoare}
                  width="300px"
                  height="300px"
                  alt="Founder of Pet Sitters United"
                ></img>
                <div className="overlay">
                  Hi, my name is Flavia and I am the founder of Pet Sitters
                  United.
                </div>
              </div>
              <p class="pb-4 founderWrite">
                <b>Flavia Bobeica</b>-founder of Pet Sitters United<br></br>
                Doctor in Epidemiology, cat mom, coffee, wine<br></br> and cake
                enthuziast
                <br></br>Novice Web Dev
              </p>
            </div>
            <div>
              <div className="containerFounderPicture">
                <img
                  className="founderPicture"
                  src={blacky}
                  width="300px"
                  height="300px"
                  alt="Founder of Pet Sitters United"
                ></img>
                <div className="overlay">
                  Hi, my name is Blacky and I am the owner of the slave before
                </div>
              </div>
              <p class="pb-4 founderWrite">
                <b>Blacky Bobeica</b>-co-founder of Pet Sitters United
                <br></br>
                CEO, CFO, Majestic Black Demon, destroyer of cables,<br></br>{" "}
                fly exterminator
              </p>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default AboutUs;
