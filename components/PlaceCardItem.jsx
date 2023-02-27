import House1 from "../public/assests/House Example 1.png";
import bed from "../public/assests/Bed.svg";
import shower from "../public/assests/Shower.svg";
import size from "../public/assests/Size.svg";
import Image from "next/image";

const PlaceCardItem = ({ place }) => {
  return (
    <div className="" style={{ flexBasis: "250px" }}>
      <div>
        <Image
          src={place ? place.coverPhoto?.url : House1}
          alt="houseimg"
          width={100}
          height={100}
          style={{ height: "200px", width: "100%" }}
        />
      </div>
      <div>
        <h2 className="font-bold text-[1.2rem] text-center text">
          {place.agency.name}
        </h2>

        <div className=" w-[100%] flex flex-row justify-evenly items-center border-t-[1px] border-dotted border-black">
          <div className="text-center border-r-[1px] border-dotted border-black pr-[2rem]">
            <span className=" ">{place.rooms}</span>
            <Image src={bed} height={15} width={15} alt="bed" />
          </div>

          <div className="text-center border-r-[1px] border-dotted border-black pr-[2rem]">
            <span className="">{place.baths}</span>
            <Image src={shower} height={15} width={15} alt="bed" />
          </div>

          <div className="text-center">
            <span>{Math.round(place.area)}</span>
            <Image src={size} height={15} width={15} alt="bed" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default PlaceCardItem;
