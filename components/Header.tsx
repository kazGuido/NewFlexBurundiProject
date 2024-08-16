import Link from 'next/link';

const Header: React.FC = () => {
  return (
    <header className="bg-white shadow-md">
      <nav className="container mx-auto px-6 py-3">
        <div className="flex justify-between items-center">
          <Link href="/" className="text-2xl font-bold text-gray-800">
            Burundi Business
          </Link>
          <div className="hidden md:flex items-center space-x-4">
            <Link
              href="/services"
              className="text-gray-800 hover:text-blue-600"
            >
              Services
            </Link>
            <Link href="/pricing" className="text-gray-800 hover:text-blue-600">
              Pricing
            </Link>
            <Link href="/contact" className="text-gray-800 hover:text-blue-600">
              Contact
            </Link>
          </div>
        </div>
      </nav>
    </header>
  );
};

export default Header;
