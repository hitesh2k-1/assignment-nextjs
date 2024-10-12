import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';

const Footer = () => {
  return (
    <div className=''>
      {/* WhatsApp Section */}
      <div className="flex justify-around  max-w-[70vw] m-auto items-center space-x-2 mb-8 text-xl font-bold">
        <span>Got More Questions? Speak to us on WhatsApp</span>
        <button className="bg-green-500 shadow transition-transform transform hover:-translate-y-1 duration-300 text-white font-semibold py-4 px-6 rounded-xl">
          START A CHAT
        </button>
      </div>
      <div className="flex flex-col items-center justify-center min-h-1/2 py-20  bg-gray-900 text-center p-6">

        {/* Main Text Section */}
        <div className="text-white mb-8 max-w-[40vw]">
          <h1 className="text-5xl font-semibold mb-4">
            Start Pitching like a Pro and Close High-Ticket Clients Today
          </h1>
        </div>

        {/* CTA Button */}
        <div className="text-center mt-8">
                <button className="flex items-center text-lg gap-2 m-auto bg-gradient-to-r from-[#C81151] to-[#5A54A8] text-white px-6 py-3 rounded-lg shadow transition-transform transform hover:-translate-y-1 duration-300">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4 text-white" />
                    GET INSTANT ACCESS AT JUST ₹999 <span className="line-through text-xs text-gray-300">₹3999</span>
                </button>

                <p className=" mt-2 text-gray-300">* GST applicable</p>
                <p className=" text-gray-300">🎉 Limited Time Launch Price!</p>
            </div>
                  </div>


      <div className='bg-black p-5 ' >
        <ul className='flex justify-between text-gray-400 max-w-[70vw] m-auto items-center' >
          <li>hello@youngurbanproject.com</li>
          <li><img src="/images/logo.png" alt="" /></li>
          <li>WhatsApp: +91 9321999877</li>
        </ul>
        <div className="flex justify-center items-center">
          <div className="text-gray-400 text-center">
            <p className='m-5' >This website is not a part of the Facebook or Instagram website or Meta Platforms, Inc. / Meta.</p>
            <p>Additionally, this site is NOT endorsed by Facebook or Instagram in ANY WAY.</p>
            <p>FACEBOOK and INSTAGRAM are trademarks of Meta Platforms Inc.</p>
            <p className='m-5' >Mumbai – 400064</p>
          </div>
        </div>

      </div>
    </div>
  )
}

export default Footer
