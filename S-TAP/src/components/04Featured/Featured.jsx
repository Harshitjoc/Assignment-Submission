// import React from 'react'
import Jaipur from '../../assests/Jaipur.jpeg'
import Mathura from '../../assests/Mathura.jpg'
import Goa from '../../assests/Goa.png'
import CheckMark from '../../assests/CheckMark.png'
const Featured = () => {
    return (
        <div className="w-[90%] h-full my-[60px]">
            <div className="flex flex-col font-poppins">
                <div className='pb-[100px]'>
                    <h1 className="text-[40px] font-semibold">Featured Destinations</h1>
                </div>

                <div className=" flex flex-col gap-20 font-montserrat font-medium">
                    <div className='flex flex-row'>
                        <div className="w-[30%] flex flex-col rounded-3xl shadow-xl mr-[100px]">
                            <img className='object-cover w-full h-[25rem] rounded-t-3xl' src={Jaipur} alt="Jaipur" />
                            <span className=' p-6 text-start text-[24px]'>Jaipur</span>
                        </div>

                        <div className='w-[70%] flex flex-col justify-center gap-16'>
                            <div className=" flex flex-row items-center">
                                <img className=' w-12 h-12 mr-10' src={CheckMark} alt="CheckMark" />
                                <p className='text-[24px] font-medium text-start'>
                                    Jaipur is renowned for its historic palaces, forts, and intricate
                                    architecture, such as the Hawa Mahal and Amber Fort.
                                </p>
                            </div>
                            <div className=" flex flex-row items-center">
                                <img className=' w-12 h-12 mr-10' src={CheckMark} alt="CheckMark" />
                                <p className='text-[24px] font-medium text-start'>
                                    The old city&apos;s distinctive pink buildings contribute to its nickname,
                                    the &quot;Pink City&quot;.
                                </p>
                            </div>
                            <div className=" flex flex-row items-center">
                                <img className=' w-12 h-12 mr-10' src={CheckMark} alt="CheckMark" />
                                <p className='text-[24px] font-medium text-start'>
                                    Jaipur is a vibrant cultural center with bustling markets, traditional cuisine,
                                    and festivals like the Jaipur Literature Festival.
                                </p>
                            </div>
                        </div>
                    </div>

                    <div className='flex flex-row'>
                        <div className='w-[70%] flex flex-col justify-center gap-16'>
                            <div className=" flex flex-row items-center">
                                <img className=' w-12 h-12 mr-10' src={CheckMark} alt="CheckMark" />
                                <p className='text-[24px] font-medium text-start'>
                                    Mathura, located in India&apos;s Uttar Pradesh state, is revered by Hindus as the
                                    birthplace of Lord Krishna, making it a major pilgrimage site.
                                </p>
                            </div>
                            <div className=" flex flex-row items-center">
                                <img className=' w-12 h-12 mr-10' src={CheckMark} alt="CheckMark" />
                                <p className='text-[24px] font-medium text-start'>
                                    The city is steeped in history, with ancient temples, ghats (riverfront steps), and
                                    archaeological sites that showcase its rich heritage.
                                </p>
                            </div>
                            <div className=" flex flex-row items-center">
                                <img className=' w-12 h-12 mr-10' src={CheckMark} alt="CheckMark" />
                                <p className='text-[24px] font-medium text-start'>
                                    Mathura is famous for its lively and colorful celebrations during festivals like Holi,
                                    attracting visitors from all over India and beyond.
                                </p>
                            </div>
                        </div>

                        <div className="w-[30%] flex flex-col rounded-3xl shadow-xl ml-[100px]">
                            <img className='object-cover w-full h-[25rem] rounded-t-3xl' src={Mathura} alt="Mathura" />
                            <span className=' p-6 text-start text-[24px]'>Mathura</span>
                        </div>
                    </div>

                    <div className='flex flex-row'>
                        <div className="w-[30%] flex flex-col rounded-3xl shadow-xl mr-[100px]">
                            <img className='object-cover w-full h-[25rem] rounded-t-3xl' src={Goa} alt="Goa" />
                            <span className=' p-6 text-start text-[24px]'>Goa</span>
                        </div>

                        <div className='w-[70%] flex flex-col justify-center gap-16'>
                            <div className=" flex flex-row items-center">
                                <img className=' w-12 h-12 mr-10' src={CheckMark} alt="CheckMark" />
                                <p className='text-[24px] font-medium text-start'>
                                    Goa is renowned for its pristine beaches along the Arabian Sea, offering water sports,
                                    relaxation, and vibrant beach parties.
                                </p>
                            </div>
                            <div className=" flex flex-row items-center">
                                <img className=' w-12 h-12 mr-10' src={CheckMark} alt="CheckMark" />
                                <p className='text-[24px] font-medium text-start'>
                                    The state combines Indian and Portuguese influences, evident in its architecture, cuisine,
                                    and festivals, creating a unique cultural blend.
                                </p>
                            </div>
                            <div className=" flex flex-row items-center">
                                <img className=' w-12 h-12 mr-10' src={CheckMark} alt="CheckMark" />
                                <p className='text-[24px] font-medium text-start'>
                                    The state combines Indian and Portuguese influences, evident in its architecture, cuisine,
                                    and festivals, creating a unique cultural blend.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default Featured