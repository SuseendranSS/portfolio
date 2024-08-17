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
      className="font-mono bg-gradient-to-t from-black via-black bg-no-repeat bg-fixed bg-auto md:bg-contain"
      style={{
        backgroundImage: `url(${process.env.PUBLIC_URL}/bg.jpg)`,
        color: '#fff',
      }}
    >
      <div className={`fixed top-0 left-0 w-full z-10 transition-all duration-300 ${scroll ? 'bg-white text-black shadow-lg' : 'bg-transparent text-white'}`}>
        <div className={`flex justify-between ${scroll ? 'p-5 pl-10' : 'p-10 pt-5'}`}>
          <a href="#about-me" className='text-lg md:text-3xl'>Suseendran S S |</a>

          <div className='flex'>
            <ul className={`my-auto md:ml-auto md:flex ${ menuOpen ? 'block' : 'hidden'} md:block`}>
              <li className="flex">
                <a href="/" className="text-1xl border px-3 border-transparent hover:text-customPurple rounded py-2">
                  Home
                </a>
              </li>
              <li className="flex">
                <a href="#about-me" className="text-1xl border px-3 border-transparent hover:text-customPurple rounded py-2">
                  About
                </a>
              </li>
              <li className="flex">
                <a href="#projects" className="text-1xl border px-3 border-transparent hover:text-customPurple rounded py-2">
                  Projects
                </a>
              </li>
              <li className="flex">
                <a href="#contact" className="text-1xl border px-3 border-transparent hover:text-customPurple rounded py-2">
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

      <div className="block relative h-[50vh] md:h-[90vh] md:min-h-[600px]">
        <div className="absolute inset-0 h-full w-full"></div>
        <div className="relative h-full w-full px-4 mx-auto">
          <div className="absolute left-0 top-1/2 transform -translate-y-1/2 w-full text-white pl-10">
            <h4 className="font-medium text-lg md:text-2xl lg:text-3xl mb-3 font-dosis mt-0">
              Hello, I am
            </h4>
            <h1 className="font-bold text-lg :text-4xl">Suseendran S S</h1>
            <h6 className="font-medium tracking-wide mt-3 mb-10 text-sm md:text-2xl">
              Full Stack Developer | Software Developer
            </h6>
            <a href="/resume.pdf" download className='h-14 w-56'>
              <button className="bg-downloadPurple hover:bg-downloadPurple2 text-white text-xs md:text-lg font-bold md:p-4 rounded-full">
                Download Resume
              </button>
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
