"use client";
import LooksOneOutlinedIcon from '@mui/icons-material/LooksOneOutlined';
import LooksTwoOutlinedIcon from '@mui/icons-material/LooksTwoOutlined';
import Looks3OutlinedIcon from '@mui/icons-material/Looks3Outlined';
import Looks4OutlinedIcon from '@mui/icons-material/Looks4Outlined';
import Looks5OutlinedIcon from '@mui/icons-material/Looks4Outlined';
import { motion } from "framer-motion";
import CheckCircleOutlineSharpIcon from '@mui/icons-material/CheckCircleOutlineSharp';
import { Cog } from 'lucide-react';
import CheckBoxOutlinedIcon from '@mui/icons-material/CheckBoxOutlined';

import { LogOut } from 'lucide-react';

import { useState } from "react";
import { green, red } from '@mui/material/colors';

export default function bloodpressure(){

    const [step,setstep] = useState(1);
    const [isOne, setIsOne] = useState(true);


    const handlePrev = ()=>{
        setstep(step-1)
    }

    const handleNext = ()=>{
        setstep(step+1) 
    }

    return(
        <div className="flex justify-center w-full min-h-screen bg-gray-200 p-20 m-0">
            <div className="inline-block">
            <div className="w-[500px] bg-white h-[5px]  rounded-lg relative">
                <div className="bg-green-500 z-10 h-full  rounded-lg  transition-all duration-700 ease-out"
                    style={{ width: `${(step - 1) * 25}%` }}
                >
                <div className='w-full z-20 absolute h-full'>
                    <div className='z-20 flex w-full justify-between absolute -top-2'>
                            {
                                step > 1 ? 
                                <CheckBoxOutlinedIcon sx ={{ background : "#4ade80", borderRadius: '50%', padding: '3px', transition: "background-color 0.7s ease-out",}}/>                            
                                :
                                <LooksOneOutlinedIcon sx={{ backgroundColor: step===1 ?'#60a5fa' : 'white', borderRadius: '50%', padding: '3px', transition: "background-color 0.7s ease-out",}} />
                            }
                            {
                                step > 2 ? 
                                <CheckBoxOutlinedIcon sx ={{ background : "#4ade80", borderRadius: '50%', padding: '3px', transition: "background-color 0.7s ease-out",}}/>                            
                                :
                                <LooksTwoOutlinedIcon  sx={{ backgroundColor: step===2 ?'#60a5fa' :'white', borderRadius: '50%', padding: '3px', transition: "background-color 0.7s ease-out", }}/>
                            }
                            {
                                step > 3 ? 
                                <CheckBoxOutlinedIcon sx ={{ background : "#4ade80", borderRadius: '50%', padding: '3px', transition: "background-color 0.7s ease-out",}}/>                            
                                :
                                <Looks3OutlinedIcon  sx={{ backgroundColor: step===3 ?'#60a5fa' :'white', borderRadius: '50%', padding: '3px', transition: "background-color 0.7s ease-out", }}/>
                            }
                            {
                                step > 4 ? 
                                <CheckBoxOutlinedIcon sx ={{ background : "#4ade80", borderRadius: '50%', padding: '3px', transition: "background-color 0.7s ease-out",}}/>                            
                                :
                                <Looks4OutlinedIcon  sx={{ backgroundColor: step===4 ?'#60a5fa' :'white', borderRadius: '50%', padding: '3px',
                                    transition: "background-color 0.7s ease-out",
                                }}/>
                            }
                            <Looks5OutlinedIcon  sx={{ backgroundColor: step===5 ?'#60a5fa' :'white', borderRadius: '50%', padding: '3px', transition: "background-color 0.7s ease-out", }}/>
                    </div>
                    
                </div>    
            </div>
                
            </div>
            <div className="flex flex-row justify-between mt-7">
                <button className="bg-blue-500 p-2 rounded-lg text-white hover:bg-blue-600 transition-color duration-300 ease-out cursor-pointer" onClick={handlePrev}
                disabled = {step<=0}
                >
                    prev
                </button>
                {
                    step === 5 ?
                    <button className="bg-blue-500 p-2 rounded-lg text-white 
                    hover:bg-blue-600 transition-colors duration-150 ease-out cursor-pointer" onClick={handleNext} disabled = {step>=5}>
                        Finish
                    </button>
                    :
                    <button className="bg-blue-500 p-2 rounded-lg text-white 
                    hover:bg-blue-600 transition-colors duration-150 ease-out cursor-pointer" onClick={handleNext} disabled = {step>=5}>
                        Next
                    </button>

                }
            </div>
            </div>
        </div>
    )
}