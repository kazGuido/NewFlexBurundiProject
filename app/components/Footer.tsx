const socialLinks = ['Facebook', 'Twitter', 'Instagram']

export default function Footer() {
  return (
    <footer className="bg-white">
      <div className="max-w-7xl mx-auto py-12 px-4 sm:px-6 md:flex md:items-center md:justify-between lg:px-8">
        <div className="flex justify-center space-x-6 md:order-2">
          {socialLinks.map((item) => (
            <a key={item} href="#" className="text-gray-400 hover:text-gray-500">
              <span className="sr-only">{item}</span>
              {/* Add social icons here */}
            </a>
          ))}
        </div>
        <div className="mt-8 md:mt-0 md:order-1">
          <p className="text-center text-base text-gray-400">
            &copy; {new Date().getFullYear()} QuickStart Business. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  )
}