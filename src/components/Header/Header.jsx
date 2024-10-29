import { useState } from "react";
import { NavLink } from "react-router-dom";
import logo from "/assets/images/logo-png-BXFOQKfc.png";
import astonaut from "/assets/images/astronaut-LQ_BQU63.png";
import { GoPlus } from "react-icons/go";
import { IoIosArrowDown } from "react-icons/io";
import { RxHamburgerMenu } from "react-icons/rx";
import { FaRegCheckSquare, FaWpforms } from "react-icons/fa";
import { IoBookOutline } from "react-icons/io5";
import { TbCards } from "react-icons/tb";
import { BsQuestionCircle } from "react-icons/bs";
import { CgPlayButtonR } from "react-icons/cg";
import { LiaExchangeAltSolid } from "react-icons/lia";
import { FiLoader } from "react-icons/fi";
import { RxRadiobutton, RxCross2 } from "react-icons/rx";
import { GiGearStickPattern } from "react-icons/gi";
import { CiBookmark } from "react-icons/ci";
import { FaDiscord } from "react-icons/fa";
import { RiTwitterXFill, RiInstagramFill, RiInputField } from "react-icons/ri";
import Canvas from "./Canvas";

const navLinks = [
  { to: "/all", icon: <IoBookOutline size={20} />, label: "All" },
  {
    to: "/checkboxes",
    icon: <FaRegCheckSquare size={20} />,
    label: "Checkboxes",
  },
  { to: "/cards", icon: <TbCards size={20} />, label: "Cards" },
  { to: "/inputs", icon: <RiInputField size={20} />, label: "Inputs" },
  { to: "/forms", icon: <FaWpforms size={20} />, label: "Forms" },
  {
    to: "/tooltips",
    icon: <BsQuestionCircle size={20} />,
    label: "Tooltips",
    badge: (
      <span className="absolute bg-red-600 text-white left-[150px] px-2 py-1 text-sm rounded">
        New
      </span>
    ),
  },
  { to: "/buttons", icon: <CgPlayButtonR size={20} />, label: "Buttons" },
  {
    to: "/toggle-switches",
    icon: <LiaExchangeAltSolid size={17} />,
    label: "Toggle Switches",
  },
  { to: "/loaders", icon: <FiLoader size={20} />, label: "Loaders" },
  {
    to: "/radio-buttons",
    icon: <RxRadiobutton size={20} />,
    label: "Radio buttons",
  },
  {
    to: "/patterns",
    icon: <GiGearStickPattern size={20} />,
    label: "Patterns",
  },
  {
    to: "/my-favorites",
    icon: <CiBookmark size={20} />,
    label: "My favorites",
  },
];

const categoryLinks = [
  { to: '/browse-all', label: 'Browse All' },
  { to: '/buttons', label: 'Buttons' },
  { to: '/checkboxes', label: 'Checkboxes' },
  { to: '/toggle-switches', label: 'Toggle switches' },
  { to: '/loaders', label: 'Loaders' },
  { to: '/inputs', label: 'Inputs' },
  { to: '/radio-buttons', label: 'Radio buttons' },
  { to: '/forms', label: 'Forms' },
  { to: '/patterns', label: 'Patterns' },
  { to: '/tooltips', label: 'Tooltips' },
  { to: '/my-favorites', label: 'My favorites' },
];

const Header = () => {
  const [isOpen, setIsOpen] = useState(true);
  const [isDropdownOpen, setIsDropdownOpen] = useState(true);
  const [timeoutId, setTimeoutId] = useState(null);

  const handleMouseEnter = () => {
    clearTimeout(timeoutId); // Clear any existing timeout
    setIsDropdownOpen(true);
  };

  const handleMouseLeave = () => {
    const id = setTimeout(() => {
      setIsDropdownOpen(false);
    }, 200); // Close after 3 seconds
    setTimeoutId(id);
  };

  return (
    <>
      <div className="bg-dark-700 bg-opacity-100 text-white">
        <div className="container">
          <div className="flex items-center justify-between">
            <div className="flex gap-6 items-center">
              <div className="logo max-w-[85px]">
                <img src={logo} alt="Logo" />
              </div>

              <div className="item1 hidden lg:flex gap-4 items-center text-base font-semibold font-sans">
                <div
                  className="relative"
                  onMouseEnter={handleMouseEnter}
                  onMouseLeave={handleMouseLeave}
                >
                  <NavLink
                    to="/elements"
                    className="inline-flex items-center gap-2 hover:bg-dark-600 p-3 rounded-lg"
                  >
                    Elements <IoIosArrowDown />
                  </NavLink>

                  {isDropdownOpen && (
                    <div className="absolute min-w-[600px] w-[780px] mt-2 bg-dark-700 bg-opacity-100 text-white shadow-lg rounded-lg p-6 border border-white/25  top-11">
                      <div className="grid grid-cols-3 gap-4  ">
                        <div className="grid grid-rows-6 grid-flow-col col-span-2 gap-2">
                          {navLinks.map((item, index) => (
                            <NavLink
                              key={index}
                              to={item.to}
                              className="flex items-center gap-4 bg-dark-500 hover:bg-dark-600 p-3 rounded-md transition duration-300 cursor-pointer"
                            >
                              <span>{item.icon}</span>
                              <span>{item.label}</span>
                              {item.badge && item.badge}
                            </NavLink>
                          ))}
                        </div>

                        <div className="flex flex-col justify-center items-center bg-[#d94ef0]">
                          <img
                            src={astonaut}
                            className="w-28 drop-shadowimg"
                            alt="Astonaut"
                          />
                          <div className="text-center">
                            <h2 className="text-2xl font-bold">
                              We&apos;re on Social Media!
                            </h2>
                            <p className="text-sm">
                              Follow us to find out about new challenges,
                              updates and posts.
                            </p>
                            <div className="inline-flex gap-3">
                              <span>
                                <FaDiscord size={20} />
                              </span>
                              <span>
                                <RiTwitterXFill size={20} />
                              </span>
                              <span>
                                <RiInstagramFill size={20} />
                              </span>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  )}
                </div>

                <NavLink
                  to="/challenges"
                  className="hover:bg-dark-600 p-3 rounded-lg"
                >
                  Challenges
                </NavLink>
                <NavLink
                  to="/spotlight"
                  className="hover:bg-dark-600 p-3 rounded-lg"
                >
                  Spotlight
                </NavLink>
                <NavLink
                  to="/blog"
                  className="hover:bg-dark-600 p-3 rounded-lg"
                >
                  Blog
                </NavLink>
              </div>
            </div>

            <div className="item2 hidden lg:flex gap-4 items-center">
              <div className="inline-flex items-center gap-2 rounded-lg bg-gradient-to-r from-purple-600 to-blue-600 h-[46px] px-6 py-0 text-sm font-medium">
                <span>
                  <GoPlus size={20} />
                </span>
                <button className="inline-flex items-center">Create</button>
              </div>
              <div className="font-semibold font-sans text-base">
                <button className="bg-dark-500 hover:bg-dark-600 px-4 py-2 rounded-lg">
                  Sign In or Create Account
                </button>
              </div>
            </div>
            <div className="block lg:hidden ">
              {!isOpen ? (
                <button>
                  <RxHamburgerMenu size={20} onClick={() => setIsOpen(true)} />
                </button>
              ) : (
                <button>
                  <RxCross2 size={20} onClick={() => setIsOpen(false)} />
                </button>
              )}
            </div>
          </div>
        </div>
      </div>
      <Canvas isOpen={isOpen}>
        <div className="flex flex-col lg:hidden bg-dark-700 text-white h-screen px-4 gap-3 font-sans font-semibold">
          <div>
            <details open>
              <summary className="flex items-center justify-between py-2 rounded-lg  ">
                <span>Category</span>
                <span>
                  <IoIosArrowDown />
                </span>
              </summary>
              <div className="px-4 py-2 text-gray-400">
              {categoryLinks.map(( item, index ) => (
              <NavLink key={index} to={item.to} className="block py-1" onClick={() => setIsOpen(false)}>
                {item.label}
              </NavLink>
            ))}
              </div>
            </details>
          </div>
          <NavLink to="/challenges" className="text-gray-400" onClick={() => setIsOpen(false)}>
            Challenges
          </NavLink>
          <NavLink to="/spotlight" className="text-gray-400" onClick={() => setIsOpen(false)}>
            Spotlight
          </NavLink>
          <NavLink to="/blog" className="text-gray-400" onClick={() => setIsOpen(false)}>
            Blog
          </NavLink>
          <div className=" pt-4 pb-3 border-t border-dark-500 w-screen"></div>
          <button className="bg-dark-500 text-white text-left border-dark-700 hover:bg-dark-600 px-4 py-2 rounded-lg">
            Sign In or Create Account
          </button>
        </div>
      </Canvas>
    </>
  );
};

export default Header;
