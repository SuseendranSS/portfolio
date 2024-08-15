import React, { useState, useEffect, useRef } from 'react';

const projects = [
  {
    videoSrc: '/projects/django.mp4',
    title: 'Django Ecommerce',
    description: 'Developed a Django-based Ecommerce website with user account activation, seamless Razorpay integration,and secure online transactions.',
    visitLink: 'https://link-to-project1.com',
  },
  {
    videoSrc: '/projects/netflix.mp4',
    title: 'React-Netflix clone',
    description: 'Developed a Netflix clone using React.js, integrating with the TMDB API to replicate the Netflix user experience, with dynamic content fetching, movie trailers integration, and responsive design.',
    visitLink: 'https://link-to-project2.com',
  },
  {
    videoSrc: '/projects/ldp.mp4',
    title: 'Django Liver Disease Predictor',
    description: 'Developed a supervised machine learning model for the prediction of liver disease and integrated it with a Django web application.',
    visitLink: 'https://link-to-project3.com',
  },
];

export default function Footer() {
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

  useEffect(() => {
    const video = videoRef.current;
    if (video) {
      video.load();
      video.play().catch((error) => {
        console.error('Error playing the video:', error);
      });
    }
  }, [currentProjectIndex]);

  const { videoSrc, title, description, visitLink } = projects[currentProjectIndex];

  return (
    <div className='font-mono px-10 mb-20'>
      <div className='w-full mt-20'>
        <h2 className='text-center font-bold text-3xl mb-3' id='projects'>Projects</h2>
        <h6 className='text-customPurple text-center text-1xl mb-8'>Things I've built</h6>
        <div className='flex justify-center items-center'>
          <button onClick={prevProject} className='mr-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-customPurple">
              <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5l-7.5-7.5 7.5-7.5" />
            </svg>
          </button>
          <div className='flex flex-col md:flex-row items-center w-3/4'>
          <video
            ref={videoRef}
            className='w-full md:w-1/2 rounded-lg shadow-lg outline-none'
            autoPlay
            muted
            playsInline
          >
            <source src={videoSrc} type='video/mp4' />
            Your browser does not support the video tag.
          </video>

            <div className='md:ml-8 mt-4 md:mt-0 text-center md:text-left'>
              <h3 className='text-2xl font-bold mb-2'>{title}</h3>
              <p className='mb-4'>{description}</p>
              <a
                href={visitLink}
                target='_blank'
                rel='noopener noreferrer'
                className='bg-customPurple hover:hoverPurple text-white px-4 py-2 rounded'
              >
                Visit
              </a>
            </div>
          </div>
          <button onClick={nextProject} className='ml-4'>
            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="1.5" stroke="currentColor" className="w-10 h-10 text-customPurple">
              <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
            </svg>
          </button>
        </div>
        <div className='flex justify-center mt-4'>
          {projects.map((_, index) => (
            <div
              key={index}
              className={`h-2 w-2 rounded-full mx-1 ${
                index === currentProjectIndex ? 'bg-customPurple' : 'bg-dotPurple'
              }`}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
