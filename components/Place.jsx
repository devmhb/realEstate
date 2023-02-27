import React from "react";

import PlaceCard from "./PlaceCardList";
import GradientLine from "./GradientLine";
import PlaceCardList from "./PlaceCardList";

const Place = ({ placesdata }) => {
  return (
    <div className="w-[100%] bg-[#F4F4F4] py-[2rem]">
      <div className="w-[90%] m-[auto]">
        <div className="flex flex-col items-center">
          <div>
            <GradientLine />
            <h2 className="font-bold text-[2rem]">
              Find your next place to live
            </h2>
          </div>
          <div className="flex justify-start items-baseline border-r-3 rounded-lg">
            <div className="px-[1rem] py-[1rem] bg-[white] border-r-2">
              <select
                name=""
                id=""
                className=":focus outline-none border-none cursor-pointer rounded-l-[1rem]"
              >
                <option value="" className=" b-[none] ">
                  Looking for
                </option>
                <option value="">Flat</option>
              </select>
            </div>
            <div className="px-[1rem] py-[1rem] bg-[white] border-r-2">
              <select
                name=""
                id=""
                className=" :focus outline-none cursor-pointer"
              >
                <option value="">Location </option>
                <option value="">U.S.A</option>
                <option value="">U.A.E</option>
              </select>
            </div>
            <div className="px-[1rem] py-[1rem] bg-[white] ">
              <select
                name=""
                id=""
                className=":focus outline-none border-none cursor-pointer"
              >
                <option value="">Property type</option>
                <option value="">Rent</option>
                <option value="">Buy</option>
              </select>
            </div>
          </div>
        </div>

        <div>
          <PlaceCardList placesdata={placesdata} />;
        </div>
      </div>
    </div>
  );
};

export default Place;
