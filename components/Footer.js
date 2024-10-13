import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';
import Image from 'next/image';

const Footer = () => {
  return (
    <div className='mt-40'>
      {/* WhatsApp Section */}
      <div className="flex justify-center text-center lg:justify-around flex-col md:flex-row max-w-[90vw] gap-5 lg:max-w-[70vw] m-auto items-center space-x-2 mb-8 text-xl font-bold">
        <span>Got More Questions? Speak to us on WhatsApp</span>
        <button className="flex items-center gap-2 bg-gradient-to-r from-[#25d366] to-[#209f4f] shadow transition-transform transform hover:-translate-y-1 text-lg duration-300 text-white font-normal py-4 px-8 rounded-xl">
          <FontAwesomeIcon className='h-5 w-5' icon={faWhatsapp} />
          START A CHAT
        </button>
      </div>

      {/* Main Section */}
      <div className="flex flex-col items-center justify-center min-h-1/2 pt-20 bg-gradient-to-r from-gray-950 to-indigo-950 text-center p-6">
        {/* Main Text Section */}
        <div className="text-white mb-8 max-w-[80vw] lg:max-w-[45vw] ">
          <h1 className="text-5xl font-bold mb-4">
            Start Pitching like a Pro and Close High-Ticket Clients Today
          </h1>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
          <button className="flex items-center text-lg gap-2 m-auto bg-gradient-to-r from-[#C81151] to-[#5A54A8] text-white px-6 py-3 rounded-lg shadow transition-transform transform hover:-translate-y-1 duration-300">
            <FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4 text-white" />
            GET INSTANT ACCESS AT JUST ₹999 <span className="line-through text-xs text-gray-300">₹3999</span>
          </button>

          <p className="mt-2 text-gray-300">* GST applicable</p>
          <p className="text-gray-300 pb-10">🎉 Limited Time Launch Price!</p>
        </div>

        {/* Sticky Bar */}
        <div className="fixed bottom-0 md:hidden left-0 w-full bg-gradient-to-r from-gray-950 to-indigo-950 text-white py-3 px-8 flex items-center justify-between shadow-lg z-50">
          {/* Price Information */}
          <div className="text-left">
            <div className="font-bold text-xl">
              ₹999 <span className="line-through text-sm text-red-500 ml-2">₹3999</span>
            </div>
            <p className="text-sm text-white font-semibold">Price goes up tomorrow</p>
          </div>

          {/* Enroll Button */}
          <a href="#" className="font-bold bg-gradient-to-r from-[#C81151] to-[#5A54A8] text-white px-6 py-3 rounded-xl shadow hover:shadow-lg transition duration-300">
            ENROLL NOW
          </a>
        </div>
      </div>

      {/* Footer Section */}
      <div className='bg-black p-5'>
        <ul className='flex flex-col md:flex-row justify-between text-gray-400 max-w-[70vw] m-auto items-center'>
          <li>hello@youngurbanproject.com</li>
          <li><Image width={50} height={50} className='w-40 md:w-20' src="/images/logo.png" alt="Logo" /></li>
          <li>WhatsApp: +91 9321999877</li>
        </ul>
        <div className="flex justify-center items-center">
          <div className="text-gray-400 text-center">
            <p className='m-5'>This website is not a part of the Facebook or Instagram website or Meta Platforms, Inc. / Meta.</p>
            <p>Additionally, this site is NOT endorsed by Facebook or Instagram in ANY WAY.</p>
            <p>FACEBOOK and INSTAGRAM are trademarks of Meta Platforms Inc.</p>
            <p className='m-5'>Mumbai – 400064</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
