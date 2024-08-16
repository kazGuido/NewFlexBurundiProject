import React from 'react';

const BusinessForm: React.FC = () => {
  return (
    <div className="bg-white p-6  max-w-4xl mx-auto mt-8">
      <form className="flex flex-col md:flex-row gap-4">
        <input
          type="text"
          placeholder="Your Preferred Business Name"
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
        />
        <select
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue="LLC"
        >
          <option value="LLC">LLC</option>
          <option value="Corporation">Corporation</option>
          <option value="Sole Proprietorship">Sole Proprietorship</option>
        </select>
        <select
          className="flex-1 px-4 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          defaultValue=""
        >
          <option value="" disabled>Select State</option>
          <option value="CA">California</option>
          <option value="NY">New York</option>
          {/* Add more states as needed */}
        </select>
        <button
          type="submit"
          className="px-6 py-2 bg-green-500 text-white font-semibold rounded-md hover:bg-green-600 focus:outline-none focus:ring-2 focus:ring-green-500"
        >
          START YOUR BUSINESS
        </button>
      </form>
    </div>
  );
};

export default BusinessForm;