import { Link } from "react-router-dom";
import { TbCircleDottedLetterS } from "react-icons/tb";
import { useNavigate } from "react-router-dom";
export default function component() {
  const navigate = useNavigate();
  return (
    <>
      <div className="navbar bg-base-100 shadow-sm">
        <div className="navbar-start">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
            >
              <li>
                <Link to="/">Home</Link>
              </li>
              <li>
                <Link to="../stadium">Stadiums</Link>
              </li>
              <li>
                <Link to="../about">About Us</Link>
              </li>
              <li>
                <Link to="../contact">Contact Us</Link>
              </li>
            </ul>
          </div>
       <div className=" hidden lg:flex">
          <ul className="menu menu-horizontal px-1">
            <li>
              <Link to="/">Home</Link>
            </li>
            <li>
              <Link to="../stadium">Stadiums</Link>
            </li>
            <li>
              <Link to="../about">About Us</Link>
            </li>
            <li>
              <Link to="../contact">Contact Us</Link>
            </li>
          </ul>
          </div>
          </div>
      
        <div className="navbar-center">
          <div className="flex items-center">
            <TbCircleDottedLetterS className="text-blue-600 size-9" />
            <a className="btn btn-ghost text-xl">StadiumBook</a>
          </div>
        </div>
        <div className="navbar-end">
          <div className=" gap-2  hidden lg:flex">
            <input
              type="text"
              placeholder="Search"
              className="input input-bordered w-24 md:w-auto"
            />
            <div className="dropdown dropdown-end ">
              <div
                tabIndex={0}
                role="button"
                className="btn btn-ghost btn-circle avatar"
              ></div>
            </div>
          </div>
          <button
            onClick={() => navigate("/register")}
            className="  bg-black dark:bg-white text-white dark:text-black px-4 py-2 font-bold text-xl rounded-2xl cursor-pointer "
          >
            Sign In
          </button>
        </div>
      </div>
    </>
  );
}
