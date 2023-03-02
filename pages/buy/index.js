import React from "react";
import Place from "@/components/Place";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

const index = ({ data }) => {
  console.log(data);
  const rentdata = data.hits;
  return (
    <div>
      <Navbar />
      <Place placesdata={rentdata} />
      <Footer />
    </div>
  );
};

export default index;

export async function getStaticProps() {
  const response = await fetch(
    "https://bayut.p.rapidapi.com/properties/list?locationExternalIDs=5002&purpose=for-sale&hitsPerPage=25&page=0&lang=en&sort=city-level-score&rentFrequency=monthly&categoryExternalID=4",

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
    props: { data },
  };
}
