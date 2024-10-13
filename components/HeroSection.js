import React from 'react'
import 'font-awesome/css/font-awesome.min.css';
import Image from 'next/image';



const HeroSection = () => {
    return (
        <div>
            <div className='flex justify-center flex-col items-center text-start md:text-center w-[90vw] lg:max-w-[60vw] m-auto '>
                <h1 className=' text-gray-700 text-xl ' >N E W &nbsp;&nbsp; L A U N C H</h1>
                <p className='m-5 text-3xl md:text-5xl font-bold md:font-semibold'>
                    Learn how to <span className="gradient-text">Pitch</span> and close high-ticket Social Media Clients from the <span className="gradient-text">Founder of an Award-Winning Agency.</span>
                </p>

                <p className='text-gray-500 text-sm md:text-lg max-w-[80vw] '>
                    In this online courses get the <strong>Insider tips & tricks </strong> that have helped Top agency professionals, strategists & freelancers close <strong> high-paying, dream clients </strong>  - even if you have never pitched before.
                </p>

                <button className=' relative mt-5 inline-block mb-1 font-semibold text-white bg-[#ff206e] py-3 px-6 rounded-xl  hover:invert hover:bg-black hover:border-white hover:border transition-all duration-500 ease-in-out  '>
                    <Image className='absolute left-2 top-3.5' width={20} height={20} src="/images/circel.svg" alt="" /> &nbsp;
                    GET INSTANT ACCESS AT JUST ₹999&nbsp; <span className='text-xs line-through'>3999</span>
                </button>
                <p className='text-gray-500'>GST applicable.</p>
            </div>


            <div className='flex flex-col md:max-w-[70vw] my-10 m-auto md:flex-row  justify-center gap-10  ' >
                <div className=' mx-10 md:mx-0 border-2 rounded-lg p-5 min-w-3/4 md:w-5/12  flex flex-col justify-center items-center text-center shadow-lg shadow-gray-400 '>
                    <div className=''>
                        <span className="px-8 py-1 bg-gradient-to-r from-[#C81151] to-[#5A54A8] text-white rounded-md">
                            Your Mentor
                        </span>
                        <Image className='mt-3' height={240} width={240} src="/images/mentor.png" alt="" />
                        <p className='font-semibold text-2xl'>OMKAR JOSHI</p>
                        <p className='text-sm'>Founder & CCO at Hybrid&gt;</p>
                        <p className='text-sm'>Ex-Business Head & ECD at Schbang</p>
                        <div className='flex justify-center mt-5'>
                            <Image height={100} width={100} src="/images/hybrid.png" alt="" />
                            <Image height={100} width={100} src="/images/schbang.png" alt="" />
                        </div>
                    </div>
                </div>

                <div className='border-2 mx-10 md:mx-0 rounded-lg p-3 md:min-w-1/2  md:w-1/2 flex flex-col text-center shadow-lg shadow-gray-400 '>
                    <div>
                        <Image height={600} width={600} className='object-fit rounded-xl border-2' src="/images/strategy.png" alt="" />

                        <div className='flex flex-col text-start mt-5 gap-5'>
                            <p className='flex items-center gap-2  border-2 text-gray-600 rounded-lg px-6 py-3 text-lg' >
                                <Image height={20} width={20} src="/images/arrow.svg" alt="" /> End-to-End. No Upsells.</p>
                            <p className=' flex items-center gap-2 border-2 text-lg text-gray-600 rounded-lg px-6 py-3' >
                                <Image height={20} width={20} src="/images/infinite.svg" alt="" /> Lifetime access.</p>
                        </div>
                    </div>
                </div>
            </div>

        </div>
    )
}

export default HeroSection
