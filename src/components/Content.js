import React, { useState } from 'react';

const certifications = [
  'certifications/java.jpg',
  'certifications/postman.jpg',
  'certifications/html.jpg',
  'certifications/css.jpg',
  'certifications/js.jpg',
  'certifications/sql.jpg'
];

export default function Content() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [activeSection, setActiveSection] = useState('skills');

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? certifications.length - 1 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === certifications.length - 1 ? 0 : prevIndex + 1));
  };

  const handleSectionClick = (section) => {
    setActiveSection(section);
  };

  return (
    <div className='font-mono px-10 flex flex-col items-center mb-10'>
      <div className='w-full max-w-[90%] my-10' id='about-me'>
        <h2 className='text-center font-bold text-3xl mb-3 text-shadow-custom-purple'>About Me</h2>
        <h6 className='text-customPurple text-center text-1xl mb-8'>Let Me Introduce Myself,</h6>
        <p className='text-justify text-xl'>
          I am Suseendran S S, and I completed my Bachelor's degree in Computer Science and Engineering from 
          Sri Ramakrishna Institute of Technology.I am a self-learner dedicated to improving myself to meet industry standards. 
          I love creating visually appealing and functional websites. I am a self-driven, quick-learning, enthusiastic programmer 
          with an inquisitive mind that loves learning about and experimenting with cutting-edge technology.
        </p>
      </div>

      <div className='my-10' id='education'>
      <h2 className='text-center font-bold text-3xl mb-3'>Education</h2>
      <h6 className='text-customPurple text-center text-1xl mb-8'>My Academic Journey So far</h6>

      {/* Timeline section */}
      <div className="max-w-7xl mx-auto w-full grid grid-cols-9 px-2">
        {/* Stack 1 */}
        <div className="col-span-4 w-full h-full">
          <div className="w-full h-full shadow-custom-purple rounded-md p-2 md:pl-4">
            <h1 className="text-black text-xl font-medium pt-2">SSLC</h1>
            <h1 className="text-black text-xl font-medium py-2">2018</h1>
            <p className="text-gray-700 sm:text-sm text-xs">Theni Kammavar Sangam Matric Higher Secondary School, Theni.</p>
          </div>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-customPurple"></div>
          <div className="absolute w-6 h-6 rounded-full bg-customPurple z-10"></div>
        </div>
        <div className="col-span-4 w-full h-full"></div>

        {/* Stack 2 */}
        <div className="col-span-4 w-full h-full"></div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-customPurple"></div>
          <div className="absolute w-6 h-6 rounded-full bg-customPurple z-10"></div>
        </div>
        <div className="col-span-4 w-full h-full">
          <div className="w-full h-full shadow-custom-purple rounded-md p-2 md:pl-4">
            <h1 className="text-black text-xl font-medium pt-2">Higher Secondary</h1>
            <h1 className="text-black text-xl font-medium py-2">2020</h1>
            <p className="text-gray-700 sm:text-sm text-xs">Veveaham Matric Higher Secondary School, Dharapuram</p>
          </div>
        </div>

        {/* Stack 3 */}
        <div className="col-span-4 w-full h-full">
          <div className="w-full h-full shadow-custom-purple rounded-md p-2 md:pl-4">
            <h1 className="text-black text-xl font-medium pt-2">Under Graduation</h1>
            <h1 className="text-black text-xl font-medium pt-2">2020 to 2024</h1>
            <p className="text-gray-700 py-2 sm:text-sm text-xs">B.E Computer Sience and Engineering</p>
            <p className="text-gray-700 sm:text-sm text-xs">Sri ramakrishna Institute of Technology, coimbatore</p>
          </div>
        </div>
        <div className="relative col-span-1 w-full h-full flex justify-center items-center">
          <div className="h-full w-1 bg-customPurple"></div>
          <div className="absolute w-6 h-6 rounded-full bg-customPurple z-10"></div>
        </div>
        <div className="col-span-4 w-full h-full"></div>
      </div>
    </div>

      <div className="flex flex-col items-center w-full my-10" id = 'skills'>
        <div className="relative flex justify-center items-center mb-10 w-full">
          <h2
            onClick={() => handleSectionClick('skills')}
            className={`cursor-pointer font-bold text-2xl mx-4 pb-2 ${activeSection === 'skills' ? 'border-b-4 border-black' : 'text-gray-500'}`}
          >
            Skills
          </h2>

          <h2
            onClick={() => handleSectionClick('certifications')}
            className={`cursor-pointer font-bold text-2xl mx-4 pb-2 ${activeSection === 'certifications' ? 'border-b-4 border-black' : 'text-gray-500'}`}
          >
            Certifications
          </h2>
        </div>

        {activeSection === 'skills' && (
          <div>
            <h6 className='text-customPurple text-center text-1xl mb-8'>Here are some skills that I'm familiar with</h6>
            <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-6 max-w-screen-lg">
            <img src='skills/c.png' alt='C' className='w-20 h-20 mx-4' />
            <img src='skills/cpp.png' alt='C++' className='w-20 h-20 mx-4' />
            <img src='skills/java.png' alt='Java' className='w-20 h-20 mx-4' />
            <img src='skills/python.png' alt='Python' className='w-20 h-20 mx-4' />
            <img src='skills/html.png' alt='HTML' className='w-20 h-20 mx-4' />
            <img src='skills/css.png' alt='CSS' className='w-20 h-20 mx-4' />
            <img src='skills/js.png' alt='JavaScript' className='w-20 h-20 mx-4' />
            <img src='skills/django.jpg' alt='Django' className='w-20 h-20 mx-4' />
            <img src='skills/react.png' alt='React' className='w-20 h-20 mx-4' />
            <img src='skills/tailwind.png' alt='Tailwind' className='w-20 h-20 mx-4' />
            <img src='skills/mysql.png' alt='MySQL' className='w-20 h-20 mx-4' />
            <img src='skills/postman.png' alt='Postman' className='w-20 h-20 mx-4' />
          </div>
          </div>
        )}

        {activeSection === 'certifications' && (
          <div>
            <h6 className='text-customPurple text-center text-1xl mb-8'>Some certifications that I've done</h6>
            <div className="w-full max-w-screen-lg flex flex-col items-center mb-4">
            <img src={certifications[currentIndex]} alt='Certification' className='w-full max-w-md h-auto mb-4' />
            <div className='flex space-x-4'>
              <button onClick={handlePrev} className='flex items-center space-x-1 bg-gray-200 px-4 py-2 rounded'>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5l-7.5-7.5 7.5-7.5" />
                </svg>
                <span>Prev</span>
              </button>
              <button onClick={handleNext} className='flex items-center space-x-1 bg-gray-200 px-4 py-2 rounded'>
                <span>Next</span>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6">
                  <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                </svg>
              </button>
            </div>
          </div>
          </div>
        )}
        
      </div>
    </div>
  );
}
