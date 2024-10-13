import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGem , faAddressCard ,  faCheckCircle , faFileVideo  } from '@fortawesome/free-regular-svg-icons'; 
import { faArrowsAltH , faInfinity } from '@fortawesome/free-solid-svg-icons'; 

const WhyJoinCourse = () => {
  return (
    <div>
    <div className="bg-gradient-to-r from-[#5A54A8] to-[#C81151] text-white py-12 px-6 lg:h-[70vh]">
      <h2 className="text-5xl font-semibold text-center my-16">Why join this course? 🚀</h2>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8 max-w[90vw] md:max-w-[70vw] m-auto ">
        {/* Card 1 */}
        <div className="flex items-center space-x-4 px-6 lg:max-w-[30vw] rounded-2xl py-4 border-2 bg-white text-gray-700 ">
          <FontAwesomeIcon icon={faFileVideo} className="h-8 w-8 text-black" />
          <div>
          <h3>
  <span className="font-bold">4+ hours</span> of on-demand lessons
</h3>
          </div>
        </div>
        
        {/* Card 2 */}
        <div className="flex items-center space-x-4 px-6 lg:max-w-[30vw] rounded-2xl py-4 border-2 bg-white text-gray-700 ">
        <FontAwesomeIcon icon={faCheckCircle} className="h-8 w-8 text-black" />
          <div>
          <h3>
  <span className="font-bold">Practical</span>  demos with real brands
</h3>
          </div>
        </div>

        {/* Card 3 */}
        <div className="flex items-center space-x-4 px-6 lg:max-w-[30vw] rounded-2xl py-4 border-2 bg-white text-gray-700 ">
        <FontAwesomeIcon icon={faArrowsAltH} className="h-8 w-8 text-black" />
          <div>
          <h3>
  <span className="font-bold"> No Upsells. </span> 
 In-depth course
</h3>
          </div>
        </div>

        {/* Card 4 */}
         <div className="flex items-center space-x-4 px-6 lg:max-w-[30vw] rounded-2xl py-4 border-2 bg-white text-gray-700 ">
         <FontAwesomeIcon icon={faAddressCard} className="h-8 w-8 text-black" />
          <div>
          <h3>Trusted by 
  <span className="font-bold"> 10,000+ learners</span> 
</h3>
          </div>
        </div>

        {/* Card 5 */}
        <div className="flex items-center space-x-4 px-6 lg:max-w-[30vw] rounded-2xl py-4 border-2 bg-white text-gray-700 ">
          <div>
          <FontAwesomeIcon icon={faGem} className="h-8 w-8 text-black" />
          </div>
          <div>
          <h3>Learn directly from  
  <span className="font-bold"> India's Top Strategist</span> 
</h3>
          </div>
        </div>
        {/* Card 6 */}
        <div className="flex items-center space-x-4 px-6 lg:max-w-[30vw] rounded-2xl py-4 border-2 bg-white text-gray-700 ">
        <FontAwesomeIcon icon={faInfinity} className="h-8 w-8 text-black" />
          <div>
          <h3>
  <span className="font-bold">Lifetime Access</span>  to course lessons
</h3>
          </div>
        </div>
      </div>
    </div>

    <div className="py-16 max-w-[90vw] lg:max-w-[45vw] m-auto  bg-gray-50 flex justify-center flex-col ">
      <h2 className="text-5xl font-semibold text-center text-gray-700 mb-12">Our learners work here:</h2>
      <img className='border-2 rounded-3xl'  src="/images/multiplelogo.png" alt="" />
      </div>
    </div>
  );
};

export default WhyJoinCourse;
