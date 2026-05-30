import React, { useState } from 'react';

function CustomerSearch() {
  const [filters, setFilters] = useState({
    city: '',
    fromDate: '',
    toDate: '',
    acPreference: 'any',
    capacity: 'any'
  });

  const [results, setResults] = useState([]);

  const handleFilterChange = (e) => {
    const { name, value } = e.target;
    setFilters(prev => ({ ...prev, [name]: value }));
  };

  const handleSearch = (e) => {
    e.preventDefault();
    // TODO: Call backend API to search vehicles
    console.log('Searching with filters:', filters);
    setResults([
      { id: 1, name: '7 Seater Vehicle', city: filters.city, pricePerKm: '15', acType: 'AC' },
      { id: 2, name: '12 Seater Vehicle', city: filters.city, pricePerKm: '25', acType: 'Non-AC' }
    ]);
  };

  return (
    <div>
      <h2>Search Vehicles</h2>
      <form onSubmit={handleSearch}>
        <label>
          City:
          <input
            type="text"
            name="city"
            value={filters.city}
            onChange={handleFilterChange}
            required
          />
        </label>
        <label>
          From Date:
          <input
            type="date"
            name="fromDate"
            value={filters.fromDate}
            onChange={handleFilterChange}
            required
          />
        </label>
        <label>
          To Date:
          <input
            type="date"
            name="toDate"
            value={filters.toDate}
            onChange={handleFilterChange}
            required
          />
        </label>
        <label>
          AC Preference:
          <select name="acPreference" value={filters.acPreference} onChange={handleFilterChange}>
            <option value="any">Any</option>
            <option value="ac">AC</option>
            <option value="non-ac">Non-AC</option>
          </select>
        </label>
        <label>
          Vehicle Capacity:
          <select name="capacity" value={filters.capacity} onChange={handleFilterChange}>
            <option value="any">Any</option>
            <option value="7">7 Seater</option>
            <option value="12">12 Seater</option>
            <option value="20">20 Seater</option>
            <option value="40">40 Seater</option>
          </select>
        </label>
        <button type="submit">Search</button>
      </form>

      {results.length > 0 && (
        <div>
          <h3>Available Vehicles</h3>
          <div className="vehicle-grid">
            {results.map(vehicle => (
              <div key={vehicle.id} className="vehicle-card">
                <h4>{vehicle.name}</h4>
                <p>City: {vehicle.city}</p>
                <p>Price per KM: ₹{vehicle.pricePerKm}</p>
                <p>AC Type: {vehicle.acType}</p>
                <button>View Details</button>
                <button>Raise Inquiry</button>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default CustomerSearch;
