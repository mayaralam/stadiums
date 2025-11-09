import { useNavigate } from "react-router-dom";
export default function footercomp() {
  const navigate = useNavigate();
  return (
    <>
      <footer className="bg-white dark:bg-gray-900 text-black dark:text-white py-10 px-6 mt-12">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* StadiumBook */}
          <div>
            <h2 className="text-xl font-bold mb-2">StadiumBook</h2>
            <p className="text-sm text-gray-500 dark:text-gray-400 mb-4">
              Your trusted platform for booking sports stadiums and facilities.
            </p>
            <div className="flex space-x-3">
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                Facebook
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                Instagram
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                Twitter
              </a>
              <a
                href="#"
                className="text-gray-500 dark:text-gray-400 hover:text-black dark:hover:text-white"
              >
                LinkedIn
              </a>
            </div>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Company</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a className="cursor-pointer hover:text-black dark:hover:text-white"
                onClick={() => navigate("/about")}>
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black dark:hover:text-white">
                  Careers
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black dark:hover:text-white">
                  Press
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black dark:hover:text-white">
                  Blog
                </a>
              </li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold mb-3">Support</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-black dark:hover:text-white">
                  Help Center
                </a>
              </li>
              <li>
                <a
                  className="cursor-pointer hover:text-black dark:hover:text-white"
                  onClick={() => navigate("/contact")}
                >
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black dark:hover:text-white">
                  Safety
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black dark:hover:text-white">
                  Cancellation
                </a>
              </li>
            </ul>
          </div>

          {/* For Owners */}
          <div>
            <h3 className="text-lg font-semibold mb-3">For Owners</h3>
            <ul className="space-y-2 text-sm text-gray-500 dark:text-gray-400">
              <li>
                <a href="#" className="hover:text-black dark:hover:text-white">
                  List Your Stadium
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black dark:hover:text-white">
                  Owner Resources
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black dark:hover:text-white">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="hover:text-black dark:hover:text-white">
                  Pricing
                </a>
              </li>
            </ul>
          </div>
        </div>

        {/* Bottom Section */}
        <div className="border-t border-gray-700 mt-10 pt-6 text-sm text-gray-500 dark:text-gray-400 flex flex-col md:flex-row justify-between items-center">
          <p>© 2025 StadiumBook. All rights reserved.</p>
          <div className="flex space-x-4 mt-4 md:mt-0">
            <a href="#" className="hover:text-black dark:hover:text-white">
              Privacy Policy
            </a>
            <a href="#" className="hover:text-black dark:hover:text-white">
              Terms of Service
            </a>
            <a href="#" className="hover:text-black dark:hover:text-white">
              Cookie Policy
            </a>
          </div>
        </div>
      </footer>
    </>
  );
}
