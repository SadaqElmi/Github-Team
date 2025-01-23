
import Image1 from "./img/carimgae.jpeg"; // Corrected import path
import Image2 from "./img/lambar.jpeg"; // Corrected import path
import Image3 from "./img/lambargino.jpeg";
import { FaUser, FaCar, FaCog, FaLeaf, FaHeart } from 'react-icons/fa';
const CarProducts = () => {
  return (
    <div>
     
    
      <div className="flex flex-wrap justify-around gap-6 p-6 bg-gray-100 mt-6">
        <CarCard
          image={Image1}
          title="lambargino RAV4"
          year="2021"
          capacity="4 People"
          hybrid="Hybrid"
          mileage="6.1km/1-Utre"
          transmission="Automatic"
          price="$440/month"
        />
        <CarCard
          image={Image2}
          title="Honda CR-V"
          year="2020"
          capacity="5 People"
          hybrid="Non-Hybrid"
          mileage="5.8km/1-Utre"
          transmission="Automatic"
          price="$420/month"
        />
        <CarCard
          image={Image3}
          title="Ford Mustang"
          year="2019"
          capacity="2 People"
          hybrid="Non-Hybrid"
          mileage="8.2km/1-Utre"
          transmission="Manual"
          price="$500/month"
        />
      </div>
      </div>
   
  )
}

export default CarProducts

const CarCard = ({ image, title, year, capacity, hybrid, mileage, transmission, price }) => {
  
  return (
   
    
    <div className="max-w-sm bg-white rounded-lg shadow-lg overflow-hidden">
     
      <img
        src={image}
        alt={title}
        className="w-96 h-60 object-cover"
      />
      <div className="p-6">
        <div className="flex justify-between items-center mb-4">
          <h2 className="text-xl font-bold text-gray-800">{title}</h2>
          <span className="text-sm text-gray-600 border border-blue-400 border-dashed px-2 py-1 rounded-lg">{year}</span>
        </div>
        <div className="flex justify-items-stretch text-sm text-gray-600">
          <div className="flex items-center">
            <FaUser className="mr-2 text-blue-400" />
            {capacity}
          </div>
          <div className="flex items-center ml-24">
            <FaLeaf className="mr-2 text-blue-400" />
            {hybrid}
          </div>
        </div>
        <div className="flex justify-items-stretch text-sm text-gray-600 mt-2">
          <div className="flex items-center">
            <FaCar className="mr-2 text-blue-400" />
            {mileage}
          </div>
          <div className="flex items-center ml-16">
            <FaCog className="mr-2 text-blue-400" />
            {transmission}
          </div>
        </div>
        <div className="mt-6 flex justify-between items-center">
          <p className="text-lg font-bold text-gray-800">{price}</p>
          <div className="flex items-center gap-2">
            <FaHeart className="text-blue-500 text-lg rounded-sm   cursor-pointer hover:text-blue-600 transition duration-300" />
            <button className="px-6 py-2 bg-blue-400 text-white rounded-lg hover:bg-blue-700 transition duration-300">
              Rent Now
            </button>
          </div>
        </div>
      </div>
    </div>
    
  );
};