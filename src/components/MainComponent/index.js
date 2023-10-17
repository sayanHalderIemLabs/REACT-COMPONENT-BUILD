import React from "react";
import ApexChart from "../WLM/ApexChart";
import MagneticField from "../WLM/MagneticField";
import OutputvsEarthing from "../WLM/OutputvsEarthing";
import Ultrasonic from "../WLM/Ultrasonic";
import TableComponent from "../WLM/table";

const data = [
  {
    Frequency: 2,
    radial: 'John Doe',
    age: 30,
    city: 'New York',
  },
  {
    id: 2,
    name: 'Jane Smith',
    age: 25,
    city: 'Los Angeles',
  },
  {
    id: 3,
    name: 'Bob Johnson',
    age: 40,
    city: 'Chicago',
  },
  // Add more data objects as needed
];
function MainComponent() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full sm:w-4/6 h-4/6 bg-gray-100 flex justify-center items-center">
        {/* write your code for the component inside this div  */}
        <div className="w-full">
          {/* heading */}
          {/* <div className="font-bold text-purple-900 pl-10">Output vs earthing</div> */}
          {/* main graph */}
          <TableComponent data={data} />
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
