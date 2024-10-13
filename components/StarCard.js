import React from 'react';

const StatsCard = () => {
  return (
    <div className="w-[70vw] px-4 lg:p-12 m-auto md:h-60 bg-white shadow-2xl rounded-2xl flex flex-col md:flex-row justify-between items-center border-none border-gray-100">
      {/* Google Rating Section */}
      <div className="flex flex-col justify-center items-center text-center gap-2">
          <div className=" text-2xl lg:text-4xl font-bold text-gray-600">5</div>
          <div className="text-yellow-500 text-xl lg:text-3xl ml-2">⭐⭐⭐⭐⭐</div>
        <p className="mt-5 text-lg  text-gray-500">GOOGLE RATING</p>
      </div>

      {/* Divider */}
      <div className="border my-10 border-gray-300 w-11/12  md:w-0  md:h-52 mx-4"></div>

      {/* Video Lessons Section */}
      <div className="text-center">
        <p className="text-2xl lg:text-4xl font-bold text-gray-600">20</p>
        <p className="mt-8 text-lg  text-gray-500">VIDEO LESSONS</p>
      </div>

      {/* Divider */}
      <div className="border my-10 border-gray-300 w-11/12  md:w-0 md:h-52 mx-4"></div>

      {/* Hours Content Section */}
      <div className="text-center">
        <p className="text-2xl lg:text-4xl font-bold text-gray-600">4+</p>
        <p className="text-lg  text-gray-500 mt-8">HOURS CONTENT</p>
      </div>

      {/* Divider */}
      <div className="border my-10 border-gray-300 w-11/12 md:w-0 md:h-52 mx-4"></div>

      {/* Yup Learners Section */}
      <div className="text-center">
        <p className="text-2xl lg:text-4xl font-bold text-gray-600">15000+</p>
        <p className="text-lg  text-gray-500 mt-8">YUP LEARNERS</p>
      </div>
    </div>
  );
};

export default StatsCard;
