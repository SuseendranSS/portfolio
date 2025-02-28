import React, { useEffect, useState } from 'react';

export default function Header() {
  const [scroll, setScroll] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 50) {
        setScroll(true);
      } else {
        setScroll(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div
      className="font-mono bg-gradient-to-t from-black via-black bg-no-repeat bg-fixed bg-cover bg-center"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/bg.jpg)`,
        color: '#fff',
      }}
    >
      <div className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${scroll ? 'bg-white text-black shadow-lg' : 'bg-transparent text-white'}`}>
        <div className={`flex justify-between items-center ${scroll ? 'p-3 md:p-5 md:pl-10' : 'p-4 md:p-10 md:pt-5'}`}>
          <a href="#about-me" className='text-base md:text-3xl'>Suseendran S S |</a>

          <div className='flex items-center'>
            <ul className={`my-auto md:ml-auto md:flex ${menuOpen ? 'absolute top-16 left-0 w-full bg-black bg-opacity-90 p-4 shadow-lg' : 'hidden'} md:static md:bg-transparent md:p-0 md:shadow-none md:block`}>
              <li className="md:flex py-2 md:py-0">
                <a href="/" className="text-sm md:text-base border px-3 border-transparent hover:text-customPurple rounded py-2 block">
                  Home
                </a>
              </li>
              <li className="md:flex py-2 md:py-0">
                <a href="#about-me" className="text-sm md:text-base border px-3 border-transparent hover:text-customPurple rounded py-2 block">
                  About
                </a>
              </li>
              <li className="md:flex py-2 md:py-0">
                <a href="#projects" className="text-sm md:text-base border px-3 border-transparent hover:text-customPurple rounded py-2 block">
                  Projects
                </a>
              </li>
              <li className="md:flex py-2 md:py-0">
                <a href="#contact" className="text-sm md:text-base border px-3 border-transparent hover:text-customPurple rounded py-2 block">
                  Contact
                </a>
              </li>
            </ul>
            
            <div className="md:hidden">
              <button
                className="text-2xl focus:outline-none"
                onClick={() => setMenuOpen(!menuOpen)}
              >
                {menuOpen ? (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M6 18L18 6M6 6l12 12"
                    ></path>
                  </svg>
                ) : (
                  <svg
                    className="w-6 h-6"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h16m-7 6h7"
                    ></path>
                  </svg>
                )}
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Modified the height classes for better appearance on mobile */}
      <div className="block relative h-[50vh] sm:h-[60vh] md:h-[90vh] md:min-h-[600px]">
        <div className="absolute inset-0 h-full w-full"></div>
        <div className="relative h-full w-full px-4 mx-auto">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full text-white pl-4 md:pl-10">
            <h4 className="font-medium text-base md:text-2xl lg:text-3xl mb-1 sm:mb-2 font-dosis mt-5 sm:mt-7 md:mt-0">
              Hello, I am
            </h4>
            <h1 className="font-bold text-xl sm:text-2xl md:text-4xl">Suseendran S S</h1>
            <h6 className="font-medium tracking-wide mt-1 sm:mt-2 mb-4 sm:mb-6 md:mb-10 text-sm sm:text-base md:text-2xl">
              Full Stack Developer | Software Developer
            </h6>
            <a href="/resume.pdf" download className='inline-block'>
              <button className="bg-downloadPurple hover:bg-downloadPurple2 text-white text-xs sm:text-sm md:text-base lg:text-lg font-bold py-2 px-4 md:py-3 md:px-6 lg:py-4 lg:px-8 rounded-full transition-all duration-300 transform hover:scale-105">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}