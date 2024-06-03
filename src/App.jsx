import { useState, useEffect } from "react";
import "./App.css";
import github from "./assets/github-light.svg";
import insta from "./assets/instagram.svg";
import ln from "./assets/linkedin.svg";
import portfolio from "./assets/Abhijit-bg.png";
import SkillSection from "./components/skillSection";
import Contacts from "./components/Contact";
import { Link } from "react-scroll";
import Projects from "./components/Projects";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { Typewriter, Cursor } from "react-simple-typewriter";

function App() {
  return (
    <>
      <div className=" scroll-smooth">
        {/* ****************************************Nav Section ********************************** */}
        <div className="scroll-smooth w-[100%] fixed flex  justify-between items-center bg-gray-800 p-8 px-16 shadow-2xl t-0 l-0 r-0 lg:mb-25 z-50 mb-10 lg:pr-20 pr-5 pl-10 lg:pl-20">
          <div className=" text-white text-xl lg:text-3xl font-black">
            Abhijit
            <span className=" gradiant-text "> Chakraborty</span>
          </div>
          <div className="hidden sm:block">
            <ul className="flex justify-around gap-6 lg:gap-16">
              <li
                className={`text-white font-semibold text-xl box p-2 rounded-md hover:cursor-pointer `}
              >
                <Link
                  to="Home"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Home
                </Link>
              </li>
              <li
                className={`text-white font-semibold text-xl box p-2 rounded-md hover:cursor-pointer `}
              >
                <Link
                  to="Skills"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Skills
                </Link>
              </li>

              <li
                className={`text-white font-semibold text-xl box p-2 rounded-md hover:cursor-pointer `}
              >
                <Link
                  to="Projects"
                  spy={true}
                  smooth={true}
                  offset={-150}
                  duration={500}
                >
                  Projects
                </Link>
              </li>
              <li
                className={`text-white font-semibold text-xl box p-2 rounded-md hover:cursor-pointer`}
              >
                <Link
                  to="Contact"
                  spy={true}
                  smooth={true}
                  offset={-100}
                  duration={500}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </div>
          <div className="display:block">
            <a
              href="https://drive.google.com/file/d/1c-0UP4pBbntcjOXRx-jMLvq_wtR2MgzD/view?usp=sharing"
              className="bg-gradient-to-t from-blue-500 to-cyan-500 text-sm rounded-lg text-white lg:px-6 lg:py-2 hover:bg-blue-700 px-2 py-2  hover:cursor-pointer transition-transform transform hover:scale-110"
            >
              Resume
            </a>
          </div>
        </div>
        {/* **************Banner Section ***************** */}

        <div className="hidden md:block">
          <div
            id="Home"
            className=" scroll-smooth relative flex  pt-36 lg:pt-36  px-8 lg:px-16  justify-evenly  bg-gray-700 lg:h-[100vh] h-auto "
          >
            <div className="text-white flex-1 mr-5">
              <div className="">
                <p className="text-3xl lg:text-5xl font-medium mt-2">I am </p>
                <h1 className="text-5xl font-bold pl-4 mb-6 lg:text-7xl  ">
                  Abhijit{" "}
                  <span className="gradiant-text lg:pl-2"> Chakraborty </span>
                </h1>

                <h1 className="text-2xl font-medium">
                  I'm a{" "}
                  <span className=" text-3xl font-bold gradiant-text">
                    <Typewriter
                      words={[" Fullstack Developer", "Freelancer"]}
                      loop={false}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                  <Cursor />
                </h1>

                <p className="text-xl lg:text-2xl font-normal lg:mt-3">
                  Committed to taking on tough challenges and bringing ideas to
                  life in a big way. With lots of creativity, innovation, and
                  hard work
                </p>
                <div className="lg:mt-3 lg:block flex lg:justify-center mb-5">
                  <button className="bg-gradient-to-t from-blue-500 to-cyan-500 rounded px-8 py-2 mt-2 text-white lg:text-xl hover:bg-gray-700 shadow-custom mr-8 ">
                    Explore
                  </button>
                  <button
                    type=""
                    className="bg-none border-[#4666ff] border-2 rounded px-8 py-2 mt-2 mr-8 text-white lg:text-xl shadow-custom hover:bg-gradient-to-t from-blue-500 to-cyan-500"
                  >
                    Hire Me
                  </button>
                </div>
                <div className="flex">
                  <a
                    href="https://www.linkedin.com/in/abhijit02"
                    className="bg-none  rounded p-2 mr-2 mb-4 text-white lg:text-xl shadow-custom hover:bg-gradient-to-t from-blue-500 to-cyan-500"
                  >
                    <img src={ln} className="w-5 mt-1" />
                  </a>
                  <a
                    href="https://github.com/Abhijit-2002"
                    className="bg-none  rounded p-2 mr-2 mb-4 text-white lg:text-xl shadow-custom hover:bg-gradient-to-t from-blue-500 to-cyan-500"
                  >
                    <img src={github} className="w-5 mt-1" />
                  </a>
                  <a
                    href=""
                    className="bg-none  rounded p-2 mr-2 mb-4 text-white lg:text-xl shadow-custom hover:bg-gradient-to-t from-blue-500 to-cyan-500"
                  >
                    <img src={insta} className="w-5 mt-1" />
                  </a>
                </div>
              </div>
            </div>
            <div className="text-white flex-1 mb-8 ml-5 hidden lg:block h-24">
              <img src={portfolio} alt="" className="" />
            </div>
          </div>
        </div>

        {/*************  For Small Screens ************** */}

        <div className="md:hidden"  style={{ display: 'none' }}>
          <div
            id="Home"
            className="scroll-smooth relative flex flex-col items-center pt-36 lg:pt-36 px-8 lg:px-16 bg-gray-700"
          >
            <img
              src={portfolio}
              alt=""
              className="mb-8 lg:hidden max-w-full h-auto"
            />{" "}
            {/* Image for small screens */}
            <div className="text-white flex-1 mr-5">
              <div className="">
                <p className="text-3xl lg:text-5xl font-medium mt-2">I am </p>
                <h1 className="text-5xl font-bold pl-4 mb-6 lg:text-7xl  ">
                  Abhijit{" "}
                  <span className="gradiant-text lg:pl-2"> Chakraborty </span>
                </h1>
                <h1 className="text-2xl font-medium">
                  I'm a{" "}
                  <span className=" text-3xl font-bold gradiant-text">
                    <Typewriter
                      words={[" Fullstack Developer", "Freelancer"]}
                      loop={false}
                      cursor
                      cursorStyle="_"
                      typeSpeed={70}
                      deleteSpeed={50}
                      delaySpeed={1000}
                    />
                  </span>
                  <Cursor />
                </h1>
                <p className="text-xl lg:text-2xl font-normal lg:mt-3">
                  Committed to taking on tough challenges and bringing ideas to
                  life in a big way. With lots of creativity, innovation, and
                  hard work
                </p>
                <div className="lg:mt-3 lg:block flex lg:justify-center mb-5">
                  <button className="bg-gradient-to-t from-blue-500 to-cyan-500 rounded px-8 py-2 mt-2 text-white lg:text-xl hover:bg-gray-700 shadow-custom mr-8 ">
                    Explore
                  </button>
                  <button
                    type=""
                    className="bg-none border-[#4666ff] border-2 rounded px-8 py-2 mt-2 mr-8 text-white lg:text-xl shadow-custom hover:bg-gradient-to-t from-blue-500 to-cyan-500"
                  >
                    Hire Me
                  </button>
                </div>
                <div className="flex">
                  <a
                    href="https://www.linkedin.com/in/abhijit02"
                    className="bg-none  rounded p-2 mr-2 mb-4 text-white lg:text-xl shadow-custom hover:bg-gradient-to-t from-blue-500 to-cyan-500"
                  >
                    <img src={ln} className="w-5 mt-1" alt="LinkedIn" />
                  </a>
                  <a
                    href="https://github.com/Abhijit-2002"
                    className="bg-none  rounded p-2 mr-2 mb-4 text-white lg:text-xl shadow-custom hover:bg-gradient-to-t from-blue-500 to-cyan-500"
                  >
                    <img src={github} className="w-5 mt-1" alt="GitHub" />
                  </a>
                  <a
                    href=""
                    className="bg-none  rounded p-2 mr-2 mb-4 text-white lg:text-xl shadow-custom hover:bg-gradient-to-t from-blue-500 to-cyan-500"
                  >
                    <img src={insta} className="w-5 mt-1" alt="Instagram" />
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Banner Section ends  */}

        {/* *****************Skills Section*************  */}

        <div
          className="scroll-smooth bg-gray-800   w-full overflow-hidden"
          id="Skills"
        >
          <div className=" text-xl lg:text-2xl font-small lg:font-medium text-white text-center lg:pt-4 pt-2 ">
            <h2 className=" font-bold lg:font-black lg:mt-6 mt-3 text-3xl lg:text-5xl">
              My <span className="gradiant-text ">Skills</span>
            </h2>
          </div>
          <SkillSection />
        </div>

        {/* *****************Skills Section ends*************  */}

        {/* *****************Projects Section *************  */}
        <div
          className="scroll-smooth bg-gray-800   w-full lg:h-[100vh] overflow-hidden"
          id="Projects"
        >
          <div className=" text-xl lg:text-2xl font-small lg:font-medium text-white text-center lg:pt-4 pt-2 ">
            <h2 className=" font-bold lg:font-black lg:mt-6 mt-3 text-3xl lg:text-5xl">
              My <span className="gradiant-text ">Projects</span>
            </h2>
          </div>
          <Projects />
        </div>

        {/* *****************Projects Section ends*************  */}
        {/* *****************Contacts Section *************  */}

        <div
          className="scroll-smooth bg-gray-800   w-full overflow-hidden"
          id="Contact"
        >
          <div className=" text-xl lg:text-2xl font-small lg:font-medium text-white text-center lg:pt-4 pt-2 ">
            <h2 className="gradiant-text font-bold lg:font-black lg:mt-6 mt-3 text-3xl lg:text-5xl">
              Contact Me
            </h2>
          </div>
          <Contacts />
        </div>

        {/* *****************contacts Section ends*************  */}

        {/* Footer Section  */}

        {/* <footer className="py-12 sm:py-16 bg-gray-700 sm:1 flex flex-col items-center ">
        <div className="px-6 mx-auto sm:px-8 lg:px-12 max-w-7xl">
          <div className="grid items-center grid-cols-1 gap-x-8 gap-y-10 md:grid-cols-3">
            <div className="md:order-1">
              <div className="text-white text-3xl font-black">
                Abhijit
                <span className="gradiant-text"> Chakraborty </span>
              </div>
            </div>
          </div>
           <div className="">
              <p className="px-2 text-white">Made with ❤ by Abhijit Chakraborty</p>
           </div>
          
          
        </div>
      </footer> */}

        <footer className="py-12 px-8 sm:py-16 bg-gray-700 flex items-center  justify-evenly">
          <div className="text-white text-3xl font-black hidden lg:block">
            Abhijit
            <span className="gradiant-text"> Chakraborty </span>
          </div>
          <div className=" items-center text-nowrap mx-auto">
            <p className=" text-white">Made with ❤ by Abhijit Chakraborty</p>
          </div>
          <div>
            <div className="contact-icons hidden md:flex  mt-4  ">
              <a
                href="https://www.linkedin.com/in/abhijit02"
                className=" p-1 mr-2 "
              >
                <img src={ln} alt="" />
              </a>
              <a href="https://github.com/Abhijit-2002" className="ml-2 p-1 ">
                <img src={github} className="w-7" />
              </a>
              <a href="" className="ml-4 p-1 ">
                <img src={insta} alt="" />
              </a>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
}

export default App;
