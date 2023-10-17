import React from "react";
import ApexChart from "../WLM/ApexChart";
import MagneticField from "../WLM/MagneticField";
import OutputvsEarthing from "../WLM/OutputvsEarthing";
import Ultrasonic from "../WLM/Ultrasonic";

function MainComponent() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full sm:w-4/6 h-4/6 bg-gray-100 flex justify-center items-center">
        {/* write your code for the component inside this div  */}
        <div className="w-full">
          {/* heading */}
          {/* <div className="font-bold text-purple-900 pl-10">Output vs earthing</div> */}
          {/* main graph */}
          <Ultrasonic/>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
