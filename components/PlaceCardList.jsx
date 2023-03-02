import React from "react";
import dynamic from "next/dynamic";
import { useState } from "react";
import Button from "./Button";
import PlaceCardItem from "./PlaceCardItem";
const DynamicPlaceCard = dynamic(() => import("./PlaceCardItem"));

const PlaceCardList = ({ placesdata }) => {
  console.log(placesdata);
  const places = placesdata.slice(0, 8);
  const [showAll, setShowAll] = useState(false);

  function handleClick() {
    setShowAll(true);
  }

  return (
    <div className="mt-[2rem]  pb-[.5rem] mb-8 flex flex-row flex-wrap gap-4 justify-center overflow-hidden">
      <div className="flex flex-row flex-wrap gap-4 justify-center">
        {places.map((placedata) => (
          <PlaceCardItem key={placedata.id} place={placedata} />
        ))}
      </div>

      {!showAll && (
        <div className="mt-4">
          <Button
            onClick={handleClick}
            clr="text-[black]"
            bgcolor="bg-[#FFAC12]"
          >
            See more <span className="text-white">➛</span>{" "}
          </Button>
        </div>
      )}

      {showAll &&
        placesdata.map((placedata) => (
          <DynamicPlaceCard key={placedata.id} place={placedata} />
        ))}
    </div>
  );
};

export default PlaceCardList;
