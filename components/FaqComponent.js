"use client";
import { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faChevronDown, faChevronUp } from "@fortawesome/free-solid-svg-icons";
import { faCheckCircle } from "@fortawesome/free-regular-svg-icons";

const FAQComponent = () => {
    const [openIndex, setOpenIndex] = useState(null); // Track which FAQ is open

    const handleToggle = (index) => {
        setOpenIndex(openIndex === index ? null : index); // Toggle open/close state
    };

    const faqs = [
        {
            question: "Is this a recorded course?",
            answer:
                "This is a Recorded self-paced course. You will get access to all video modules through our private members area that you can log in to.",
        },
        {
            question:
                "If I make a payment now, when will I get access to the course?",
            answer:
                "You will get INSTANT ACCESS. Once you complete your payment, you will get the login details on email within 5 minutes and you can start learning.",
        },
        {
            question: "Is there any time limit for accessing course videos?",
            answer: "There is NO TIME LIMIT and you get Lifetime access to videos.",
        },
        {
            question: "Can I watch the videos on any device?",
            answer:
                "Yes, our course lessons are accessible on Desktops, Laptops, Mobile Phones or Tablets. You can also download our LMS app on your phone and watch the lessons on the app.",
        },
        {
            question: "Can I download the videos?",
            answer:
                "You can access the videos in your private members area anytime you want. But the videos cannot be downloaded.",
        },
        {
            question: "Do you offer refunds or account transfers?",
            answer:
                "Due to the nature of our digital products, we do not offer any refunds or account transfers. We advise you to be thorough with the course details before making a purchase decision.",
        },
    ];

    return (
        <div>
            <div className="flex justify-center px-4 mt-40">
                <div className="lg:w-3/5">
                    <h2 className="sm:text-5xl text-3xl text-center text-gray-700 font-bold mb-6 my-15">
                        Frequently Asked Questions
                    </h2>
                    <ul className="space-y-3 text-lg font-semibold">
                        {faqs.map((faq, index) => (
                            <li
                                key={index}
                                className="cursor-pointer border bg-white text-gray-700  rounded-2xl"
                            >
                                <div
                                    className="flex justify-between items-center"
                                    onClick={() => handleToggle(index)}
                                >
                                    <p className="text-lg m-4 ">{faq.question}</p>
                                    <FontAwesomeIcon
                                        icon={openIndex === index ? faChevronUp : faChevronDown}
                                        className="ml-2 m-4 w-4 h-4 text-red-700"
                                    />
                                </div>
                                <div
                                    className={`overflow-hidden transition-all duration-1000 ease-in-out ${openIndex === index ? "max-h-screen" : "max-h-0"
                                        }`}
                                >
                                    <div
                                        className={`transition-all duration-1000 ease-in-out ${openIndex === index ? "bg-sky-100 px-4 py-4 sm:py-8" : "px-0 py-0"
                                            }`}
                                    >
                                        <p
                                            className={` text-sm sm:text-lg font-normal text-gray-600 ${openIndex === index ? "block" : "hidden"
                                                }`}
                                        >
                                            {faq.answer}
                                        </p>
                                    </div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
            </div>
            <div className="text-center mt-8">
                <button className="relative inline-block text-lg sm:text-xl gap-2 m-auto bg-gradient-to-r from-[#C81151] to-[#5A54A8] text-white px-10 py-3 rounded-lg shadow transition-transform transform hover:-translate-y-1 duration-300">
                    <FontAwesomeIcon icon={faCheckCircle} className="h-5 w-5 absolute top-4 left-3  text-white" />
                    GET INSTANT ACCESS AT JUST ₹999 <span className="line-through text-xs text-gray-300">₹3999</span>
                </button>

                <p className=" mt-2 text-gray-800">* GST applicable</p>
                <p className=" text-gray-800">🎉 Limited Time Launch Price!</p>
            </div>
        </div>
    );
};

export default FAQComponent;
