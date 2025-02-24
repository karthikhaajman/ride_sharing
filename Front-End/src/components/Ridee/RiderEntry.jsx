import React, { useState } from 'react';
import Nav from '../Nav';
import { MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const RiderEntry = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/rides',{ state: { source, destination } });
  };

  return (
    <>
      <Nav />
      <div className="flex flex-col lg:flex-row items-center justify-center px-6 h-screen">
        <div className="w-md p-8 bg-white shadow-xl rounded-lg">
          <h1 className="text-3xl font-bold text-center mb-3">Request a ride for now or later</h1>
          <p className="text-center text-gray-600 mb-6">Add your trip details, hop in, and go</p>
          
          <form onSubmit={handleSubmit}>
            <div className="mb-4 flex items-center border border-gray-300 rounded-md px-3 py-2">
              <MapPin className="text-gray-500 mr-2" />
              <input type="text" placeholder="Enter source location" value={source} onChange={(e) => setSource(e.target.value)}
                className=" focus:outline-none"/>
            </div>

            <div className="mb-6 flex items-center border border-gray-300 rounded-md px-3 py-2">
              <MapPin className="text-gray-500 mr-2" />
              <input type="text" placeholder="Enter destination location" value={destination} onChange={(e) => setDestination(e.target.value)}
                className="focus:outline-none"/>
            </div>

            <button type="submit" className="w-full py-3 bg-black text-white font-semibold rounded-md hover:bg-gray-800 transition duration-300">
              Request Ride
            </button>
          </form>
        </div>
        <div className="mt-10 lg:mt-0 lg:ml-20">
          <img src="https://www.uber-assets.com/image/upload/f_auto,q_auto:eco,c_fill,h_576,w_576/v1683919251/assets/42/a29147-e043-42f9-8544-ecfffe0532e9/original/travel-ilustra.png" 
               alt="blank" className="max-w-sm" />
        </div>
      </div>
    </>
  );
};

export default RiderEntry;
