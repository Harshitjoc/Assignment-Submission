// import React from 'react'
import Travel1 from '../../assests/01Travel.png'
import Travel2 from '../../assests/02Travel.png'

const Services = () => {
    return (
        <div className='w-[90%] h-full mt-[100px]'>
            <div className='flex flex-col font-poppins'>
                <h2 className="text-[40px]">What are we <b>Doing?</b></h2>
                <p className="text-[28px] pt-5">As a trip planner, I&apos;m here to transform your travel dreams into a
                    seamless reality. Whether you&apos;re seeking an exotic adventure,
                    a romantic getaway, or a family vacation, my expertise ensures
                    every detail, from destinations to accommodations and activities,
                    is thoughtfully tailored to your preferences and budget.</p>

                <div className="flex flex-row font-poppins items-center mt-10">
                    <div className="w-[50%]" >
                        <img className='w-[100%]' src={Travel1} alt="Travel" />
                    </div>

                    <div className="w-[50%]">
                        <h2 className="text-[30px] font-semibold">The most efficient method of traveling.</h2>
                        <p className="text-[18px] font-semibold text-left pt-5">
                            Create your ideal travel schedule with STAP.
                            Our sophisticated algorithms factor in your chosen attractions, dining options,
                            and accommodation preferences to generate a customized travel itinerary that
                            suits you best.
                        </p>
                    </div>
                </div>

                <div className="flex flex-row font-poppins items-center mt-10 mb-28">
                    <div className="w-[70%]">
                        <h2 className="text-[30px] font-semibold">Draw inspiration from the adventures of fellow travelers.</h2>
                        <p className="text-[18px] font-semibold text-left pt-5 px-44 w-[100]">
                            Gain motivation by exploring the travel experiences of fellow adventurers,
                            igniting your own wanderlust and curiosity.
                        </p>
                    </div>

                    <div className="w-[30%]" >
                        <img className='w-[100%]' src={Travel2} alt="Travel" />
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Services