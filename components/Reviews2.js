"use client";
import React, { useState } from 'react';

const ReviewCard = ({ name, review, rating, reviewsCount }) => (
  <div className="border border-gray-200 rounded-lg shadow-lg p-4 flex flex-col w-full ">
    <div className="flex items-center mb-2">
      <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mr-3">
        <span className="text-gray-600 text-sm">{name.charAt(0).toUpperCase()}</span>
      </div>
      <div>
        <h4 className="font-semibold text-gray-800">{name}</h4>
        {/* Show the number of reviews here */}
        <span className="text-gray-500 text-xs">{reviewsCount} review{reviewsCount > 1 ? 's' : ''}</span>
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
      name: 'heena kataria',
      review: 'Legit the most valuable course I have taken in a long time! No theoretical, philosophical gyaan. This was REAL valuable practical experience that\'s definitely gonna help me and my agency level up our pitches. Looking forward to experience more courses from Young Urban Project.',
      rating: 5,
      reviewsCount: 3 // Added reviews count
    },
    {
      name: 'Megha Sawhney',
      review: 'I have attended a lot of courses in my career & this one with Young Urban Project (with Omkar) has blown my mind. Such a fantastic experience, still in awe of the truckloads of hardcore value that I got in just a few hours. Bear hugs to the team & a lifetime of gratitude ♥️',
      rating: 5,
      reviewsCount: 5 // Added reviews count
    },
    {
      name: 'Hemant Mandaliya',
      review: 'Riveting! Binge-worthy!! Pitch Perfect!!! I have spent 15 years in the Advertising industry and have pitched to brands of all shape & size and still there was so much to learn and put into practice. Whether it is research, strategy, creativity or working with numbers, Omkar is a wizard and most importantly, it\'s his presentation skills which leave you wanting for more.',
      rating: 5,
      reviewsCount: 10 // Added reviews count
    },
    {
      name: 'Hemant Mandaliya',
      review: 'Riveting! Binge-worthy!! Pitch Perfect!!! I have spent 15 years in the Advertising industry and have pitched to brands of all shape & size and still there was so much to learn and put into practice. Whether it is research, strategy, creativity or working with numbers, Omkar is a wizard and most importantly, it\'s his presentation skills which leave you wanting for more.',
      rating: 5,
      reviewsCount: 10
    },
    {
      name: 'Megha Sawhney',
      review: 'I have attended a lot of courses in my career & this one with Young Urban Project (with Omkar) has blown my mind. Such a fantastic experience, still in awe of the truckloads of hardcore value that I got in just a few hours. Bear hugs to the team & a lifetime of gratitude ♥️',
      rating: 5,
      reviewsCount: 5
    },

    {
      name: 'Hemant Mandaliya',
      review: 'Riveting! Binge-worthy!! Pitch Perfect!!! I have spent 15 years in the Advertising industry and have pitched to brands of all shape & size and still there was so much to learn and put into practice. Whether it is research, strategy, creativity or working with numbers, Omkar is a wizard and most importantly, it\'s his presentation skills which leave you wanting for more.',
      rating: 5,
      reviewsCount: 10
    },
    {
      name: 'Megha Sawhney',
      review: 'I have attended a lot of courses in my career & this one with Young Urban Project (with Omkar) has blown my mind. Such a fantastic experience, still in awe of the truckloads of hardcore value that I got in just a few hours. Bear hugs to the team & a lifetime of gratitude ♥️',
      rating: 5,
      reviewsCount: 5
    },
    {
      name: 'heena kataria',
      review: 'Legit the most valuable course I have taken in a long time! No theoretical, philosophical gyaan. This was REAL valuable practical experience that\'s definitely gonna help me and my agency level up our pitches. Looking forward to experience more courses from Young Urban Project.',
      rating: 5,
      reviewsCount: 3
    },
    {
      name: 'Hemant Mandaliya',
      review: 'Riveting! Binge-worthy!! Pitch Perfect!!! I have spent 15 years in the Advertising industry and have pitched to brands of all shape & size and still there was so much to learn and put into practice. Whether it is research, strategy, creativity or working with numbers, Omkar is a wizard and most importantly, it\'s his presentation skills which leave you wanting for more.',
      rating: 5,
      reviewsCount: 10
    },
  ];

  const reviewsPerPage = 3;  // Set to show 3 reviews at a time
  const [currentIndex, setCurrentIndex] = useState(0);

  // Move to the next set of 3 reviews
  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      (prevIndex + reviewsPerPage) % reviews.length
    );
  };

  // Move to the previous set of 3 reviews
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - reviewsPerPage : prevIndex - reviewsPerPage
    );
  };

  // Get the current set of 3 reviews
  const currentReviews = reviews.slice(currentIndex, currentIndex + reviewsPerPage);

  return (
    <div className="container mx-auto my-20 px-4 max-w-[80vw] ">
      <h2 className="text-5xl max-w-[50vw] m-auto font-semibold text-center mt-20 mb-12">Hear what other learners have to say about this course 😊 →</h2>

      {/* Review Carousel showing 3 reviews */}
      <div className="flex justify-center items-center space-x-4">
        <button onClick={handlePrev} className="text-3xl p-2">{"<"}</button>
        <div className="flex space-x-4">
          {currentReviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
        <button onClick={handleNext} className="text-3xl p-2">{">"}</button>
      </div>

      {/* Dots for Review Indicators */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }).map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 mx-2 rounded-full transition-all duration-500 ${index === Math.floor(currentIndex / reviewsPerPage) ? 'bg-gray-800' : 'bg-gray-400'
              }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default Reviews2;
