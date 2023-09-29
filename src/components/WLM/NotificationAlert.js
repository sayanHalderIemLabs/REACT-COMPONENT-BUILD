import React from "react";
import { AiFillWarning } from "react-icons/ai";

function NoticationAlert({ alertType }) {
  let alertComponent;

  const emptyAlert = (
    <div className="bg-red-200 h-24 w-fit rounded-xl flex items-center justify-center px-5">
      <div>
        <AiFillWarning className="text-red-600 text-4xl" />
      </div>
      <div className=" text-red-600 px-4 font-bold whitespace-pre ">
        Tank is empty
      </div>
    </div>
  );

  const fullAlert = (
    <div className="bg-green-200 h-24 w-fit rounded-xl flex items-center justify-center px-5">
      <div>
        <AiFillWarning className="text-green-600 text-4xl" />
      </div>
      <div className=" text-green-600 px-4 font-bold whitespace-pre ">
        Tank is full
      </div>
    </div>
  );

  const halfFullAlert = (
    <div className="bg-blue-200 h-24 w-fit rounded-xl flex items-center justify-center px-5">
      <div>
        <AiFillWarning className="text-blue-600 text-4xl" />
      </div>
      <div className=" text-blue-600 px-4 font-bold whitespace-pre ">
        Tank is half full
      </div>
    </div>
  );

  const overloadAlert = (
    <div className="bg-yellow-200 h-24 w-fit rounded-xl flex items-center justify-center px-5">
      <div>
        <AiFillWarning className="text-yellow-600 text-4xl" />
      </div>
      <div className=" text-yellow-600 px-4 font-bold whitespace-pre ">
        Tank is overload
      </div>
    </div>
  );

  const undefinedAlert = (
    <div className="bg-gray-200 h-24 w-fit rounded-xl flex items-center justify-center px-5">
      <div>
        <AiFillWarning className="text-gray-600 text-4xl" />
      </div>
      <div className=" text-gray-600 px-4 font-bold whitespace-pre ">
        Tank staus undefined
      </div>
    </div>
  );

  switch (alertType) {
    case "empty":
      alertComponent = emptyAlert;
      break;
    case "full":
      alertComponent = fullAlert;
      break;
    case "halfFull":
      alertComponent = halfFullAlert;
      break;
    case "overload":
      alertComponent = overloadAlert;
      break;

    default:
      alertComponent = undefinedAlert;
      break;
  }

  return (
    <div className="bg-white h-96 w-96 rounded-3xl flex flex-col items-center">
      <div className="text-blue-900 font-semibold text-2xl text-center py-16">
        Notification Alert
      </div>
      {alertComponent}
    </div>
  );
}

export default NoticationAlert;
