import React, { useState } from 'react';

const RideDetails = () => {
  // Initial state for rides data (You could fetch this data from an API)
  const ridesData = [
    { id: 1, vehicleType: 'Car', price: 200, gender: 'Male', driverName: 'John Doe' },
    { id: 2, vehicleType: 'Bike', price: 100, gender: 'Female', driverName: 'Jane Smith' },
    { id: 3, vehicleType: 'Car', price: 300, gender: 'Male', driverName: 'Mark Johnson' },
    { id: 4, vehicleType: 'SUV', price: 400, gender: 'Female', driverName: 'Emily Davis' },
    // Add more rides here
  ];

  // State to manage the selected filters
  const [vehicleType, setVehicleType] = useState('');
  const [minPrice, setMinPrice] = useState('');
  const [maxPrice, setMaxPrice] = useState('');
  const [gender, setGender] = useState('');

  // Filtering logic
  const filteredRides = ridesData.filter((ride) => {
    const isVehicleTypeMatch = vehicleType ? ride.vehicleType === vehicleType : true;
    const isGenderMatch = gender ? ride.gender === gender : true;
    const isPriceMatch = 
      (minPrice ? ride.price >= minPrice : true) &&
      (maxPrice ? ride.price <= maxPrice : true);

    return isVehicleTypeMatch && isGenderMatch && isPriceMatch;
  });

  return (
    <div className='max-w-4xl mx-auto mt-10 p-6 bg-white shadow-lg rounded-lg'>
      <h1 className='text-2xl font-bold mb-4'>Available Rides</h1>

      {/* Filters */}
      <div className='mb-6 flex space-x-4'>
        <div>
          <label htmlFor="vehicleType" className='block'>Vehicle Type:</label>
          <select
            id="vehicleType"
            value={vehicleType}
            onChange={(e) => setVehicleType(e.target.value)}
            className='p-2 border rounded-md'>
            <option value="">All</option>
            <option value="Car">Car</option>
            <option value="Bike">Bike</option>
            <option value="SUV">SUV</option>
          </select>
        </div>

        <div>
          <label htmlFor="minPrice" className='block'>Min Price:</label>
          <input
            id="minPrice"
            type="number"
            value={minPrice}
            onChange={(e) => setMinPrice(e.target.value)}
            className='p-2 border rounded-md'
            placeholder="Min Price"
          />
        </div>

        <div>
          <label htmlFor="maxPrice" className='block'>Max Price:</label>
          <input
            id="maxPrice"
            type="number"
            value={maxPrice}
            onChange={(e) => setMaxPrice(e.target.value)}
            className='p-2 border rounded-md'
            placeholder="Max Price"
          />
        </div>

        <div>
          <label htmlFor="gender" className='block'>Gender:</label>
          <select
            id="gender"
            value={gender}
            onChange={(e) => setGender(e.target.value)}
            className='p-2 border rounded-md'>
            <option value="">All</option>
            <option value="Male">Male</option>
            <option value="Female">Female</option>
          </select>
        </div>
      </div>

      {/* Display Filtered Rides */}
      <div className='space-y-4'>
        {filteredRides.length > 0 ? (
          filteredRides.map((ride) => (
            <div key={ride.id} className='p-4 border rounded-md'>
              <h2 className='font-semibold'>{ride.driverName}</h2>
              <p>Vehicle: {ride.vehicleType}</p>
              <p>Price: ${ride.price}</p>
              <p>Gender: {ride.gender}</p>
              <button>Request</button>
            </div>
          ))
        ) : (
          <p>No rides available with the selected filters.</p>
        )}
      </div>
    </div>
  );
};

export default RideDetails;
