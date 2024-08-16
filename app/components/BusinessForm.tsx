import React from 'react';

const BusinessForm: React.FC = () => {
  return (
    <div className="max-w-3xl mx-auto bg-white p-6 rounded-lg shadow-md">
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
  );
};

export default BusinessForm;