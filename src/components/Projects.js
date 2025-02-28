import React, { useState, useEffect, useRef } from 'react';

const projects = [
  {
    videoSrc: '/projects/django.mp4',
    title: 'Django Ecommerce',
    description: 'Developed a Django-based Ecommerce website with user account activation, seamless Razorpay integration, and secure online transactions.',
    visitLink: 'https://link-to-project1.com',
    image: '/projects/django-ecommerce.jpg', // For static image fallback
  },
  {
    videoSrc: '/projects/netflix.mp4',
    title: 'React-Netflix clone',
    description: 'Developed a Netflix clone using React.js, integrating with the TMDB API to replicate the Netflix user experience, with dynamic content fetching, movie trailers integration, and responsive design.',
    visitLink: 'https://link-to-project2.com',
    image: '/projects/netflix-clone.jpg', // For static image fallback
  },
  {
    videoSrc: '/projects/ldp.mp4',
    title: 'Django Liver Disease Predictor',
    description: 'Developed a supervised machine learning model for the prediction of liver disease and integrated it with a Django web application.',
    visitLink: 'https://link-to-project3.com',
    image: '/projects/liver-disease-predictor.jpg', // For static image fallback
  },
];

export default function ProjectsSection() {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0);
  const videoRef = useRef(null);

  const nextProject = () => {
    setCurrentProjectIndex((prevIndex) => (prevIndex + 1) % projects.length);
  };

  const prevProject = () => {
    setCurrentProjectIndex(
      (prevIndex) => (prevIndex - 1 + projects.length) % projects.length
    );
  };

  // Create a ref for the mobile and desktop video elements
  const mobileVideoRef = useRef(null);
  
  // Update both video elements when the current project changes
  useEffect(() => {
    const video = videoRef.current;
    const mobileVideo = mobileVideoRef.current;
    
    const loadAndPlayVideo = (videoElement) => {
      if (videoElement) {
        videoElement.load();
        videoElement.play().catch((error) => {
          console.error('Error playing the video:', error);
        });
      }
    };
    
    loadAndPlayVideo(video);
    loadAndPlayVideo(mobileVideo);
  }, [currentProjectIndex]);

  const { videoSrc, title, description, visitLink } = projects[currentProjectIndex];

  return (
    <div className='font-mono px-4 sm:px-6 md:px-10 mb-8 sm:mb-12 md:mb-20'>
      <div className='w-full mt-10 sm:mt-16 md:mt-20'>
        <h2 className='text-center font-bold text-2xl sm:text-2xl md:text-3xl lg:text-4xl mb-2 md:mb-3' id='projects'>Projects</h2>
        <h6 className='text-customPurple text-center text-base sm:text-base md:text-lg lg:text-xl mb-4 md:mb-8'>Things I've built</h6>
        
        {/* Mobile Project Layout - Card Style */}
        <div className='block sm:hidden'>
          <div className='w-full max-w-sm mx-auto overflow-hidden rounded-lg shadow-lg'>
            <div className='relative'>
              <video
                ref={mobileVideoRef}
                className='w-full aspect-video object-cover'
                autoPlay
                muted
                playsInline
                key={`mobile-video-${currentProjectIndex}`} // Add a key that changes with the index
              >
                <source src={videoSrc} type='video/mp4' />
                Your browser does not support the video tag.
              </video>
              
              {/* Overlay Navigation Buttons */}
              <div className='absolute top-1/2 left-0 right-0 flex justify-between transform -translate-y-1/2 px-2'>
                <button 
                  onClick={prevProject}
                  aria-label="Previous project" 
                  className='bg-black bg-opacity-30 rounded-full p-1 focus:outline-none'
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5l-7.5-7.5 7.5-7.5" />
                  </svg>
                </button>
                <button 
                  onClick={nextProject}
                  aria-label="Next project" 
                  className='bg-black bg-opacity-30 rounded-full p-1 focus:outline-none'
                >
                  <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                  </svg>
                </button>
              </div>
            </div>
            
            <div className='p-4'>
              <h3 className='text-xl font-bold mb-2'>{title}</h3>
              <p className='text-sm mb-4 text-gray-700'>{description}</p>
              <div className='flex justify-between items-center'>
                <a
                  href={visitLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-customPurple hover:bg-purple-700 transition-colors duration-300 text-white px-3 py-1 sm:px-3 sm:py-2 md:px-4 md:py-2 rounded text-xs sm:text-sm'
                >
                  Visit
                </a>
                <div className='flex space-x-1'>
                  {projects.map((_, index) => (
                    <button
                      key={index}
                      onClick={() => setCurrentProjectIndex(index)}
                      aria-label={`Go to project ${index + 1}`}
                      className='focus:outline-none'
                    >
                      <div
                        className={`h-2 w-2 rounded-full ${
                          index === currentProjectIndex ? 'bg-customPurple' : 'bg-dotPurple'
                        } transition-colors duration-300`}
                      />
                    </button>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
        
        {/* Tablet and Desktop Layout - Matches the provided image */}
        <div className='hidden sm:block'>
          <div className='flex justify-center items-center'>
            {/* Navigation controls - repositioned for tablets */}
            <button 
              onClick={prevProject} 
              className='mr-4 focus:outline-none hidden md:block'
              aria-label="Previous project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 lg:w-10 lg:h-10 text-customPurple">
                <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5l-7.5-7.5 7.5-7.5" />
              </svg>
            </button>
            
            <div className='flex flex-col md:flex-row items-center w-3/4 relative'>
              {/* Remove the tablet-specific navigation overlay since we'll use a different approach */}
              
              <div className="relative w-full">
                <video
                  ref={videoRef}
                  className='w-full md:w-full rounded-lg shadow-lg outline-none aspect-video object-cover'
                  autoPlay
                  muted
                  playsInline
                  key={`desktop-video-${currentProjectIndex}`}
                >
                  <source src={videoSrc} type='video/mp4' />
                  Your browser does not support the video tag.
                </video>
                
                {/* New navigation overlay for tablet view only */}
                <div className='hidden sm:flex md:hidden absolute inset-0 items-center justify-between px-4 z-10'>
                  <button 
                    onClick={prevProject}
                    aria-label="Previous project" 
                    className='bg-black bg-opacity-30 rounded-full p-1 focus:outline-none'
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5l-7.5-7.5 7.5-7.5" />
                    </svg>
                  </button>
                  <button 
                    onClick={nextProject}
                    aria-label="Next project" 
                    className='bg-black bg-opacity-30 rounded-full p-1 focus:outline-none'
                  >
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-6 h-6 text-white">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
                    </svg>
                  </button>
                </div>
              </div>

              <div className='md:ml-8 mt-4 md:mt-0 text-center md:text-left w-full md:w-auto'>
                <h3 className='text-xl sm:text-lg md:text-xl lg:text-2xl font-bold mb-2'>{title}</h3>
                <p className='text-sm sm:text-xs md:text-sm lg:text-base mb-4'>{description}</p>
                <a
                  href={visitLink}
                  target='_blank'
                  rel='noopener noreferrer'
                  className='bg-customPurple hover:bg-purple-700 transition-colors duration-300 text-white text-xs sm:text-sm md:text-base px-3 py-1 sm:px-3 sm:py-1 md:px-4 md:py-2 rounded'
                >
                  Visit
                </a>
              </div>
            </div>
            
            <button 
              onClick={nextProject} 
              className='ml-4 focus:outline-none hidden md:block'
              aria-label="Next project"
            >
              <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-8 h-8 lg:w-10 lg:h-10 text-customPurple">
                <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
              </svg>
            </button>
          </div>
          
          <div className='flex justify-center mt-4'>
            {projects.map((_, index) => (
              <button
                key={index}
                onClick={() => setCurrentProjectIndex(index)}
                aria-label={`Go to project ${index + 1}`}
                className='focus:outline-none mx-1 p-2' // Added padding for better touch target
              >
                <div
                  className={`h-2 w-2 md:h-3 md:w-3 rounded-full ${
                    index === currentProjectIndex ? 'bg-customPurple' : 'bg-dotPurple'
                  } transition-colors duration-300`}
                />
              </button>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}