// import React from "react";
// import { UserPlus } from "react-icons/fa";
// function Advertise() {
//   return (
//     <div className=" bg-gray-50 pt-10">
//       {/* Information Section */}
//       <div className="sm:flex justify-center gap-10 h-[400px] mt-20">
//         {/* Info Box 1 */}
//         <div className="sm:w-[300px] sm:h-[230px] p-6 shadow-lg rounded-2xl bg-white hover:scale-105 transform transition-all duration-300">
//           <div>
//             {/* <i className="fa-solid fa-user-plus text-pink-700 bg-pink-200 p-2 rounded-xl text-2xl"></i> */}
//             <UserPlus className="fa-solid fa-user-plus text-pink-700 bg-pink-200 p-2 rounded-xl text-2xl" />
//             <h1 className="py-4 text-lg font-semibold text-gray-800">
//               Create a profile
//             </h1>
//             <p className="text-gray-600">
//               Register on our platform to access a personalized car rental
//               experience.
//             </p>
//           </div>
//         </div>

//         {/* Info Box 2 */}
//         <div className="sm:w-[300px] sm:h-[230px] p-6 shadow-lg rounded-2xl bg-white hover:scale-105 transform transition-all duration-300">
//           <div>
//             {/* <i className="fa-solid fa-car bg-blue-600 p-3 text-white rounded-2xl"></i> */}
//             <i className="fa-solid fa-car text-blue-700 text-2xl bg-blue-200 p-2  rounded-xl"></i>
//             <h1 className="py-4 text-lg font-semibold text-gray-800">
//               Tell us what car you want
//             </h1>
//             <p className="text-gray-600">
//               Specify your preferred car model, rental period, and pick-up
//               location.
//             </p>
//           </div>
//         </div>

//         {/* Info Box 3 */}
//         <div className="sm:w-[300px] sm:h-[230px] p-6 shadow-lg rounded-2xl bg-white hover:scale-105 transform transition-all duration-300">
//           <div>
//             {/* <i className="fa-solid fa-user-check bg-blue-600 p-3 text-white rounded-2xl"></i> */}
//             <i className="fa-solid fa-user-check text-green-500 bg-green-200 p-2 rounded-lg text-2xl"></i>
//             <h1 className="py-4 text-lg font-semibold text-gray-800">
//               Match with seller
//             </h1>
//             <p className="text-gray-600">
//               Our algorithm will match you with the best available car rental
//               options.
//             </p>
//           </div>
//         </div>

//         {/* Info Box 4 */}
//         <div className="sm:w-[300px] sm:h-[230px] p-6 shadow-lg rounded-2xl bg-white hover:scale-105 transform transition-all duration-300">
//           <div>
//             {/* <i className="fa-solid fa-file-edit bg-blue-600 p-3 text-white rounded-2xl"></i> */}
//             <i className="fa-solid fa-file-signature text-purple-500 text-2xl bg-purple-200 p-2 rounded-lg"></i>
//             <h1 className="py-4 text-lg font-semibold text-gray-800">
//               Make a deal
//             </h1>
//             <p className="text-gray-600">
//               Finalize the rental agreement with the car owner and enjoy your
//               hassle-free ride.
//             </p>
//           </div>
//         </div>
//       </div>
//     </div>
//   );
// }

// export default Advertise;

import React from "react";
import {
  FaUserPlus,
  FaCar,
  FaUserCheck,
  FaFileSignature,
} from "react-icons/fa";

function Advertise() {
  return (
    <div className="bg-gray-50 pt-10">
      {/* Information Section */}
      <div className="sm:flex justify-center gap-10 h-[400px] mt-20">
        {/* Info Box 1 */}
        <div className="sm:w-[300px] sm:h-[230px] p-6 shadow-lg rounded-2xl bg-white hover:scale-105 transform transition-all duration-300">
          <div>
            <FaUserPlus className="text-pink-700 bg-pink-200 p-2 rounded-xl text-4xl" />
            <h1 className="py-4 text-lg font-semibold text-gray-800">
              Create a profile
            </h1>
            <p className="text-gray-600">
              Register on our platform to access a personalized car rental
              experience.
            </p>
          </div>
        </div>

        {/* Info Box 2 */}
        <div className="sm:w-[300px] sm:h-[230px] p-6 shadow-lg rounded-2xl bg-white hover:scale-105 transform transition-all duration-300">
          <div>
            <FaCar className="text-blue-700 text-4xl bg-blue-200 p-2 rounded-xl" />
            <h1 className="py-4 text-lg font-semibold text-gray-800">
              Tell us what car you want
            </h1>
            <p className="text-gray-600">
              Specify your preferred car model, rental period, and pick-up
              location.
            </p>
          </div>
        </div>

        {/* Info Box 3 */}
        <div className="sm:w-[300px] sm:h-[230px] p-6 shadow-lg rounded-2xl bg-white hover:scale-105 transform transition-all duration-300">
          <div>
            <FaUserCheck className="text-green-500 bg-green-200 p-2 rounded-lg text-4xl" />
            <h1 className="py-4 text-lg font-semibold text-gray-800">
              Match with seller
            </h1>
            <p className="text-gray-600">
              Our algorithm will match you with the best available car rental
              options.
            </p>
          </div>
        </div>

        {/* Info Box 4 */}
        <div className="sm:w-[300px] sm:h-[230px] p-6 shadow-lg rounded-2xl bg-white hover:scale-105 transform transition-all duration-300">
          <div>
            <FaFileSignature className="text-purple-500 text-4xl bg-purple-200 p-2 rounded-lg" />
            <h1 className="py-4 text-lg font-semibold text-gray-800">
              Make a deal
            </h1>
            <p className="text-gray-600">
              Finalize the rental agreement with the car owner and enjoy your
              hassle-free ride.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Advertise;
