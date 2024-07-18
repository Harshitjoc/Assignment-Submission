// import React from 'react'
import Planning from '../../assests/earth-planet.png'
import Adventure from '../../assests/adventure.png'
import Insights from '../../assests/customer-insights-manager.png'
import Cuisine from '../../assests/food.png'
const OurWork = () => {
    return (
        <div className="w-[90%] h-full my-[60px]">
            <div className=" flex flex-col font-montserrat gap-20">
                <div className="flex flex-col items-center">
                    <h1 className="text-21xl font-bold">The only website you’ll ever need</h1>
                    <p className="text-7xl w-[70%] pt-5">Say goodbye to the stress of planning and hello to personalized recommendations,
                        efficient itineraries, and seamless dining experiences.</p>
                </div>

                <div className="flex flex-col gap-20">
                    <div className=' flex flex-row justify-between '>
                        <div className='flex flex-row items-center font-semibold w-[50%]'>
                            <img className='w-14 h-14' src={Planning} alt="Planning" />
                            <span className='pl-5 text-[30px]'>Optimal Planning</span>
                        </div>
                        <div className='flex flex-row items-center font-semibold w-[50%]'>
                            <img className='w-14 h-14' src={Adventure} alt="Adventure" />
                            <span className='pl-5 text-[30px]'>Personalize Your Adventure</span>
                        </div>
                    </div>

                    <div className=' flex flex-row justify-between '>
                        <div className='flex flex-row items-center font-semibold w-[50%]'>
                            <img className='w-14 h-14' src={Insights} alt="Insights" />
                            <span className='pl-5 text-[30px]'>Travel Insights</span>
                        </div>
                        <div className='flex flex-row items-center font-semibold w-[50%]'>
                            <img className='w-14 h-14' src={Cuisine} alt="Cuisine" />
                            <span className='pl-5 text-[30px]'>Local Cuisine Recommendations</span>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default OurWork