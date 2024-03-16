import React, { useState } from 'react';
import { Link } from 'react-router-dom';

const RegisterForm = () => {
  const [formData, setFormData] = useState({
    FullName: '',
    email: '',
    phone: '',
    password: '',
    confirmPassword: '',
    companyName: '',
    companyWebsiteUrl: '',
    companyEmail: '',
  });

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value });
  };

  const handleSubmit = (event) => {
    event.preventDefault();
    console.log('Form Data:', formData);
    // You would typically submit the form data here using a fetch API call or a third-party library
  };

  return (
    <>
      <div className="container mx-auto px-4 py-8 min-h-screen">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Register</h2>
          <p className="mb-1 font-semibold">
            A repository contains all project files, including the revision history. Already have a project repository
            elsewhere? <span className="btn btn-link btn-xs p-0"> Import a repository.</span>
          </p>
          <hr className="border-b mb-4"></hr>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label htmlFor="chatbotName" className="block text-base font-medium text-gray-700 mb-2">
                Full name
              </label>
              <input
                type="text"
                id="chatbotName"
                name="chatbotName"
                className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl w-1/2 py-1 px-3 mb-1 text-base text-gray-700 outline-none"
                onChange={handleChange}
                value={formData.FullName}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="email" className="block text-base font-medium text-gray-700 mb-2">
                Email
              </label>
              <input
                type="text"
                id="email"
                name="email"
                className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl w-1/2 py-1 px-3 mb-1 text-base text-gray-700 outline-none"
                onChange={handleChange}
                value={formData.email}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="phone" className="block text-base font-medium text-gray-700 mb-2">
                Phone
              </label>
              <input
                type="text"
                id="phone"
                name="phone"
                className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl w-1/2 py-1 px-3 mb-1 text-base text-gray-700 outline-none"
                onChange={handleChange}
                value={formData.phone}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="password" className="block text-base font-medium text-gray-700 mb-2">
                Password
              </label>
              <input
                type="password"
                id="password"
                name="password"
                className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl w-1/2 py-1 px-3 mb-1 text-base text-gray-700 outline-none"
                onChange={handleChange}
                value={formData.password}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="confirmPassword" className="block text-base font-medium text-gray-700 mb-2">
                Confirm Password
              </label>
              <input
                type="password"
                id="confirmPassword"
                name="confirmPassword"
                className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl w-1/2 py-1 px-3 mb-1 text-base text-gray-700 outline-none"
                onChange={handleChange}
                value={formData.confirmPassword}
                required
              />
            </div>
            <hr className="border-b mb-4"></hr>
            <div className="mb-6">
              <label htmlFor="companyName" className="block text-base font-medium text-gray-700 mb-2">
                Company name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="shadow-sm w-1/2 bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl py-1 px-3 text-base text-gray-700 outline-none"
                onChange={handleChange}
                value={formData.companyName}
                required
              />
            </div>
            <div className="mb-6">
              <label htmlFor="companyWebsiteUrl" className="block text-base font-medium text-gray-700 mb-2">
                Company website URL
              </label>
              <input
                type="url"
                id="companyWebsiteUrl"
                name="companyWebsiteUrl"
                className="shadow-sm w-1/2 bg-gray-50 border mb-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl py-1 px-3 text-base text-gray-700 outline-none"
                onChange={handleChange}
                value={formData.companyWebsiteUrl}
                required
              />
              <p className="mb-1">Company website needs to be verified for chatbot deployment</p>
            </div>
            <div className="mb-6">
              <label htmlFor="companyEmail" className="block text-base font-medium text-gray-700 mb-2">
                Company email
              </label>
              <input
                type="email"
                id="companyEmail"
                name="companyEmail"
                className="shadow-sm w-1/2 bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-1 px-3 text-base text-gray-700 outline-none"
                onChange={handleChange}
                value={formData.companyEmail}
                required
              />
            </div>
            <hr className="border-b mb-4"></hr>
            <div className="mb-14">
              <p htmlFor="companyEmail" className="block text-base font-medium text-gray-700 mb-2">
                Initialize this chatbot with:
              </p>
              <div className="flex flex-wrap justify-center align-middle items-center py-0">
                <div className="w-full md:w-1/3 mb-4">
                  <label className="flex items-center mb-2">
                    <input type="checkbox" className="w-5 h-5 rounded focus:ring-2" />
                    <span className="ml-2 text-gray-700">Greetings</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input type="checkbox" className="w-5 h-5 rounded focus:ring-2" />
                    <span className="ml-2 text-gray-700">Introduction</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="w-5 h-5 rounded focus:ring-2" />
                    <span className="ml-2 text-gray-700">Small Talk</span>
                  </label>
                </div>
                <div className="w-full md:w-1/3 mb-4">
                  <label className="flex items-center mb-2">
                    <input type="checkbox" className="w-5 h-5 rounded focus:ring-2" />
                    <span className="ml-2 text-gray-700">Weather report</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input type="checkbox" className="w-5 h-5 rounded focus:ring-2" />
                    <span className="ml-2 text-gray-700">Jokes and Humor</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="w-5 h-5 rounded focus:ring-2" />
                    <span className="ml-2 text-gray-700">Time and Date</span>
                  </label>
                </div>
                <div className="w-full md:w-1/3 mb-4">
                  <label className="flex items-center mb-2">
                    <input type="checkbox" className="w-5 h-5 rounded focus:ring-2" />
                    <span className="ml-2 text-gray-700">Queries</span>
                  </label>
                  <label className="flex items-center mb-2">
                    <input type="checkbox" className="w-5 h-5 rounded focus:ring-2" />
                    <span className="ml-2 text-gray-700">Goodbye Message</span>
                  </label>
                  <label className="flex items-center">
                    <input type="checkbox" className="w-5 h-5 rounded focus:ring-2" />
                    <span className="ml-2 text-gray-700">Simple text-based games</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-6 text-end">
              <Link to="/addchatbot" className="btn btn-sm px-12 bg-black hover:bg-slate-900 text-white rounded-full">
                Create Chatbot
              </Link>
            </div>
          </form>
        </div>
      </div>
    </>
  );
};

export default RegisterForm;
