 import React from 'react';
 import img from '../assets/i1.jpg';
 import img1 from '../assets/i2.jpg';
 import img2 from '../assets/i4.jpg';

const Project = () => {
  return (
    <section id="project" className="bg-gray-800 py-20">
      <div className="container mx-auto px-4">
        <p className="text-gray-400 text-center">Portfolio</p>
        <h2 className="text-3xl font-bold text-center text-white mt-2"><span className="text-orange-500">Latest</span> Project</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-8">
          <div className="bg-gray-900 p-4 rounded-lg">
            <img src={img1} alt="project" className="rounded-lg" />
            <p className='text-orange-500 mt-4  text-3xl'>Rental House  </p>
            <h1 className=' text-white mt-2 text-xl'>The project is built with React js ,Tailwindcss ,Node 
              js and MongoDB</h1>   
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <img src={img} alt="project" className="rounded-lg" />
            <p className='text-orange-500 mt-4  text-3xl'>Himilo Qaran  </p>
            <h1 className=' text-white mt-2 text-xl'>This system utilizes Tailwind CSS, PHP, and MySQL 
             </h1>
          </div>
          <div className="bg-gray-900 p-4 rounded-lg">
            <img src={img2} alt="project" className="rounded-lg" />
            <p className='text-yellow-500 mt-4  text-3xl'>E_ Suuq  </p>
            <h1 className=' text-white mt-2 text-xl'>The project is built with React js and Tailwindcss 
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Project;