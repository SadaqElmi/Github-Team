
import Heroimage from './img/lambar.jpeg';
import './HeroSection.css'; // Import the custom CSS file

function HeroSection() {
  return (
    <div className="flex items-center justify-between p-20 bg-gray-50 min-h-screen relative">
      <div className="max-w-xl">
        <h1 className="text-7xl font-bold  mb-4 text-gray-800">
          The Easy Way to Takeover a Lease
        </h1>
        <p className="text-lg text-gray-600 mb-8 ml-6">
          Live in New York, New Jersey, and Connecticut!
        </p>

        <div className="w-[900px] flex justify-between items-center p-4  bg-white shadow-xl rounded-3xl relative z-20">
          <div className="flex gap-6 w-full justify-between items-center">
            <div className=''>
              <p className="text-sm text-gray-700">Car, Model, or Brand</p>
              <p className="text-sm text-gray-600 font-semibold mt-2">What are you looking for?</p>
            </div>

            <div className=''>
              <p className="text-sm text-gray-700">Max. Monthly Payment</p>
              <p className="text-sm text-gray-600 font-semibold mt-2">Add an acount in?</p>
            </div>

            <div className=''>
              <p className="text-sm text-gray-700">Make Year</p>
              <p className="text-sm text-gray-600 font-semibold mt-2">Add aminimal make year</p>
            </div>

            <div className="flex items-center">
              <button
                type="submit"
                className="px-4 py-2 w-[130px] h-[50px] bg-blue-600 text-white text-center rounded-full hover:bg-blue-700 transition duration-300"
              >
              search
              </button>
            </div>
          </div>
        </div>
      </div>
      <div className="relative w-[900px]">
        <img
          src={Heroimage}
          alt="Car"
          className="rounded-2xl w-full h-[70vh] mt-10 shadow-lg z-10"
        />
      </div>
    </div>
  );
}

export default HeroSection;