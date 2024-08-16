import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header>
      {/* Top Bar with Contact Info */}
      <div className="bg-orange-600 text-white py-2">
        <div className="max-w-7xl mx-auto flex justify-between items-center px-4 sm:px-6 lg:px-8">
          <div className="flex space-x-4">
            <span className="flex items-center">
              <i className="fa fa-envelope mr-2"></i>
              <a href="mailto:contact@quickstart.com">contact@quickstart.com</a>
            </span>
            <span className="flex items-center">
              <i className="fa fa-phone mr-2"></i>
              <a href="tel:+1234567890">(+123) 456 7890</a>
            </span>
          </div>
          <div className="flex space-x-4">
            <span className="flex items-center">
              <i className="fa fa-envelope mr-2"></i>
              <a href="mailto:support@quickstart.com">Support</a>
            </span>
            <span className="flex items-center">
              <i className="fa fa-phone mr-2"></i>
              <a href="tel:+0987654321">+098 765 4321</a>
            </span>
          </div>
          <div className="flex space-x-2">
            <a href="#" className="text-white">FR</a>
            <a href="#" className="text-white">EN</a>
          </div>
        </div>
      </div>

      {/* Navbar */}
      <nav className="bg-white ">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between h-16 items-center">
            <div className="flex items-center">
              <Image src="/logo.png" alt="QuickStart Business Logo" width={40} height={40} />
              <span className="ml-2 text-xl font-bold text-gray-900">QuickStart Business</span>
            </div>
            <div className="flex items-center space-x-4">
              <Link href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
              <Link href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</Link>
              <Link href="#" className="px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
                Login
              </Link>
            </div>
          </div>
        </div>
      </nav>
    </header>
  )
}