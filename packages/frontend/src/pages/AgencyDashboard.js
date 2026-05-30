import React, { useState } from 'react';

function AgencyDashboard() {
  const [vehicles, setVehicles] = useState([]);
  const [showAddForm, setShowAddForm] = useState(false);
  const [newVehicle, setNewVehicle] = useState({
    capacity: '',
    acType: 'AC',
    city: '',
    pricePerKm: '',
    condition: 'Good'
  });

  const handleAddVehicle = (e) => {
    e.preventDefault();
    // TODO: Call backend API to add vehicle
    console.log('Adding vehicle:', newVehicle);
    setVehicles([...vehicles, { id: Date.now(), ...newVehicle }]);
    setNewVehicle({
      capacity: '',
      acType: 'AC',
      city: '',
      pricePerKm: '',
      condition: 'Good'
    });
    setShowAddForm(false);
  };

  return (
    <div>
      <h2>Travel Agency Dashboard</h2>
      
      <section>
        <h3>My Vehicles</h3>
        {vehicles.length === 0 ? (
          <p>No vehicles added yet.</p>
        ) : (
          <div className="vehicle-grid">
            {vehicles.map(vehicle => (
              <div key={vehicle.id} className="vehicle-card">
                <h4>{vehicle.capacity} Seater</h4>
                <p>City: {vehicle.city}</p>
                <p>AC Type: {vehicle.acType}</p>
                <p>Price per KM: ₹{vehicle.pricePerKm}</p>
                <p>Condition: {vehicle.condition}</p>
              </div>
            ))}
          </div>
        )}
      </section>

      <section>
        <button onClick={() => setShowAddForm(!showAddForm)}>
          {showAddForm ? 'Cancel' : 'Add New Vehicle'}
        </button>
        
        {showAddForm && (
          <form onSubmit={handleAddVehicle}>
            <h3>Add Vehicle</h3>
            <label>
              Vehicle Capacity:
              <select
                value={newVehicle.capacity}
                onChange={(e) => setNewVehicle({ ...newVehicle, capacity: e.target.value })}
                required
              >
                <option value="">Select</option>
                <option value="7">7 Seater</option>
                <option value="10">10 Seater</option>
                <option value="12">12 Seater</option>
                <option value="14">14 Seater</option>
                <option value="17">17 Seater</option>
                <option value="20">20 Seater</option>
                <option value="25">25 Seater</option>
                <option value="40">40 Seater</option>
                <option value="56">56 Seater</option>
              </select>
            </label>
            <label>
              AC Type:
              <select
                value={newVehicle.acType}
                onChange={(e) => setNewVehicle({ ...newVehicle, acType: e.target.value })}
              >
                <option value="AC">AC</option>
                <option value="Non-AC">Non-AC</option>
              </select>
            </label>
            <label>
              City/Location:
              <input
                type="text"
                value={newVehicle.city}
                onChange={(e) => setNewVehicle({ ...newVehicle, city: e.target.value })}
                required
              />
            </label>
            <label>
              Price per KM:
              <input
                type="number"
                value={newVehicle.pricePerKm}
                onChange={(e) => setNewVehicle({ ...newVehicle, pricePerKm: e.target.value })}
                required
              />
            </label>
            <label>
              Vehicle Condition:
              <select
                value={newVehicle.condition}
                onChange={(e) => setNewVehicle({ ...newVehicle, condition: e.target.value })}
              >
                <option value="Good">Good</option>
                <option value="Excellent">Excellent</option>
                <option value="Fair">Fair</option>
              </select>
            </label>
            <button type="submit">Add Vehicle</button>
          </form>
        )}
      </section>

      <section>
        <h3>Inquiries</h3>
        <p>Incoming inquiries will appear here. Click to chat with customers.</p>
      </section>
    </div>
  );
}

export default AgencyDashboard;
