import React from 'react';
import img from '../assets/siman.jpg';
const About = () => {
  return (
    <section id="about" className="bg-gray-800 sm:pt-0 pt-80">
      <div className="container mx-auto px-4">
        <h2 className="text-3xl font-bold text-center text-white">About
           <span className="text-yellow-500">Me</span></h2>
        <p className="text-gray-400 text-center mt-2"> Developer!</p>
        <div className="flex flex-col md:flex-row items-center mt-8">
          <div className="md:w-1/2">
            <img src={img} alt="about" className="rounded-lg shadow-2xl hover:shadow-3xl transition-shadow duration-300
     border-4 border-yellow-500 w-full max-w-96 h-96 animate-pulse mt-[-80px]
            "
            style={{
                boxShadow: '0 0 20px rgba(255, 165, 0, 0.6), 0 0 40px rgba(255, 165, 0, 0.4)',
                filter: 'brightness(1.1)',
              }} />
          </div>
          <div className="md:w-1/2 mt-8 md:mt-0 md:ml-8">
            <p className="text-gray-200">
            As a Web Developer, I specialize in solving complex problems and 
            developing dynamic, responsive websites, particularly in the e-commerce 
            domain. My expertise includes designing and building user-friendly 
            interfaces, integrating secure, and optimizing website 
            performance to ensure a seamless shopping experience. I work closely with 
            clients and stakeholders
             to understand their business needs, 
            </p>
            <button className="bg-yellow-500 text-white px-6 py-2 rounded mt-4 
            hover:bg-[#624d1d] transition duration-300">More About</button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;