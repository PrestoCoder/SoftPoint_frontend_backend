import React, { useState } from 'react';
import axios from 'axios';

const CreateRealEstate = () => {
  const [formData, setFormData] = useState({
    name: '',
    realEstateType: 'house',
    street: '',
    externalNumber: '',
    internalNumber: '',
    neighborhood: '',
    city: '',
    country: '',
    rooms: 0,
    bathrooms: 0,
    type: 'residential',
    comments: '',
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    
    try {
      const response = await axios.post('http://127.0.0.1:8000/api', formData);
      console.log('API Response:', response.data);

      // You can handle the response as needed, e.g., show a success message to the user
    } catch (error) {
      console.error('API Error:', error.response.data);
      // Handle errors, e.g., show an error message to the user
    }
  };

  return (
    <div>
      <h2>Create Real Estate Entity</h2>
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="realEstateType">Real Estate Type:</label>
          <select
            id="realEstateType"
            name="realEstateType"
            value={formData.realEstateType}
            onChange={handleInputChange}
            required
          >
            <option value="house">House</option>
            <option value="department">Department</option>
            <option value="land">Land</option>
            <option value="commercial_ground">Commercial Ground</option>
          </select>
        </div>

        <div>
          <label htmlFor="street">Street:</label>
          <input
            type="text"
            id="street"
            name="street"
            value={formData.street}
            onChange={handleInputChange}
            required
          />
        </div>

        {/* Add other input fields based on the attributes */}
        <div>
          <label htmlFor="externalNumber">External Number:</label>
          <input
            type="text"
            id="externalNumber"
            name="externalNumber"
            value={formData.externalNumber}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="internalNumber">Internal Number:</label>
          <input
            type="text"
            id="internalNumber"
            name="internalNumber"
            value={formData.internalNumber}
            onChange={handleInputChange}
            required={formData.realEstateType === 'department' || formData.realEstateType === 'commercial_ground'}
          />
        </div>

        <div>
          <label htmlFor="neighborhood">Neighborhood:</label>
          <input
            type="text"
            id="neighborhood"
            name="neighborhood"
            value={formData.neighborhood}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="city">City:</label>
          <input
            type="text"
            id="city"
            name="city"
            value={formData.city}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="country">Country:</label>
          <input
            type="text"
            id="country"
            name="country"
            value={formData.country}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="rooms">Rooms:</label>
          <input
            type="number"
            id="rooms"
            name="rooms"
            value={formData.rooms}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="bathrooms">Bathrooms:</label>
          <input
            type="number"
            id="bathrooms"
            name="bathrooms"
            value={formData.bathrooms}
            onChange={handleInputChange}
            required
          />
        </div>

        <div>
          <label htmlFor="comments">Comments:</label>
          <textarea
            id="comments"
            name="comments"
            value={formData.comments}
            onChange={handleInputChange}
          />
        </div>

        <div>
          <button type="submit">Create</button>
        </div>
      </form>
    </div>
  );
}

export default CreateRealEstate;
