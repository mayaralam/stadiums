import Component from "./component";
import Footercomp from "./footercomp";
import us from "../assets/us.png";
import { useState } from "react";
import { MdLocalPhone } from "react-icons/md";
import { CiLocationOn } from "react-icons/ci";
import { MdOutlineMail } from "react-icons/md";
import toast from "react-hot-toast";
export default function contact() {
  const [card, setCard] = useState([
    {
      icon: <MdLocalPhone />,
      title: "Phone",
      details: "+1 (555) 123-4567",
      para: "Available during business hours",
    },
    {
      icon: <MdOutlineMail />,
      title: "Email",
      details: "bookings@stadiumhub.com",
      para: "We respond within 24 hours",
    },
    {
      icon: <CiLocationOn />,
      title: "Location",
      details: "123 Sports Complex Drive",
      para: "Downtown, CA 90210",
    },
  ]);
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    toast.success('Booking Confirmed!')
  };
  return (
    <>
      <Component />
      <div
        className=" bg-cover bg-center h-68"
        style={{ backgroundImage: `url(${us})` }}
      >
        <div className="container mx-auto items-center justify-center text-center text-white">
          <h1 className="mb-3 md:pt-33 pt-30 text-4xl font-medium text-shadow-lg/70">
            Contact Us
          </h1>
          <h3 className="text-2xl font-bold text-shadow-lg/70">
            Ready to book your stadium? Get in touch with our team and we'll
            help you find the perfect venue for your event.
          </h3>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 gap-6 p-6 rounded-lg shadow-lg mt-5">
        {card.map((card, index) => (
          <div
            key={index}
            className="flex flex-col items-start bg-gray-50 p-6 rounded-lg shadow-md min-h-[220px] space-y-4"
          >
            <div className="text-3xl bg-blue-100 text-blue-600 py-2 px-2 rounded-3xl">
              {card.icon}
            </div>
            <p className="text-lg text-gray-500 leading-relaxed">
              {card.title}
            </p>
            <h3 className="text-xl text-gray-900">{card.details}</h3>

            <p className="text-lg text-gray-500">{card.para}</p>
          </div>
        ))}
      </div>
      <div className="max-w-2xl mx-auto bg-white dark:bg-[#1d232a] mt-7 shadow-xl rounded-lg p-8 ">
        <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-1">
          Send Us a Message
        </h2>
        <p className="text-lg mb-6 text-gray-700 dark:text-gray-400">
          Fill out the form below and we'll get back to you as soon as possible
        </p>
        <form onSubmit={handleSubmit} className="space-y-4">
          <label className="font-medium">Full Name *</label>
          <input
            type="text"
            name="name"
            placeholder="Enter your name"
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <label className="font-medium">Email Address *</label>
          <input
            type="email"
            name="email"
            placeholder="your@email.com"
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2"
          />
          <label className="font-medium">Phone Number *</label>
          <input
            type="tel"
            name="phone"
            placeholder="+1 (555) 000-0000"
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2"
          />
          <label className="font-medium">Stadium Type *</label>
          <select
            name="stadiumType"
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2"
          >
            <option className="text-black" value="">Select stadium type</option>
            <option className="text-black" value="football">Football</option>
            <option className="text-black" value="basketball">Basketball</option>
            <option className="text-black" value="tennis">Handball</option>
          </select>
          <label className="font-medium">Preferred Date *</label>
          <input
            type="date"
            name="date"
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2"
          />
          <label className="font-medium">Preferred Time *</label>
          <input
            type="time"
            name="time"
            onChange={handleChange}
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2"
          />
          <label className="font-medium">Additional Information *</label>
          <textarea
            name="info"
            placeholder="Tell us about your event, number of participants, special requirements, etc."
            onChange={handleChange}
            rows={4}
            className="w-full border border-gray-300 dark:border-gray-700 rounded px-4 py-2 resize-none"
          />
          <button
            type="submit"
            className="cursor-pointer w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
          >
            Submit Inquiry
          </button>
        </form>
      </div>
      <div className="container max-w-5xl mx-auto bg-white shadow-lg rounded-lg p-6 mb-7 mt-10">
        <h2 className="flex gap-3 items-center text-xl font-bold text-gray-800 mb-4">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="24"
            height="24"
            viewBox="0 0 24 24"
          >
            <path
              fill="currentColor"
              d="M12,1A11,11,0,1,0,23,12,11,11,0,0,0,12,1Zm0,20a9,9,0,1,1,9-9A9,9,0,0,1,12,21Z"
            />
            <rect width="2" height="7" x="11" y="6" fill="currentColor" rx="1">
              <animateTransform
                attributeName="transform"
                dur="9s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
              />
            </rect>
            <rect width="2" height="9" x="11" y="11" fill="currentColor" rx="1">
              <animateTransform
                attributeName="transform"
                dur="0.75s"
                repeatCount="indefinite"
                type="rotate"
                values="0 12 12;360 12 12"
              />
            </rect>
          </svg>
          Operating Hours
        </h2>
        <ul className="space-y-2 text-gray-700">
          <li className="flex justify-between border-b pb-1">
            <span>Monday - Friday</span>
            <span>6:00 AM - 11:00 PM</span>
          </li>
          <li className="flex justify-between border-b pb-1">
            <span>Saturday</span>
            <span>7:00 AM - 12:00 AM</span>
          </li>
          <li className="flex justify-between">
            <span>Sunday</span>
            <span>8:00 AM - 10:00 PM</span>
          </li>
        </ul>
      </div>
      <div className="bg-blue-700">
        <div className=" text-white py-10 px-6 text-center rounded-lg ">
          <h2 className="text-2xl font-bold mb-4">
            Need Immediate Assistance?
          </h2>
          <p className="text-lg mb-6">
            Our booking specialists are available to help you choose the right
            stadium and answer any questions
          </p>
          <div className="flex flex-col sm:flex-row justify-center gap-4">
            <a
              href="tel:+15551234567"
              className="bg-white text-blue-600 font-semibold py-3 px-6 rounded-md hover:bg-blue-100 transition"
            >
              Call Now: +1 (555) 123-4567
            </a>
            <a
              href="mailto:booking@example.com"
              className="bg-blue-500 text-white font-semibold py-3 px-6 rounded-lg hover:bg-blue-800 transition"
            >
              Email Us
            </a>
          </div>
        </div>

        <Footercomp />
      </div>
    </>
  );
}
