import React, { useState } from "react";
import { Transition } from "@headlessui/react"; // for smooth transition effect
import { Link } from "react-scroll";

function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  return (
    <div>
      {/*========================================================== 
                                Navbar start here
        =========================================================*/}
      <nav className="fixed z-20 bg-white w-full">
        <div className="w-full">
          <div className="flex items-center h-20 w-full">
            <div className="flex items-center sm:mx-10 md:mx-20 justify-between w-full">
              {/*========================================================== 
                                Logo section start here
            ========================================================*/}
              <div className="flex justify-center items-center flex-shrink-0 ml-10">
                <h1 className="font-bold text-xl cursor-pointer">
                  Noor <span className="text-indigo-800"> Mohammad</span>
                </h1>
              </div>
              {/*========================================================== 
                                Logo section end here
            ========================================================*/}
              {/*========================================================== 
                                Link section start here
               ==========================================================*/}
              <div className="hidden md:block">
                <div className="ml-10 flex items-baseline space-x-4">
                  <Link
                    activeClass="Home"
                    to="home"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:text-indigo-800 px-3 py-2 text-md"
                  >
                    Home
                  </Link>
                  <Link
                    activeClass="Services"
                    to="services"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:text-indigo-800 px-3 py-2 text-md"
                  >
                    Services
                  </Link>
                  <Link
                    activeClass="Projects"
                    to="projects"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:text-indigo-800 px-3 py-2 text-md"
                  >
                    Projects
                  </Link>
                  <Link
                    activeClass="Work"
                    to="work"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:text-indigo-800 px-3 py-2 text-md"
                  >
                    Work
                  </Link>
                  <Link
                    activeClass="Clients"
                    to="clients"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:text-indigo-800 px-3 py-2 text-md"
                  >
                    Clients
                  </Link>
                  <Link
                    activeClass="Contact"
                    to="contact"
                    smooth={true}
                    offset={50}
                    duration={500}
                    className="cursor-pointer hover:text-indigo-800 px-3 py-2 text-md"
                  >
                    Contact
                  </Link>
                </div>
              </div>
              {/*========================================================== 
                                Link section end here
               ==========================================================*/}
              {/*========================================================== 
                                Email section start here
               ==========================================================*/}
              <div className="flex justify-center items-center flex-shrink-0">
                <h1 className="font-semibold text-lg cursor-pointer hidden md:block">
                  Say<span className="text-indigo-800">hi</span>
                </h1>
              </div>
              {/*========================================================== 
                                Email section end here
               ==========================================================*/}
            </div>
            {/* ============ Small Screen icon Start here  =========== */}
            <div className="mr-14 flex md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                type="button"
                className="bg-indigo-600 inline-flex items-center justify-center p-2 rounded-md text-white hover:bg-indigo-900 focus:outline-none focus:ring-white"
                aria-controls="mobile-menu"
                aria-expanded="false"
              >
                <span className="sr-only">Open main menu</span>
                {/* Menu functionality will go here */}
                {!isOpen ? (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16M4 18h16"
                    />
                  </svg>
                ) : (
                  <svg
                    className="block h-6 w-6"
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    />
                  </svg>
                )}
              </button>
            </div>

            {/* ============ Small Screen icon End here  =========== */}
          </div>
        </div>
        {/* ============ Small Screen div Start here  =========== */}
        <Transition
          show={isOpen}
          enter="transition ease-out duration-100 transform"
          enterFrom="opacity-0 scale-95"
          enterTo="opacity-100 scale-100"
          leave="transition ease-in duration-75 transform"
          leaveFrom="opacity-100 scale-100"
          leaveTo="opacity-0 scale-95"
        >
          {(ref) => (
            <div className="md:hidden" id="mobile-menu">
              <div ref={ref} className="bg-white mx-4 mr-20 pt-4 space-y-1">
                <Link
                  href="/home"
                  activeClass="home"
                  to="home"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer bg-indigo-100 hover:bg-indigo-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Home
                </Link>
                <Link
                  href="/services"
                  activeClass="services"
                  to="services"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer bg-indigo-100 hover:bg-indigo-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Services
                </Link>
                <Link
                  href="/projects"
                  activeClass="projects"
                  to="projects"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer bg-indigo-100 hover:bg-indigo-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Projects
                </Link>
                <Link
                  href="/work"
                  activeClass="work"
                  to="work"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer bg-indigo-100 hover:bg-indigo-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Work
                </Link>
                <Link
                  href="/clients"
                  activeClass="clients"
                  to="clients"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer bg-indigo-100 hover:bg-indigo-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Clients
                </Link>
                <Link
                  href="/contact"
                  activeClass="contact"
                  to="contact"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer bg-indigo-100 hover:bg-indigo-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Contact
                </Link>
                <Link
                  href="/hi"
                  activeClass="hi"
                  to="hi"
                  smooth={true}
                  offset={50}
                  duration={500}
                  className="cursor-pointer bg-indigo-100 hover:bg-indigo-600 text-black hover:text-white block px-3 py-2 rounded-md text-base font-medium"
                >
                  Say hi
                </Link>
              </div>
            </div>
          )}
        </Transition>
        {/* ============ Small Screen div End here  =========== */}
      </nav>
      {/*========================================================== 
                                Navbar end here
        =========================================================*/}
    </div>
  );
}

export default Navbar;
