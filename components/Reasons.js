"use client";
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';



import React from 'react'

const Reasons = () => {
    return (
        <div className='max-w-[80vw] m-auto' >
            <div className="flex justify-center px-4 mt-40 ">
                <div className="  lg:w-3/5">
                    <h2 className="sm:text-5xl text-3xl  text-center text-gray-700 font-semibold mb-6 my-15">This course is for you if:</h2>
                    <ul className="space-y-3 ">
                        {[
                            "You want to learn the exact art & science behind making a Winning Pitch",
                            "You want to close High-Ticket, Big-Brand Clients even if you are a small agency",
                            "You want to learn how to research about any client's industry",
                            "You want to charge a high-retainer or project fee to clients",
                            "You want to become a world-class social media strategist",
                            "You want to do award-winning work for clients and bring results for them",
                        ].map((benefit, index) => (
                            <li key={index} className="flex items-center space-x-3 border-none shadow-2xl shadow-gray-300 bg-white text-gray-700 py-4 px-4 rounded-2xl">
                                <div>
                                    <FontAwesomeIcon icon={faCheckSquare} className="text-purple-700 w-6 h-6" />
                                </div>
                                <p className="text-lg">{benefit}</p>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
        </div>
    )
}

export default Reasons
