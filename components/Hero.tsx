const Hero: React.FC = () => {
  return (
    <div className="bg-blue-600 text-white">
      <div className="container mx-auto px-6 py-16 text-center">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">
          Start Your Business in Burundi
        </h1>
        <p className="text-xl mb-8">
          Quick and easy business formation services
        </p>
        <button className="bg-white text-blue-600 font-bold py-2 px-4 rounded-full hover:bg-blue-100 transition duration-300">
          Get Started
        </button>
      </div>
    </div>
  );
};

export default Hero;
