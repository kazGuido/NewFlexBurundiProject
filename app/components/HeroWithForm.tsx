import React from 'react';
import Image from 'next/image';

const HeroWithForm: React.FC = () => {
  return (
    <div className="relative bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto">
        <div className="relative z-10 pb-8 sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
          <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
            <div className="sm:text-center lg:text-left">
              <h1 className="text-4xl tracking-tight font-extrabold text-gray-900 sm:text-5xl md:text-6xl">
                <span className="block xl:inline">Start Your Business</span>{' '}
                <span className="block text-indigo-600 xl:inline">From Anywhere in the World</span>
              </h1>
              <p className="mt-3 text-base text-gray-500 sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0">
                Quick, convenient, and hassle-free business registration for the African diaspora. Set up your dream company back home in minutes, no matter where you are.
              </p>
              
              <div className="max-w-3xl mx-auto bg-white p-6">
      <form className="flex flex-col md:flex-row gap-4">
        <div className="flex-1">
          <input
            type="text"
            placeholder="Your Preferred Business Name"
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>
        <div className="flex-1">
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
            defaultValue="LLC"
          >
            <option value="LLC">LLC</option>
            <option value="Corporation">Corporation</option>
            <option value="Sole Proprietorship">Sole Proprietorship</option>
          </select>
        </div>
        <div className="flex-1">
          <select
            className="w-full px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500 appearance-none bg-white"
            defaultValue=""
          >
            <option value="" disabled>Select Country</option>
            <option value="BDI">Burundi</option>
            <option value="CIV">Ivory Coast</option>
            {/* Add more states as needed */}
          </select>
        </div>
        <div className="flex-none">
          <button
            type="submit"
            className="w-full px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
          >
            START YOUR BUSINESS
          </button>
        </div>
      </form>
    </div>


            </div>
          </main>
          </div>
      </div>
      <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
        <div className="relative h-56 w-full sm:h-72 md:h-96 lg:w-full lg:h-full">
          <Image
            className="object-cover"
            src="https://images.unsplash.com/photo-1573164574511-73c773193279"
            alt="African business people"
            layout="fill"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-white via-transparent to-white" />
          <div className="absolute inset-0 bg-gradient-to-r from-white via-transparent to-white" />
        </div>
      </div>
    </div>
  );
};

export default HeroWithForm;