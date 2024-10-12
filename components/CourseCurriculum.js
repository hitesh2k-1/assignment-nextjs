import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';


const CourseCurriculum = () => {
  const modules = [
    "1. Introduction",
    "2. What is a Pitch?",
    "3. Tools required to make a pitch",
    "4. What is the client looking for in a Partner",
    "5. Client expectations from a Pitch",
    "6. Decoding the Brief",
    "7. Common questions clients ask",
    "8. Questions to ask before the Pitch",
    "9. How to Research before the Pitch",
    "10. Live Practical: Industry research",
    "11. How to do a Brand Audit",
    "12. Live Practical: Brand Audit",
    "13. Structuring the Pitch & Storytelling",
    "14. Finding industry insights",
    "15. Building the social media strategy",
    "16. Finding the BIG idea",
    "17.Setting KPIs (Key Performance Indicators)",
    "18. Setting the execution timeline",
    "19. Pricing & Negotiation",
    "20. Closing the pitch meeting with a CTA",
    "21. More pitch related FAQs",
  ];

  return (
    <div className="max-w-[70vw] mx-auto p-6">
      <h1 className="text-6xl font-semibold text-center gradient-text mb-4">Course Curriculum</h1>
      <p className="text-center text-lg m-auto mb-8 max-w-[50vw] text-gray-700">
        Learn the exact art & science behind making a <span className="font-bold">winning pitch</span> that will help you <span className="font-bold">beat your competitors</span> and close clients at the <span className="font-bold">price that you decide</span>.
      </p>
      <div className="grid grid-cols-1 text-2xl text-gray-700 sm:grid-cols-3 gap-6">
        {modules.map((module, index) => (
          <div
            key={index}
            className="py-8 px-6 font-semibold flex justify-start items-center border border-gray-200 rounded-2xl shadow-md shadow-pink-100 transition-shadow bg-white"
          >
            {module}
          </div>
        ))}
      </div>
      <div className="text-center mt-8">
        <button className="flex items-center text-xl gap-2 m-auto bg-gradient-to-r from-[#C81151] to-[#5A54A8] text-white px-6 py-3 rounded-lg shadow transition-transform transform hover:-translate-y-1 duration-300">
          <FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4 text-white" />
          GET INSTANT ACCESS AT JUST ₹999 <span className="line-through text-xs text-gray-300">₹3999</span>
        </button>

        <p className=" mt-2 text-gray-800">* GST applicable</p>
        <p className=" text-gray-800">🎉 Limited Time Launch Price!</p>
      </div>
    </div>
  );
};

export default CourseCurriculum;
