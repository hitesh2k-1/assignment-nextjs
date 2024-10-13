"use client";
import React from 'react';
import Slider from 'react-slick';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const ReviewCard = ({ name, review, rating, reviewsCount }) => (
  <div className="border border-gray-200 min-h-96 rounded-lg shadow-lg p-4 flex flex-col w-full">
    <div className="flex items-start mb-2">
      <div className="bg-gray-200 rounded-full w-10 h-10 flex items-center justify-center mr-3">
        <span className="text-gray-600 text-sm">{name.charAt(0).toUpperCase()}</span>
      </div>
      <div>
        <h4 className="font-bold text-xs leading-none text-gray-800">{name}</h4>
        <span className="text-gray-500 text-xs">
          {reviewsCount} review{reviewsCount > 1 ? 's' : ''}
        </span>
        <div>
          <span className="text-xs text-yellow-500">{'⭐'.repeat(rating)}</span>
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
      rating: 4,
      reviewsCount: 10,
    },
    {
      name: 'John Doe',
      review: 'An amazing learning experience! Highly recommend to anyone looking to grow. Binge-worthy!! Pitch Perfect!!! I have spent 15 years in the Advertising industry and have pitched to brands of all shape & size.',
      rating: 5,
      reviewsCount: 3,
    },
    {
      name: 'John Doe',
      review: 'An amazing learning experience! Highly recommend to anyone looking to grow. Binge-worthy!! Pitch Perfect!!! I have spent 15 years in the Advertising industry and have pitched to brands of all shape & size.',
      rating: 5,
      reviewsCount: 3,
    },
    {
      name: 'John Doe',
      review: 'An amazing learning experience! Highly recommend to anyone looking to grow. Binge-worthy!! Pitch Perfect!!! I have spent 15 years in the Advertising industry and have pitched to brands of all shape & size.',
      rating: 5,
      reviewsCount: 3,
    },
    {
      name: 'John Doe',
      review: 'An amazing learning experience! Highly recommend to anyone looking to grow. Binge-worthy!! Pitch Perfect!!! I have spent 15 years in the Advertising industry and have pitched to brands of all shape & size.',
      rating: 5,
      reviewsCount: 3,
    },
  ];


  var settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 1,
    initialSlide: 0,
    responsive: [
      {
        breakpoint: 1000,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 1
        }
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1
        }
      }
    ]
  };
  return (
    <div className="container mx-auto my-20 px-4 w-[90vw] lg:max-w-[70vw]">
      <h2 className="sm:text-5xl text-3xl font-semibold text-center mt-20 mb-12">
      Hear what other learners have to say about this course 😊 →
      </h2>

      {/* Review Navigation */}
      <Slider {...settings}>
        {reviews.map((review, index) => (
          <div key={index} className="flex justify-center items-center mb-4">
            <ReviewCard {...review} />
          </div>
        ))}
      </Slider>
    </div>
  );
};

export default Reviews2;
