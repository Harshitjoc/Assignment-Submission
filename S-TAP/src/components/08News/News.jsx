// import React from 'react'
import Article from '../../assests/Article.png'
import Article1 from '../../assests/Article1.png'
import Article2 from '../../assests/Article2.png'


const News = () => {
    return (
        <div className="w-[90%] h-full my-[60px]">
            <div className="flex flex-col font-montserrat gap-10 items-center">
                <div className=" flex flex-row items-center text-[32px] font-semibold gap-4">
                    <div className="w-[60px] bg-black h-[1px]"></div>
                    <h2>In the News</h2>
                    <div className="w-[60px] bg-black h-[1px]"></div>
                </div>

                <div className=" text-[32px] font-medium">
                    Articles about us
                </div>

                <div className=' flex flex-row justify-around gap-16 flex-wrap lg:flex-nowrap'>
                    <div className='flex flex-col items-center'>
                        <img src={Article} alt="Article" />
                        <div className=' -mt-[110px] ml-[200px] relative w-[100px] h-[100px] rounded-full bg-black'></div>
                        <div className=' -mt-[50px] w-[350px] bg-white h-[125px] border-solid border-2 border-black'
                            style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}></div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <img src={Article1} alt="Article1" />
                        <div className=' -mt-[110px] ml-[200px] relative w-[100px] h-[100px] rounded-full bg-black'></div>
                        <div className=' -mt-[50px] w-[350px] bg-white h-[125px] border-solid border-2 border-black'
                            style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}></div>
                    </div>

                    <div className='flex flex-col items-center'>
                        <img src={Article2} alt="Article2" />
                        <div className=' -mt-[110px] ml-[200px] relative w-[100px] h-[100px] rounded-full bg-black'></div>
                        <div className=' -mt-[50px] w-[350px] bg-white h-[125px] border-solid border-2 border-black'
                            style={{ boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }}></div>
                    </div>
                </div>
            </div>
        </div >
    )
}

export default News