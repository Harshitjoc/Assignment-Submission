// import React from 'react'
import About from '../../assests/AboutUs.png'
import Check from '../../assests/Check.png'
const AboutUs = () => {
    return (
        <div className="w-[90%] h-full my-[60px]">
            <div className="flex flex-row font-montserrat">
                <div className=" w-[50%] flex justify-end">
                    <img className='w-[80%]' src={About} alt="About" />
                </div>
                <div className=" w-[50%] flex flex-col">
                    <h2 className='font-bold text-11xl'>Why Us?</h2>
                    <div className='flex flex-col ml-[100px] mt-[50px] gap-20'>
                        <div className=' flex flex-row '>
                            <img className='w-[30px]' src={Check} alt="Check" />
                        </div>
                        <div className=' flex flex-row '>
                            <img className='w-[30px]' src={Check} alt="Check" />
                        </div>
                        <div className=' flex flex-row '>
                            <img className='w-[30px]' src={Check} alt="Check" />
                        </div>
                        <div className=' flex flex-row '>
                            <img className='w-[30px]' src={Check} alt="Check" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default AboutUs