import Component from "./component";
import Footercomp from "./footercomp";
import { useState } from "react";
import basket1 from "../assets/basket1.jpg";
import basket2 from "../assets/basket2.jpg";
import basket3 from "../assets/basket3.jpg";
import basket4 from "../assets/basket4.jpg";
import basket5 from "../assets/basket5.jpg";
import basket6 from "../assets/basket6.jpg";
import hand1 from "../assets/hand1.jpg";
import hand2 from "../assets/hand2.jpg";
import hand3 from "../assets/hand3.jpg";
import hand4 from "../assets/hand4.jpg";
import hand5 from "../assets/hand5.jpg";
import hand6 from "../assets/hand6.jpg";
export default function stadium() {
  const [basket, setBasket] = useState([
    {
      image: basket1,
      name: " Cairo Stadium Indoor Hall",
      details: "The arena is located in Nasr City, Cairo, and includes three full-size basketball courts and two training half-courts. It offers top-tier facilities such as locker rooms, showers, a media zone, and spectator seating for over 16,000 fans.",
      mapLink: "https://maps.app.goo.gl/hBRn5S3qndNJGpVa6",
      rate: "Hourly rate: EGP 350",
    },
    {
      image: basket2,
      name: " Alexandria Sporting Club Court",
      details: "The court is located in Smouha, Alexandria, and features two standard courts and one mini training court. It provides essential amenities including changing rooms, restrooms, and a shaded outdoor seating area.",
      mapLink: "https://maps.app.goo.gl/6E1NYE2zBKxMuvsq8",
      rate: " Hourly rate: EGP 250",
    },
    {
      image: basket3,
      name: "Gezira Sporting Club Basketball Arena",
      details: "The arena is located in Zamalek, Cairo, and includes one main court and two practice courts. It offers services such as locker rooms, a fitness zone, and a small café for players and guests.",
      mapLink: "https://maps.app.goo.gl/Yj2VPXwe6xN1T7eE7",
      rate: " Hourly rate: EGP 300",
    },
    {
      image: basket4,
      name: "Heliopolis Club Basketball Courts",
      details: "The courts are located in Heliopolis, Cairo, and feature two full-size courts and one junior court. Facilities include modern changing rooms, restrooms, and a viewing deck for families.",
      mapLink: "https://maps.app.goo.gl/2D7j3V1BHudT6hi9A",
      rate: " Hourly rate: EGP 200",
    },
    {
      image: basket5,
      name: " Al Ahly Club Basketball Complex",
      details: "The complex is located in El-Gezira, Cairo, and includes three professional courts and one warm-up court. It offers premium services like locker rooms, medical support, and a press area.",
      mapLink: "https://maps.app.goo.gl/zcZMuSwKwvQzSqCHA",
      rate: " Hourly rate: EGP 280",
    },
    {
      image: basket6,
      name: " Zamalek Club Indoor Court",
      details: "The court is located in Mohandessin, Giza, and features one indoor court and two outdoor courts. Amenities include player dressing rooms, showers, and a fan zone with seating and refreshments.",
      mapLink: "https://maps.app.goo.gl/JZMfXa5u8mLEhe1u5",
      rate: " Hourly rate: EGP 320",
    },
  ]);
  const [hand, setHand] = useState([
    {
      image: hand1,
      name: "New Capital Indoor Hall",
      details: "The hall is located in the New Administrative Capital, Cairo Governorate, and includes three professional handball courts and one junior court. Facilities include VIP lounges, locker rooms, restrooms, and advanced lighting systems.",
      mapLink: "https://maps.app.goo.gl/JgKJFSBpfDuCwGbU9",
      rate: " Hourly rate: EGP 350",
    },
    {
      image: hand2,
      name: "Borg El Arab Indoor Hall",
      details: "Located in Amreya, Alexandria Governorate, this venue features two full-size handball courts and two warm-up courts. It provides changing rooms, showers, a medical station, and a large parking area.",
      mapLink: "https://maps.app.goo.gl/HPnJAFdpWskLZtcAA",
      rate: " Hourly rate: EGP 280",
    },
    {
      image: hand3,
      name: "Covered Halls Complex – Cairo Stadium",
      details: "Situated in Nasr City, Cairo, this complex offers four indoor handball courts, including one main arena and three practice halls. It features press zones, locker rooms, restrooms, and seating for over 16,000 fans.",
      mapLink: "https://maps.app.goo.gl/9Ybx8xW8YSxRzXXe9",
      rate: " Hourly rate: EGP 300",
    },
    {
      image: hand4,
      name: "Dr. Hassan Moustafa Sports Hall",
      details: "The hall is located in 6th of October City, Giza Governorate, and includes two international-standard handball courts and one training court. It offers modern locker rooms, clean restrooms, a press area, and seating for over 5,000 spectators.",
      mapLink: "https://maps.app.goo.gl/VZ1MMFk4x95YdCACA",
      rate: " Hourly rate: EGP 250",
    },
    {
      image: hand5,
      name: "Petrojet Sports Complex",
      details: "Located in Faisal, Suez Governorate, this venue includes two handball courts and one training area. It offers basic changing rooms, restrooms, and outdoor seating for small events.",
      mapLink: "https://maps.app.goo.gl/goYdSeRwNYqGLUwN8",
      rate: " Hourly rate: EGP 220",
    },
    {
      image: hand6,
      name: "Ismailia Sports Stadium",
      details: "The stadium is located in Reda Street, Ismailia Governorate, and features two handball courts and one youth court. It includes locker rooms, restrooms, and a fan zone with shaded seating.",
      mapLink: "https://maps.app.goo.gl/8GaQtYWhWJJUu4SM7",
      rate: " Hourly rate: EGP 180",
    },
  ]);
  return (
    <>
      <Component />
      <div className="container mx-auto">
        <div className="container flex mx-auto justify-between items-center mt-20 mb-14 ">
          <div className="flex flex-col gap-3 text-black dark:text-white">
            <h3 className="font-medium text-2xl">
              Featured Basketball Stadiums
            </h3>
            <p className="font-light text-2xl text-gray-700 dark:text-gray-400">
              Top-rated venues in your area
            </p>
          </div>
          <div>
            <button className="flex cursor-pointer bg-white border-gray-200 border-2 text-black px-6 py-2 font-bold text-xl rounded-lg">
              View All
            </button>
          </div>
        </div>
        <div className="container mx-auto grid grid-cols-1 gap-6">
          {basket.map((basket, index) => (
            <div key={index} className="flex flex-col md:flex-row w-full max-w-5xl mx-auto text-white dark:text-black bg-black dark:bg-white rounded-xl shadow-lg overflow-hidden">
              {/* الصورة */}
              <img
                className="md:w-1/2 h-64 md:min-h-96 bg-cover bg-center"
                src={basket.image}
              />

              {/* المحتوى */}
              <div className="md:w-1/2 p-6 relative">
                {/* البادجات */}
                <div className="absolute top-4 left-4 flex gap-2">
                  <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    Plus
                  </span>
                  <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                    Verified
                  </span>
                </div>

                <h2 className="text-2xl font-bold text-white dark:text-gray-800 mb-3 mt-10 ">
                  {basket.name}
                </h2>
                <p className="text-sm text-gray-300 dark:text-gray-600 mb-4">
                  {basket.details}
                </p>
                <p className="flex gap-1 text-sm text-gray-300 dark:text-gray-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                >
                  <g fill="none">
                    <path
                      fill="#e6e6e6"
                      d="M12.01 12.44H9.33v-.03H7.64a1.856 1.856 0 0 1-1.857-1.759A1.856 1.856 0 0 1 4.35 8.88A1.86 1.86 0 0 1 3 7.09h9.01c1.48 0 2.68 1.2 2.68 2.68s-1.2 2.67-2.68 2.67"
                    />
                    <path
                      fill="#d3d3d3"
                      d="M9.492 7.09h-.016v1.516H5.174c-1.064 0-1.945-.651-2.132-1.516h-.037c0 .851.567 1.566 1.345 1.788a1.856 1.856 0 0 0 1.433 1.773A1.856 1.856 0 0 0 7.64 12.41h3.69v-.344H7.64a1.86 1.86 0 0 1-1.804-1.403q.181.036.374.037H9.9v-.344H6.21A1.856 1.856 0 0 1 4.39 8.89q.227.06.474.06h4.627z"
                    />
                    <path
                      fill="#008463"
                      d="M29.24 14.4L16.46 27.18c-.68.68-1.79.68-2.47 0L12 25.19a1.75 1.75 0 0 1 0-2.47L24.79 9.95a1.75 1.75 0 0 1 2.47 0l1.99 1.99c.67.67.67 1.78-.01 2.46"
                    />
                    <path
                      fill="#00f397"
                      d="M27.3 12.46L14.52 25.24c-.68.68-1.79.68-2.47 0l-7.49-7.49a1.75 1.75 0 0 1 0-2.47L17.35 2.51a1.75 1.75 0 0 1 2.47 0L27.3 10c.68.68.68 1.78 0 2.46"
                    />
                    <path
                      fill="#008463"
                      d="M17.809 4.289a1.19 1.19 0 0 1 1.674 0v.002l5.938 5.938a1.183 1.183 0 0 1-.01 1.672l-11.42 11.42a1.19 1.19 0 0 1-1.673 0l-.002-.002l-5.937-5.938a1.19 1.19 0 0 1 0-1.674h.002zm2.188-.52a1.923 1.923 0 0 0-2.706.002l-11.43 11.42l-.002.002a1.923 1.923 0 0 0 .002 2.706l5.94 5.94l.002.002a1.923 1.923 0 0 0 2.706-.002l11.42-11.42a1.914 1.914 0 0 0 .01-2.708l-5.94-5.94zm2.133 7.321a3.41 3.41 0 1 1-6.82 0a3.41 3.41 0 0 1 6.82 0"
                    />
                    <path
                      fill="#fff478"
                      d="m12.656 7.2l-3.118 3.12l11.886 11.886l3.118-3.118z"
                    />
                    <path
                      fill="#ffb02e"
                      d="m22.61 17.162l-3.12 3.118l1.938 1.938l3.118-3.119z"
                    />
                    <path
                      fill="#fff"
                      d="M9.65 14.647a.377.377 0 1 0-.54.527l.517.53c-.432.57-.466 1.13-.345 1.578a2 2 0 0 0 .388.744a1 1 0 0 0 .135.134q.057.048.159.116c.133.087.33.19.573.25c.513.125 1.173.038 1.83-.619c.24-.24.458-.347.64-.39a1 1 0 0 1 .511.017c.157.045.29.119.386.184c.072.049.135.11.177.186c.046.084.099.203.126.344c.05.262.024.647-.414 1.085c-.437.437-.823.461-1.088.41a1.2 1.2 0 0 1-.443-.188l-.02-.015l-.003-.002a.377.377 0 0 0-.479.584l.002.001l.005.004l.015.012l.046.034q.06.042.162.1c.135.075.33.163.57.21c.425.083.954.03 1.486-.37l.586.592a.377.377 0 0 0 .537-.53l-.59-.597c.394-.527.45-1.05.37-1.471a2 2 0 0 0-.207-.568a1.26 1.26 0 0 0-.415-.446a2.2 2.2 0 0 0-.598-.284a1.75 1.75 0 0 0-.895-.027c-.336.08-.675.265-1 .591c-.474.473-.864.481-1.118.42a1.1 1.1 0 0 1-.341-.15a.7.7 0 0 1-.198-.198a1.2 1.2 0 0 1-.166-.36c-.072-.266-.071-.661.396-1.128s.867-.472 1.142-.4a1.3 1.3 0 0 1 .49.255l.003.003a.378.378 0 0 0 .518-.549h-.001l-.002-.002l-.005-.005l-.014-.013l-.047-.04a2 2 0 0 0-.752-.38c-.448-.116-1.01-.082-1.577.345z"
                    />
                    <path
                      fill="#e6e6e6"
                      d="M20.08 23.74v-2.68c0-1.48 1.19-2.68 2.67-2.68s2.68 1.2 2.68 2.68v9.01c-.853 0-1.57-.57-1.79-1.35a1.856 1.856 0 0 1-1.771-1.433a1.856 1.856 0 0 1-1.759-1.857v-1.69z"
                    />
                    <path
                      fill="#d3d3d3"
                      d="M20.454 25.43c0 .872.595 1.601 1.403 1.804a2 2 0 0 1-.037-.374v-3.69h.344v3.69c0 .895.626 1.639 1.466 1.819q-.06-.227-.06-.474v-4.627h1.86v.016h-1.516v4.302c0 1.064.651 1.945 1.516 2.132v.037a1.86 1.86 0 0 1-1.788-1.345a1.856 1.856 0 0 1-1.773-1.433a1.856 1.856 0 0 1-1.759-1.857v-3.69h.344z"
                    />
                  </g>
                </svg>
                {basket.rate}
              </p>
                <button
                  className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-18"
                  onClick={() => window.open(basket.mapLink, "_blank")}
                >
                  Book it
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
      <div className="container flex mx-auto justify-between items-center mt-20 mb-12">
        <div className="flex flex-col gap-3 text-black dark:text-white">
          <h3 className="font-medium text-2xl">Featured Handball Stadiums</h3>
          <p className="font-light text-2xl text-gray-700 dark:text-gray-400">
            Top-rated venues in your area
          </p>
        </div>
        <div>
          <button className="flex cursor-pointer bg-white border-gray-200 border-2 text-black px-6 py-2 font-bold text-xl rounded-lg">
            View All
          </button>
        </div>
      </div>
      <div className="container mx-auto grid grid-cols-1 gap-6">
        {hand.map((hand, index) => (
          <div key={index} className="flex flex-col md:flex-row w-full max-w-5xl mx-auto text-white dark:text-black bg-black dark:bg-white rounded-xl shadow-lg overflow-hidden">
            {/* الصورة */}
            <img
              className="md:w-1/2 h-64 md:min-h-96  bg-cover bg-center"
              src={hand.image}
            />

            {/* المحتوى */}
            <div className="md:w-1/2 p-6 relative">
              {/* البادجات */}
              <div className="absolute top-4 left-4 flex gap-2">
                <span className="bg-blue-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  Plus
                </span>
                <span className="bg-green-600 text-white text-xs font-semibold px-2 py-1 rounded">
                  Verified
                </span>
              </div>

              <h2 className="text-2xl font-bold text-white dark:text-gray-800 mb-3 mt-10 ">
                {hand.name}
              </h2>
              <p className="text-sm text-gray-300 dark:text-gray-600 mb-4">
                {hand.details}
              </p>
              <p className="flex gap-1 text-sm text-gray-300 dark:text-gray-600 mb-4">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 32 32"
                >
                  <g fill="none">
                    <path
                      fill="#e6e6e6"
                      d="M12.01 12.44H9.33v-.03H7.64a1.856 1.856 0 0 1-1.857-1.759A1.856 1.856 0 0 1 4.35 8.88A1.86 1.86 0 0 1 3 7.09h9.01c1.48 0 2.68 1.2 2.68 2.68s-1.2 2.67-2.68 2.67"
                    />
                    <path
                      fill="#d3d3d3"
                      d="M9.492 7.09h-.016v1.516H5.174c-1.064 0-1.945-.651-2.132-1.516h-.037c0 .851.567 1.566 1.345 1.788a1.856 1.856 0 0 0 1.433 1.773A1.856 1.856 0 0 0 7.64 12.41h3.69v-.344H7.64a1.86 1.86 0 0 1-1.804-1.403q.181.036.374.037H9.9v-.344H6.21A1.856 1.856 0 0 1 4.39 8.89q.227.06.474.06h4.627z"
                    />
                    <path
                      fill="#008463"
                      d="M29.24 14.4L16.46 27.18c-.68.68-1.79.68-2.47 0L12 25.19a1.75 1.75 0 0 1 0-2.47L24.79 9.95a1.75 1.75 0 0 1 2.47 0l1.99 1.99c.67.67.67 1.78-.01 2.46"
                    />
                    <path
                      fill="#00f397"
                      d="M27.3 12.46L14.52 25.24c-.68.68-1.79.68-2.47 0l-7.49-7.49a1.75 1.75 0 0 1 0-2.47L17.35 2.51a1.75 1.75 0 0 1 2.47 0L27.3 10c.68.68.68 1.78 0 2.46"
                    />
                    <path
                      fill="#008463"
                      d="M17.809 4.289a1.19 1.19 0 0 1 1.674 0v.002l5.938 5.938a1.183 1.183 0 0 1-.01 1.672l-11.42 11.42a1.19 1.19 0 0 1-1.673 0l-.002-.002l-5.937-5.938a1.19 1.19 0 0 1 0-1.674h.002zm2.188-.52a1.923 1.923 0 0 0-2.706.002l-11.43 11.42l-.002.002a1.923 1.923 0 0 0 .002 2.706l5.94 5.94l.002.002a1.923 1.923 0 0 0 2.706-.002l11.42-11.42a1.914 1.914 0 0 0 .01-2.708l-5.94-5.94zm2.133 7.321a3.41 3.41 0 1 1-6.82 0a3.41 3.41 0 0 1 6.82 0"
                    />
                    <path
                      fill="#fff478"
                      d="m12.656 7.2l-3.118 3.12l11.886 11.886l3.118-3.118z"
                    />
                    <path
                      fill="#ffb02e"
                      d="m22.61 17.162l-3.12 3.118l1.938 1.938l3.118-3.119z"
                    />
                    <path
                      fill="#fff"
                      d="M9.65 14.647a.377.377 0 1 0-.54.527l.517.53c-.432.57-.466 1.13-.345 1.578a2 2 0 0 0 .388.744a1 1 0 0 0 .135.134q.057.048.159.116c.133.087.33.19.573.25c.513.125 1.173.038 1.83-.619c.24-.24.458-.347.64-.39a1 1 0 0 1 .511.017c.157.045.29.119.386.184c.072.049.135.11.177.186c.046.084.099.203.126.344c.05.262.024.647-.414 1.085c-.437.437-.823.461-1.088.41a1.2 1.2 0 0 1-.443-.188l-.02-.015l-.003-.002a.377.377 0 0 0-.479.584l.002.001l.005.004l.015.012l.046.034q.06.042.162.1c.135.075.33.163.57.21c.425.083.954.03 1.486-.37l.586.592a.377.377 0 0 0 .537-.53l-.59-.597c.394-.527.45-1.05.37-1.471a2 2 0 0 0-.207-.568a1.26 1.26 0 0 0-.415-.446a2.2 2.2 0 0 0-.598-.284a1.75 1.75 0 0 0-.895-.027c-.336.08-.675.265-1 .591c-.474.473-.864.481-1.118.42a1.1 1.1 0 0 1-.341-.15a.7.7 0 0 1-.198-.198a1.2 1.2 0 0 1-.166-.36c-.072-.266-.071-.661.396-1.128s.867-.472 1.142-.4a1.3 1.3 0 0 1 .49.255l.003.003a.378.378 0 0 0 .518-.549h-.001l-.002-.002l-.005-.005l-.014-.013l-.047-.04a2 2 0 0 0-.752-.38c-.448-.116-1.01-.082-1.577.345z"
                    />
                    <path
                      fill="#e6e6e6"
                      d="M20.08 23.74v-2.68c0-1.48 1.19-2.68 2.67-2.68s2.68 1.2 2.68 2.68v9.01c-.853 0-1.57-.57-1.79-1.35a1.856 1.856 0 0 1-1.771-1.433a1.856 1.856 0 0 1-1.759-1.857v-1.69z"
                    />
                    <path
                      fill="#d3d3d3"
                      d="M20.454 25.43c0 .872.595 1.601 1.403 1.804a2 2 0 0 1-.037-.374v-3.69h.344v3.69c0 .895.626 1.639 1.466 1.819q-.06-.227-.06-.474v-4.627h1.86v.016h-1.516v4.302c0 1.064.651 1.945 1.516 2.132v.037a1.86 1.86 0 0 1-1.788-1.345a1.856 1.856 0 0 1-1.773-1.433a1.856 1.856 0 0 1-1.759-1.857v-3.69h.344z"
                    />
                  </g>
                </svg>
                {hand.rate}
              </p>
              <button
                className="cursor-pointer bg-blue-600 text-white px-4 py-2 rounded hover:bg-blue-700 transition mt-18"
                onClick={() => window.open(hand.mapLink, "_blank")}
              >
                Book it
              </button>
            </div>
          </div>
        ))}
      </div>
      <Footercomp />
    </>
  );
}
