import React from "react";
import { AiFillWarning } from "react-icons/ai";

function NoticationAlert({ alertType }) {
  const alert1 = (
    <div className="bg-red-200 h-24 w-fit rounded-xl flex items-center justify-center px-5">
      <div>
        <AiFillWarning className="text-red-600 text-4xl" />
      </div>
      <div className=" text-red-600 px-4 font-bold whitespace-pre ">
        Tank is empty
      </div>
    </div>
  );

  const alert2 = (
    <div className="bg-green-200 h-24 w-fit rounded-xl flex items-center justify-center px-5">
      <div>
        <AiFillWarning className="text-green-600 text-4xl" />
      </div>
      <div className=" text-green-600 px-4 font-bold whitespace-pre ">
        Tank is full
      </div>
    </div>
  );

  const alert3 = (
    <div className="bg-blue-200 h-24 w-fit rounded-xl flex items-center justify-center px-5">
      <div>
        <AiFillWarning className="text-blue-600 text-4xl" />
      </div>
      <div className=" text-blue-600 px-4 font-bold whitespace-pre ">
        Tank is half full
      </div>
    </div>
  );

  const alert4 = (
    <div className="bg-yellow-200 h-24 w-fit rounded-xl flex items-center justify-center px-5">
      <div>
        <AiFillWarning className="text-yellow-600 text-4xl" />
      </div>
      <div className=" text-yellow-600 px-4 font-bold whitespace-pre ">
        Tank is overload
      </div>
    </div>
  );

  return (
    <div className="bg-white h-96 w-96 rounded-3xl flex flex-col items-center">
      <div className="text-blue-900 font-semibold text-2xl text-center py-16">
        Notification Alert
      </div>
      {
        alert1
      }
    </div>
  );
}

export default NoticationAlert;
