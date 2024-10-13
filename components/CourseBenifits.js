import Image from 'next/image';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckSquare } from '@fortawesome/free-regular-svg-icons';

const CourseBenefits = () => {
  return (
    <div className="bg-gradient-to-b from-[#5A54A8] to-[#C81151] py-16 ">
      <div className="lg:h-screen  mx-auto px-4 flex flex-col lg:flex-row max-w-[90vw] lg:max-w-[70vw] items-center">
        {/* Left side with image */}
        <div className="lg:w-1/2 mb-10 lg:mb-0">
          <div className="relative w-full h-full ">
            <Image width={600} height={600} src="/images/computer.png" alt="" />
          </div>
        </div>

        {/* Right side with text and checklist */}
        <div className="lg:w-1/2 text-white">
          <h2 className="text-3xl  text-center font-bold mb-6">After completing the course, you will be able to:</h2>
          <ul className="space-y-3 ">
            {[
              "Make a well-structured pitch that makes clients trust you as a strong partner",
              "Address a clients brief and offer solutions without missing out on critical elements",
              "Conceptualize Big Campaign Ideas to wow the client-side team",
              "Grow your career to become a high-paid, ROI-driven agency professional",
              "Start your own Agency or Social Media Freelance career",
              "Increase chances to beat other competing agencies in a multi-agency pitch",
            ].map((benefit, index) => (
              <li key={index} className="flex items-center space-x-3 border bg-white text-gray-700 py-4 px-4 rounded-2xl">
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
  );
};

export default CourseBenefits;
