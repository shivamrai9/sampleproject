import React, { useState } from 'react'

const Info = () => {
  const [formData, setFormData] = useState({
    chatbotName: '',
    description: '',
    companyName: '',
    companyWebsiteUrl: '',
    companyEmail: ''
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    const newValue = type === 'checkbox' ? checked : value;

    setFormData({
      ...formData,
      [name]: newValue,
    });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    // Add further form submission logic here
  };

  return (
    <>
      <div className="container mx-auto mt-8">


        <div className="max-w-6xl mx-auto flex justify-center space-x-4">
          <div className="w-4/5 px-6 py-8">
            <form onSubmit={handleSubmit}>
              <div className="mb-6">
                <label
                  htmlFor="chatbotName"
                  className="block text-base font-medium text-gray-700 mb-2"
                >
                  Chatbot name
                </label>
                <input
                  type="text"
                  id="chatbotName"
                  name="chatbotName"
                  className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl w-1/2 py-1 px-3 mb-1 text-base text-gray-700 outline-none"
                  onChange={handleChange}
                  value={formData.chatbotName}
                  required
                />
                <p className="mb-1">Great repository names are short and memorable. Need inspiration? How about</p>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="description"
                  className="block text-base font-medium text-gray-700 mb-2"
                >
                  Description
                </label>
                <textarea
                  id="description"
                  name="description"
                  className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl w-full py-1 px-3 text-sm text-gray-700 outline-none"
                  onChange={handleChange}
                  value={formData.description}
                  required
                />

              </div>
              <hr className="border-b  mb-4"></hr>
              <div className="mb-6">
                <label
                  htmlFor="companyName"
                  className="block text-base font-medium text-gray-700 mb-2"
                >
                  Company name
                </label>
                <input
                  type="text"
                  id="companyName"
                  name="companyName"
                  className="shadow-sm w-1/2  bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-1 px-3 text-base text-gray-700 outline-none"
                  onChange={handleChange}
                  value={formData.companyName}
                  required
                />
              </div>
              <div className="mb-6">
                <label
                  htmlFor="companyWebsiteUrl"
                  className="block text-base font-medium text-gray-700 mb-2"
                >
                  Company website URL
                </label>
                <input
                  type="text"
                  id="companyWebsiteUrl"
                  name="companyWebsiteUrl"
                  className="shadow-sm w-1/2  bg-gray-50 border mb-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-1 px-3 text-base text-gray-700 outline-none"
                  onChange={handleChange}
                  value={formData.companyWebsiteUrl}
                  required
                />
                <p className="mb-1">Company website needs to be verify for chatbot deployment</p>
              </div>
              <div className="mb-6">
                <label
                  htmlFor="companyEmail"
                  className="block text-base font-medium text-gray-700 mb-2"
                >
                  Company email
                </label>
                <input
                  type="email"
                  id="companyEmail"
                  name="companyEmail"
                  className="shadow-sm w-1/2  bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-1 px-3 text-base text-gray-700 outline-none"
                  onChange={handleChange}
                  value={formData.companyEmail}
                  required
                />

              </div>
              <div className="mb-6 text-end" type="submit">
                <button className="btn btn-sm px-12  bg-black hover:bg-slate-900 text-white rounded-full" >
                  Save
                </button>
              </div>
            </form>
          </div>
          <div className="w-1/5 px-6 py-8">
            <div className="avatar">
              <div className="w-full rounded-full">
                <img src="https://letsenhance.io/static/8f5e523ee6b2479e26ecc91b9c25261e/1015f/MainAfter.jpg" />
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
  )
}

export default Info
Info