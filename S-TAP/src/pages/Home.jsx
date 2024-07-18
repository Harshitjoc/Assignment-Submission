// import React from 'react'
import Trip from '../components/01Trip/Trip'
import Services from '../components/02Services/Services'
import Destinations from '../components/03Destinations/Destinations'
import Featured from '../components/04Featured/Featured'
import OurWork from '../components/05OurWork/OurWork'
import AboutUs from '../components/06AboutUs/AboutUs'
import News from '../components/08News/News'
import Testimonials from '../components/07Testimonials/Testimonials'

const Home = () => {
    return (
        <div className=" flex flex-col justify-center items-center text-center">
            <Trip />
            <Services />
            <Destinations />
            <Featured />
            <OurWork />
            <AboutUs />
            <Testimonials />
            <News />
        </div>
    )
}

export default Home