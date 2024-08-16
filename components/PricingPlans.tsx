interface PricingPlan {
  name: string;
  price: string;
  features: string[];
}

const pricingPlans: PricingPlan[] = [
  {
    name: 'Basic',
    price: '200,000 BIF',
    features: ['Business Registration', 'Tax ID Application'],
  },
  {
    name: 'Standard',
    price: '350,000 BIF',
    features: [
      'Business Registration',
      'Tax ID Application',
      'Business Licenses',
    ],
  },
  {
    name: 'Premium',
    price: '500,000 BIF',
    features: [
      'Business Registration',
      'Tax ID Application',
      'Business Licenses',
      'Legal Document Preparation',
    ],
  },
];

const PricingPlans: React.FC = () => {
  return (
    <div className="py-16">
      <div className="container mx-auto px-6">
        <h2 className="text-3xl font-bold text-center mb-8">Pricing Plans</h2>
        <div className="grid md:grid-cols-3 gap-8">
          {pricingPlans.map((plan, index) => (
            <div key={index} className="border rounded-lg p-6 shadow-md">
              <h3 className="text-xl font-bold mb-4">{plan.name}</h3>
              <p className="text-2xl font-bold mb-6">{plan.price}</p>
              <ul className="mb-6">
                {plan.features.map((feature, i) => (
                  <li key={i} className="mb-2">
                    {feature}
                  </li>
                ))}
              </ul>
              <button className="w-full bg-blue-600 text-white font-bold py-2 px-4 rounded hover:bg-blue-700 transition duration-300">
                Choose Plan
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PricingPlans;
