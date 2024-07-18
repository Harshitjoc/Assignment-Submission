// import React from 'react'
import { BiChevronDown, BiChevronUp } from 'react-icons/bi'
import Contact from '../../assests/ContactPage.gif'
import { useState } from 'react'

const ContactPage = () => {

    const destination = ['Google', 'Advertisement', 'Social Media', 'Any Other']
    const updateOption = ['Yes', 'No']
    const guideOption = ['Yes', 'No']

    const [isOpen, setIsOpen] = useState({
        destination: false,
        update: false,
        guide: false,
    });

    const [selectedItems, setSelectedItems] = useState({
        destination: '',
        update: '',
        guide: '',
    });

    const handleSelectedItemClick = (item, type) => {
        setSelectedItems((prev) => ({ ...prev, [type]: item }));
        setIsOpen((prev) => ({ ...prev, [type]: !prev[type] }));
    };

    return (
        <div className="flex flex-col justify-center items-center text-center">
            <div className="w-[80%] h-full font-montserrat font-medium">
                <div className="flex flex-col mt-10 items-center gap-5">
                    <span className="font-notable text-[40px]">HELP US, HELP YOU</span>
                    <span className="text-[20px]">Share your deatils and and help us create a perfect trip for you.</span>
                    <img className='w-1/2' src={Contact} alt="Contact" />
                </div>

                <form className='flex flex-col text-left gap-20' action="#">

                    {/* Contact Information */}
                    <div className='flex flex-col gap-10'>
                        <span className='text-[40px]'>Contact Information:</span>

                        <div className='flex flex-wrap'>
                            <div className='flex flex-col w-[50%] gap-5'>
                                <label className='text-[25px]' htmlFor="firstname">First Name</label>
                                <input className='rounded-xl w-3/4 h-16 px-10 text-[20px]' style={{ border: '0.5px solid rgba(0, 0, 0, 0.50)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} type="text" id='firstname' placeholder='Enter first name' />
                            </div>

                            <div className='flex flex-col w-[50%] gap-5'>
                                <label className='text-[25px]' htmlFor="lastname">Last Name</label>
                                <input className='rounded-xl w-3/4 h-16 px-10 text-[20px]' style={{ border: '0.5px solid rgba(0, 0, 0, 0.50)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} type="text" id='lastname' placeholder='Enter last name' />
                            </div>
                        </div>

                        <div className='flex flex-wrap'>
                            <div className='flex flex-col w-[50%] gap-5'>
                                <label className='text-[25px]' htmlFor="email">Email Address</label>
                                <input className='rounded-xl w-3/4 h-16 px-10 text-[20px]' style={{ border: '0.5px solid rgba(0, 0, 0, 0.50)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} type="email" id='email' placeholder='Enter email' />
                            </div>

                            <div className='flex flex-col w-[50%] gap-5'>
                                <label className='text-[25px]' htmlFor="phone">Phone Number</label>
                                <input className='rounded-xl w-3/4 h-16 px-10 text-[20px]' style={{ border: '0.5px solid rgba(0, 0, 0, 0.50)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} type="tel" id='phone' placeholder='Enter phone' />
                            </div>
                        </div>
                    </div>

                    {/* Travel deatils */}
                    <div className='flex flex-col gap-10'>
                        <span className='text-[40px]'>Travel Details:</span>

                        <div className='flex flex-wrap'>
                            <div className='flex flex-col w-[50%] gap-5'>
                                <label className='text-[25px]' htmlFor="destination">Destination</label>
                                <input className='rounded-xl w-3/4 h-16 px-10 text-[20px]' style={{ border: '0.5px solid rgba(0, 0, 0, 0.50)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} type="text" id='destination' placeholder='desired destination' />
                            </div>

                            <div className='flex flex-col w-[50%] gap-5'>
                                <label className='text-[25px]' htmlFor="startingdate">From</label>
                                <input className='rounded-xl w-3/4 h-16 px-10 text-[20px]' style={{ border: '0.5px solid rgba(0, 0, 0, 0.50)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} type="date" id='startingdate' placeholder='starting date' />
                            </div>
                        </div>

                        <div className='flex flex-wrap'>
                            <div className='flex flex-col w-[50%] gap-5'>
                                <label className='text-[25px]' htmlFor="endingdate">To</label>
                                <input className='rounded-xl w-3/4 h-16 px-10 text-[20px]' style={{ border: '0.5px solid rgba(0, 0, 0, 0.50)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} type="date" id='endingdate' placeholder='ending date' />
                            </div>

                            <div className='flex flex-col w-[50%] gap-5'>
                                <label className='text-[25px]' htmlFor="travellers">No. of Travellers</label>
                                <input className='rounded-xl w-3/4 h-16 px-10 text-[20px]' style={{ border: '0.5px solid rgba(0, 0, 0, 0.50)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} type="number" id='travellers' placeholder='travellers' />
                            </div>
                        </div>
                    </div>

                    {/* How you found us? */}
                    <div className='flex flex-row gap-20 mb-20'>
                        <span className='text-[40px]'>How you found us?</span>

                        <div className='flex flex-col gap-5'>
                            <div style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}>

                                <div onClick={() => setIsOpen((prev) => ({ ...prev, destination: !prev.destination }))} className='flex flex-row items-center bg-white text-black justify-between rounded-xl h-16 px-10 text-[20px] my-4 gap-4'>
                                    {selectedItems.destination || 'Destination'}
                                    {!isOpen.destination ? (
                                        <BiChevronDown className="bg-black text-white ml-4" />
                                    ) : (
                                        <BiChevronUp className="bg-black text-white ml-4" />
                                    )}

                                </div>

                                {/* list iterate */}
                                {isOpen.destination && (
                                    <ul className="bg-white text-black rounded-xl text-left absolute w-full">
                                        {destination.map((item, index) => (
                                            <li
                                                key={index}
                                                onClick={() => handleSelectedItemClick(item, 'destination')}
                                                className="py-3 pl-4 w-full"
                                            >
                                                {item}
                                            </li>
                                        ))}
                                    </ul>
                                )}
                            </div>

                            <input className='rounded-xl h-16 px-10 text-[20px]' style={{ border: '0.5px solid rgba(0, 0, 0, 0.50)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} type="text" id='startingdate' placeholder='Enter here' />
                        </div>
                    </div>

                    {/* preferences */}
                    <div className='flex flex-col flex-wrap gap-10 mb-20'>
                        <span className='text-[40px]'>Any special requests or preferences?</span>

                        <div className='flex flex-col gap-5'>
                            <input className='rounded-xl w-3/4 h-16 px-10 text-[20px]' style={{ border: '0.5px solid rgba(0, 0, 0, 0.50)', boxShadow: '0px 4px 4px 0px rgba(0, 0, 0, 0.25)' }} type="text" id='startingdate' placeholder='Enter here' />
                        </div>
                    </div>

                    {/* updates */}
                    <div className='flex flex-row flex-wrap gap-10 mb-20 items-center'>
                        <span className='text-[25px]'>Want to receive latest updates and offers on Whatsapp?</span>

                        <div style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}>

                            <div onClick={() => setIsOpen((prev) => ({ ...prev, update: !prev.update }))} className='flex flex-row items-center bg-white text-black justify-between rounded-xl h-16 px-10 text-[20px] my-4 gap-4'>

                                {selectedItems.update || 'Receive?'}
                                {!isOpen.update ? (
                                    <BiChevronDown className="bg-black text-white ml-4" />
                                ) : (
                                    <BiChevronUp className="bg-black text-white ml-4" />
                                )}

                            </div>

                            {/* list iterate */}
                            {isOpen.update && (
                                <ul className="bg-white text-black rounded-xl text-left absolute w-full">
                                    {updateOption.map((item, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleSelectedItemClick(item, 'update')}
                                            className="py-3 pl-4 w-full"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    {/* guide */}
                    <div className='flex flex-row flex-wrap gap-10 mb-20 items-center'>
                        <span className='text-[25px]'>Want a Tour Guide ?</span>

                        <div style={{ filter: 'drop-shadow(0px 4px 4px rgba(0, 0, 0, 0.25))' }}>

                            <div onClick={() => setIsOpen((prev) => ({ ...prev, guide: !prev.guide }))} className='flex flex-row items-center bg-white text-black justify-between rounded-xl h-16 px-10 text-[20px] my-4 gap-4'>

                                {selectedItems.guide || 'Y/N'}
                                {!isOpen.guide ? (
                                    <BiChevronDown className="bg-black text-white ml-4" />
                                ) : (
                                    <BiChevronUp className="bg-black text-white ml-4" />
                                )}

                            </div>

                            {/* list iterate */}

                            {isOpen.guide && (
                                <ul className="bg-white text-black rounded-xl text-left absolute w-full">
                                    {guideOption.map((item, index) => (
                                        <li
                                            key={index}
                                            onClick={() => handleSelectedItemClick(item, 'guide')}
                                            className="py-3 pl-4 w-full"
                                        >
                                            {item}
                                        </li>
                                    ))}
                                </ul>
                            )}
                        </div>
                    </div>

                    <div className='flex items-center justify-center mb-[100px] '>
                        <button
                            className="p-5 w-[400px] font-poppins text-[30px] rounded-full bg-black text-white"
                            type="submit"
                        >
                            Submit
                        </button>
                    </div>
                </form>
            </div>
        </div>
    )
}

export default ContactPage