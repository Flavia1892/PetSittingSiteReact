import React from "react";
import mockDataPrices from "../props/mockDataPrices";

function Price() {
  let prices = mockDataPrices.prices[0];

  return (
    <>
      <p class="text-4xl text-center font-bold font-serif pt-3 pb-3">
        {" "}
        {prices.title} prices:
      </p>
      <div class="container bg-yellow-100">
        <div class="col bg-red-200 mb-3 colPrice">
          <div class="bg-blue-100">
            Daily morning: {prices.price.daily_morning}.....................${" "}
          </div>
          <div>
            Daily afternoon: {prices.price.daily_afternoon}..................${" "}
          </div>
          <div>
            Daily evening: {prices.price.daily_evening}.....................${" "}
          </div>
          <div>Bi-Daily: {prices.price.bidaily}.....................$ </div>
          <div>1 week full: {prices.price.week}.....................$ </div>
          <div>
            1 month full or more: {prices.price.month}
            .....................$/month{" "}
          </div>
          <div>Minimum visit duration: {prices.price.duration_hours} hours</div>
        </div>
      </div>
    </>
  );
}

export default Price;
