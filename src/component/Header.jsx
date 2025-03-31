import React, { useState, useEffect } from 'react';
import img from '../assets/siman.jpg';
// import CVModal from './CVModal'; // Import the modal component

const Header = () => {
  const roles = ["Web Developer", "Freelancer", "Designer"];
  const [currentRole, setCurrentRole] = useState(roles[0]);
  const [isModalOpen, setIsModalOpen] = useState(false); 
 

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentRole((prevRole) => {
        const currentIndex = roles.indexOf(prevRole);
        const nextIndex = (currentIndex + 1) % roles.length;
        return roles[nextIndex];
      });
    }, 1000); 

    return () => clearInterval(interval); 
  }, [roles]);

  return (
    <header id="home" className="h-screen bg-cover bg-center flex items-center bg-gray-900 sm:pt-0 pt-96">
      <div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        {/* Left Side: Text Content */}
        <div className="text-center md:text-left md:w-1/2 animate-pulse">
          <p className="text-gray-200">
            <span className="bg-yellow-500 text-white px-4 py-2 rounded text-xl">Hello
              </span> I'm
          </p>
          <h1 className="text-5xl font-bold text-white mt-4">Sabirin</h1>
          <h2 className="text-2xl text-white mt-2 relative">
            <span className="text-transparent bg-clip-text bg-gradient-to-r
             from-yellow-500 to-yellow-500">
              <span className="animate-text-change">{currentRole}</span>
            </span>
          </h2>
          <p className="text-gray-200 mt-4 max-w-md">
            Welcome to my portfolio! I am Sabirin, a skilled Full Stack Developer specializing
            in the MERN stack (MongoDB, Express.js, React, Node.js), with additional expertise in PHP, MySQL, and Java.
            Proficient in building responsive, scalable web applications, I am passionate about solving
            complex problems and creating user-friendly websites.
          </p>
          <div className="flex space-x-4 mt-6 justify-center md:justify-start">
            <button className="bg-yellow-500 text-white px-6 py-2 rounded
             hover:bg-yellow-500">
              Say Hello
            </button>
            <button
              // onClick={() => setIsModalOpen(true)}
              className="flex items-center text-white hover:text-yellow-500"
            >
              <div className="bg-yellow-500 w-12 h-12 rounded-full
               flex items-center justify-center hover:bg-[#624d1d] transition duration-300">
                <i className="ri-play-fill">CV</i>
              </div>
              <span className="ml-2 text-white">Upload My CV</span>
            </button>
          </div>
        </div>

        {/* Right Side: Image */}
        <div className="md:w-1/2 mt-8 md:mt-0 flex justify-center md:justify-end">
          <img
            src={img} 
            alt="Profile"
            className="rounded-lg shadow-2xl hover:shadow-3xl transition-shadow
             duration-300 border-4 border-yellow-500 w-full max-w-96 h-96 animate-pulse"
            style={{
              boxShadow: '0 0 20px rgba(255, 165, 0, 0.6), 0 0 40px rgba(255, 165, 0, 0.4)',
              filter: 'brightness(1.1)',
            }}
          />
        </div>
      </div>

      {/* CV Modal */}
      {/* <CVModal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)} /> */}
    </header>
  );
};

export default Header;