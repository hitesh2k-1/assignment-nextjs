import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faCheck } from '@fortawesome/free-solid-svg-icons';


const OfferSection = () => {
    return (
        <div className="mx-auto max-w-[90vw] lg:max-w-[70vw] overflow-hidden  ">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {/* Left Column: What you will get */}
                <div className="bg-white p-6  rounded-md">
                    <h2 className="text-2xl font-semibold mb-4">What will you get:</h2>
                    <div className="space-y-2">
                        {[
                            "Secret ingredients of a winning pitch",
                            "Know what clients expect from a pitch",
                            "Learn to accurately describe a brand offer",
                            "Learn how to research any client's industry",
                            "How to perform a brand's social media audit",
                            "How to use Storytelling in a Pitch",
                            "Steps to Build a Brand strategy based on insights",
                            "How to Find the Big & High Campaign Ideas",
                            "Measuring social media success & KPIs",
                            "Pricing & Negotiation for Retainer or Projects"
                        ].map((text, index) => (
                            <div key={index} className="flex items-center border-none shadow-md shadow-pink-100 p-2 rounded-md">
                                <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-red-700 mr-2" />
                                {text}
                            </div>
                        ))}
                    </div>
                    <h3 className="text-lg font-semibold mt-6 mb-2">And get special bonuses today:</h3>

                    <div className="space-y-2">
                        {[
                            "Agency pricing guide (E-book)",
                            "Agency retainer calculator",
                            "Exclusive Surprise bonus"
                        ].map((bonus, index) => (
                            <div key={index} className="flex items-center border-none p-2 shadow-md shadow-pink-100 rounded-md">
                                <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 text-red-700 mr-2" />
                                {bonus}
                            </div>
                        ))}
                    </div>
                </div>

                {/* Right Column: Offer Details */}
                <div className="bg-white p-4 sm:p-8 shadow-2xl shadow-pink-200 rounded-md text-center">
                    <h2 className="sm:text-4xl text-3xl font-semibold mb-4">How to Pitch & Close High-Ticket Social Media Clients: On-Demand Course</h2>
                    <p className="sm:text-2xl text-xl text-gray-700 mb-4">(Get 75% off)</p>

                    {/* Image of the Course */}
                    <span className="border-2 max-w-xs sm:w-full m-auto rounded-2xl border-gray-200 flex justify-center">
                        <Image height={300} width={300} src="/images/laptop.png" alt="" />
                    </span>
                    {/* Pricing */}
                    <span className="sm:text-7xl text-4xl font-bold gradient-text mb-2">₹999  </span>
                    <span className='text-lg font-bold sm:text-2xl line-through'>₹3999</span>
                    <p className="text-gray-500 text-sm mb-6">GST applicable</p>

                    {/* Button */}
                    <button className="relative w-full inline-block text-lg sm:text-xl gap-2 m-auto bg-gradient-to-r from-[#C81151] to-[#5A54A8] text-white px-10 py-3 rounded-lg shadow transition-transform transform hover:-translate-y-1 duration-300">
                        <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 absolute top-4 left-3  text-white" />
                        GET INSTANT ACCESS
                    </button>
                    <div className='border w-96 my-3 m-auto border-pink-100' ></div>
                    {/* Bonuses and Info */}
                    <div className="mt-6 mx-10 flex flex-col justify-center  gap-4 ">
                        <p className='flex items-center gap-3' ><FontAwesomeIcon icon={faCheck} className="h-6 w-6 text-red-700" />
                            Launch Price: Get a ₹3000 discount today</p>
                        <p className='flex items-center gap-3' ><FontAwesomeIcon icon={faCheck} className="h-6 w-6 text-red-700" />
                            Get exclusive bonuses worth ₹20,000</p>
                        <p className='flex items-center gap-3' ><FontAwesomeIcon icon={faCheck} className="h-6 w-6 text-red-700" />
                            Offer valid only till midnight, October 12</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default OfferSection;
