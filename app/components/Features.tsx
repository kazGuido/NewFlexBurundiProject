import { CheckCircleIcon } from '@heroicons/react/20/solid'

const features = [
  {
    title: 'Fast Processing',
    description: 'Get your business up and running in record time with our streamlined processes.',
  },
  {
    title: 'Expert Support',
    description: 'Our team of experts is here to guide you every step of the way, ensuring a smooth setup.',
  },
  {
    title: 'Affordable Pricing',
    description: 'Enjoy competitive pricing with no hidden fees, making business setup accessible for everyone.',
  },
]

export default function Features() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-extrabold text-gray-900">Why Choose QuickStart Business?</h2>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature.title} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                <h3 className="ml-3 text-lg font-medium text-gray-900">{feature.title}</h3>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                {feature.description}
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}