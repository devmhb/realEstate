import React from "react";
import PlaceCardItem from "./PlaceCardItem";

const PlaceCardList = ({ placesdata }) => {
  console.log(placesdata);
  return (
    <div className="mt-[2rem]  pb-[.5rem] mb-8 flex flex-row flex-wrap gap-4 justify-center overflow-hidden">
      {placesdata.map((placedata) => (
        <PlaceCardItem key={placedata.id} place={placedata} />
      ))}
    </div>
  );
};

export default PlaceCardList;
