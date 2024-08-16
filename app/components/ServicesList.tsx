import { CheckCircleIcon } from '@heroicons/react/24/solid';

const services: string[] = [
  'Business Registration',
  'Tax ID Application',
  'Business Licenses',
  'Legal Document Preparation',
];

const ServicesList: React.FC = () => {
  return (
    <div className="bg-gray-100 py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Our Services</h2>
        <div className="grid md:grid-cols-2 gap-8">
          {services.map((service, index) => (
            <div key={index} className="flex items-center">
              <CheckCircleIcon className="h-6 w-6 text-green-500 mr-2" />
              <span>{service}</span>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ServicesList;
