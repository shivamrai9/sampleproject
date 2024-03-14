import React, { useState } from 'react'

const RegisterForm = () => {

  const [formData, setFormData] = useState({
    chatbotName: '',
    description: '',
    companyName: '',
    companyWebsiteUrl: '',
    companyEmail: '',
  })

  const handleChange = (event) => {
    setFormData({ ...formData, [event.target.name]: event.target.value })
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    console.log('Form Data:', formData)
    // You would typically submit the form data here using a fetch API call or a third-party library
  }

  return (
    <>
      <div className="container mx-auto px-4 py-8 min-h-screen pt-32">
        <div className="max-w-md mx-auto">
          <h2 className="text-2xl font-semibold mb-6">Create a new chatbot</h2>
          <form onSubmit={handleSubmit}>
            <div className="mb-6">
              <label
                htmlFor="chatbotName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Chatbot name
              </label>
              <input
                type="text"
                id="chatbotName"
                name="chatbotName"
                className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full py-2 px-3 text-sm text-gray-700 outline-none"
                onChange={handleChange}
                value={formData.chatbotName}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Description
              </label>
              <textarea
                id="description"
                name="description"
                className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full py-2 px-3 text-sm text-gray-700 outline-none"
                onChange={handleChange}
                value={formData.description}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="companyName"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Company name
              </label>
              <input
                type="text"
                id="companyName"
                name="companyName"
                className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full py-2 px-3 text-sm text-gray-700 outline-none"
                onChange={handleChange}
                value={formData.companyName}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="companyWebsiteUrl"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Company website URL
              </label>
              <input
                type="url"
                id="companyWebsiteUrl"
                name="companyWebsiteUrl"
                className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full py-2 px-3 text-sm text-gray-700 outline-none"
                onChange={handleChange}
                value={formData.companyWebsiteUrl}
                required
              />
            </div>
            <div className="mb-6">
              <label
                htmlFor="companyEmail"
                className="block text-sm font-medium text-gray-700 mb-2"
              >
                Company email
              </label>
              <input
                type="email"
                id="companyEmail"
                name="companyEmail"
                className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-md w-full py-2 px-3 text-sm text-gray-700 outline-none"
                onChange={handleChange}
                value={formData.companyEmail}
                required
              />
            </div>
            <button
              type="submit"
              className="btn btn-sm ">
              Create Chatbot
            </button>
          </form>
        </div>
      </div>
    </>
  )
}

export default RegisterForm
