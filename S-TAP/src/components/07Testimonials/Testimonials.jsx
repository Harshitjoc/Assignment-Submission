// import React from 'react'
import { FaArrowLeftLong } from "react-icons/fa6";
import { FaArrowRightLong } from "react-icons/fa6";
import { FaStar } from "react-icons/fa";
import Profile from '../../assests/Profile.png'

const Testimonials = () => {
    return (
        <div className="w-[90%] h-full my-[60px]">
            <div className="flex flex-col font-montserrat gap-2 items-center">
                <div className=" text-[25px] font-bold tracking-widest">
                    <h2>TESTIMONIALS</h2>
                </div>

                <div className=" text-[45px] font-bold">
                    <p>Trust our clients</p>
                </div>

                <div className=" flex flex-row justify-between items-center mx-[100px]">
                    <div className="bg-white shadow-slate-400 shadow-md 
                    rounded-full p-[40px]">
                        <FaArrowLeftLong />
                    </div>

                    <div className=" flex flex-col items-center gap-10 mt-12">
                        <div className="w-[10rem]">
                            <img src={Profile} alt="Profile" />
                        </div>
                        <div className="text-[30px] font-bold">
                            Emily <span className="text-[25px] text-slate-600">/ Travel Enthusiast</span>
                        </div>
                        <div className="flex flex-row text-yellow-400 text-[30px] gap-6">
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                            <FaStar />
                        </div>
                        <div className=" text-[25px]">
                            <i>S-Tap has some of the best reviews, and the overall experience was great.</i>
                        </div>
                    </div>

                    <div className="bg-black text-white shadow-slate-400 shadow-md 
                    rounded-full p-[40px]">
                        <FaArrowRightLong />
                    </div>
                </div>

                <div className="flex flex-row gap-5 items-center mt-10">
                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#191825" fillOpacity="0.05" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="12" fill="black" />
                    </svg>

                    <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                        <circle cx="12" cy="12" r="12" fill="#191825" fillOpacity="0.05" />
                    </svg>
                </div>
                <div></div>
            </div>
        </div>
    )
}

export default Testimonials