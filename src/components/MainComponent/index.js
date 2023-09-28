import React from "react";
import NoticationAlert from "../WLM/NoticationAlert";

function MainComponent() {
  return (
    <div className="flex justify-center items-center h-screen">
      <div className="w-full sm:w-4/6 h-4/6 bg-gray-100 flex justify-center items-center">
        {/* write your code for the component inside this div  */}
        <div>
          <NoticationAlert/>
        </div>
      </div>
    </div>
  );
}

export default MainComponent;
