import carImage from "./img/carimgae.jpeg";

const HeroSection = () => {
  return (
    <section
      className="relative h-full bg-cover bg-center pt-20"
      style={{ backgroundImage: `url(${carImage})` }}
    >
      <div className="absolute inset-0 bg-black bg-opacity-50"></div>
      <div className="relative z-10  h-full  text-white p-8 ml-20">
        <h1 className="text-6xl font-bold mt-6 w-full max-w-lg leading-tight">
          Logistics You Can Count On, Start to Finish.
        </h1>
        <p className="text-sm mt-6 w-full max-w-lg leading-tight">
          We specialise in heavy haulage, freight solutions, and earthmoving
          transport. With a commitment to delivering excellence, we ensure your
          goods reach their destination safely, efficiently, and on time.
        </p>
        <div className="flex space-x-4 mt-8">
          <button className="px-6 py-3 bg-white text-black font-bold rounded hover:bg-gray-100 flex items-center gap-2">
            Contact Us
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              viewBox="0 0 20 20"
              fill="currentColor"
            >
              <path
                fillRule="evenodd"
                d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
                clipRule="evenodd"
              />
            </svg>
          </button>
          <button className="px-6 py-3 bg-transparent border border-white text-white font-bold rounded hover:bg-white hover:text-black">
            Learn More
          </button>
        </div>
        <div className="flex justify-around mt-20 w-full">
          <div className="text-center">
            <p className="text-3xl font-bold">10%</p>
            <p>First Nations Employment</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">35+</p>
            <p>Clients Nationally</p>
          </div>
          <div className="text-center">
            <p className="text-3xl font-bold">150K+</p>
            <p>Tonnes of Material Transported Yearly</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
