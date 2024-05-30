import { useState } from "react";
import Htmllogo from '../assets/html.png';
import csslogo from '../assets/icons8-css-logo-48.png';

import jslogo from '../assets/javascript-logo.png';
import Pythonlogo from '../assets/python-logo.png';
import javalogo from '../assets/java.png';
import reactlogo from '../assets/react-logo-1.png';
import nodelogo from '../assets/icons8-nodejs-48.png';
import expresslogo from '../assets/icons8-express-js-64.png'
import Clogo from '../assets/C-logo.png';
import mongologo from '../assets/mongo-db-logo.png';
import mysqllogo from '../assets/mysql-logo.png';
import githublogo from '../assets/github-logo.png';
import tailwindlogo from '../assets/icons8-tailwind-css-48.png'
import materialogo from '../assets/icons8-material-ui-48.png'
import vercellogo from '../assets/vercel-logo.png'
import postmanlogo from '../assets/postman-icon.webp'
import excellogo from '../assets/icons8-microsoft-excel-48.png'
import tally from '../assets/tally.png'






const Skill = () => {

  const [showAll, setShowAll] = useState(false);


  const toggleShowAll = () => {
    setShowAll(!showAll);
  };

  
  const Skillsets = [
    { src: Clogo, name: "C" },
    { src: javalogo, name: "Java" },
    { src: Pythonlogo, name: "Python" },
    { src: Htmllogo, name: "HTML" },
    { src: csslogo, name: "CSS" },
    { src: jslogo, name: "Javascript" },
    { src: reactlogo, name: "React" },
    { src: nodelogo, name: "NodeJS" },
    { src: expresslogo, name: "ExpressJS" },
    { src: mysqllogo, name: "MYSQL" },
    { src: mongologo, name: "MongoDB" },
    { src: githublogo, name: "Github" },
    { src: postmanlogo, name: "Postman" },
    { src: tailwindlogo, name: "Tailwind CSS" },
    { src: materialogo, name: "Material UI" },
    { src: vercellogo, name: "Vercel" },
    { src: excellogo, name: "MS Exel" },
    { src: tally, name: "Tally" },
    
   
  ];

  
  const renderImages = showAll ? Skillsets : Skillsets.slice(0, 10);

  return (
    <div className=" pt-5 pb-1 pr-5 pl-5 ml-5 mr-5  lg:pt-20 lg:pb-20 lg:pr-40 lg:pl-40 lg:ml-20 lg:mr-20 text-center">
      <ul className="flex  flex-wrap justify-evenly lg:justify-around items-center gap-12 lg:gap-28">
        {renderImages.map((image, index) => (
          <div key={index} className="flex flex-col items-center transition-transform transform hover:scale-110">
            <li className="lg:border-none lg:rounded-lg bg-gray-800">
              <img src={image.src} alt="" className="lg:h-20 lg:w-20 h-12 w-12 " />
            </li>
            <div className="lg:mt-10 mt-5">
              <span className="text-white font-medium lg:text-xl ">
                {image.name}
              </span>
            </div>
          </div>
        ))}
      </ul>
      
      {Skillsets.length > 8 && (
        <button
          onClick={toggleShowAll}
          className="bg-gradient-to-t from-blue-500 to-cyan-500 text-white px-8 py-2 mt-16 lg:mb-12 mb-8 rounded lg:font-lg text-xl transition-transform transform hover:scale-110 ">
          {showAll ? "Show Less" : "View All"}
        </button>
      )}
    </div>
  );
};

export default Skill;
