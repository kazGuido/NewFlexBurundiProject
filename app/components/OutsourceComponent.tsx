import React from 'react';

const steps = [
  {
    number: '01',
    title: 'You Tell us What You Need',
    description: 'Complete our simple business questionnaire with helpful guidance and instructions. Most customers can finish in 10 minutes or less.',
  },
  {
    number: '02',
    title: 'We Prepare & File Your Documents',
    description: 'We’ll file the necessary paperwork with your state on the same day you make your order with us.',
  },
  {
    number: '03',
    title: 'The State Processes Our Filing',
    description: 'Most states process filings within 2 business days.',
  },
  {
    number: '04',
    title: 'IRS Processes Our EIN filing',
    description: '',
  },
  {
    number: '05',
    title: 'We Generate Your Legal Documents',
    description: '',
  },
  {
    number: '06',
    title: 'We Deliver Everything to You by Email',
    description: '',
  },
  {
    number: '07',
    title: 'You Grow Your Business, and We Help',
    description: '',
  },
];

const OutsourceComponent: React.FC = () => {
  return (
    <div className="bg-white py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="bg-white p-8">
          <h2 className="text-3xl font-bold text-gray-900 mb-6">
            Outsource the Complexities, Focus on Your Business
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {steps.map((step) => (
              <div key={step.number} className="flex items-start">
                <div className="flex-shrink-0">
                  <div className="text-indigo-600 font-bold text-2xl">{step.number}</div>
                </div>
                <div className="ml-4">
                  <h3 className="text-xl font-semibold text-gray-900">{step.title}</h3>
                  {step.description && (
                    <p className="mt-2 text-lg text-gray-600">{step.description}</p>
                  )}
                </div>
              </div>
            ))}
          </div>
          <div className="mt-6">
            <a
              href="#"
              className="inline-block px-6 py-3 bg-indigo-600 text-white font-semibold rounded-md hover:bg-indigo-700"
            >
              Get Started Today
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};

export default OutsourceComponent;