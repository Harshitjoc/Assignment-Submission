// import React from 'react'
import LongRightArrow from '../../assests/LongRightArrow.png'
import DestinationsData from '../../data/DestinationsData.js'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const Destinations = () => {

    var settings = {
        dots: true,
        infinite: false,
        speed: 500,
        slidesToShow: 4,
        slidesToScroll: 1
    };

    return (
        <div className="w-[90%] h-full my-[60px]">
            <div className="flex flex-col font-poppins gap-10">

                <div className=" flex flex-row justify-between items-center">
                    <h1 className="pl-[10%] text-[36px] font-semibold">Most Popular destinations</h1>
                    <p className='flex flex-row justify-center items-center gap-2'>
                        View More
                        <img className='w-[20%]' src={LongRightArrow} alt="LongRightArrow" />
                    </p>
                </div>

                <Slider {...settings}>
                    {DestinationsData.map((item, index) =>
                        <div key={index} className="relative overflow-hidden rounded-xl shadow-lg cursor-pointer">
                            <img className="object-cover h-[25rem]" src={item.img} alt="Varanasi" />

                            <div className="absolute bottom-0  left-0 px-[30px] pb-2 text-white text-left">
                                <h4 className="text-5xl font-semibold ">{item.name}</h4>
                                <p className=" text-xl">{item.rate}</p>
                            </div>
                        </div>
                    )}
                </Slider>
            </div>
        </div>
    )
}

export default Destinations