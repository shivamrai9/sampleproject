import React, { useState } from 'react'

import { useForm } from 'react-hook-form';

const BasicInfo = () => {
  
  // const { register, handleSubmit, formState : { errors } } = useForm();
  // const onSubmit = data => console.log(data);
   
  const { register, handleSubmit: handleSubmitPersonal, formState: { errors: errorsPersonal } } = useForm();
  const { register: registerCompany, handleSubmit: handleSubmitCompany, formState: { errors: errorsCompany } } = useForm();
  const onSubmitPersonal = data => console.log(data);
  const onSubmitCompany = data => console.log(data);


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
              {/* <form onSubmit={handleSubmit(onSubmit)}> */}
              <form onSubmit={handleSubmitPersonal(onSubmitPersonal)}>
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
                    { ...register ("First Name", {required: true})}
                    // value={formData.firstName}
                    // onChange={handleChange}
                    // required
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
                    { ...register ('Last Name', {required: true})}
                    // value={formData.lastName}
                    // onChange={handleChange}
                    // required
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
                    {...register ('Email', {required: true})}
                    // value={formData.email}
                    // onChange={handleChange}
                    // required
                  />
                </div>
                <div className="mb-6">
                  <label
                    htmlFor="phone"
                    className="block text-base font-medium text-gray-700 mb-2"
                  >
                    Phone
                  </label>
                  <input
                    type="text"
                    id="phone"
                    name="phone"
                    className="shadow-sm w-1/2  bg-gray-50 border mb-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-2 px-3 text-base text-gray-700 outline-none"
                    { ...register ('Phone no', {required: true})}
                    // onChange={handleChange}
                    // value={formData.companyWebsiteUrl}
                    // required
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
                    {...register ('Company Email', { required: true})}
                    // value={formData.phone}
                    // onChange={handleChange}
                    // required
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
              {/* <form onSubmit={handleSubmit(onSubmit)}> */}
              <form onSubmit={handleSubmitCompany(onSubmitCompany)}>
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
                    {...registerCompany ('Company Name', {required: true})}
                    // value={formData.companyName}
                    // onChange={handleChange}
                   // required
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
                    {...registerCompany ('Company Email', {required:true})}
                    // value={formData.companyEmail}
                    // onChange={handleChange}
                   // required
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
                    {...registerCompany('Company Website URL', {required: true})}
                    // value={formData.companyWebsiteUrl}
                    // onChange={handleChange}
                    //required
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
                    {...registerCompany( 'Address', {required:true})}
                    // onChange={handleChange}
                    // value={formData.address}
                   // required
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
                    {...registerCompany ('City', {required: true})}
                    className="shadow-sm w-1/2  bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-2 px-3 text-base text-gray-700 outline-none"
                    // onChange={handleChange}
                    // value={formData.city}
                   // required
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
                    {...registerCompany ('State', {required:true})}
                    // onChange={handleChange}
                    // value={formData.state}
                   // required
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
                    {...registerCompany ('Zip Code', {required: true})}
                    // onChange={handleChange}
                    // value={formData.zip}
                   // required
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
                    {...registerCompany ('country', {required:true})}
                    // onChange={handleChange}
                    // value={formData.country}
                    //required
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
