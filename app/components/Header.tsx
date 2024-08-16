import Image from 'next/image'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="bg-white shadow">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <div className="flex-shrink-0 flex items-center">
              <Image src="/logo.png" alt="QuickStart Business Logo" width={40} height={40} />
              <span className="ml-2 text-xl font-bold">QuickStart Business</span>
            </div>
          </div>
          <div className="flex items-center">
            <Link href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Services</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">Pricing</Link>
            <Link href="#" className="text-gray-700 hover:text-gray-900 px-3 py-2 rounded-md text-sm font-medium">About</Link>
            <Link href="#" className="ml-4 px-4 py-2 border border-transparent text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700">
              Login
            </Link>
          </div>
        </div>
      </nav>
    </header>
  )
}