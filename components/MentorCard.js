import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCheckCircle } from '@fortawesome/free-regular-svg-icons';
import Image from 'next/image';

const MentorCard = () => {
    return (
        <div className="bg-gray-50 py-10 my-10">
            {/* Mentor Introduction */}
            <div className="text-center mb-10">
                <h1 className="text-5xl font-semibold text-gray-700">Meet Your Mentor</h1>
                <p className="mt-4 text-lg text-gray-600 max-w-[50vw] m-auto">
                    Get into the mind of India&pos;s top social media strategist and steal his secrets that have helped him close marquee brands as Clients.
                </p>
            </div>

            {/* Mentor Card */}
            <div className=" max-w-[90vw] lg:max-w-[70vw] mx-auto bg-white  p-10 flex flex-col lg:gap-10 md:flex-row items-center md:items-start">
                {/* Left Side: Profile and Brands */}
                <div className='border-2 p-4 rounded-lg  min-w-[25vw] flex flex-col justify-center items-center text-center shadow-lg shadow-gray-400 '>
                    <div className='max-w-[300px]'>
                        <Image className='m-auto ' height={240} width={240} src="/images/mentor.png" alt="" />
                        <p className='text-gray-700'>----------Worked with brands like----------</p>
                        <Image height={400} width={400} src="/images/myntra.png" alt="" />

                    </div>
                </div>

                {/* Right Side: Mentor Info */}
                <div className="md:w-2/3 md:ml-12 mt-10 md:mt-0 flex flex-col justify-center text-center ">
                    <h2 className="text-5xl  text-gray-00 mb-4">Omkar Joshi</h2>
                    <h3 className="text-lg ">
                        Founder & Chief Creative Officer – Hybrid&gt; Communications
                    </h3>
                    <p className="text-gray-600 mb-4">________________</p>
                    <ul className="list-inside text-gray-700 mb-6 space-y-2 text-start ">
                        <li className='flex items-center gap-2' ><FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4 text-sky-400" />Advertising and Marketing Leader with 10+ Years of experience</li>
                        <li className='flex items-center gap-2'><FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4 text-sky-400" />Ex-Business Head & Executive Creative Director at Schbang</li>
                        <li className='flex items-center gap-2'><FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4 text-sky-400" />Ex-Group Director (Brand Communications) at Gozoop</li>
                        <li className='flex items-center gap-2'><FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4 text-sky-400" />Won 4 Agency-Of-The-Year awards in past 5 years</li>
                        <li className='flex items-center gap-2'><FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4 text-sky-400" />Won 35+ awards for campaigns over the past 5 years</li>
                        <li className='flex items-center gap-2'><FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4 text-sky-400" />Listed in Agency Reporter 40 Under 40 (2021)</li>
                        <li className='flex items-center gap-2'><FontAwesomeIcon icon={faCheckCircle} className="h-4 w-4 text-sky-400" />Named “India&pos;s Top Digital Planner” by BusinessWorld & Dainik Bhaskar</li>
                    </ul>
                </div>
            </div>

            {/* As Seen On Section */}
            <h3 className="text-3xl font-semibold flex justify-center my-4">As seen on:</h3>
            <div className="flex flex-wrap justify-center mt-2 space-x-4">
                <Image height={300} width={300} src="/images/afaqs.png" alt="Afaqs" />
                <Image height={300} width={300} src="/images/campaign.png" alt="Campaign India"  />
                <Image height={300} width={300} src="/images/brandequity.png" alt="Brand Equity"  />
                <Image height={300} width={300} src="/images/adgully.png" alt="Adgully" />
            </div>
        </div>
    );
};

export default MentorCard;
