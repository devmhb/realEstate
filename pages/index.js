import React from "react";
import Hero from "../components/Hero";
import GoodHand from "../components/GoodHand";
import Place from "../components/Place";
import GoodHandB from "../components/GoodHandB";
import Review from "../components/Review";
import Footer from "@/components/Footer";
import contentImg from "../public/assests/content.png";
import contentImg2 from "../public/assests/Rectangle.png";

const HomePage = ({ data }) => {
  const placesdata = data.hits;

  return (
    <main className="flex justify-center items-center max-w-[1338px] m-[auto]">
      <div className="container min-w-[100%] flex items-center justify-center">
        <div>
          <div>
            <Hero />
            <div>
              <GoodHand
                row="flex-row"
                padding="pr-[3.2rem]"
                contentImg={contentImg}
              />
            </div>
            <div>
              <Place placesdata={placesdata} />
            </div>
            <div>
              <GoodHand
                row="flex-row-reverse"
                padding="pl-[3.2rem]"
                contentImg={contentImg2}
              />
            </div>
            <div>
              <GoodHandB />
            </div>
            <div>
              <Review />
            </div>
            <div>
              <Footer />
            </div>
          </div>
        </div>
      </div>
    </main>
  );
};

export default HomePage;

export async function getStaticProps() {
  const response = await fetch(
    "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-rent&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4",
    {
      method: "GET",
      headers: {
        "X-RapidAPI-Key": "4a497ea9e2mshe031268d7cfb132p13f4bdjsn0d1bd607acbf",
        "X-RapidAPI-Host": "bayut.p.rapidapi.com",
      },
    }
  );

  const data = await response.json();

  return {
    props: { data }, // will be passed to the page component as props
  };
}
