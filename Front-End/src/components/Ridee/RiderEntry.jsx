import React, { useState } from 'react';
import { MapPin } from 'lucide-react';
import {useNavigate} from 'react-router-dom'

const RideEntry = () => {
  const [source, setSource] = useState('');
  const [destination, setDestination] = useState('');
  const navigate= useNavigate();

  const handleSourceChange = (e) => {
    setSource(e.target.value);
  };

  const handleDestinationChange = (e) => {
    setDestination(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    navigate('/rides');

  };

  return (
    <div className='max-w-lg mx-auto mt-20 p-6 bg-white shadow-lg rounded-lg'>
      <h1 className='text-2xl font-bold text-center mb-4'>Request a ride for now or later</h1>
      <p className='text-center text-gray-600 mb-6'>Add your trip details, hop in, and go</p>

      <form onSubmit={handleSubmit}>
        <div className='mb-4 flex items-center border-2 border-gray-300 rounded-md'>
          <MapPin className='text-gray-600 mx-2' />
          <input type="text" placeholder="Enter source location" value={source} onChange={handleSourceChange}
            className='flex-1 py-2 px-3 rounded-md '/>
        </div>

        <div className='mb-6 flex items-center border-2 border-gray-300 rounded-md'>
          <MapPin className='text-gray-600 mx-2' />
          <input type="text" placeholder="Enter destination location" value={destination} onChange={handleDestinationChange}
            className='flex-1 py-2 px-3 rounded-md' />
        </div>

        <button type="submit" className='w-full py-3 bg-black text-white font-semibold rounded-md'>
          Request Ride
        </button>
      </form>
    </div>
  );
};

export default RideEntry;
