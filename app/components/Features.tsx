import { CheckCircleIcon } from '@heroicons/react/20/solid'

const features = ['Fast Processing', 'Expert Support', 'Affordable Pricing']

export default function Features() {
  return (
    <div className="mt-10">
      <h2 className="text-2xl font-extrabold text-gray-900">Why Choose QuickStart Business?</h2>
      <div className="mt-5 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {features.map((feature) => (
          <div key={feature} className="bg-white overflow-hidden shadow rounded-lg">
            <div className="px-4 py-5 sm:p-6">
              <div className="flex items-center">
                <CheckCircleIcon className="h-6 w-6 text-green-400" aria-hidden="true" />
                <h3 className="ml-3 text-lg font-medium text-gray-900">{feature}</h3>
              </div>
              <div className="mt-2 text-sm text-gray-500">
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Explicabo totam non cumque deserunt officiis ex maiores nostrum.
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  )
}