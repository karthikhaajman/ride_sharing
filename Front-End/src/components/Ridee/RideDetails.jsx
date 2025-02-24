import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Nav from '../Nav';

const RideDetails = () => {
  const location = useLocation();
  const { source, destination } = location.state;

  const [filters, setFilters] = useState({
    vehicleType: '',
    gender: '',
    priceRange: '',
    totalSeats: '',
    pickUpTime: ''
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFilters((prevFilters) => ({
      ...prevFilters,
      [name]: value,
    }));
  };

  return (
    <>
      <Nav />
      <div className='flex gap-10 p-10'>
        <div className='p-4 w-1/4 bg-white shadow-xl rounded-lg'>

          <h2 className='text-lg font-bold mb-2'>Get Rides</h2>

          <div className='mb-2 inline'>
            <label className='block font-semibold'>Source:</label>
            <p>{source}</p>
          </div>

          <div className='mb-2 inline'>
            <label className='block font-semibold'>Destination:</label>
            <p>{destination}</p>
          </div>

          <div className='mb-2'>
            <label className='block font-semibold'>Pick-Up Time:</label>
            <input type='time' name='pickUpTime' value={filters.pickUpTime} onChange={handleChange} className='border-white rounded p-1 w-full bg-gray-200' />
          </div>

          <div className='mb-2'>
            <label className='block font-semibold'>Vehicle Type:</label>
            <select  name='vehicleType'  value={filters.vehicleType} onChange={handleChange} className='border-white rounded p-1 w-full bg-gray-200'>
              <option value=''>Select</option>
              <option value='car'>Car</option>
              <option value='bike'>Bike</option>
              <option value='auto'>Auto</option>
            </select>
          </div>

          {filters.vehicleType === 'car' && (
            <div className='mb-2'>
              <label className='block font-semibold'>Total Seats:</label>
              <input type='number' name='totalSeats' min='1' max='3' value={filters.totalSeats} onChange={handleChange} className='border-white rounded p-1 w-full bg-gray-200' />
            </div>
          )}

          <div className='mb-2'>
            <label className='block font-semibold'>Gender Preference:</label>
            <select name='gender' value={filters.gender} onChange={handleChange} className='border-white rounded p-1 w-full bg-gray-200'>
              <option value=''>Any</option>
              <option value='male'>Male</option>
              <option value='female'>Female</option>
            </select>
          </div>

          <div className='mb-2'>
            <label className='block font-semibold'>Price Range:</label>
            <select name='priceRange' value={filters.priceRange} onChange={handleChange} className='border-white rounded p-1 w-full bg-gray-200'>
              <option value=''>Select</option>
              <option value='0-200'>0 - 200</option>
              <option value='200-300'>200 - 300</option>
              <option value='300-500'>300 - 500</option>
              <option value='500-600'>500 - 600</option>
              <option value='600-800'>600 - 800</option>
              <option value='800-1000'>800 - 1000</option>
              <option value='1000-1500'>1000 - 1500</option>
            </select>
          </div>

        </div>

        
        <div className='p-4 '>
          <h2 className='text-lg font-bold'>Available Rides</h2>
          <p>rides will be listed here...</p>
        </div>

        <div className='p-4 '>
          <h2 className='text-lg font-bold'>Map</h2>
          <p>map will be displayed here...</p>
        </div>
      </div>
    </>
  );
};

export default RideDetails;
