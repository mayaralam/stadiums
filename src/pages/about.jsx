import Component from "./component";
import Footercomp from "./footercomp";
import { useState } from "react";
import cover from "../assets/cover.jpg";
import story1 from "../assets/story1.jpeg";
import story2 from "../assets/story2.jpeg";
export default function about() {
  const [steps, setSteps] = useState([
    {
      number: 1,
      title: "Search & Compare",
      description:
        "Browse hundreds of stadiums, compare prices, and read reviews from other users",
    },
    {
      number: 2,
      title: "Book Instantly",
      description:
        "Select your preferred date and time, then book instantly with secure payment",
    },
    {
      number: 3,
      title: "Play & Enjoy",
      description:
        "Show up and play! Manage your bookings and reschedule anytime through the app",
    },
  ]);
  const [advans, setAdvans] = useState([
    {
      icon: "✔️",
      title: "Instant Confirmation",
      description: "Get instant booking confirmation via email and SMS.",
    },
    {
      icon: "💳",
      title: "Secure Payment",
      description: "Safe and secure payment processing with multiple options.",
    },
    {
      icon: "📅",
      title: "Flexible Booking",
      description: "Easy rescheduling and cancellation up to 24 hours before.",
    },
    {
      icon: "🛡️",
      title: "Verified Venues",
      description: "All stadiums are verified by our team.",
    },
  ]);
  return (
    <>
      <Component />
      <div className="bg-blue-50 dark:bg-[#1d232a]">
      <div
        className="h-125 bg-cover bg-center"
        style={{ backgroundImage: `url(${cover})` }}
      >
        <div className="container mx-auto flex flex-col items-center gap-3">
          <h3 className="mt-58 font-bold text-2xl text-white text-shadow-lg/70">
            About Us
          </h3>
          <h2 className="font-medium text-2xl text-white text-shadow-lg/70">
            We're revolutionizing the way athletes and sports enthusiasts book
            their favorite stadiums and courts.
          </h2>
          <h2 className="font-medium text-2xl text-white text-shadow-lg/70">
            Join thousands who trust us to power their game.
          </h2>
        </div>
      </div>
      
        <div className="container mx-auto flex flex-col items-center mt-12 mb-9">
          <h2 className="text-black dark:text-white font-bold text-2xl mb-4">
            How It Works
          </h2>
          <p className="text-lg text-gray-600 dark:text-gray-300">
            Book your perfect stadium in three simple steps
          </p>
        </div>
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 px-4 py-8 md:w-[900px] md:h-[400px]">
          {steps.map((steps, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center bg-white p-6 rounded-lg shadow-md"
            >
              <div className="w-20 h-20 flex items-center justify-center rounded-full bg-blue-600 text-white text-3xl font-light mb-4">
                {steps.number}
              </div>
              <h3 className="text-xl font-semibold text-blue-900 mb-7">
                {steps.title}
              </h3>
              <p className="text-xl text-gray-500 dark:text-gray-600">
                {steps.description}
              </p>
            </div>
          ))}
        </div>
      </div>
      <div className="container mx-auto flex flex-col items-center mt-12 mb-9">
        <h2 className="text-black dark:text-white font-bold text-2xl mb-4">
          Why Choose StadiumBook
        </h2>
        <p className="text-lg text-gray-600 dark:text-gray-300">
          We make stadium booking simple, secure, and convenient
        </p>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-2 gap-6 px-20 py-10">
        {advans.map((advans, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-gray-50 p-6 rounded-lg shadow-md min-h-[220px] space-y-4"
          >
            <div className="text-3xl">{advans.icon}</div>
            <h3 className="text-xl font-semibold text-gray-900">
              {advans.title}
            </h3>
            <p className="text-lg text-gray-700 leading-relaxed">
              {advans.description}
            </p>
          </div>
        ))}
      </div>
      <div className="container mx-auto mt-14">
        <h5 className="text-black dark:text-white font-medium text-xl mb-4">
          Our Story
        </h5>
        <div className="flex flex-col gap-5">
          <p className="text-2xl text-gray-600 dark:text-gray-300 font-light">
            Founded in 2020, we started with a simple idea: booking a sports
            facility shouldn't be complicated. As athletes ourselves, we
            experienced the frustration of endless phone calls, uncertainty
            about availability, and missed opportunities to play.
          </p>
          <p className="text-2xl text-gray-700 dark:text-gray-200 font-light">
            Today, we've grown into the largest sports facility booking
            platform, partnering with hundreds of stadiums across the country.
            From basketball courts to soccer fields, tennis courts to volleyball
            arenas, we're making it easier than ever to get in the game.
          </p>
          <p className="text-2xl text-gray-700 dark:text-gray-200 font-light">
            Our platform combines cutting-edge technology with a deep
            understanding of what athletes need. Real-time availability, instant
            booking confirmation, and secure payments are just the beginning.
            We're constantly innovating to serve our community better.
          </p>
        </div>
      </div>
      <div className="container mx-auto grid md:grid-cols-2 sm:grid-cols-1 justify-between mt-20">
      <img className="h-[55dvh] rounded-2xl sm:mb-7" src={story1}/>
      <img className="h-[58dvh] rounded-2xl" src={story2}/>
      </div>
      <Footercomp />
    </>
  );
}
