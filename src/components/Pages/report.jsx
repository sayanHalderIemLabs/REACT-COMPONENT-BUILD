import React, { useRef } from "react";
import { useReactToPrint } from "react-to-print";
import 'tailwindcss/tailwind.css';


const Report = () => {
  const componentRef = useRef();
  const handlePrint = useReactToPrint({
    content: () => componentRef.current,
  });
  return (
    <div
      className="border-2 border-black justify-items-center pl-80 pr-80"
      ref={componentRef}
    >
          <div className="font-semibold text-lg">Machine summary(Last 24 Hours):</div>
    <div className="flex">
      <div
        className="flex-1 h-48  border-2 border-current rounded-xl m-2 py-4 px-4 font-semibold">
        Operational
      </div>
      <div className="flex-1  border-2 border-current rounded-xl m-2 py-4 px-4 font-semibold">
        Overall Health
      </div>
      <div className="flex-1  border-2 border-current rounded-xl m-2 py-4 px-4 font-semibold">
        Service Status
      </div>
    </div>
    <div className="font-semibold text-lg py-4">Motor Health Report:</div>
    <p>Real Time Sensor Data</p>
    <div>
        <table className="table-auto mx-auto w-full">
        <thead>
            
            <tr className="mx-auto border border-slate-950">
                <th colSpan="3"
                className="px-6 py-4 whitespace-no-wrap border-b text-center font-semibold text-lg border-slate-950"
                ><span className="flex justify-center "><img src="./acceleration.svg" alt="" className="h-6 w-6" /></span> Acceleration
            </th>
            </tr>
        </thead>
        <tbody>

            <tr>
                <td className="border border-slate-950 px-6 py-2">Tangential</td>
                <td className="border border-slate-950 px-6 py-2">2.36 m/sec2</td>
                <td className="border border-slate-950 px-6 py-2 text-green-600">Safe</td>
            </tr>
            <tr>
                <td className="border border-slate-950 px-6 py-2">Axial</td>
                <td className="border border-slate-950 px-6 py-2">3.54 m/sec2</td>
                <td className="border border-slate-950 px-6 py-2 text-yellow-400">Mid
                </td>
            </tr>
            <tr>
                <td className="border border-slate-950 px-6 py-2">Radial</td>
                <td className="border border-slate-950 px-6 py-2">6.28 m/sec2</td>
                <td className="border border-slate-950 px-6 py-2 text-red-600">High
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div className="py-4">
    <table className="table-auto mx-auto w-full">
        <thead>
            
            <tr className="mx-auto border border-slate-950">
                <th colSpan="3"
                className="px-6 py-4 whitespace-no-wrap border-b text-center font-semibold text-lg border-slate-950"
                ><span className="flex justify-center"><img src="./Temperature.svg" alt="" className="h-8 w-8" /></span>Temperature
            </th>
            </tr>
        </thead>
        <tbody>

            <tr>
                <td className="border border-slate-950 px-6 py-2">Tangential</td>
                <td className="border border-slate-950 px-6 py-2">2.36 m/sec2</td>
                <td className="border border-slate-950 px-6 py-2 text-green-600">Safe</td>
            </tr>
            <tr>
                <td className="border border-slate-950 px-6 py-2">Axial</td>
                <td className="border border-slate-950 px-6 py-2">3.54 m/sec2</td>
                <td className="border border-slate-950 px-6 py-2 text-yellow-400">Mid
                </td>
            </tr>
            <tr>
                <td className="border border-slate-950 px-6 py-2">Radial</td>
                <td className="border border-slate-950 px-6 py-2">6.28 m/sec2</td>
                <td className="border border-slate-950 px-6 py-2 text-red-600">High
                </td>
            </tr>
        </tbody>
    </table>
</div>
<div>
    <table className="table-auto mx-auto w-full">
    <thead>
        
        <tr className="mx-auto border border-slate-950">
            <th colSpan="3"
            className="px-6 py-4 whitespace-no-wrap border-b text-center font-semibold text-lg border-slate-950"
            ><span className="flex justify-center "><img src="./velocity.svg" alt="" className="h-7 w-7" /></span> Velocity
        </th>
        </tr>
    </thead>
    <tbody>

        <tr>
            <td className="border border-slate-950 px-6 py-2">Tangential</td>
            <td className="border border-slate-950 px-6 py-2">2.36 m/sec2</td>
            <td className="border border-slate-950 px-6 py-2 text-green-600">Safe</td>
        </tr>
        <tr>
            <td className="border border-slate-950 px-6 py-2">Axial</td>
            <td className="border border-slate-950 px-6 py-2">3.54 m/sec2</td>
            <td className="border border-slate-950 px-6 py-2 text-yellow-400">Mid
            </td>
        </tr>
        <tr>
            <td className="border border-slate-950 px-6 py-2">Radial</td>
            <td className="border border-slate-950 px-6 py-2">6.28 m/sec2</td>
            <td className="border border-slate-950 px-6 py-2 text-red-600">High
            </td>
        </tr>
    </tbody>
</table>
</div>
<div className="container mx-auto mt-4">
    <table className="w-full table-auto">
       
        <tbody>
            <tr>
                <td className="border px-4 py-2 font-semibold text-center border-slate-950">Magnetic Field
                    <span className="flex justify-center py-2"><img src="./Magnetic-field.svg" alt="" className="h-32 w-32" /></span>
                    <p className="py-2">(0.0,0.0,0.0)</p>
                </td>
                <td className="border px-4 py-2 font-semibold text-center border-slate-950">Ultrasonic Sound
                    <span className="flex justify-center mb-6 "><img src="./Ultrasonic.sound (2).svg" alt="" className="h-32 w-32" /></span>
                    <p className="">(0.0 dBV | 107.3 dB-A)</p>
                </td>
            </tr>
        </tbody>
    </table>
</div>

<div className="container mx-auto mt-4">
                
    <table className="w-full table-auto">
       <tbody>
            <tr>
                <td className="border px-4 py-2 font-semibold text-center border-slate-950">Machine RPM
                    <span className="flex justify-center py-2"><img src="" alt="" className="" /></span>
                    
                </td>
                <td className="border px-4 py-2 font-semibold text-center border-slate-950">Est.Output Power
                    <span className="flex justify-center mb-6 "><img src="" alt="" className="" /></span>
                    
                </td>
            </tr>
        </tbody>
    </table>
</div>
<footer className="text-center font-semibold py-4">1.</footer><hr />


                
  <div className="py-20">              
<div className="font-semibold text-lg bg-sky-200 px-4 mx-2">Machine Diagnostics:</div>
<h2 className="font-semibold mx-4">Acceleration Spectra:</h2>
<div className="flex">
  <div
    className="flex-1 h-48  border-2 border-current rounded-xl m-2 py-4 px-4 font-semibold">
    Graph
    </div>
</div>
<div className="mx-2 border border-slate-900">
    <table className="table-auto mx-auto w-full">
   
    <tbody>

        <tr>
            <td className="border px-6 py-2">Tangential <div className="bg-blue-700 h-1 w-6"></div></td>
            <td className="border px-6 py-2">2.36</td>
            <td className="border px-6 py-2">0-7.0</td>
        </tr>
        <tr>
            <td className="border px-6 py-2">Axial<div className="bg-red-500 h-1 w-6"></div></td>
            <td className="border px-6 py-2">3.54</td>
            <td className="border px-6 py-2">0-7.0</td>
        </tr>
        <tr>
            <td className="border px-6 py-2">Radial<div className="bg-green-700 h-1 w-6"></div></td>
            <td className="border px-6 py-2">6.28</td>
            <td className="border px-6 py-2">0-7.0</td>
        </tr>
    </tbody>
</table>
</div>
<div className="py-4 mx-2 flex">
<div className=" w-1/2 font-bold text-lg bg-sky-200 flex justify-center text-violet-950"><span className="">Based on Acceleration Spectra</span></div> 
<div className=" w-1/2 font-bold text-lg bg-sky-200 flex justify-center text-violet-950">Based on Velocity Spectra</div>
</div> 
<div className="py-2 flex">
<div className="font-bold text-lg  w-1/2  flex justify-center">Acceleration Spectra<span className="text-violet-950 mx-2">Amplitude</span> (mm/s)</div>
<div className="font-bold text-lg  w-1/2  flex justify-center">Velocity Spectra:<span className="text-violet-950 mx-2">Amplitude</span> (m/sec2)</div>
</div>
<div className="flex">
<div
  className="flex-1 h-48  border-2 border-current rounded-xl m-2 py-4 px-4 font-semibold">Graph
  </div>
<div className="flex-1  border-2 border-current rounded-xl m-2 py-4 px-4 font-semibold">Graph
  </div>
</div>

  <div className="py-2 w-full  text-center">
    <div className="font-bold text-lg">Predominant Frequencies</div>
    </div>

    <div className="flex h-full bg-gray-300 border-  border-slate-500 rounded-xl m-2 p-4 font-semibold gap-3">

        <div className="container mx-auto mt-8">
            <table className="table-auto w-full border border-collapse border-slate-800">
                <thead>
                    <tr>
                        <th className="bg-gray-200 border border-slate-500 px-4 py-2 text-sky-600" rowSpan="2">Frequency (Hz)</th>
                        <th className="bg-gray-200 border border-slate-500 px-4 py-2 text-sky-600">Radial</th>
                        <th className="bg-gray-200 border border-slate-500 px-4 py-2 text-sky-600">Axial</th>
                        <th className="bg-gray-200 border border-slate-500 px-4 py-2 text-sky-600">Tangential</th>
                    </tr>
                    <tr>
                        <th className="bg-gray-100 border border-slate-500 px-4 py-2">mm/s</th>
                        <th className="bg-gray-100 border border-slate-500 px-4 py-2">mm/s</th>
                        <th className="bg-gray-100 border border-slate-500 px-4 py-2">mm/s</th>
                    
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">23.34</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">3.99</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">5.02</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">72.59</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">3.70</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">73.02</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">2.05</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">6.39</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">73.44</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">1.79</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">96.93</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">1.88</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">97.36</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">2.04</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2"></td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">2.07</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">121.27</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">1.84</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">2.85</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">2.85</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">121.70</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">2.05</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">2.03</td>
                            
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">364.23</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">2.19</td>
                            
                        </tr>
                
                </tbody>
            </table>

        </div>
        
        <div className="container mx-auto mt-8 flex justify-end">
            <table className="table-auto w-full border border-collapse border-slate-800">
                <thead>
                    <tr>
                        <th className="bg-gray-200 border border-slate-500 px-4 py-2 text-sky-600" rowSpan="2">Frequency (Hz)</th>
                        <th className="bg-gray-200 border border-slate-500 px-4 py-2 text-sky-600">Radial</th>
                        <th className="bg-gray-200 border border-slate-500 px-4 py-2 text-sky-600">Axial</th>
                        <th className="bg-gray-200 border border-slate-500 px-4 py-2 text-sky-600">Tangential</th>
                    </tr>
                    <tr>
                        <th className="bg-gray-100 border border-slate-500 px-4 py-2">mm/s</th>
                        <th className="bg-gray-100 border border-slate-500 px-4 py-2">mm/s</th>
                        <th className="bg-gray-100 border border-slate-500 px-4 py-2">mm/s</th>
                    
                    </tr>
                </thead>
                <tbody>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">72.59</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">1.69</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">73.02</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">0.94</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">2.25</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">73.44</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">0.83</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">96.93</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">1.15</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">97.36</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">1.25</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">121.27</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">1.41</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">2.18</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">2.18</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">121.70</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">1.05</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">1.57</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">291.21</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">1.71</td>
                            
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">291.64</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">2.34</td>
                            
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">339.89</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">2.37</td>
                            
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">364.23</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">-</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">5.01</td>
                            
                        </tr>
              
               </tbody>
            </table>
        </div>
    </div>

    <div className="">

         <div className="py-2 flex">
        <div className="font-bold text-lg  w-1/2  flex justify-center text-sky-600">Drive End Bearing Frequencies</div>
        <div className="font-bold text-lg  w-1/2  flex justify-center text-sky-600">Non-Drive End Bearing Frequencies</div>
        </div>

        <div className="py-2 flex gap-5">
        <div className="container mx-2 mt-8 flex justify-end w-1/2">
            <table className="table-auto w-full border border-collapse border-slate-800">
               
               <tbody>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">Outer Race</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">Inner Race</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">Ball Spin</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">Ball Cage</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">0</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">0</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">0</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">0</td>
                        </tr>
                </tbody>
            </table>
        </div>
        <div className="container mx-2 mt-8 flex justify-end w-1/2">
            <table className="table-auto w-full border border-collapse border-slate-800">
               
               <tbody>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">Outer Race</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">Inner Race</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">Ball Spin</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">Ball Cage</td>
                        </tr>
                        <tr>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">0</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">0</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">0</td>
                            <td className="bg-gray-50 border border-slate-500 px-4 py-2">0</td>
                        </tr>
                    </tbody>
            </table>
        </div>
    </div>
    </div>
  </div>
  <footer className="text-center font-semibold py-4">2.</footer><hr />

  <div className="py-10">

    <div className="font-semibold text-lg bg-sky-200 px-4 mx-2">Machine Diagnostics:</div>
    <h2 className="font-semibold px-4">Ultrasonic Spectra:</h2>
    <div className="flex-1 h-48  border-2 border-current rounded-xl m-2 py-4 px-4 font-semibold">
          Graph
          </div>
    
    <h2 className="font-semibold px-4">Magnetic Field Spectra:</h2>
    <div className="flex-1 h-48  border-2 border-current rounded-xl m-2 py-4 px-4 font-semibold">
          Graph
          </div>
          <div className="font-semibold text-lg bg-sky-200 px-4 mx-2">Machine Diagnostics Summary:</div>

          <div className="flex py-2">
            <table className="table-auto border w-full mx-2">
                <tr>
                    <td className="border p-2 text-sky-600 text-center border-slate-950">Machine Parameter</td>
                    <td className="border p-2 text-sky-600 text-center border-slate-950">Value</td>
                    <td className="border p-2 text-sky-600 text-center border-slate-950">Acceptable Limits</td>
                </tr>
            </table>
          </div>
          <div className="mx-2 border">
            <table className="table-auto mx-auto w-full">
           
            <tbody>
                <tr>
                    <td className="border px-6 py-2 border-slate-950">Vibration - Velocity (mm/sec)</td>
                    <td className="border px-6 py-2 border-slate-950"></td>
                    <td className="border px-6 py-2 border-slate-950"></td>
                </tr>       
    
                <tr>
                    <td className="border px-6 py-2 border-slate-950">Tangential <div className="bg-blue-700 h-1 w-6"></div></td>
                    <td className="border px-6 py-2 border-slate-950">2.36</td>
                    <td className="border px-6 py-2 border-slate-950">0-7.0</td>
                </tr>
                <tr>
                    <td className="border px-6 py-2 border-slate-950">Axial<div className="bg-red-500 h-1 w-6"></div></td>
                    <td className="border px-6 py-2 border-slate-950">3.54</td>
                    <td className="border px-6 py-2 border-slate-950">0-7.0</td>
                </tr>
                <tr>
                    <td className="border px-6 py-2 border-slate-950">Radial<div className="bg-green-700 h-1 w-6"></div></td>
                    <td className="border px-6 py-2 border-slate-950">6.28</td>
                    <td className="border px-6 py-2 border-slate-950">0-7.0</td>
                </tr>
             
            </tbody>
        </table>
    </div>

    <div className="mx-2 py-4 border-slate-800">
        <table className="table-auto mx-auto w-full">
       
        <tbody>
            <tr>
                <td className="border px-6 py-2 border-slate-950">Temperature (°C)</td>
                <td className="border px-6 py-2 border-slate-950"></td>
                <td className="border px-6 py-2 border-slate-950"></td>
            </tr>       

            <tr>
                <td className="border px-6 py-2 border-slate-950">Tangential <div className="bg-blue-700 h-1 w-6"></div></td>
                <td className="border px-6 py-2 border-slate-950">2.36</td>
                <td className="border px-6 py-2 border-slate-950">0-7.0</td>
            </tr>
            <tr>
                <td className="border px-6 py-2 border-slate-950">Axial<div className="bg-red-500 h-1 w-6"></div></td>
                <td className="border px-6 py-2 border-slate-950">3.54</td>
                <td className="border px-6 py-2 border-slate-950">0-7.0</td>
            </tr>
            <tr>
                <td className="border px-6 py-2 border-slate-950">Radial<div className="bg-green-700 h-1 w-6"></div></td>
                <td className="border px-6 py-2 border-slate-950">6.28</td>
                <td className="border px-6 py-2 border-slate-950">0-7.0</td>
            </tr>
         
        </tbody>
    </table>
</div>
<p className="px-2 font-semibold">Diagnostics analysis was performed at: SA: 2022-03-01 12:10:02 (IST)
    Based on the spectrum analysis. The diagnosed predominant unacceptable condition is:
     <span className="text-red-600">N/A (Machine is currently Healthy)</span>
     The Conditions to Observe are: <span className="text-red-600"> Mechanical Unbalance Condition, Soft Foot Condition, Looseness Condition</span>
    
   </p>

  </div>
  <footer className="text-center font-semibold py-4">3.</footer><hr />

  <div className="px-2">

  <div className="font-semibold text-lg bg-sky-200 px-4 mx-2">Past 24 hr Monitoring:</div>
  <h2 className="font-semibold px-4">Vibration - Acceleration Trend</h2>
  <div className="flex-1 h-48  border-2 border-current rounded-xl m-2 py-4 px-4 font-semibold bg-gray-100">
      Graph
      </div>
      <h2 className="font-semibold px-4">Analysis Summary</h2>
      <div className="mx-2 border border-slate-900">
          <table className="table-auto mx-auto w-full">
         
          <tbody>
              <tr>
                  <td className="bg-gray-100 border px-6 py-2 text-sky-600">Machine Parameter</td>
                  <td className="bg-gray-100 border px-4 py-2 text-sky-600">Min</td>
                  <td className="bg-gray-100 border px-4 py-2 text-sky-600">Max</td>
                  <td className="bg-gray-100 border px-4 py-2 text-sky-600">Average</td>
                  <td className="bg-gray-100 border px-4 py-2 text-sky-600">Acceptable Limits</td>
                  </tr>
  
              <tr>
                  <td className="border px-6 py-2">Tangential<div className="bg-blue-700 h-1 w-6"></div></td>
                 <td className="border px-4 py-2">2.1</td>
                  <td className="border px-4 py-2">3.7</td>
                  <td className="border px-4 py-2">2.9</td>
                  <td className="border px-4 py-2">0-4.9</td>
                  
                  
              </tr>
              <tr>
                  <td className="border px-6 py-2">Axial<div className="bg-red-500 h-1 w-6"></div></td>
                  <td className="border px-4 py-2">3.7</td>
                  <td className="border px-4 py-2">4.7</td>
                  <td className="border px-4 py-2">4.5</td>
                  <td className="border px-4 py-2">0-4.9</td>
                  
              </tr>
              <tr>
                  <td className="border px-6 py-2">Radial<div className="bg-green-700 h-1 w-6"></div></td>
                  <td className="border px-4 py-2">3.8</td>
                  <td className="border px-4 py-2">9.9</td>
                  <td className="border px-4 py-2">7.4</td>
                  <td className="border px-4 py-2">0-4.9</td>
                  </tr>

          </tbody>
      </table>
  </div>
  <h2 className="font-semibold px-4">Vibration - Velocity Trend:</h2>
  <div className="flex-1 h-48  border-2 border-current rounded-xl m-2 py-4 px-4 font-semibold bg-gray-100">
      Graph
      </div>
      <h2 className="font-semibold px-4">Analysis Summary</h2>
      <div className="mx-2 border border-slate-900">
          <table className="table-auto mx-auto w-full">
         
          <tbody>
              <tr>
                  <td className="bg-gray-100 border px-6 py-2 text-sky-600">Machine Parameter</td>
                  <td className="bg-gray-100 border px-4 py-2 text-sky-600">Min</td>
                  <td className="bg-gray-100 border px-4 py-2 text-sky-600">Max</td>
                  <td className="bg-gray-100 border px-4 py-2 text-sky-600">Average</td>
                  <td className="bg-gray-100 border px-4 py-2 text-sky-600">Acceptable Limits</td>
                  </tr>
  
              <tr>
                  <td className="border px-6 py-2">Tangential<div className="bg-blue-700 h-1 w-6"></div></td>
                  <td className="border px-4 py-2">2.1</td>
                  <td className="border px-4 py-2">3.7</td>
                  <td className="border px-4 py-2">2.9</td>
                  <td className="border px-4 py-2">0-4.9</td>
                  
                  
              </tr>
              <tr>
                  <td className="border px-6 py-2">Axial<div className="bg-red-500 h-1 w-6"></div></td>
                  <td className="border px-4 py-2">3.7</td>
                  <td className="border px-4 py-2">4.7</td>
                  <td className="border px-4 py-2">4.5</td>
                  <td className="border px-4 py-2">0-4.9</td>
                  
              </tr>
              <tr>
                  <td className="border px-6 py-2">Radial<div className="bg-green-700 h-1 w-6"></div></td>
                  <td className="border px-4 py-2">3.8</td>
                  <td className="border px-4 py-2">9.9</td>
                  <td className="border px-4 py-2">7.4</td>
                  <td className="border px-4 py-2">0-4.9</td>
                  </tr>
          </tbody>
      </table>
  </div>
  <h2 className="font-semibold px-4">Temperature Trend:</h2>
  <div className="flex-1 h-48  border-2 border-current rounded-xl m-2 py-4 px-4 font-semibold bg-gray-100">
      Graph
      </div>
  <h2 className="font-semibold px-4">Analysis Summary</h2>
  <div className="mx-2 border border-slate-900">
          <table className="table-auto mx-auto w-full ">
         
          <tbody>
              <tr>
                  <td className="bg-gray-100 border px-6 py-2 text-sky-600">Machine Parameter</td>
                  <td className="bg-gray-100 border px-4 py-2 text-sky-600">Min</td>
                  <td className="bg-gray-100 border px-4 py-2 text-sky-600">Max</td>
                  <td className="bg-gray-100 border px-4 py-2 text-sky-600">Average</td>
                  <td className="bg-gray-100 border px-4 py-2 text-sky-600">Acceptable Limits</td>
                  </tr>
  
              <tr>
                  <td className="border px-6 py-2">DE Bearing</td>
                  <td className="border px-4 py-2">2.1</td>
                  <td className="border px-4 py-2">3.7</td>
                  <td className="border px-4 py-2">2.9</td>
                  <td className="border px-4 py-2">0-4.9</td>
                  
                  
              </tr>
              <tr>
                  <td className="border px-6 py-2">Static Winding<div /></td>
                  <td className="border px-4 py-2">3.7</td>
                  <td className="border px-4 py-2">4.7</td>
                  <td className="border px-4 py-2">4.5</td>
                  <td className="border px-4 py-2">0-4.9</td>
                  
              </tr>
              <tr>
                  <td className="border px-6 py-2">NDE Bearing</td>
                  <td className="border px-4 py-2">3.8</td>
                  <td className="border px-4 py-2">9.9</td>
                  <td className="border px-4 py-2">7.4</td>
                  <td className="border px-4 py-2">0-4.9</td>
                  </tr>

          </tbody>
      </table>
  </div>
  <footer className="text-center font-semibold py-4">4.</footer><hr />
  </div>

<div className="py-4 mx-2">
  <div className="font-semibold text-lg bg-sky-200 px-4">Past 24 hr Monitoring:</div>
    <h2 className="font-semibold px-4">Machine Acoustics</h2>
        <div className="flex-1 h-48  border-2 border-current rounded-xl m-2 py-4 px-4 font-semibold bg-gray-100">
            Graph
            </div>
            <h2 className="font-semibold px-4">Machine Acoustics</h2>
            <div className="flex-1 h-48  border-2 border-current rounded-xl m-2 py-4 px-4 font-semibold bg-gray-100">
                Graph
                </div>
                <p className="font-semibold px-2 py-2">Conclusion - Based on the analysis of real time data captured at 2022-03-01 12:04:07 (IST) the machine is in
                    <span className="text-red-600">UNHEALTHY</span> state and <span className="text-red-600">Attention</span> Required as such.</p>
</div>
<footer className="text-center font-semibold py-4">5.</footer><hr />
                

  <div className="py-10">
    <div className="font-semibold text-lg bg-sky-200 mx-2 px-4">Glossary:</div>
    <div className="flex h-full bg-gray-300 border border-slate-950 rounded-xl m-2 p-4 font-semibold">
        <div className="container mx-auto mt-8">
            <table className="table-auto border border-collapse border-slate-950 w-full">
               
                <tbody>
                    
                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">ACCELERATION</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                    
                    </tr>
                  
                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">TEMPERATURE</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">ORIENTATION</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">VELOCITY</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">MACHINE RPM</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">ESTIMATED MACHINE LOADING</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">ASSET NAME</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">SITE</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">APPLICATION</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">MOTOR MAKE</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">FRAME</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">RATED AMBIENT TEMPERATURE</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">INSULATION CLASS</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">MOTOR SERIAL NUMBER</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">RATED POWER</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">RATED RPM</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">RATED VOLTAGE</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">PERCENTAGE EFICIENCY</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">LINE FREQUENCY</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">POWER FACTOR</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">DUTY</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">DE BEARING NUMBER</td>
                        <td className="border px-4 py-2 bg-gray-50  border-slate-500"></td>
                       
                    </tr>

                    <tr>
                        <td className="text-sky-600 border px-4 py-2 bg-gray-200  border-slate-500">NDE BEARING NUMBER</td>
                        <td className="border px-4 py-2 bg-gray-50 border-slate-500"></td>
                       
                    </tr>
                   
                </tbody>
            </table>
        </div>

    </div>
    <footer className="text-center font-semibold py-4">6.</footer><hr />
    </div>
    <div>
        <table></table>
      </div>
      <button onClick={handlePrint}>print</button>
    </div>

  );
};

export default Report;
