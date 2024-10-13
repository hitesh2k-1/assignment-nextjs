"use client";
import React from 'react';

const ReviewCard = ({ name, review, rating, reviewsCount }) => (
  <div className="border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col w-full">
    <div className="flex items-center mb-2">
      <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mr-3">
        <span className="text-gray-600 text-sm">{name.charAt(0).toUpperCase()}</span>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{name}</h4>
        <span className="text-gray-500 text-xs">
          {reviewsCount} review{reviewsCount > 1 ? 's' : ''}
        </span>
        <div>
          <span className="text-yellow-500">{'⭐'.repeat(rating)}</span>
        </div>
      </div>
    </div>
    <p className="text-gray-600 mt-2">{review}</p>
  </div>
);

const Reviews2 = () => {
  const reviews = [
    {
      name: 'Megha Sawhney',
      review: 'I have attended a lot of courses in my career & this one with Young Urban Project (with Omkar) has blown my mind. Such a fantastic experience, still in awe of the truckloads of hardcore value that I got in just a few hours. Bear hugs to the team & a lifetime of gratitude ♥️',
      rating: 5,
      reviewsCount: 5,
    },
    {
      name: 'Hemant Mandaliya',
      review: "Riveting! Binge-worthy!! Pitch Perfect!!! I have spent 15 years in the Advertising industry and have pitched to brands of all shape & size and still there was so much to learn and put into practice. Whether it is research, strategy, creativity or working with numbers, Omkar is a wizard and most importantly, it's his presentation skills which leave you wanting for more.",
      rating: 5,
      reviewsCount: 10,
    },
    {
      name: 'John Doe',
      review: 'An amazing learning experience! Highly recommend to anyone looking to grow. Binge-worthy!! Pitch Perfect!!! I have spent 15 years in the Advertising industry and have pitched to brands of all shape & size.',
      rating: 5,
      reviewsCount: 3,
    },
  ];

  return (
    <div className="container mx-auto my-20 px-4 max-w-[80vw]">
      <h2 className="text-5xl font-semibold text-center mt-20 mb-12">
      Hear what other learners have to say about this course 😊 →
      </h2>

      {/* Review Navigation */}
      <div className="flex justify-center items-center mb-4">
        <button className="text-3xl p-2 text-gray-700 hover:text-gray-900" onClick={() => { /* Add functionality later */ }}>
          {"<"}
        </button>
        <div className="flex flex-col md:flex-row gap-5 items-center max-w-[70vw] m-auto space-y-4">
          {reviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
        <button className="text-3xl p-2 text-gray-700 hover:text-gray-900" onClick={() => { /* Add functionality later */ }}>
          {">"}
        </button>
      </div>
    </div>
  );
};

export default Reviews2;
