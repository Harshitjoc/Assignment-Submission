// import React from 'react'
import TripImg from '../../assests/TripImg.png'
import { BiChevronDown } from 'react-icons/bi'

const Trip = () => {
    return (
        <div className=" flex flex-wrap justify-center items-center w-full h-full">
            <img className=' w-full h-screen' src={TripImg} alt="TripImg" />

            <div className=' mt-[-800px]  flex flex-col justify-center items-center text-wrap'>
                <div className=" flex items-center text-center text-[50px] font-notable h-[200px] w-[1000px]">
                    Everything you need for your trip
                </div>

                <div className='flex flex-row mt-5 text-7xl font-medium'>

                    <div className=" flex flex-row justify-between text-left bg-black text-white py-10 px-14 rounded-l-xl">
                        <div className='pr-10'>
                            Destination
                            <div className='flex flex-row items-center bg-white text-black rounded-b-xl p-4 my-4 gap-4'>
                                Destination
                                <BiChevronDown className='bg-black text-white ml-4' />
                            </div>
                            {/* <ul className='bg-white text-black rounded-xl text-left absolute pr-[110px]'>
                                    <li className='py-3 pl-4'>Mathura</li>
                                    <li className='py-3 pl-4'>Jaipur</li>
                                    <li className='py-3 pl-4'>Delhi</li>
                                    <li className='py-3 pl-4'>Mumbai</li>
                                </ul> */}
                        </div>

                        <div className='pr-10'>
                            Date
                            <div className='flex flex-row items-center bg-white text-black rounded-xl p-4 my-4 gap-4'>
                                Select Date
                                <BiChevronDown className='bg-black text-white ml-4' />
                            </div>
                        </div>

                        <div className='pr-10'>
                            Passengers
                            <div className='flex flex-row items-center bg-white text-black rounded-b-xl p-4 my-4 mr-5 gap-4'>
                                No. of guests
                                <BiChevronDown className='bg-black text-white ml-4' />
                            </div>
                            {/* <ul className='bg-white text-black rounded-xl text-left absolute pr-[215px]'>
                                    <li className='py-3 pl-4'>1</li>
                                    <li className='py-3 pl-4'>2</li>
                                    <li className='py-3 pl-4'>3</li>
                                    <li className='py-3 pl-4'>4</li>
                                </ul> */}
                        </div>
                    </div>

                    <button className='flex justify-center bg-white text-black rounded-r-xl p-20 text-[35px] font-poppins font-medium'>Search</button>

                </div>
            </div>
        </div>
    )
}

export default Trip