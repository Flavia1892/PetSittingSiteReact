import React from "react";
import mockDataPrices from "../props/mockDataPrices";
import { useParams } from "react-router-dom";
import { useState } from "react";
import { MoonLoader } from "react-spinners";
import paw from "../props/paw.avif";
import paw2 from "../props/paw.webp"

function Price() {
  let id = useParams().id;

  let prices = mockDataPrices.prices.find((priceRange) => {
    if (priceRange.id == id) return priceRange;
  });

  const [isLoading, setIsLoading] = useState(true);

  setTimeout(() => {
    setIsLoading(false);
  }, 1000);

  return (
    <>
      {isLoading ? (
        <div>
          <div
            style={{
              width: "100px",
              margin: "auto",
              paddingTop: "30px",
              paddingBottom: "30px",
            }}
          >
            <MoonLoader />
          </div>
          <img src={paw} alt="paw" class="m-auto"></img>
          <img src={paw2} alt="paw" class="m-auto"></img>
        </div>
      ) : (
        <div>
          <p class="text-4xl text-center font-bold font-serif pt-3 pb-3">
            {" "}
            {prices.title} prices:
          </p>
          <div class="container rowSitters">
            <div class="col pt-3 pb-3 mb-3 colPrice">
              <div class=" pt-2 pb-4 fontQuerry">
                <span class="text-xl"> Daily morning:</span>
                <b class="text-2xl">
                  {" "}
                  ...................................
                  {prices.price.daily_morning}$
                </b>
              </div>
              <div class="pt-2 pb-4 fontQuerry">
                <span class="text-xl"> Daily afternoon:</span>{" "}
                <b class="text-2xl">
                  .................................
                  {prices.price.daily_afternoon}$
                </b>
              </div>
              <div class="pt-2 pb-4">
                <span className="text-xl">Daily evening:</span>{" "}
                <b class="text-2xl">
                  ...................................
                  {prices.price.daily_evening}$
                </b>
              </div>
              <div class="pt-2 pb-4 fontQuerry">
                <span class="text-xl">Bi-Daily:</span>{" "}
                <b class="text-2xl">
                  ...........................................
                  {prices.price.bidaily}${" "}
                </b>
              </div>
              <div class="pt-2 pb-4">
                <span class="text-xl">1 week full: </span>
                <b class="text-2xl">
                  .....................................{prices.price.week}${" "}
                </b>
              </div>
              <div class="pt-2 pb-4 fontQuerry">
                <span class="text-xl">1 month full or more:</span>
                <b class="text-2xl">
                  {" "}
                  ...........{prices.price.month}
                  $/month
                </b>
              </div>
              <div class="font-bold italic text-2xl mt-4 pb-4 text-center pt-3 border-4 border-black fontQuerry">
                Minimum visit duration: {prices.price.duration_hours} hours
              </div>
            </div>
          </div>{" "}
        </div>
      )}
    </>
  );
}

export default Price;
