import React, { useState } from 'react'

const BasicInfo = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    companyName: '',
    companyEmail: '',
    companyWebsiteUrl: '',
    address: '',
    city: '',
    state: '',
    zip: '',
    country: ''
  });


  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send data to backend or do whatever you need
    console.log(formData);
  };


  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="max-w-7xl mx-auto">
        <div className="container mx-auto mt-8 grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left Column */}
        <div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Personal Information</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="chatbotName"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    First Name
                  </label>
                  <input
                    type="text"
                    className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl w-1/2 py-2 px-3 mb-1 text-base text-gray-700 outline-none"
                    id="firstName"
                    name="firstName"
                    value={formData.firstName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="companyName"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Last Name
                  </label>
                  <input
                    type="text"
                    className="shadow-sm w-1/2  bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-2 px-3 text-base text-gray-700 outline-none"
                    id="lastName"
                    name="lastName"
                    value={formData.lastName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="companyName"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Email
                  </label>
                  <input
                    className="shadow-sm w-1/2  bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-2 px-3 text-base text-gray-700 outline-none"
                    type="email"
                    id="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="companyWebsiteUrl"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="companyWebsiteUrl"
                    name="companyWebsiteUrl"
                    className="shadow-sm w-1/2  bg-gray-50 border mb-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-2 px-3 text-base text-gray-700 outline-none"
                    onChange={handleChange}
                    value={formData.companyWebsiteUrl}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="companyEmail"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Company email
                  </label>
                  <input
                    className="shadow-sm w-1/2  bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-2 px-3 text-base text-gray-700 outline-none"
                    type="tel"
                    id="phone"
                    name="phone"
                    value={formData.phone}
                    onChange={handleChange}
                    required
                  />

                </div>

                <div className="mb-6 text-end" type="submit">
                  <button className="btn btn-sm px-12  bg-black hover:bg-slate-900 text-white rounded-full" >
                    Create Chatbot
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div>
          <div className="max-w-3xl mx-auto">
            <div className="bg-white p-6 rounded-lg shadow-md">
              <h2 className="text-xl font-semibold mb-4">Company Information</h2>
              <form onSubmit={handleSubmit}>
                <div className="mb-6">
                  <label
                    htmlFor="companyName"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Company Name
                  </label>
                  <input
                    type="text"
                    className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl w-1/2 py-2 px-3 mb-1 text-base text-gray-700 outline-none"
                    id="companyName"
                    name="companyName"
                    value={formData.companyName}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="companyEmail"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Company Email
                  </label>
                  <input
                    className="shadow-sm w-1/2  bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-2 px-3 text-base text-gray-700 outline-none"
                    type="email"
                    id="companyEmail"
                    name="companyEmail"
                    value={formData.companyEmail}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="companyWebsiteUrl"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Company Website URL
                  </label>
                  <input
                    className="shadow-sm w-1/2  bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-2 px-3 text-base text-gray-700 outline-none"
                    type="text"
                    id="companyWebsiteUrl"
                    name="companyWebsiteUrl"
                    value={formData.companyWebsiteUrl}
                    onChange={handleChange}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="address"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Address
                  </label>
                  <input
                    type="text"
                    id="address"
                    name="address"
                    className="shadow-sm w-1/2  bg-gray-50 border mb-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-2 px-3 text-base text-gray-700 outline-none"
                    onChange={handleChange}
                    value={formData.address}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="city"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    City
                  </label>
                  <input
                    type="text"
                    id="city"
                    name="city"
                    className="shadow-sm w-1/2  bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-2 px-3 text-base text-gray-700 outline-none"
                    onChange={handleChange}
                    value={formData.city}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="state"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    State
                  </label>
                  <input
                    type="text"
                    id="state"
                    name="state"
                    className="shadow-sm w-1/2  bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-2 px-3 text-base text-gray-700 outline-none"
                    onChange={handleChange}
                    value={formData.state}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="zip"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Zip
                  </label>
                  <input
                    type="text"
                    id="zip"
                    name="zip"
                    className="shadow-sm w-1/2  bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-2 px-3 text-base text-gray-700 outline-none"
                    onChange={handleChange}
                    value={formData.zip}
                    required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="country"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Country
                  </label>
                  <input
                    type="text"
                    id="country"
                    name="country"
                    className="shadow-sm w-1/2  bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-2 px-3 text-base text-gray-700 outline-none"
                    onChange={handleChange}
                    value={formData.country}
                    required
                  />
                </div>

                <div className="mb-6 text-end">
                  <button className="btn btn-sm px-12 bg-black hover:bg-slate-900 text-white rounded-full">
                    Create Chatbot
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
        </div>
      </div>
      
    </>
  )
}

export default BasicInfo
