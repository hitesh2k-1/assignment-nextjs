import React from 'react';

const beneficiaries = [
  'Agency Founders',
  'Client Servicing Professionals',
  'Social Media Consultants',
  'Social Media Strategists',
  'Freelancers',
  'Freshers wanting to join agencies',
  'Anyone wanting to learn making winning pitches and closing high-ticket clients',
];

const CourseSection = () => {
  return (
    <div className="container mx-auto mt-52 mb-28 text-start max-w-[70vw]">
      <h2 className="text-5xl font-semibold mb-10">
        Who will <span className="gradient-text">benefit</span> from this course
      </h2>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {beneficiaries.map((benefit, index) => (
          <div
            key={index}
            className={`border border-gray-200 shadow-md  rounded-lg p-4 flex items-center md:${
              index === beneficiaries.length - 1 ? 'col-span-2' : ''
            }`}
          >
            <span className="text-pink-500 text-xl mr-3"><img src="/images/profile.svg" alt="" /></span>
            <span className="text-lg font-medium">{benefit}</span>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CourseSection;
