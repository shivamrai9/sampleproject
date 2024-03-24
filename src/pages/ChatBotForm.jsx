import React, { useState } from 'react'
import { useForm } from 'react-hook-form';


const ChatBotForm = () => {
  const { register, handleSubmit, formState: { errors } } = useForm();
  const onSubmit = data => console.log(data);
  console.log(errors);
  
  return (
    <>
      <div className="container mx-auto mt-8">
        <div className="max-w-3xl mx-auto">
          <h2 className="text-2xl font-semibold mb-2">Create a new chatbot</h2>
          <p className="mb-1 font-semibold">A repository contains all project files, including the revision history. Already have a project repository elsewhere? <span className='btn btn-link btn-xs p-0 '> Import a repository.</span></p>
          <hr className="border-b  mb-4"></hr>
          <form onSubmit={handleSubmit(onSubmit)}>
            <div className="mb-6">
              <label
                htmlFor="chatbotName"
                className="block text-base font-medium text-gray-700 mb-2"
              >
                Chatbot name
              </label>
              <input type="text"
               className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl w-1/2 py-2 px-3 mb-1 text-base text-gray-700 outline-none"
               placeholder="Chatbot Name" {...register("Chatbot Name", {required: true})} />
              <p className="mb-1">Great repository names are short and memorable. Need inspiration? How about</p>
            </div>
             <div className="mb-6">
              <label
                htmlFor="description"
                className="block text-base font-medium text-gray-700 mb-2"
              >
                Description
              </label>
               <input 
               type="text"
               className="shadow-sm bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl w-full py-2 px-3 text-sm text-gray-700 outline-none" 
               placeholder="Description" {...register("Description", {required: true})} />
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
               className="shadow-sm w-1/2  bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-2 px-3 text-base text-gray-700 outline-none"
               placeholder="Company Name" {...register("Company Name", {required: true})} />
            </div>
            <div className="mb-6">
              <label
                htmlFor="companyWebsiteUrl"
                className="block text-base font-medium text-gray-700 mb-2"
              >
                Company website URL
              </label>
              <input type="url"  
              className="shadow-sm w-1/2  bg-gray-50 border mb-1 focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-2 px-3 text-base text-gray-700 outline-none"
               placeholder="Company website Url" {...register("Company website Url", {required: true})} />
              <p className="mb-1">Company website needs to be verify for chatbot deployment</p>
            </div>
            <div className="mb-6">
              <label
                htmlFor="companyEmail"
                className="block text-base font-medium text-gray-700 mb-2"
              >
                Company email
              </label>
              <input type="email"  
              className="shadow-sm w-1/2  bg-gray-50 border focus:ring-indigo-500 focus:border-indigo-500 rounded-3xl  py-2 px-3 text-base text-gray-700 outline-none"
               placeholder="Company Email" {...register("Company Email", {required: true})} />
            </div>
            <hr className="border-b  mb-4"></hr>
            <div className="mb-14">
              <p
                htmlFor="companyEmail"
                className="block text-base font-medium text-gray-700 mb-2"
              >
                Initialize this chatbot with:
              </p>
              <div className="flex flex-wrap justify-center align-middle items-center py-0">
                <div className="w-full md:w-1/3 mb-4">
                  <label className="flex items-center mb-2" htmlFor="greetings">
                    <input type="checkbox"  className="w-5 h-5 rounded focus:ring-2" id="greetings" {...register("greetings")} />
                         <span className="ml-2 text-gray-700">Greetings</span>
                  </label>
                  <label className="flex items-center mb-2" htmlFor='introduction'>
                    <input type="checkbox" className="w-5 h-5 rounded focus:ring-2" id='introduction' {...register("introduction")} />
                    <span className="ml-2 text-gray-700">Introduction</span>
                  </label>
                  <label className="flex items-center" htmlFor='smalltalk'>
                    <input type="checkbox" className="w-5 h-5 rounded focus:ring-2" id='smalltalk' {...register('smalltalk')}/>
                    <span className="ml-2 text-gray-700">Small Talk</span>
                  </label>
                </div>
                <div className="w-full md:w-1/3 mb-4">
                  <label className="flex items-center mb-2" htmlFor='weatherreport'>
                    <input type="checkbox" className="w-5 h-5 rounded focus:ring-2" id='weatherreport' {...register('weatherreport')} />
                    <span className="ml-2 text-gray-700">Weather report</span>
                  </label>
                  <label className="flex items-center mb-2" htmlFor='jkokes&humor'>
                    <input type="checkbox" className="w-5 h-5 rounded focus:ring-2" id='jkokes&humor' {...register('jkokes&humor')}/>
                    <span className="ml-2 text-gray-700">Jokes and Humor</span>
                  </label>
                  <label className="flex items-center" htmlFor='time&date'>
                    <input type="checkbox" className="w-5 h-5 rounded focus:ring-2" id='time&date' {...register('time&date')}/>
                    <span className="ml-2 text-gray-700">Time and Date</span>
                  </label>
                </div>
                <div className="w-full md:w-1/3 mb-4">
                  <label className="flex items-center mb-2" htmlFor='queries'>
                    <input type="checkbox" className="w-5 h-5 rounded focus:ring-2" id='queries' {...register('queries')}/>
                    <span className="ml-2 text-gray-700">Queries</span>
                  </label>
                  <label className="flex items-center mb-2" htmlFor='goodbyemessage'>
                    <input type="checkbox" className="w-5 h-5 rounded focus:ring-2" id='goodbyemessage' {...register('goodbyemessage')}/>
                    <span className="ml-2 text-gray-700">Goodbye Message</span>
                  </label>
                  <label className="flex items-center" htmlFor='simpletextbasedgames'>
                    <input type="checkbox" className="w-5 h-5 rounded focus:ring-2" id='simpletextbasedgames' {...register('simpletextbasedgames')}/>
                    <span className="ml-2 text-gray-700">Simple text-based games</span>
                  </label>
                </div>
              </div>
            </div>
            <div className="mb-6 text-end"  >
              <button type="submit" className="btn btn-sm px-12  bg-black hover:bg-slate-900 text-white rounded-full" >
                Create Chatbot
              </button>
            </div> 
          </form>
        </div>
      </div>
    </>
  )
}

export default ChatBotForm
