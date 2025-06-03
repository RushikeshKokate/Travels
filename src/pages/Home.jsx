import React from "react";
import Card from "../component/Card";
import { data } from "../utils/data";


const Home = () => {
  return (
    <div className="w-full h-full flex  ">
      <div className="h-full w-[51%]">
        <h3 className="font-Helvetica font-bold text-3xl ml-15">Itinerary</h3>
        <h6 className="text-[#8392AB] font-bold text-[16px] mt-2 font-Helvetica ml-15">
          Day
        </h6>
        <div className="ml-5 mt-6">
           {data.map((place) => (
            <Card
              key={place.id}
              image={place.image}
              name={place.name}
              rating={place.rating}
              description={place.description}
            />
          ))}
        </div>
      </div>
      <div className="h-full w-[49%]">Right Side</div>
    </div>
  );
};

export default Home;
