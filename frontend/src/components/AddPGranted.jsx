import React, { useState } from 'react';

const AddPGranted = () => {
  const [formData, setFormData] = useState({
    PTitle: '',
    PNumber: '',
    CountryGranted:'',
    GrantedDate:''
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log('Submitted Data:', formData);
  };

  return (
    <div className="max-w-md mx-auto p-4 bg-white shadow-md rounded-lg">
      <h2 className="text-xl font-semibold mb-4">Add Patents Granted</h2>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label className="block text-sm font-medium">Patent Title</label>
          <textarea
            name="PTitle"
            value={formData.PTitle}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            rows="3"
            required
          ></textarea>
        </div>

        <div>
          <label className="block text-sm font-medium">Patent Number</label>
          <input
            type="text"
            name="PNumber"
            value={formData.PNumber}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Country Granted</label>
          <input
            type="text"
            name="CountryGranted"
            value={formData.CountryGranted}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>

        <div>
          <label className="block text-sm font-medium">Granted Date</label>
          <input
            type="text"
            name="GrantedDate"
            value={formData.GrantedDate}
            onChange={handleChange}
            className="w-full p-2 border rounded-md"
            required
          />
        </div>


        <button
          type="submit"
          className="w-full bg-blue-600 text-white p-2 rounded-md hover:bg-blue-700"
        >
          Submit
        </button>
      </form>
    </div>
  );
}

export default AddPGranted
