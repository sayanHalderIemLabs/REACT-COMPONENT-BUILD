import React from "react";

const Report = () => {
  return (
    <div className="border-2 border-black justify-items-center pl-80 pr-80">
      <nav className="bg-blue-100 mt-8 text-2xl font-semibold p-2">
        Machine Summary(last 24 Hrs):
      </nav>

      <div className="flex flex-row justify-evenly">
        <div className="border-2 border-black rounded p-2 w-96 mt-2">
          <span className="font-semibold">Operational</span>
          <table className="w-full">
            <tr>
              <td> Number of Starts</td>
              <td className="text-right">1</td>
            </tr>
            <tr>
              <td> Number of Stops</td>
              <td className="text-right">0</td>
            </tr>
            <tr>
              <td>Machine Utilization</td>
              <td className="text-right">99%</td>
            </tr>
            <tr>
              <td>Average Run Time</td>
              <td className="text-right">23 Hours</td>
            </tr>
          </table>
        </div>
        <div className="border-2 border-black rounded p-2 w-96 mt-2">
          <span className="font-semibold">Overall Health</span>{" "}
          <table className="w-full">
            <tr>
              <td> Updated at</td>
              <td className="text-right">2023-15-10 12:04:07 (IST)</td>
            </tr>
            <tr>
              <td>Status</td>
              <td className="text-right">
                <span className="bg-yellow-400 p-1 rounded font-semibold">
                  Unsatisfactory
                </span>
              </td>
            </tr>
            <tr>
              <td>Recommended Action</td>
              <td className="text-right">Attention Required</td>
            </tr>
            <tr></tr>
          </table>
        </div>
        <div className="border-2 border-black rounded p-2 w-96 mt-2">
          <span className="font-semibold">Service Status</span>{" "}
          <table className="w-full">
            <tr>
              <td>Service Type</td>
            </tr>
            <tr>
              <td>Last Service Date</td>
            </tr>
            <tr>
              <td>Service Performed</td>
            </tr>
            <tr>
              <td>Next Service Due</td>{" "}
            </tr>
          </table>
        </div>
      </div>
      <div className="font-bold p-2 text-2xl"> Motor Health Report</div>
      <div className="font-bold p-2 text-xl">Real Time Data</div>

      <div className="mt-2 mb-4">
        <table className="w-full text-center font-semibold">
          <tr className="border-2 border-gray-300 text-center">
            <td className="font-semibold text-xl">Acceleration</td>
          </tr>
          <tr className="border-2 border-gray-300">
            <td>Tangential</td>
            <td className="border-2 border-gray-300">2.36 m/sec2</td>
            <td className="text-green-400 border-2 border-gray-300 font-bold">
              Safe
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300">Axial</td>
            <td className="border-2 border-gray-300">3.54 m/sec2</td>
            <td className="border-2 border-gray-300 text-yellow-400 font-bold">
              Mid
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300">Radial</td>
            <td className="border-2 border-gray-300">6.28 m/sec2</td>
            <td className="border-2 border-gray-300 text-red-400 font-bold">
              High
            </td>
          </tr>
        </table>
      </div>

      <div className="mt-2 mb-4">
        <table className="w-full text-center font-semibold">
          <tr className="border-2 border-gray-300 text-center">
            <td className="font-semibold text-xl">Temperature</td>
          </tr>
          <tr className="border-2 border-gray-300">
            <td>Tangential</td>
            <td className="border-2 border-gray-300">2.36 m/sec2</td>
            <td className="text-green-400 border-2 border-gray-300 font-bold">
              Safe
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300">Axial</td>
            <td className="border-2 border-gray-300">3.54 m/sec2</td>
            <td className="border-2 border-gray-300 text-yellow-400 font-bold">
              Mid
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300">Radial</td>
            <td className="border-2 border-gray-300">6.28 m/sec2</td>
            <td className="border-2 border-gray-300 text-red-400 font-bold">
              High
            </td>
          </tr>
        </table>
      </div>

      <div className="mt-2 mb-4">
        <table className="w-full text-center font-semibold">
          <tr className="border-2 border-gray-300 text-center">
            <td className="font-semibold text-xl">Acceleration</td>
          </tr>
          <tr className="border-2 border-gray-300">
            <td>Tangential</td>
            <td className="border-2 border-gray-300">2.36 m/sec2</td>
            <td className="text-green-400 border-2 border-gray-300 font-bold">
              Safe
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300">Axial</td>
            <td className="border-2 border-gray-300">3.54 m/sec2</td>
            <td className="border-2 border-gray-300 text-yellow-400 font-bold">
              Mid
            </td>
          </tr>
          <tr>
            <td className="border-2 border-gray-300">Radial</td>
            <td className="border-2 border-gray-300">6.28 m/sec2</td>
            <td className="border-2 border-gray-300 text-red-400 font-bold">
              High
            </td>
          </tr>
        </table>
      </div>

      <div>
        <table></table>
      </div>
    </div>
  );
};

export default Report;
