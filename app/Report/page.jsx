"use client"; 
import { useState } from "react";

export default function Report(){

    const [selectedReport, setSelectedReport] = useState('');


    const handlechange = (e)=>{
        setSelectedReport(e.target.value)
    }

    return(
            <div className="p-10 min-h-screen bg-gray-100 xs:flex xs:justify-center lg:flex-row lg:justify-between">
                <div className="inline-block">
                    <form onSubmit={(e)=>{
                    e.preventDefault();
                    console.log(e)
                    }} className="flex flex-col gap-5 bg-white shadow-md p-8 rounded-lg">
                    <h1 className="text-2xl font-semibold text-center">
                        Add your Medical Reports
                    </h1>
                    <h1 className="text-xl font-semibold text-left text-gray-800">Add Report :</h1>
                    <input
                    type="file"
                    accept="image/*,.pdf,.doc,.docx,.txt"
                    className="block w-full text-sm text-gray-500 file:mr-4 file:py-2 file:px-4 file:rounded-lg file:border-0 file:text-sm file:font-semibold file:bg-blue-50 file:text-blue-700 hover:file:bg-blue-100 transition-colors duration-150 ease-out" required
                    />
                    <h1 className="text-xl font-semibold text-left text-gray-800">Choose the type :</h1>
                    <select value = {selectedReport} onChange={handlechange} required className="hover:bg-gray-100 px-1 py-1 rounded-md">
                        <option value = "" disabled>Select the Report Type</option>
                        <option value="lood pressure">Blood pressure</option>
                        <option value="Blood Sugar<">Blood Sugar</option>
                        <option value="Genetic Report">Genetic Report</option>
                        <option value="Hormonals Profile">Hormonals Profile</option>
                    </select>
                    <div className="flex justify-center">
                        <button className="bg-blue-600 p-2 rounded-lg text-white w-20 hover:bg-blue-700">Submit</button>
                    </div>
                    
                    </form>
                </div>
                <div className="xs:hidden lg:inline-block">
                   <div className="p-10 bg-white">
                   <link type="image/png" sizes="32x32" rel="icon" href=".../icons8-user profile-ios7-32.png"></link>
                   <a target="_blank" href="https://icons8.com/icon/7820/male-user">User Profile</a> icon by <a target="_blank" href="https://icons8.com">Icons8</a>
                    </div> 
                </div>


            </div>
        
        
        
    );
}