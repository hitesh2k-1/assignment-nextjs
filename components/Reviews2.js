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

const ReviewsSection = () => {
  const reviews = [

    {
      name: 'Megha Sawhney',
      review:
        'I have attended a lot of courses in my career & this one with Young Urban Project (with Omkar) has blown my mind. Such a fantastic experience, still in awe of the truckloads of hardcore value that I got in just a few hours. Bear hugs to the team & a lifetime of gratitude ♥️',
      rating: 5,
      reviewsCount: 5,
    },
    {
      name: 'Hemant Mandaliya',
      review:
        "Riveting! Binge-worthy!! Pitch Perfect!!! I have spent 15 years in the Advertising industry and have pitched to brands of all shape & size and still there was so much to learn and put into practice. Whether it is research, strategy, creativity or working with numbers, Omkar is a wizard and most importantly, it's his presentation skills which leave you wanting for more.",
      rating: 5,
      reviewsCount: 10,
    },
    {
      name: 'Megha Sawhney',
      review:
        'I have attended a lot of courses in my career & this one with Young Urban Project (with Omkar) has blown my mind. Such a fantastic experience, still in awe of the truckloads of hardcore value that I got in just a few hours. Bear hugs to the team & a lifetime of gratitude ♥️',
      rating: 5,
      reviewsCount: 5,
    },
    {
      name: 'Hemant Mandaliya',
      review:
        "Riveting! Binge-worthy!! Pitch Perfect!!! I have spent 15 years in the Advertising industry and have pitched to brands of all shape & size and still there was so much to learn and put into practice. Whether it is research, strategy, creativity or working with numbers, Omkar is a wizard and most importantly, it's his presentation skills which leave you wanting for more.",
      rating: 5,
      reviewsCount: 10,
    },
    {
      name: 'Megha Sawhney',
      review:
        'I have attended a lot of courses in my career & this one with Young Urban Project (with Omkar) has blown my mind. Such a fantastic experience, still in awe of the truckloads of hardcore value that I got in just a few hours. Bear hugs to the team & a lifetime of gratitude ♥️',
      rating: 5,
      reviewsCount: 5,
    },
    {
      name: 'Hemant Mandaliya',
      review:
        "Riveting! Binge-worthy!! Pitch Perfect!!! I have spent 15 years in the Advertising industry and have pitched to brands of all shape & size and still there was so much to learn and put into practice. Whether it is research, strategy, creativity or working with numbers, Omkar is a wizard and most importantly, it's his presentation skills which leave you wanting for more.",
      rating: 5,
      reviewsCount: 10,
    }
    // Other reviews...
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  // Function to calculate the number of reviews per page based on screen size
  const getReviewsPerPage = () => {
    if (window.innerWidth >= 1024) {
      return 3; // For larger screens (lg and above)
    } else if (window.innerWidth >= 768) {
      return 2; // For medium screens (md)
    } else {
      return 1; // For small screens
    }
  };

  const [reviewsPerPage, setReviewsPerPage] = useState(getReviewsPerPage());

  // Update reviewsPerPage when the window is resized
  React.useEffect(() => {
    const handleResize = () => {
      setReviewsPerPage(getReviewsPerPage());
    };

    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  // Move to the next set of reviews
  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + reviewsPerPage) % reviews.length);
  };

  // Move to the previous set of reviews
  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? reviews.length - reviewsPerPage : prevIndex - reviewsPerPage
    );
  };

  // Get the current set of reviews
  const currentReviews = reviews.slice(currentIndex, currentIndex + reviewsPerPage);

  return (
    <div className="container mx-auto my-20 px-4 max-w-[80vw] ">
      <h2 className="text-5xl font-semibold text-center mt-20 mb-12">
      Hear what other learners have to say about this course 😊 →
      </h2>

      {/* Review Carousel */}
      <div className="flex justify-center items-center space-x-4">
        <button onClick={handlePrev} className="text-3xl p-2">
          {"<"}
        </button>
        <div className={`flex space-x-4 ${reviewsPerPage === 1 ? 'flex-col' : 'flex-row'}`}>
          {currentReviews.map((review, index) => (
            <ReviewCard key={index} {...review} />
          ))}
        </div>
        <button onClick={handleNext} className="text-3xl p-2">
          {">"}
        </button>
      </div>

      {/* Dots for Review Indicators */}
      <div className="flex justify-center mt-4">
        {Array.from({ length: Math.ceil(reviews.length / reviewsPerPage) }).map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 mx-2 rounded-full transition-all duration-500 ${
              index === Math.floor(currentIndex / reviewsPerPage) ? 'bg-gray-800' : 'bg-gray-400'
            }`}
          ></span>
        ))}
      </div>
    </div>
  );
};

export default ReviewsSection;
