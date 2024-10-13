import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faChevronDown } from '@fortawesome/free-solid-svg-icons';


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

            <div className="flex justify-center px-4 mt-40 ">
                <div className=" lg:w-3/5">
                    <h2 className="sm:text-5xl text-3xl text-center text-gray-700 font-bold mb-6 my-15">Frequently Asked Questions</h2>
                    <ul className="space-y-3 text-lg font-semibold  ">
                        {[
                            "Is this a recorded course?",
                            "If I make a payment now, when will I get access to the course?",
                            "Is there any time limit for accessing course videos?",
                            "Can I watch the videos on any device?",
                            "Can I download the videos?",
                            "Do you offer refunds or account transfers?",
                        ].map((benefit, index) => (
                            <li key={index} className="flex justify-between items-center space-x-3 border bg-white text-gray-700 py-4 px-4 rounded-2xl">
                              
                                <p className="text-lg">{benefit}</p>
                                <div>
                                <FontAwesomeIcon icon={faChevronDown} className="ml-2 w-4 h-4 text-red-700 " />
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="text-center mt-8">
                <button className="relative inline-block text-lg sm:text-xl gap-2 m-auto bg-gradient-to-r from-[#C81151] to-[#5A54A8] text-white px-10 py-3 rounded-lg shadow transition-transform transform hover:-translate-y-1 duration-300">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 absolute top-4 left-3  text-white" />
                    GET INSTANT ACCESS AT JUST ₹999 <span className="line-through text-xs text-gray-300">₹3999</span>
                </button>

                <p className=" mt-2 text-gray-800">* GST applicable</p>
                <p className=" text-gray-800">🎉 Limited Time Launch Price!</p>
            </div>
        </div>
    )
}

export default Reasons
