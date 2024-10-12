import React from 'react';

const StatsCard = () => {
  return (
    <div className="max-w-[70vw] p-12 m-auto h-60 bg-white shadow-md rounded-2xl flex justify-between items-center border border-gray-200">
      {/* Google Rating Section */}
      <div className="flex flex-col justify-center items-center text-center gap-2">
          <div className="text-4xl font-bold text-gray-800">5</div>
          <div className="text-yellow-500 text-3xl ml-2">⭐⭐⭐⭐⭐</div>
        <p className="mt-5 text-gray-600">GOOGLE RATING</p>
      </div>

      {/* Divider */}
      <div className="border-l border-gray-300 h-52 mx-4"></div>

      {/* Video Lessons Section */}
      <div className="text-center">
        <p className="text-4xl font-bold text-gray-800">20</p>
        <p className="mt-8 text-gray-600">VIDEO LESSONS</p>
      </div>

      {/* Divider */}
      <div className="border-l border-gray-300 h-52 mx-4"></div>

      {/* Hours Content Section */}
      <div className="text-center">
        <p className="text-4xl font-bold text-gray-800">4+</p>
        <p className="text-gray-600 mt-8">HOURS CONTENT</p>
      </div>

      {/* Divider */}
      <div className="border-l border-gray-300 h-52 mx-4"></div>

      {/* Yup Learners Section */}
      <div className="text-center">
        <p className="text-4xl font-bold text-gray-800">15000+</p>
        <p className="text-gray-600 mt-8">YUP LEARNERS</p>
      </div>
    </div>
  );
};

export default StatsCard;
