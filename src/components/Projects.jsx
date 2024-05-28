import React from "react";
import Slider from "react-slick";
import proj1 from "../assets/Projects/Chatapp.png";
import proj2 from "../assets/Projects/Ahar.png";
import proj3 from "../assets/Projects/Weathernow.png";
import proj4 from "../assets/Projects/Amazon-clone.png";
import proj5 from "../assets/Projects/Calculator.png";
import proj6 from "../assets/Projects/landing page-1.png";
import proj7 from "../assets/Projects/Landing page 2.png";

const Projects = () => {
  var settings = {
    dots: false,
    infinite: true,
    speed: 500,
    slidesToShow: 2,
    slidesToScroll: 1,
    initialSlide: 0,
    
    responsive: [
      {
        breakpoint: 1024,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          infinite: true,
          dots: true,
        },
      },
      {
        breakpoint: 600,
        settings: {
          slidesToShow: 2,
          slidesToScroll: 1,
          initialSlide: 2,
        },
      },
      {
        breakpoint: 480,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
        },
      },
    ],
  };


  const handleHover = (event) => {
    event.target.classList.toggle("blur-effect");
  };



//   return (
//     <div className="w-3/4 m-auto">
//       <div className="mt-10">
//         <Slider {...settings}>
//           {proj.map((d,index) => (
//             <div key={index} className=" bg-gray-900 h-[400px] sm:h-[80vh] text-white rounded-xl p-4 transition-transform transform hover:scale-105 ">
//               <div className="flex justify-center items-center">
//                 <img src={d.img} alt="" className=" h-[250px] w-full "    onMouseEnter={handleHover}
//                 onMouseLeave={handleHover} />
//               </div>
//               <div className="flex flex-col justify-center items-center gap-2 p-2">
//                 <p className="text-xl font-bold ">{d.name}</p>
//                 <p>{d.about}</p>
//                 <div className="flex gap-2 mt-4">
                  
//                   <a
//                     href=""
//                     className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-2 rounded-lg flex justify-center items-center text-center transition-colors duration-300"
//                     style={{ lineHeight: "2rem", minWidth: "4rem" }}
//                   >
//                     Github
//                   </a>
//                   <a
//                     href=""
//                     className="bg-blue-500 hover:bg-blue-700 text-white px-2 py-2 rounded-lg  text-center transition-colors duration-300"
//                     style={{ lineHeight: "2rem", minWidth: "4rem" }}
//                   >
//                     Check Demo
//                   </a>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </Slider>
//       </div>
//     </div>
//   );
// };

return (
  <div className="w-3/4 m-auto">
    <div className="mt-10">
      <Slider {...settings}>
        {proj.map((d, index) => (
          <a
            key={index}
            href="#"
            className="relative bg-gray-900  rounded-xl overflow-hidden w-1/3 sm:w-full sm:mx-auto block "
            style={{ minWidth: "400px" }} >
            <img
              src={d.img}
              alt=""
              className="w-full object-cover transition-transform duration-300 transform hover:scale-110  "
             
              onMouseEnter={handleHover}
              onMouseLeave={handleHover}
            />
            <div className="absolute inset-0 flex flex-col justify-center items-center gap-2 p-4 text-black font-bold bg-blue-100 bg-opacity-50 opacity-0 transition-opacity duration-300 hover:opacity-100">
              <p className="text-xl sm:text-2xl font-bold">{d.name}</p>
              <p className="text-s sm:text-lg">{d.about}</p>
              <div className="flex gap-2 mt-4">
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg flex justify-center items-center text-center transition-colors duration-300"
                >
                  Github
                </a>
                <a
                  href="#"
                  className="bg-blue-500 hover:bg-blue-700 text-white px-4 py-2 rounded-lg text-center transition-colors duration-300"
                >
                  Check Demo
                </a>
              </div>
            </div>
          </a>
        ))}
      </Slider>
    </div>
  </div>
);
};








const proj = [
  {
    name: "Chattr",
    img: proj1,
    about:
      "Real-time chat app powered by Socket.io for seamless communication, fortified with route protection for security",
  },
  {
    name: "Ahar Songroho",
    img: proj2,
    about:
      "Recipe search app with multi-cuisine options, filters for easy browsing, offering global culinary delights.",
  },
  {
    name: "Weather Now",
    img: proj3,
    about:
      "Dynamic weather app with real-time updates, detailed forecasts, and temperature-based backgrounds for immersive experience",
  },
  {
    name: "Amazon Clone",
    img: proj4,
    about:
      "Frontend clone of Amazon featuring slider function for intuitive browsing, mirroring the shopping giant's interface.",
  },
  {
    name: "Calculator",
    img: proj5,
    about:
      "JavaScript calculator with theme toggle button for customizable design, adding versatility to calculation experience.",
  },
  {
    name: "Animated landing Page",
    img: proj6,
    about:
      "Dynamic landing page with versatile animations, captivating visitors with engaging visual experiences and seamless transitions",
  },
  {
    name: "Developer Portfolio",
    img: proj7,
    about:
      "A developer's portfolio crafted with React.js, showcasing projects, skills, and achievements in an interactive interface",
  },
];

export default Projects;
