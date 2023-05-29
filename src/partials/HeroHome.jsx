import React, { useState } from 'react';
import Modal from '../utils/Modal';

import HeroImage from '../images/hero-image.jpg';

function HeroHome() {

  const [videoModalOpen, setVideoModalOpen] = useState(false);

  return (
    <section className="relative">

      {/* Illustration behind hero content */}
      <div className="absolute left-1/2 transform -translate-x-1/2 bottom-0 pointer-events-none" aria-hidden="true">
        <svg width="1360" height="578" viewBox="0 0 1360 578" xmlns="http://www.w3.org/2000/svg">
          <defs>
            <linearGradient x1="50%" y1="0%" x2="50%" y2="100%" id="illustration-01">
              <stop stopColor="#FFF" offset="0%" />
              <stop stopColor="#EAEAEA" offset="77.402%" />
              <stop stopColor="#DFDFDF" offset="100%" />
            </linearGradient>
          </defs>
          <g fill="url(#illustration-01)" fillRule="evenodd">
            <circle cx="1232" cy="128" r="128" />
            <circle cx="155" cy="443" r="64" />
          </g>
        </svg>
      </div>

      <div className="max-w-6xl mx-auto px-4 sm:px-6">

        {/* Hero content */}
        <div className="pt-32 pb-12 md:pt-40 md:pb-20">

          {/* Section header */}
          <div className="text-center pb-12 md:pb-16">
            <h1 className="text-5xl md:text-6xl font-extrabold leading-tighter tracking-tighter mb-4" data-aos="zoom-y-out">Light Sleep<br/></h1>
            
            <h2 className="md:text-5xl font-extrabold leading-tighter tracking-tighter mb-4"><span className="bg-clip-text text-transparent bg-gradient-to-r from-blue-500 to-teal-400">Relax, Hypnosis, Sleep</span></h2>
            
            <div className="max-w-3xl mx-auto">
              <p className="text-xl text-gray-600 mb-8" data-aos="zoom-y-out" data-aos-delay="150">Light Sleep app is an exquisite food white noise application. It provides a collection of various white noise effects such as food chewing, cooking, kitchen, etc., making you feel like you are in the world of food and enjoy an auditory feast.</p>
              <div className="max-w-xs mx-auto sm:max-w-none sm:flex sm:justify-center" data-aos="zoom-y-out" data-aos-delay="300">
                <div>
                  <a className="btn text-white bg-blue-600 hover:bg-blue-700 w-full mb-4 sm:w-auto sm:mb-0" href="https://apps.apple.com/app/id6449638248">Apple Store</a>
                </div>

                <div>
                  <a className="btn text-white bg-green-800 hover:bg-green-700 w-full mb-4 sm:w-auto sm:ml-4" href="https://play.google.com/store/apps/details?id=com.yugakhan.lightsleep">Google Play</a>
                </div>

                <div>
                  <a className="btn text-white bg-gray-900 hover:bg-gray-800 w-full mb-4 sm:w-auto sm:ml-4" href="https://yugakhan.github.io/LightSleep/assets/app-release.apk">APK Install</a>
                </div>
              </div>
            </div>
          </div>

          {/* Hero image */}
          <div>
            <div className="relative flex justify-center mb-8" data-aos="zoom-y-out" data-aos-delay="450">
              <div className="flex flex-col justify-center">
                <img className="mx-auto" src={HeroImage} width="900" alt="Hero" />
              </div>
              
            </div>

            {/* Modal */}
            <Modal id="modal" ariaLabel="modal-headline" show={videoModalOpen} handleClose={() => setVideoModalOpen(false)}>
              <div className="relative pb-9/16">
                <iframe className="absolute w-full h-full" src="https://player.vimeo.com/video/174002812" title="Video" allowFullScreen></iframe>
              </div>
            </Modal>

          </div>

        </div>

      </div>
    </section>
  );
}

export default HeroHome;